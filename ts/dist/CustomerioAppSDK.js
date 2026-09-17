"use strict";
// CustomerioApp Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CustomerioAppSDK = exports.CustomerioAppEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActionEntity_1 = require("./entity/ActionEntity");
const ActivityEntity_1 = require("./entity/ActivityEntity");
const AssetEntity_1 = require("./entity/AssetEntity");
const AttributeEntity_1 = require("./entity/AttributeEntity");
const AutomationEntity_1 = require("./entity/AutomationEntity");
const BroadcastEntity_1 = require("./entity/BroadcastEntity");
const CampaignEntity_1 = require("./entity/CampaignEntity");
const CollectionEntity_1 = require("./entity/CollectionEntity");
const ContentEntity_1 = require("./entity/ContentEntity");
const CustomerEntity_1 = require("./entity/CustomerEntity");
const DataIndexEntity_1 = require("./entity/DataIndexEntity");
const DeliveryEntity_1 = require("./entity/DeliveryEntity");
const DesignStudioEntity_1 = require("./entity/DesignStudioEntity");
const DesignStudioEmailEntity_1 = require("./entity/DesignStudioEmailEntity");
const EmailEntity_1 = require("./entity/EmailEntity");
const EndEntity_1 = require("./entity/EndEntity");
const EspSuppressionEntity_1 = require("./entity/EspSuppressionEntity");
const ExportEntity_1 = require("./entity/ExportEntity");
const ImportEntity_1 = require("./entity/ImportEntity");
const InAppEntity_1 = require("./entity/InAppEntity");
const InboxMessageEntity_1 = require("./entity/InboxMessageEntity");
const InfoEntity_1 = require("./entity/InfoEntity");
const IpAddressEntity_1 = require("./entity/IpAddressEntity");
const LanguageEntity_1 = require("./entity/LanguageEntity");
const LinkEntity_1 = require("./entity/LinkEntity");
const LiveNotificationEntity_1 = require("./entity/LiveNotificationEntity");
const MessageEntity_1 = require("./entity/MessageEntity");
const NewsletterEntity_1 = require("./entity/NewsletterEntity");
const NewsletterMetricEntity_1 = require("./entity/NewsletterMetricEntity");
const NewsletterVariantEntity_1 = require("./entity/NewsletterVariantEntity");
const ObjectEntity_1 = require("./entity/ObjectEntity");
const ObjectTypeEntity_1 = require("./entity/ObjectTypeEntity");
const OptOutEntity_1 = require("./entity/OptOutEntity");
const PushEntity_1 = require("./entity/PushEntity");
const RelationshipEntity_1 = require("./entity/RelationshipEntity");
const ReportingWebhookEntity_1 = require("./entity/ReportingWebhookEntity");
const SearchSuppressionEntity_1 = require("./entity/SearchSuppressionEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const SendMessageEntity_1 = require("./entity/SendMessageEntity");
const SenderIdentityEntity_1 = require("./entity/SenderIdentityEntity");
const SmsEntity_1 = require("./entity/SmsEntity");
const SnippetEntity_1 = require("./entity/SnippetEntity");
const StartEntity_1 = require("./entity/StartEntity");
const SubscriptionCenterEntity_1 = require("./entity/SubscriptionCenterEntity");
const SubscriptionChannelEntity_1 = require("./entity/SubscriptionChannelEntity");
const SubscriptionTopicEntity_1 = require("./entity/SubscriptionTopicEntity");
const SuppressionEntity_1 = require("./entity/SuppressionEntity");
const TestGroupEntity_1 = require("./entity/TestGroupEntity");
const TransactionalEntity_1 = require("./entity/TransactionalEntity");
const TriggerEntity_1 = require("./entity/TriggerEntity");
const UpdateEntity_1 = require("./entity/UpdateEntity");
const WhatsappEntity_1 = require("./entity/WhatsappEntity");
const WorkspaceEntity_1 = require("./entity/WorkspaceEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CustomerioAppEntityBase_1 = require("./CustomerioAppEntityBase");
Object.defineProperty(exports, "CustomerioAppEntityBase", { enumerable: true, get: function () { return CustomerioAppEntityBase_1.CustomerioAppEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CustomerioAppSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('CustomerioAppSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CustomerioAppSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CustomerioAppSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Action(entopts) {
        const self = this;
        return new ActionEntity_1.ActionEntity(self, entopts);
    }
    // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Activity(entopts) {
        const self = this;
        return new ActivityEntity_1.ActivityEntity(self, entopts);
    }
    // Entity access: `client.Asset().list()` / `client.Asset().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Asset(entopts) {
        const self = this;
        return new AssetEntity_1.AssetEntity(self, entopts);
    }
    // Entity access: `client.Attribute().list()` / `client.Attribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Attribute(entopts) {
        const self = this;
        return new AttributeEntity_1.AttributeEntity(self, entopts);
    }
    // Entity access: `client.Automation().list()` / `client.Automation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Automation(entopts) {
        const self = this;
        return new AutomationEntity_1.AutomationEntity(self, entopts);
    }
    // Entity access: `client.Broadcast().list()` / `client.Broadcast().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Broadcast(entopts) {
        const self = this;
        return new BroadcastEntity_1.BroadcastEntity(self, entopts);
    }
    // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Campaign(entopts) {
        const self = this;
        return new CampaignEntity_1.CampaignEntity(self, entopts);
    }
    // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Collection(entopts) {
        const self = this;
        return new CollectionEntity_1.CollectionEntity(self, entopts);
    }
    // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Content(entopts) {
        const self = this;
        return new ContentEntity_1.ContentEntity(self, entopts);
    }
    // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Customer(entopts) {
        const self = this;
        return new CustomerEntity_1.CustomerEntity(self, entopts);
    }
    // Entity access: `client.DataIndex().list()` / `client.DataIndex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DataIndex(entopts) {
        const self = this;
        return new DataIndexEntity_1.DataIndexEntity(self, entopts);
    }
    // Entity access: `client.Delivery().list()` / `client.Delivery().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Delivery(entopts) {
        const self = this;
        return new DeliveryEntity_1.DeliveryEntity(self, entopts);
    }
    // Entity access: `client.DesignStudio().list()` / `client.DesignStudio().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DesignStudio(entopts) {
        const self = this;
        return new DesignStudioEntity_1.DesignStudioEntity(self, entopts);
    }
    // Entity access: `client.DesignStudioEmail().list()` / `client.DesignStudioEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DesignStudioEmail(entopts) {
        const self = this;
        return new DesignStudioEmailEntity_1.DesignStudioEmailEntity(self, entopts);
    }
    // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Email(entopts) {
        const self = this;
        return new EmailEntity_1.EmailEntity(self, entopts);
    }
    // Entity access: `client.End().list()` / `client.End().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    End(entopts) {
        const self = this;
        return new EndEntity_1.EndEntity(self, entopts);
    }
    // Entity access: `client.EspSuppression().list()` / `client.EspSuppression().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EspSuppression(entopts) {
        const self = this;
        return new EspSuppressionEntity_1.EspSuppressionEntity(self, entopts);
    }
    // Entity access: `client.Export().list()` / `client.Export().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Export(entopts) {
        const self = this;
        return new ExportEntity_1.ExportEntity(self, entopts);
    }
    // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Import(entopts) {
        const self = this;
        return new ImportEntity_1.ImportEntity(self, entopts);
    }
    // Entity access: `client.InApp().list()` / `client.InApp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InApp(entopts) {
        const self = this;
        return new InAppEntity_1.InAppEntity(self, entopts);
    }
    // Entity access: `client.InboxMessage().list()` / `client.InboxMessage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    InboxMessage(entopts) {
        const self = this;
        return new InboxMessageEntity_1.InboxMessageEntity(self, entopts);
    }
    // Entity access: `client.Info().list()` / `client.Info().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Info(entopts) {
        const self = this;
        return new InfoEntity_1.InfoEntity(self, entopts);
    }
    // Entity access: `client.IpAddress().list()` / `client.IpAddress().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IpAddress(entopts) {
        const self = this;
        return new IpAddressEntity_1.IpAddressEntity(self, entopts);
    }
    // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Language(entopts) {
        const self = this;
        return new LanguageEntity_1.LanguageEntity(self, entopts);
    }
    // Entity access: `client.Link().list()` / `client.Link().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Link(entopts) {
        const self = this;
        return new LinkEntity_1.LinkEntity(self, entopts);
    }
    // Entity access: `client.LiveNotification().list()` / `client.LiveNotification().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    LiveNotification(entopts) {
        const self = this;
        return new LiveNotificationEntity_1.LiveNotificationEntity(self, entopts);
    }
    // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Message(entopts) {
        const self = this;
        return new MessageEntity_1.MessageEntity(self, entopts);
    }
    // Entity access: `client.Newsletter().list()` / `client.Newsletter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Newsletter(entopts) {
        const self = this;
        return new NewsletterEntity_1.NewsletterEntity(self, entopts);
    }
    // Entity access: `client.NewsletterMetric().list()` / `client.NewsletterMetric().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NewsletterMetric(entopts) {
        const self = this;
        return new NewsletterMetricEntity_1.NewsletterMetricEntity(self, entopts);
    }
    // Entity access: `client.NewsletterVariant().list()` / `client.NewsletterVariant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NewsletterVariant(entopts) {
        const self = this;
        return new NewsletterVariantEntity_1.NewsletterVariantEntity(self, entopts);
    }
    // Entity access: `client.Object().list()` / `client.Object().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Object(entopts) {
        const self = this;
        return new ObjectEntity_1.ObjectEntity(self, entopts);
    }
    // Entity access: `client.ObjectType().list()` / `client.ObjectType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ObjectType(entopts) {
        const self = this;
        return new ObjectTypeEntity_1.ObjectTypeEntity(self, entopts);
    }
    // Entity access: `client.OptOut().list()` / `client.OptOut().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OptOut(entopts) {
        const self = this;
        return new OptOutEntity_1.OptOutEntity(self, entopts);
    }
    // Entity access: `client.Push().list()` / `client.Push().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Push(entopts) {
        const self = this;
        return new PushEntity_1.PushEntity(self, entopts);
    }
    // Entity access: `client.Relationship().list()` / `client.Relationship().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Relationship(entopts) {
        const self = this;
        return new RelationshipEntity_1.RelationshipEntity(self, entopts);
    }
    // Entity access: `client.ReportingWebhook().list()` / `client.ReportingWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReportingWebhook(entopts) {
        const self = this;
        return new ReportingWebhookEntity_1.ReportingWebhookEntity(self, entopts);
    }
    // Entity access: `client.SearchSuppression().list()` / `client.SearchSuppression().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SearchSuppression(entopts) {
        const self = this;
        return new SearchSuppressionEntity_1.SearchSuppressionEntity(self, entopts);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Segment(entopts) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, entopts);
    }
    // Entity access: `client.SendMessage().list()` / `client.SendMessage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SendMessage(entopts) {
        const self = this;
        return new SendMessageEntity_1.SendMessageEntity(self, entopts);
    }
    // Entity access: `client.SenderIdentity().list()` / `client.SenderIdentity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SenderIdentity(entopts) {
        const self = this;
        return new SenderIdentityEntity_1.SenderIdentityEntity(self, entopts);
    }
    // Entity access: `client.Sms().list()` / `client.Sms().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Sms(entopts) {
        const self = this;
        return new SmsEntity_1.SmsEntity(self, entopts);
    }
    // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snippet(entopts) {
        const self = this;
        return new SnippetEntity_1.SnippetEntity(self, entopts);
    }
    // Entity access: `client.Start().list()` / `client.Start().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Start(entopts) {
        const self = this;
        return new StartEntity_1.StartEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionCenter().list()` / `client.SubscriptionCenter().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionCenter(entopts) {
        const self = this;
        return new SubscriptionCenterEntity_1.SubscriptionCenterEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionChannel().list()` / `client.SubscriptionChannel().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionChannel(entopts) {
        const self = this;
        return new SubscriptionChannelEntity_1.SubscriptionChannelEntity(self, entopts);
    }
    // Entity access: `client.SubscriptionTopic().list()` / `client.SubscriptionTopic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubscriptionTopic(entopts) {
        const self = this;
        return new SubscriptionTopicEntity_1.SubscriptionTopicEntity(self, entopts);
    }
    // Entity access: `client.Suppression().list()` / `client.Suppression().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Suppression(entopts) {
        const self = this;
        return new SuppressionEntity_1.SuppressionEntity(self, entopts);
    }
    // Entity access: `client.TestGroup().list()` / `client.TestGroup().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TestGroup(entopts) {
        const self = this;
        return new TestGroupEntity_1.TestGroupEntity(self, entopts);
    }
    // Entity access: `client.Transactional().list()` / `client.Transactional().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Transactional(entopts) {
        const self = this;
        return new TransactionalEntity_1.TransactionalEntity(self, entopts);
    }
    // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Trigger(entopts) {
        const self = this;
        return new TriggerEntity_1.TriggerEntity(self, entopts);
    }
    // Entity access: `client.Update().list()` / `client.Update().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Update(entopts) {
        const self = this;
        return new UpdateEntity_1.UpdateEntity(self, entopts);
    }
    // Entity access: `client.Whatsapp().list()` / `client.Whatsapp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Whatsapp(entopts) {
        const self = this;
        return new WhatsappEntity_1.WhatsappEntity(self, entopts);
    }
    // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workspace(entopts) {
        const self = this;
        return new WorkspaceEntity_1.WorkspaceEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CustomerioAppSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CustomerioAppSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'CustomerioApp' };
    }
    toString() {
        return 'CustomerioApp ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CustomerioAppSDK = CustomerioAppSDK;
const SDK = CustomerioAppSDK;
exports.SDK = SDK;
//# sourceMappingURL=CustomerioAppSDK.js.map