"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ActivityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CUSTOMERIO_APP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CustomerioAppSDK.test();
        const ent = testsdk.Activity();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'activity.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "customer_id", "req": false, "short": "The ID of a customer profile, analogous to a \"person\" in the UI.", "type": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "index$": 0 }, { "active": true, "name": "customer_identifiers", "req": true, "short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "data", "req": false, "type": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "index$": 2 }, { "active": true, "name": "delivery_id", "req": false, "short": "The message ID.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "delivery_type", "req": false, "short": "The recipient device, if applicable.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "id", "req": false, "short": "The identifier for the action.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": false, "short": "The name of the event, for `event` and `screen` activities.", "type": "`$STRING`", "index$": 6 }, { "active": true, "format": "unix timestamp", "name": "timestamp", "req": false, "short": "The date and time when the action occurred.", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "name": "type", "req": false, "short": "The type of activity.", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "url", "req": false, "short": "The page URL, for `page` activities.", "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "activity", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "customer_id", "orig": "customer_id", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "deleted", "orig": "deleted", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "kind": "query", "name": "id_type", "orig": "id_type", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": 10, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "example": "something_happened", "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "kind": "query", "name": "start", "orig": "start", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "sent_email", "kind": "query", "name": "type", "orig": "type", "reqd": false, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /v1/activities", "json": "{\"operationId\":\"listActivities\",\"parameters\":[{\"description\":\"The token for the page of results you want to return. Responses contain a `next` property. Use this property as the `start` value to return the next page of results.\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The type of activity you want to search for. Types with `_o:<object_type_id>` are for objects and types with `_r:<object_type_id>` are for relationships.\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"description\":\"The type of activity. Types with `_o:<object_type_id>` are for objects and types with `_r:<object_type_id>` are for relationships.\",\"enum\":[\"add_relationship\",\"anon_merge\",\"attempted_action\",\"attempted_email\",\"attempted_in_app\",\"attempted_push\",\"attempted_slack\",\"attempted_twilio\",\"attempted_webhook\",\"attempted_whatsapp\",\"attribute_change\",\"bounced_action\",\"bounced_email\",\"bounced_push\",\"bounced_twilio\",\"bounced_whatsapp\",\"clicked_action\",\"clicked_content\",\"clicked_email\",\"clicked_in_app\",\"clicked_push\",\"clicked_twilio\",\"clicked_webhook\",\"converted_action\",\"converted_content\",\"converted_email\",\"converted_in_app\",\"converted_slack\",\"converted_twilio\",\"converted_webhook\",\"converted_whatsapp\",\"deferred_action\",\"deferred_email\",\"deferred_in_app\",\"deferred_push\",\"deferred_slack\",\"deferred_twilio\",\"deferred_webhook\",\"deferred_whatsapp\",\"delete_relationship\",\"delivered_action\",\"delivered_email\",\"delivered_push\",\"delivered_twilio\",\"delivered_whatsapp\",\"device_change\",\"drafted_action\",\"drafted_email\",\"drafted_in_app\",\"drafted_push\",\"drafted_slack\",\"drafted_twilio\",\"drafted_webhook\",\"dropped_action\",\"dropped_email\",\"dropped_push\",\"dropped_twilio\",\"dropped_webhook\",\"dropped_whatasapp\",\"event\",\"failed_action\",\"failed_attribute_change\",\"failed_batch_update\",\"failed_email\",\"failed_event\",\"failed_in_app\",\"failed_object_journeys\",\"failed_push\",\"failed_query_collection\",\"failed_slack\",\"failed_twilio\",\"failed_webhook\",\"failed_whatsapp\",\"opened_action\",\"opened_email\",\"opened_in_app\",\"opened_push\",\"page\",\"profile_create\",\"profile_delete\",\"profile_merge\",\"relationship_attribute_change\",\"relationship_failed_attribute_change\",\"screen\",\"sent_action\",\"sent_email\",\"sent_in_app\",\"sent_push\",\"sent_slack\",\"sent_twilio\",\"sent_webhook\",\"sent_whatsapp\",\"skipped_update\",\"spammed_email\",\"suppressed_twilio\",\"suppressed_whatsapp\",\"topic_unsubscribed_email\",\"undeliverable_action\",\"undeliverable_email\",\"undeliverable_in_app\",\"undeliverable_push\",\"undeliverable_slack\",\"undeliverable_twilio\",\"undeliverable_webhook\",\"undeliverable_whatsapp\",\"unsubscribed_action\",\"unsubscribed_email\",\"viewed_content\",\"webhook_event\",\"_o:<object_type_id>:add_relationship\",\"_o:<object_type_id>:attribute_change\",\"_o:<object_type_id>:create\",\"_o:<object_type_id>:delete\",\"_o:<object_type_id>:delete_relationship\",\"_o:<object_type_id>:failed_attribute_change\",\"_r:<object_type_id>:attribute_change\",\"_r:<object_type_id>:failed_attribute_change\"],\"example\":\"sent_email\",\"type\":\"string\"}},{\"description\":\"The name of the event or attribute you want to return.\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"example\":\"something_happened\",\"type\":\"string\"}},{\"description\":\"If true, return results for deleted people.\",\"in\":\"query\",\"name\":\"deleted\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"The `identifier` of the person you want to look up. By default, this is a person's `id`. You can use the `id_type` parameter to look up a person by `email`, `phone`, or `cio_id`.\\n\\nIf you use a person's `cio_id`, you must prefix the value with `cio_` when using it to find or reference a person (i.e. `cio_03000010` for a `cio_id` value of 03000010).\\n\",\"in\":\"query\",\"name\":\"customer_id\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The type of `customer_id` you want to use to reference a person. If you don't provide this parameter, we assume that the `customer_id` in your request is a person's `id`. You can use `email` and `phone` only if they're enabled as identifiers in your [workspace settings](/accounts/workspaces/overview/#migrate-workspace); otherwise the request returns `400`. Reference `phone` values in [E.164 format](https://en.wikipedia.org/wiki/E.164), like `+14155552671`, and URL-encode the leading `+` as `%2B`.\",\"in\":\"query\",\"name\":\"id_type\",\"required\":false,\"schema\":{\"enum\":[\"id\",\"email\",\"phone\",\"cio_id\"],\"type\":\"string\"}},{\"description\":\"The maximum number of results you want to retrieve per page.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":10,\"maximum\":100,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"activities\":{\"items\":{\"properties\":{\"customer_id\":{\"description\":\"The ID of a customer profile, analogous to a \\\"person\\\" in the UI. If your workspace supports multiple identifiers (email and ID), this value can be null.\",\"example\":\"42\",\"type\":[\"string\",\"null\"]},\"customer_identifiers\":{\"description\":\"Identifiers for the person in a response—`id`, `cio_id`, and `email`. Unset `id` or `email` values are `null`. We recommend this object over the less descriptive `customer_id`. This object doesn't include `phone`, even if your workspace uses phone numbers as an identifier; look for the person's `phone` attribute instead.\",\"properties\":{\"cio_id\":{\"description\":\"A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.\",\"example\":\"a3000001\",\"type\":\"string\"},\"email\":{\"description\":\"A person's email address, if set.\",\"example\":\"test@example.com\",\"format\":\"email\",\"type\":[\"string\",\"null\"]},\"id\":{\"description\":\"A person's unique ID, if set. This is the same as the `customer_id` if present.\",\"example\":2,\"type\":[\"string\",\"null\"]}},\"required\":[\"email\",\"id\",\"cio_id\"],\"type\":\"object\"},\"data\":{\"oneOf\":[{\"example\":{\"delivered\":null,\"delivery_id\":\"ZAIAAVTJVG0QcCok0-0ZKj6yiQ==\",\"opened\":null},\"properties\":{\"delivered\":{\"description\":\"The date-time when the message was delivered, if applicable.\",\"format\":\"unix timestamp\",\"type\":[\"integer\",\"null\"]},\"delivery_id\":{\"description\":\"The message ID.\",\"type\":\"string\"},\"opened\":{\"description\":\"Indicates whether or not a customer opened a message, if the message was delivered.\",\"type\":[\"boolean\",\"null\"]}},\"title\":\"Message delivery\",\"type\":\"object\"},{\"additionalProperties\":{\"properties\":{\"from\":{\"description\":\"The old attribute value. If empty, the customer probably didn't bear the attribute before this action.\",\"type\":\"string\"},\"to\":{\"description\":\"The new attribute value.\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":\"The name of the object is the attribute that changed.\",\"example\":{\"email\":{\"from\":\"newPerson@example.com\",\"to\":\"newPerson@customer.io\"}},\"title\":\"Attribute change\",\"type\":\"object\"}]},\"delivery_id\":{\"description\":\"The message ID.\",\"example\":\"ZAIAAVTJVG0QcCok0-0ZKj6yiQ==\",\"type\":\"string\"},\"delivery_type\":{\"description\":\"The recipient device, if applicable.\",\"enum\":[\"ios\",\"android\",\"email\",\"phone\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"description\":\"The identifier for the action.\",\"example\":\"01AK4N8V8G8KVA4HN8Y50CCZ59\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the event, for `event` and `screen` activities.\",\"type\":\"string\"},\"timestamp\":{\"description\":\"The date and time when the action occurred.\",\"example\":1397566226,\"format\":\"unix timestamp\",\"type\":\"integer\"},\"type\":{\"description\":\"The type of activity. Types with `_o:<object_type_id>` are for objects and types with `_r:<object_type_id>` are for relationships.\",\"enum\":[\"add_relationship\",\"anon_merge\",\"attempted_action\",\"attempted_email\",\"attempted_in_app\",\"attempted_push\",\"attempted_slack\",\"attempted_twilio\",\"attempted_webhook\",\"attempted_whatsapp\",\"attribute_change\",\"bounced_action\",\"bounced_email\",\"bounced_push\",\"bounced_twilio\",\"bounced_whatsapp\",\"clicked_action\",\"clicked_content\",\"clicked_email\",\"clicked_in_app\",\"clicked_push\",\"clicked_twilio\",\"clicked_webhook\",\"converted_action\",\"converted_content\",\"converted_email\",\"converted_in_app\",\"converted_slack\",\"converted_twilio\",\"converted_webhook\",\"converted_whatsapp\",\"deferred_action\",\"deferred_email\",\"deferred_in_app\",\"deferred_push\",\"deferred_slack\",\"deferred_twilio\",\"deferred_webhook\",\"deferred_whatsapp\",\"delete_relationship\",\"delivered_action\",\"delivered_email\",\"delivered_push\",\"delivered_twilio\",\"delivered_whatsapp\",\"device_change\",\"drafted_action\",\"drafted_email\",\"drafted_in_app\",\"drafted_push\",\"drafted_slack\",\"drafted_twilio\",\"drafted_webhook\",\"dropped_action\",\"dropped_email\",\"dropped_push\",\"dropped_twilio\",\"dropped_webhook\",\"dropped_whatasapp\",\"event\",\"failed_action\",\"failed_attribute_change\",\"failed_batch_update\",\"failed_email\",\"failed_event\",\"failed_in_app\",\"failed_object_journeys\",\"failed_push\",\"failed_query_collection\",\"failed_slack\",\"failed_twilio\",\"failed_webhook\",\"failed_whatsapp\",\"opened_action\",\"opened_email\",\"opened_in_app\",\"opened_push\",\"page\",\"profile_create\",\"profile_delete\",\"profile_merge\",\"relationship_attribute_change\",\"relationship_failed_attribute_change\",\"screen\",\"sent_action\",\"sent_email\",\"sent_in_app\",\"sent_push\",\"sent_slack\",\"sent_twilio\",\"sent_webhook\",\"sent_whatsapp\",\"skipped_update\",\"spammed_email\",\"suppressed_twilio\",\"suppressed_whatsapp\",\"topic_unsubscribed_email\",\"undeliverable_action\",\"undeliverable_email\",\"undeliverable_in_app\",\"undeliverable_push\",\"undeliverable_slack\",\"undeliverable_twilio\",\"undeliverable_webhook\",\"undeliverable_whatsapp\",\"unsubscribed_action\",\"unsubscribed_email\",\"viewed_content\",\"webhook_event\",\"_o:<object_type_id>:add_relationship\",\"_o:<object_type_id>:attribute_change\",\"_o:<object_type_id>:create\",\"_o:<object_type_id>:delete\",\"_o:<object_type_id>:delete_relationship\",\"_o:<object_type_id>:failed_attribute_change\",\"_r:<object_type_id>:attribute_change\",\"_r:<object_type_id>:failed_attribute_change\"],\"example\":\"sent_email\",\"type\":\"string\"},\"url\":{\"description\":\"The page URL, for `page` activities.\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"next\":{\"description\":\"Indicates the next page of results. Add `?start=<next_value>` to the request to get the next page of results.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `activities`.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/activities", "segments": [{ "lit": "v1" }, { "lit": "activities" }], "select": { "exist": ["customer_id", "deleted", "id_type", "limit", "name", "start", "type"] }, "transform": { "req": "`reqdata`", "res": "`body.activities`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "activity", "name__orig": "activity", "Name": "Activity", "name_": "activity", "name-": "activity", "NAME": "ACTIVITY", "index$": 1 }, { "active": true, "entity": "activity", "key$": "BasicActivityFlow", "kind": "basic", "name": "BasicActivityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "activity_ref01" } }], "index$": 0 }] }, 'Activity');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let activity_ref01_data = Object.values(setup.data.existing.activity)[0];
        // LIST
        const activity_ref01_ent = client.Activity();
        const activity_ref01_match = {};
        const activity_ref01_list = (await activity_ref01_ent.list(activity_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/activity/ActivityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CustomerioAppSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['activity01', 'activity02', 'activity03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CUSTOMERIO_APP_TEST_ACTIVITY_ENTID': idmap,
        'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
        'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
        'CUSTOMERIO_APP_APIKEY': '',
    });
    idmap = env['CUSTOMERIO_APP_TEST_ACTIVITY_ENTID'];
    const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CUSTOMERIO_APP_TEST_ACTIVITY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CustomerioAppSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CUSTOMERIO_APP_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CUSTOMERIO_APP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ActivityEntity.test.js.map