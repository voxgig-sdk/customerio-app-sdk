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
(0, node_test_1.describe)('WorkspaceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CUSTOMERIO_APP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CustomerioAppSDK.test();
        const ent = testsdk.Workspace();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'workspace.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "billable_messages_sent", "req": false, "short": "The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period.", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "id", "req": false, "short": "The id of the workspace.", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "messages_sent", "req": false, "short": "The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period.", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "name", "req": false, "short": "The name of the workspace.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "object_types", "req": false, "short": "The current count of object types in the workspace.", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "objects", "req": false, "short": "The current count of object profiles in the workspace.", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "people", "req": false, "short": "The current count of people profiles in the workspace.", "type": "`$INTEGER`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "workspace", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/workspaces", "json": "{\"operationId\":\"listWorkspaces\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"workspaces\":{\"items\":{\"description\":\"Contains workspace properties including the count of messages, people, and objects. Customer.io caches these counts, so your data may be up to two hours old.\",\"properties\":{\"billable_messages_sent\":{\"description\":\"The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. Ultimately, we only bill for the overages on your plan.\",\"example\":75124,\"type\":\"integer\"},\"id\":{\"description\":\"The id of the workspace.\",\"example\":\"13XXXX\",\"type\":\"integer\"},\"messages_sent\":{\"description\":\"The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period.\",\"example\":100202,\"type\":\"integer\"},\"name\":{\"description\":\"The name of the workspace.\",\"example\":\"Workspace 1\",\"type\":\"string\"},\"object_types\":{\"description\":\"The current count of object types in the workspace. Updates roughly every hour.\",\"example\":4,\"type\":\"integer\"},\"objects\":{\"description\":\"The current count of object profiles in the workspace. Updates roughly every hour.\",\"example\":10,\"type\":\"integer\"},\"people\":{\"description\":\"The current count of people profiles in the workspace. Updates roughly every hour.\",\"example\":25666,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `workspaces`.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/workspaces", "segments": [{ "lit": "v1" }, { "lit": "workspaces" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.workspaces`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "workspace", "name__orig": "workspace", "Name": "Workspace", "name_": "workspace", "name-": "workspace", "NAME": "WORKSPACE", "index$": 52 }, { "active": true, "entity": "workspace", "key$": "BasicWorkspaceFlow", "kind": "basic", "name": "BasicWorkspaceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "workspace_ref01" } }], "index$": 0 }] }, 'Workspace');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let workspace_ref01_data = Object.values(setup.data.existing.workspace)[0];
        // LIST
        const workspace_ref01_ent = client.Workspace();
        const workspace_ref01_match = {};
        const workspace_ref01_list = (await workspace_ref01_ent.list(workspace_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/workspace/WorkspaceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CustomerioAppSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['workspace01', 'workspace02', 'workspace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CUSTOMERIO_APP_TEST_WORKSPACE_ENTID': idmap,
        'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
        'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
        'CUSTOMERIO_APP_APIKEY': '',
    });
    idmap = env['CUSTOMERIO_APP_TEST_WORKSPACE_ENTID'];
    const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CUSTOMERIO_APP_TEST_WORKSPACE_ENTID'];
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
//# sourceMappingURL=WorkspaceEntity.test.js.map