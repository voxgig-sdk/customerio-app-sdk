<?php
declare(strict_types=1);

// CustomerioApp SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class CustomerioAppSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new CustomerioAppUtility();
        $this->_utility = $utility;

        $config = CustomerioAppConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = CustomerioAppHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = CustomerioAppHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!CustomerioAppFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, CustomerioAppFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return CustomerioAppUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = CustomerioAppHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = CustomerioAppHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = CustomerioAppHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new CustomerioAppSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new CustomerioAppError($op . "_allow",
                "CustomerioAppSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = CustomerioAppHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = CustomerioAppHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new CustomerioAppError("graphql_error",
                "CustomerioAppSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_action = null;

    // Canonical facade: $client->Action()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->action()
    // resolves here too.
    public function Action($data = null)
    {
        require_once __DIR__ . '/entity/action_entity.php';
        if ($data === null) {
            if ($this->_action === null) {
                $this->_action = new ActionEntity($this, null);
            }
            return $this->_action;
        }
        return new ActionEntity($this, $data);
    }


    private $_activity = null;

    // Canonical facade: $client->Activity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->activity()
    // resolves here too.
    public function Activity($data = null)
    {
        require_once __DIR__ . '/entity/activity_entity.php';
        if ($data === null) {
            if ($this->_activity === null) {
                $this->_activity = new ActivityEntity($this, null);
            }
            return $this->_activity;
        }
        return new ActivityEntity($this, $data);
    }


    private $_asset = null;

    // Canonical facade: $client->Asset()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->asset()
    // resolves here too.
    public function Asset($data = null)
    {
        require_once __DIR__ . '/entity/asset_entity.php';
        if ($data === null) {
            if ($this->_asset === null) {
                $this->_asset = new AssetEntity($this, null);
            }
            return $this->_asset;
        }
        return new AssetEntity($this, $data);
    }


    private $_attribute = null;

    // Canonical facade: $client->Attribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->attribute()
    // resolves here too.
    public function Attribute($data = null)
    {
        require_once __DIR__ . '/entity/attribute_entity.php';
        if ($data === null) {
            if ($this->_attribute === null) {
                $this->_attribute = new AttributeEntity($this, null);
            }
            return $this->_attribute;
        }
        return new AttributeEntity($this, $data);
    }


    private $_automation = null;

    // Canonical facade: $client->Automation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->automation()
    // resolves here too.
    public function Automation($data = null)
    {
        require_once __DIR__ . '/entity/automation_entity.php';
        if ($data === null) {
            if ($this->_automation === null) {
                $this->_automation = new AutomationEntity($this, null);
            }
            return $this->_automation;
        }
        return new AutomationEntity($this, $data);
    }


    private $_broadcast = null;

    // Canonical facade: $client->Broadcast()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->broadcast()
    // resolves here too.
    public function Broadcast($data = null)
    {
        require_once __DIR__ . '/entity/broadcast_entity.php';
        if ($data === null) {
            if ($this->_broadcast === null) {
                $this->_broadcast = new BroadcastEntity($this, null);
            }
            return $this->_broadcast;
        }
        return new BroadcastEntity($this, $data);
    }


    private $_campaign = null;

    // Canonical facade: $client->Campaign()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->campaign()
    // resolves here too.
    public function Campaign($data = null)
    {
        require_once __DIR__ . '/entity/campaign_entity.php';
        if ($data === null) {
            if ($this->_campaign === null) {
                $this->_campaign = new CampaignEntity($this, null);
            }
            return $this->_campaign;
        }
        return new CampaignEntity($this, $data);
    }


    private $_collection = null;

    // Canonical facade: $client->Collection()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->collection()
    // resolves here too.
    public function Collection($data = null)
    {
        require_once __DIR__ . '/entity/collection_entity.php';
        if ($data === null) {
            if ($this->_collection === null) {
                $this->_collection = new CollectionEntity($this, null);
            }
            return $this->_collection;
        }
        return new CollectionEntity($this, $data);
    }


    private $_content = null;

    // Canonical facade: $client->Content()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->content()
    // resolves here too.
    public function Content($data = null)
    {
        require_once __DIR__ . '/entity/content_entity.php';
        if ($data === null) {
            if ($this->_content === null) {
                $this->_content = new ContentEntity($this, null);
            }
            return $this->_content;
        }
        return new ContentEntity($this, $data);
    }


    private $_customer = null;

    // Canonical facade: $client->Customer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->customer()
    // resolves here too.
    public function Customer($data = null)
    {
        require_once __DIR__ . '/entity/customer_entity.php';
        if ($data === null) {
            if ($this->_customer === null) {
                $this->_customer = new CustomerEntity($this, null);
            }
            return $this->_customer;
        }
        return new CustomerEntity($this, $data);
    }


    private $_data_index = null;

    // Canonical facade: $client->DataIndex()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->data_index()
    // resolves here too.
    public function DataIndex($data = null)
    {
        require_once __DIR__ . '/entity/data_index_entity.php';
        if ($data === null) {
            if ($this->_data_index === null) {
                $this->_data_index = new DataIndexEntity($this, null);
            }
            return $this->_data_index;
        }
        return new DataIndexEntity($this, $data);
    }


    private $_delivery = null;

    // Canonical facade: $client->Delivery()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->delivery()
    // resolves here too.
    public function Delivery($data = null)
    {
        require_once __DIR__ . '/entity/delivery_entity.php';
        if ($data === null) {
            if ($this->_delivery === null) {
                $this->_delivery = new DeliveryEntity($this, null);
            }
            return $this->_delivery;
        }
        return new DeliveryEntity($this, $data);
    }


    private $_design_studio = null;

    // Canonical facade: $client->DesignStudio()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->design_studio()
    // resolves here too.
    public function DesignStudio($data = null)
    {
        require_once __DIR__ . '/entity/design_studio_entity.php';
        if ($data === null) {
            if ($this->_design_studio === null) {
                $this->_design_studio = new DesignStudioEntity($this, null);
            }
            return $this->_design_studio;
        }
        return new DesignStudioEntity($this, $data);
    }


    private $_design_studio_email = null;

    // Canonical facade: $client->DesignStudioEmail()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->design_studio_email()
    // resolves here too.
    public function DesignStudioEmail($data = null)
    {
        require_once __DIR__ . '/entity/design_studio_email_entity.php';
        if ($data === null) {
            if ($this->_design_studio_email === null) {
                $this->_design_studio_email = new DesignStudioEmailEntity($this, null);
            }
            return $this->_design_studio_email;
        }
        return new DesignStudioEmailEntity($this, $data);
    }


    private $_email = null;

    // Canonical facade: $client->Email()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email()
    // resolves here too.
    public function Email($data = null)
    {
        require_once __DIR__ . '/entity/email_entity.php';
        if ($data === null) {
            if ($this->_email === null) {
                $this->_email = new EmailEntity($this, null);
            }
            return $this->_email;
        }
        return new EmailEntity($this, $data);
    }


    private $_end = null;

    // Canonical facade: $client->End()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->end()
    // resolves here too.
    public function End($data = null)
    {
        require_once __DIR__ . '/entity/end_entity.php';
        if ($data === null) {
            if ($this->_end === null) {
                $this->_end = new EndEntity($this, null);
            }
            return $this->_end;
        }
        return new EndEntity($this, $data);
    }


    private $_esp_suppression = null;

    // Canonical facade: $client->EspSuppression()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->esp_suppression()
    // resolves here too.
    public function EspSuppression($data = null)
    {
        require_once __DIR__ . '/entity/esp_suppression_entity.php';
        if ($data === null) {
            if ($this->_esp_suppression === null) {
                $this->_esp_suppression = new EspSuppressionEntity($this, null);
            }
            return $this->_esp_suppression;
        }
        return new EspSuppressionEntity($this, $data);
    }


    private $_export = null;

    // Canonical facade: $client->Export()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->export()
    // resolves here too.
    public function Export($data = null)
    {
        require_once __DIR__ . '/entity/export_entity.php';
        if ($data === null) {
            if ($this->_export === null) {
                $this->_export = new ExportEntity($this, null);
            }
            return $this->_export;
        }
        return new ExportEntity($this, $data);
    }


    private $_import = null;

    // Canonical facade: $client->Import()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->import()
    // resolves here too.
    public function Import($data = null)
    {
        require_once __DIR__ . '/entity/import_entity.php';
        if ($data === null) {
            if ($this->_import === null) {
                $this->_import = new ImportEntity($this, null);
            }
            return $this->_import;
        }
        return new ImportEntity($this, $data);
    }


    private $_in_app = null;

    // Canonical facade: $client->InApp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->in_app()
    // resolves here too.
    public function InApp($data = null)
    {
        require_once __DIR__ . '/entity/in_app_entity.php';
        if ($data === null) {
            if ($this->_in_app === null) {
                $this->_in_app = new InAppEntity($this, null);
            }
            return $this->_in_app;
        }
        return new InAppEntity($this, $data);
    }


    private $_inbox_message = null;

    // Canonical facade: $client->InboxMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->inbox_message()
    // resolves here too.
    public function InboxMessage($data = null)
    {
        require_once __DIR__ . '/entity/inbox_message_entity.php';
        if ($data === null) {
            if ($this->_inbox_message === null) {
                $this->_inbox_message = new InboxMessageEntity($this, null);
            }
            return $this->_inbox_message;
        }
        return new InboxMessageEntity($this, $data);
    }


    private $_info = null;

    // Canonical facade: $client->Info()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->info()
    // resolves here too.
    public function Info($data = null)
    {
        require_once __DIR__ . '/entity/info_entity.php';
        if ($data === null) {
            if ($this->_info === null) {
                $this->_info = new InfoEntity($this, null);
            }
            return $this->_info;
        }
        return new InfoEntity($this, $data);
    }


    private $_ip_address = null;

    // Canonical facade: $client->IpAddress()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_address()
    // resolves here too.
    public function IpAddress($data = null)
    {
        require_once __DIR__ . '/entity/ip_address_entity.php';
        if ($data === null) {
            if ($this->_ip_address === null) {
                $this->_ip_address = new IpAddressEntity($this, null);
            }
            return $this->_ip_address;
        }
        return new IpAddressEntity($this, $data);
    }


    private $_language = null;

    // Canonical facade: $client->Language()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->language()
    // resolves here too.
    public function Language($data = null)
    {
        require_once __DIR__ . '/entity/language_entity.php';
        if ($data === null) {
            if ($this->_language === null) {
                $this->_language = new LanguageEntity($this, null);
            }
            return $this->_language;
        }
        return new LanguageEntity($this, $data);
    }


    private $_link = null;

    // Canonical facade: $client->Link()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->link()
    // resolves here too.
    public function Link($data = null)
    {
        require_once __DIR__ . '/entity/link_entity.php';
        if ($data === null) {
            if ($this->_link === null) {
                $this->_link = new LinkEntity($this, null);
            }
            return $this->_link;
        }
        return new LinkEntity($this, $data);
    }


    private $_live_notification = null;

    // Canonical facade: $client->LiveNotification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->live_notification()
    // resolves here too.
    public function LiveNotification($data = null)
    {
        require_once __DIR__ . '/entity/live_notification_entity.php';
        if ($data === null) {
            if ($this->_live_notification === null) {
                $this->_live_notification = new LiveNotificationEntity($this, null);
            }
            return $this->_live_notification;
        }
        return new LiveNotificationEntity($this, $data);
    }


    private $_message = null;

    // Canonical facade: $client->Message()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->message()
    // resolves here too.
    public function Message($data = null)
    {
        require_once __DIR__ . '/entity/message_entity.php';
        if ($data === null) {
            if ($this->_message === null) {
                $this->_message = new MessageEntity($this, null);
            }
            return $this->_message;
        }
        return new MessageEntity($this, $data);
    }


    private $_newsletter = null;

    // Canonical facade: $client->Newsletter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->newsletter()
    // resolves here too.
    public function Newsletter($data = null)
    {
        require_once __DIR__ . '/entity/newsletter_entity.php';
        if ($data === null) {
            if ($this->_newsletter === null) {
                $this->_newsletter = new NewsletterEntity($this, null);
            }
            return $this->_newsletter;
        }
        return new NewsletterEntity($this, $data);
    }


    private $_newsletter_metric = null;

    // Canonical facade: $client->NewsletterMetric()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->newsletter_metric()
    // resolves here too.
    public function NewsletterMetric($data = null)
    {
        require_once __DIR__ . '/entity/newsletter_metric_entity.php';
        if ($data === null) {
            if ($this->_newsletter_metric === null) {
                $this->_newsletter_metric = new NewsletterMetricEntity($this, null);
            }
            return $this->_newsletter_metric;
        }
        return new NewsletterMetricEntity($this, $data);
    }


    private $_newsletter_variant = null;

    // Canonical facade: $client->NewsletterVariant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->newsletter_variant()
    // resolves here too.
    public function NewsletterVariant($data = null)
    {
        require_once __DIR__ . '/entity/newsletter_variant_entity.php';
        if ($data === null) {
            if ($this->_newsletter_variant === null) {
                $this->_newsletter_variant = new NewsletterVariantEntity($this, null);
            }
            return $this->_newsletter_variant;
        }
        return new NewsletterVariantEntity($this, $data);
    }


    private $_object = null;

    // Canonical facade: $client->Object()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->object()
    // resolves here too.
    public function Object($data = null)
    {
        require_once __DIR__ . '/entity/object_entity.php';
        if ($data === null) {
            if ($this->_object === null) {
                $this->_object = new ObjectEntity($this, null);
            }
            return $this->_object;
        }
        return new ObjectEntity($this, $data);
    }


    private $_object_type = null;

    // Canonical facade: $client->ObjectType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->object_type()
    // resolves here too.
    public function ObjectType($data = null)
    {
        require_once __DIR__ . '/entity/object_type_entity.php';
        if ($data === null) {
            if ($this->_object_type === null) {
                $this->_object_type = new ObjectTypeEntity($this, null);
            }
            return $this->_object_type;
        }
        return new ObjectTypeEntity($this, $data);
    }


    private $_opt_out = null;

    // Canonical facade: $client->OptOut()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->opt_out()
    // resolves here too.
    public function OptOut($data = null)
    {
        require_once __DIR__ . '/entity/opt_out_entity.php';
        if ($data === null) {
            if ($this->_opt_out === null) {
                $this->_opt_out = new OptOutEntity($this, null);
            }
            return $this->_opt_out;
        }
        return new OptOutEntity($this, $data);
    }


    private $_push = null;

    // Canonical facade: $client->Push()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->push()
    // resolves here too.
    public function Push($data = null)
    {
        require_once __DIR__ . '/entity/push_entity.php';
        if ($data === null) {
            if ($this->_push === null) {
                $this->_push = new PushEntity($this, null);
            }
            return $this->_push;
        }
        return new PushEntity($this, $data);
    }


    private $_relationship = null;

    // Canonical facade: $client->Relationship()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->relationship()
    // resolves here too.
    public function Relationship($data = null)
    {
        require_once __DIR__ . '/entity/relationship_entity.php';
        if ($data === null) {
            if ($this->_relationship === null) {
                $this->_relationship = new RelationshipEntity($this, null);
            }
            return $this->_relationship;
        }
        return new RelationshipEntity($this, $data);
    }


    private $_reporting_webhook = null;

    // Canonical facade: $client->ReportingWebhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reporting_webhook()
    // resolves here too.
    public function ReportingWebhook($data = null)
    {
        require_once __DIR__ . '/entity/reporting_webhook_entity.php';
        if ($data === null) {
            if ($this->_reporting_webhook === null) {
                $this->_reporting_webhook = new ReportingWebhookEntity($this, null);
            }
            return $this->_reporting_webhook;
        }
        return new ReportingWebhookEntity($this, $data);
    }


    private $_search_suppression = null;

    // Canonical facade: $client->SearchSuppression()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search_suppression()
    // resolves here too.
    public function SearchSuppression($data = null)
    {
        require_once __DIR__ . '/entity/search_suppression_entity.php';
        if ($data === null) {
            if ($this->_search_suppression === null) {
                $this->_search_suppression = new SearchSuppressionEntity($this, null);
            }
            return $this->_search_suppression;
        }
        return new SearchSuppressionEntity($this, $data);
    }


    private $_segment = null;

    // Canonical facade: $client->Segment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->segment()
    // resolves here too.
    public function Segment($data = null)
    {
        require_once __DIR__ . '/entity/segment_entity.php';
        if ($data === null) {
            if ($this->_segment === null) {
                $this->_segment = new SegmentEntity($this, null);
            }
            return $this->_segment;
        }
        return new SegmentEntity($this, $data);
    }


    private $_send_message = null;

    // Canonical facade: $client->SendMessage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->send_message()
    // resolves here too.
    public function SendMessage($data = null)
    {
        require_once __DIR__ . '/entity/send_message_entity.php';
        if ($data === null) {
            if ($this->_send_message === null) {
                $this->_send_message = new SendMessageEntity($this, null);
            }
            return $this->_send_message;
        }
        return new SendMessageEntity($this, $data);
    }


    private $_sender_identity = null;

    // Canonical facade: $client->SenderIdentity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sender_identity()
    // resolves here too.
    public function SenderIdentity($data = null)
    {
        require_once __DIR__ . '/entity/sender_identity_entity.php';
        if ($data === null) {
            if ($this->_sender_identity === null) {
                $this->_sender_identity = new SenderIdentityEntity($this, null);
            }
            return $this->_sender_identity;
        }
        return new SenderIdentityEntity($this, $data);
    }


    private $_sms = null;

    // Canonical facade: $client->Sms()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sms()
    // resolves here too.
    public function Sms($data = null)
    {
        require_once __DIR__ . '/entity/sms_entity.php';
        if ($data === null) {
            if ($this->_sms === null) {
                $this->_sms = new SmsEntity($this, null);
            }
            return $this->_sms;
        }
        return new SmsEntity($this, $data);
    }


    private $_snippet = null;

    // Canonical facade: $client->Snippet()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->snippet()
    // resolves here too.
    public function Snippet($data = null)
    {
        require_once __DIR__ . '/entity/snippet_entity.php';
        if ($data === null) {
            if ($this->_snippet === null) {
                $this->_snippet = new SnippetEntity($this, null);
            }
            return $this->_snippet;
        }
        return new SnippetEntity($this, $data);
    }


    private $_start = null;

    // Canonical facade: $client->Start()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->start()
    // resolves here too.
    public function Start($data = null)
    {
        require_once __DIR__ . '/entity/start_entity.php';
        if ($data === null) {
            if ($this->_start === null) {
                $this->_start = new StartEntity($this, null);
            }
            return $this->_start;
        }
        return new StartEntity($this, $data);
    }


    private $_subscription_center = null;

    // Canonical facade: $client->SubscriptionCenter()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_center()
    // resolves here too.
    public function SubscriptionCenter($data = null)
    {
        require_once __DIR__ . '/entity/subscription_center_entity.php';
        if ($data === null) {
            if ($this->_subscription_center === null) {
                $this->_subscription_center = new SubscriptionCenterEntity($this, null);
            }
            return $this->_subscription_center;
        }
        return new SubscriptionCenterEntity($this, $data);
    }


    private $_subscription_channel = null;

    // Canonical facade: $client->SubscriptionChannel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_channel()
    // resolves here too.
    public function SubscriptionChannel($data = null)
    {
        require_once __DIR__ . '/entity/subscription_channel_entity.php';
        if ($data === null) {
            if ($this->_subscription_channel === null) {
                $this->_subscription_channel = new SubscriptionChannelEntity($this, null);
            }
            return $this->_subscription_channel;
        }
        return new SubscriptionChannelEntity($this, $data);
    }


    private $_subscription_topic = null;

    // Canonical facade: $client->SubscriptionTopic()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->subscription_topic()
    // resolves here too.
    public function SubscriptionTopic($data = null)
    {
        require_once __DIR__ . '/entity/subscription_topic_entity.php';
        if ($data === null) {
            if ($this->_subscription_topic === null) {
                $this->_subscription_topic = new SubscriptionTopicEntity($this, null);
            }
            return $this->_subscription_topic;
        }
        return new SubscriptionTopicEntity($this, $data);
    }


    private $_suppression = null;

    // Canonical facade: $client->Suppression()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->suppression()
    // resolves here too.
    public function Suppression($data = null)
    {
        require_once __DIR__ . '/entity/suppression_entity.php';
        if ($data === null) {
            if ($this->_suppression === null) {
                $this->_suppression = new SuppressionEntity($this, null);
            }
            return $this->_suppression;
        }
        return new SuppressionEntity($this, $data);
    }


    private $_test_group = null;

    // Canonical facade: $client->TestGroup()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->test_group()
    // resolves here too.
    public function TestGroup($data = null)
    {
        require_once __DIR__ . '/entity/test_group_entity.php';
        if ($data === null) {
            if ($this->_test_group === null) {
                $this->_test_group = new TestGroupEntity($this, null);
            }
            return $this->_test_group;
        }
        return new TestGroupEntity($this, $data);
    }


    private $_transactional = null;

    // Canonical facade: $client->Transactional()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transactional()
    // resolves here too.
    public function Transactional($data = null)
    {
        require_once __DIR__ . '/entity/transactional_entity.php';
        if ($data === null) {
            if ($this->_transactional === null) {
                $this->_transactional = new TransactionalEntity($this, null);
            }
            return $this->_transactional;
        }
        return new TransactionalEntity($this, $data);
    }


    private $_trigger = null;

    // Canonical facade: $client->Trigger()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trigger()
    // resolves here too.
    public function Trigger($data = null)
    {
        require_once __DIR__ . '/entity/trigger_entity.php';
        if ($data === null) {
            if ($this->_trigger === null) {
                $this->_trigger = new TriggerEntity($this, null);
            }
            return $this->_trigger;
        }
        return new TriggerEntity($this, $data);
    }


    private $_update = null;

    // Canonical facade: $client->Update()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->update()
    // resolves here too.
    public function Update($data = null)
    {
        require_once __DIR__ . '/entity/update_entity.php';
        if ($data === null) {
            if ($this->_update === null) {
                $this->_update = new UpdateEntity($this, null);
            }
            return $this->_update;
        }
        return new UpdateEntity($this, $data);
    }


    private $_whatsapp = null;

    // Canonical facade: $client->Whatsapp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->whatsapp()
    // resolves here too.
    public function Whatsapp($data = null)
    {
        require_once __DIR__ . '/entity/whatsapp_entity.php';
        if ($data === null) {
            if ($this->_whatsapp === null) {
                $this->_whatsapp = new WhatsappEntity($this, null);
            }
            return $this->_whatsapp;
        }
        return new WhatsappEntity($this, $data);
    }


    private $_workspace = null;

    // Canonical facade: $client->Workspace()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workspace()
    // resolves here too.
    public function Workspace($data = null)
    {
        require_once __DIR__ . '/entity/workspace_entity.php';
        if ($data === null) {
            if ($this->_workspace === null) {
                $this->_workspace = new WorkspaceEntity($this, null);
            }
            return $this->_workspace;
        }
        return new WorkspaceEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new CustomerioAppSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
