-- CustomerioApp SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("customerio-app_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CustomerioAppSDK = {}
CustomerioAppSDK.__index = CustomerioAppSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CustomerioAppSDK._make_feature = _make_feature


function CustomerioAppSDK.new(options)
  local self = setmetatable({}, CustomerioAppSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function CustomerioAppSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CustomerioAppSDK:get_utility()
  return Utility.copy(self._utility)
end


function CustomerioAppSDK:get_root_ctx()
  return self._rootctx
end


function CustomerioAppSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CustomerioAppSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CustomerioAppSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CustomerioAppSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CustomerioAppSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CustomerioAppSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CustomerioAppSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CustomerioAppSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Action():list() / client:Action():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Action(data)
  local EntityMod = require("entity.action_entity")
  if data == nil then
    if self._action == nil then
      self._action = EntityMod.new(self, nil)
    end
    return self._action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Activity():list() / client:Activity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Activity(data)
  local EntityMod = require("entity.activity_entity")
  if data == nil then
    if self._activity == nil then
      self._activity = EntityMod.new(self, nil)
    end
    return self._activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Asset():list() / client:Asset():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Asset(data)
  local EntityMod = require("entity.asset_entity")
  if data == nil then
    if self._asset == nil then
      self._asset = EntityMod.new(self, nil)
    end
    return self._asset
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Attribute():list() / client:Attribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Attribute(data)
  local EntityMod = require("entity.attribute_entity")
  if data == nil then
    if self._attribute == nil then
      self._attribute = EntityMod.new(self, nil)
    end
    return self._attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Automation():list() / client:Automation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Automation(data)
  local EntityMod = require("entity.automation_entity")
  if data == nil then
    if self._automation == nil then
      self._automation = EntityMod.new(self, nil)
    end
    return self._automation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Broadcast():list() / client:Broadcast():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Broadcast(data)
  local EntityMod = require("entity.broadcast_entity")
  if data == nil then
    if self._broadcast == nil then
      self._broadcast = EntityMod.new(self, nil)
    end
    return self._broadcast
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Campaign():list() / client:Campaign():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Campaign(data)
  local EntityMod = require("entity.campaign_entity")
  if data == nil then
    if self._campaign == nil then
      self._campaign = EntityMod.new(self, nil)
    end
    return self._campaign
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Collection():list() / client:Collection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Collection(data)
  local EntityMod = require("entity.collection_entity")
  if data == nil then
    if self._collection == nil then
      self._collection = EntityMod.new(self, nil)
    end
    return self._collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Content():list() / client:Content():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Content(data)
  local EntityMod = require("entity.content_entity")
  if data == nil then
    if self._content == nil then
      self._content = EntityMod.new(self, nil)
    end
    return self._content
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Customer():list() / client:Customer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Customer(data)
  local EntityMod = require("entity.customer_entity")
  if data == nil then
    if self._customer == nil then
      self._customer = EntityMod.new(self, nil)
    end
    return self._customer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DataIndex():list() / client:DataIndex():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:DataIndex(data)
  local EntityMod = require("entity.data_index_entity")
  if data == nil then
    if self._data_index == nil then
      self._data_index = EntityMod.new(self, nil)
    end
    return self._data_index
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Delivery():list() / client:Delivery():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Delivery(data)
  local EntityMod = require("entity.delivery_entity")
  if data == nil then
    if self._delivery == nil then
      self._delivery = EntityMod.new(self, nil)
    end
    return self._delivery
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DesignStudio():list() / client:DesignStudio():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:DesignStudio(data)
  local EntityMod = require("entity.design_studio_entity")
  if data == nil then
    if self._design_studio == nil then
      self._design_studio = EntityMod.new(self, nil)
    end
    return self._design_studio
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DesignStudioEmail():list() / client:DesignStudioEmail():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:DesignStudioEmail(data)
  local EntityMod = require("entity.design_studio_email_entity")
  if data == nil then
    if self._design_studio_email == nil then
      self._design_studio_email = EntityMod.new(self, nil)
    end
    return self._design_studio_email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Email():list() / client:Email():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Email(data)
  local EntityMod = require("entity.email_entity")
  if data == nil then
    if self._email == nil then
      self._email = EntityMod.new(self, nil)
    end
    return self._email
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:End():list() / client:End():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:End(data)
  local EntityMod = require("entity.end_entity")
  if data == nil then
    if self._end == nil then
      self._end = EntityMod.new(self, nil)
    end
    return self._end
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EspSuppression():list() / client:EspSuppression():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:EspSuppression(data)
  local EntityMod = require("entity.esp_suppression_entity")
  if data == nil then
    if self._esp_suppression == nil then
      self._esp_suppression = EntityMod.new(self, nil)
    end
    return self._esp_suppression
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Export():list() / client:Export():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Export(data)
  local EntityMod = require("entity.export_entity")
  if data == nil then
    if self._export == nil then
      self._export = EntityMod.new(self, nil)
    end
    return self._export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Import():list() / client:Import():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Import(data)
  local EntityMod = require("entity.import_entity")
  if data == nil then
    if self._import == nil then
      self._import = EntityMod.new(self, nil)
    end
    return self._import
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InApp():list() / client:InApp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:InApp(data)
  local EntityMod = require("entity.in_app_entity")
  if data == nil then
    if self._in_app == nil then
      self._in_app = EntityMod.new(self, nil)
    end
    return self._in_app
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:InboxMessage():list() / client:InboxMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:InboxMessage(data)
  local EntityMod = require("entity.inbox_message_entity")
  if data == nil then
    if self._inbox_message == nil then
      self._inbox_message = EntityMod.new(self, nil)
    end
    return self._inbox_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Info():list() / client:Info():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Info(data)
  local EntityMod = require("entity.info_entity")
  if data == nil then
    if self._info == nil then
      self._info = EntityMod.new(self, nil)
    end
    return self._info
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpAddress():list() / client:IpAddress():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:IpAddress(data)
  local EntityMod = require("entity.ip_address_entity")
  if data == nil then
    if self._ip_address == nil then
      self._ip_address = EntityMod.new(self, nil)
    end
    return self._ip_address
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Language():list() / client:Language():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Language(data)
  local EntityMod = require("entity.language_entity")
  if data == nil then
    if self._language == nil then
      self._language = EntityMod.new(self, nil)
    end
    return self._language
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Link():list() / client:Link():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Link(data)
  local EntityMod = require("entity.link_entity")
  if data == nil then
    if self._link == nil then
      self._link = EntityMod.new(self, nil)
    end
    return self._link
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:LiveNotification():list() / client:LiveNotification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:LiveNotification(data)
  local EntityMod = require("entity.live_notification_entity")
  if data == nil then
    if self._live_notification == nil then
      self._live_notification = EntityMod.new(self, nil)
    end
    return self._live_notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Message():list() / client:Message():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Message(data)
  local EntityMod = require("entity.message_entity")
  if data == nil then
    if self._message == nil then
      self._message = EntityMod.new(self, nil)
    end
    return self._message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Newsletter():list() / client:Newsletter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Newsletter(data)
  local EntityMod = require("entity.newsletter_entity")
  if data == nil then
    if self._newsletter == nil then
      self._newsletter = EntityMod.new(self, nil)
    end
    return self._newsletter
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NewsletterMetric():list() / client:NewsletterMetric():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:NewsletterMetric(data)
  local EntityMod = require("entity.newsletter_metric_entity")
  if data == nil then
    if self._newsletter_metric == nil then
      self._newsletter_metric = EntityMod.new(self, nil)
    end
    return self._newsletter_metric
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NewsletterVariant():list() / client:NewsletterVariant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:NewsletterVariant(data)
  local EntityMod = require("entity.newsletter_variant_entity")
  if data == nil then
    if self._newsletter_variant == nil then
      self._newsletter_variant = EntityMod.new(self, nil)
    end
    return self._newsletter_variant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Object():list() / client:Object():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Object(data)
  local EntityMod = require("entity.object_entity")
  if data == nil then
    if self._object == nil then
      self._object = EntityMod.new(self, nil)
    end
    return self._object
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ObjectType():list() / client:ObjectType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:ObjectType(data)
  local EntityMod = require("entity.object_type_entity")
  if data == nil then
    if self._object_type == nil then
      self._object_type = EntityMod.new(self, nil)
    end
    return self._object_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OptOut():list() / client:OptOut():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:OptOut(data)
  local EntityMod = require("entity.opt_out_entity")
  if data == nil then
    if self._opt_out == nil then
      self._opt_out = EntityMod.new(self, nil)
    end
    return self._opt_out
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Push():list() / client:Push():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Push(data)
  local EntityMod = require("entity.push_entity")
  if data == nil then
    if self._push == nil then
      self._push = EntityMod.new(self, nil)
    end
    return self._push
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Relationship():list() / client:Relationship():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Relationship(data)
  local EntityMod = require("entity.relationship_entity")
  if data == nil then
    if self._relationship == nil then
      self._relationship = EntityMod.new(self, nil)
    end
    return self._relationship
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ReportingWebhook():list() / client:ReportingWebhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:ReportingWebhook(data)
  local EntityMod = require("entity.reporting_webhook_entity")
  if data == nil then
    if self._reporting_webhook == nil then
      self._reporting_webhook = EntityMod.new(self, nil)
    end
    return self._reporting_webhook
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SearchSuppression():list() / client:SearchSuppression():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SearchSuppression(data)
  local EntityMod = require("entity.search_suppression_entity")
  if data == nil then
    if self._search_suppression == nil then
      self._search_suppression = EntityMod.new(self, nil)
    end
    return self._search_suppression
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Segment():list() / client:Segment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Segment(data)
  local EntityMod = require("entity.segment_entity")
  if data == nil then
    if self._segment == nil then
      self._segment = EntityMod.new(self, nil)
    end
    return self._segment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SendMessage():list() / client:SendMessage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SendMessage(data)
  local EntityMod = require("entity.send_message_entity")
  if data == nil then
    if self._send_message == nil then
      self._send_message = EntityMod.new(self, nil)
    end
    return self._send_message
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SenderIdentity():list() / client:SenderIdentity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SenderIdentity(data)
  local EntityMod = require("entity.sender_identity_entity")
  if data == nil then
    if self._sender_identity == nil then
      self._sender_identity = EntityMod.new(self, nil)
    end
    return self._sender_identity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sms():list() / client:Sms():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Sms(data)
  local EntityMod = require("entity.sms_entity")
  if data == nil then
    if self._sms == nil then
      self._sms = EntityMod.new(self, nil)
    end
    return self._sms
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Snippet():list() / client:Snippet():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Snippet(data)
  local EntityMod = require("entity.snippet_entity")
  if data == nil then
    if self._snippet == nil then
      self._snippet = EntityMod.new(self, nil)
    end
    return self._snippet
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Start():list() / client:Start():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Start(data)
  local EntityMod = require("entity.start_entity")
  if data == nil then
    if self._start == nil then
      self._start = EntityMod.new(self, nil)
    end
    return self._start
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionCenter():list() / client:SubscriptionCenter():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SubscriptionCenter(data)
  local EntityMod = require("entity.subscription_center_entity")
  if data == nil then
    if self._subscription_center == nil then
      self._subscription_center = EntityMod.new(self, nil)
    end
    return self._subscription_center
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionChannel():list() / client:SubscriptionChannel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SubscriptionChannel(data)
  local EntityMod = require("entity.subscription_channel_entity")
  if data == nil then
    if self._subscription_channel == nil then
      self._subscription_channel = EntityMod.new(self, nil)
    end
    return self._subscription_channel
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SubscriptionTopic():list() / client:SubscriptionTopic():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:SubscriptionTopic(data)
  local EntityMod = require("entity.subscription_topic_entity")
  if data == nil then
    if self._subscription_topic == nil then
      self._subscription_topic = EntityMod.new(self, nil)
    end
    return self._subscription_topic
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Suppression():list() / client:Suppression():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Suppression(data)
  local EntityMod = require("entity.suppression_entity")
  if data == nil then
    if self._suppression == nil then
      self._suppression = EntityMod.new(self, nil)
    end
    return self._suppression
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TestGroup():list() / client:TestGroup():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:TestGroup(data)
  local EntityMod = require("entity.test_group_entity")
  if data == nil then
    if self._test_group == nil then
      self._test_group = EntityMod.new(self, nil)
    end
    return self._test_group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Transactional():list() / client:Transactional():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Transactional(data)
  local EntityMod = require("entity.transactional_entity")
  if data == nil then
    if self._transactional == nil then
      self._transactional = EntityMod.new(self, nil)
    end
    return self._transactional
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Trigger():list() / client:Trigger():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Trigger(data)
  local EntityMod = require("entity.trigger_entity")
  if data == nil then
    if self._trigger == nil then
      self._trigger = EntityMod.new(self, nil)
    end
    return self._trigger
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Update():list() / client:Update():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Update(data)
  local EntityMod = require("entity.update_entity")
  if data == nil then
    if self._update == nil then
      self._update = EntityMod.new(self, nil)
    end
    return self._update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Whatsapp():list() / client:Whatsapp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Whatsapp(data)
  local EntityMod = require("entity.whatsapp_entity")
  if data == nil then
    if self._whatsapp == nil then
      self._whatsapp = EntityMod.new(self, nil)
    end
    return self._whatsapp
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workspace():list() / client:Workspace():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CustomerioAppSDK:Workspace(data)
  local EntityMod = require("entity.workspace_entity")
  if data == nil then
    if self._workspace == nil then
      self._workspace = EntityMod.new(self, nil)
    end
    return self._workspace
  end
  return EntityMod.new(self, data)
end




function CustomerioAppSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CustomerioAppSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CustomerioAppSDK
