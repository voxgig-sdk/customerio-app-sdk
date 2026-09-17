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
(0, node_test_1.describe)('SnippetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CUSTOMERIO_APP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CustomerioAppSDK.test();
        const ent = testsdk.Snippet();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'snippet.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "name", "req": true, "short": "The name of the snippet, must be unique.", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "unix timestamp", "name": "updated_at", "readOnly": true, "req": false, "short": "The last date-time the snippet was updated.", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "value", "req": true, "short": "The contents of the snippet.", "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "snippet", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /v1/snippets", "json": "{\"operationId\":\"createSnippet\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Request body for creating or updating a snippet. Only `name` and `value` are accepted; `updated_at` is returned in responses only.\",\"example\":{\"name\":\"address\",\"value\":\"<strong>My Company</strong></br>1234 Fake St<br/>Fake,NY<br/>10111\"},\"properties\":{\"name\":{\"description\":\"The name of the snippet, must be unique. Trimmed of leading and trailing whitespace before storage.\",\"maxLength\":150,\"type\":\"string\"},\"value\":{\"description\":\"The contents of the snippet (plain text or Liquid). Trimmed of leading and trailing whitespace before storage. Max length is environment-specific (default 16000).\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"snippet\":{\"description\":\"describes a piece of reusable content. You must provide a name for the snippet and the `value`—the content that appears in messages that use the snippet.\",\"example\":{\"name\":\"address\",\"updated_at\":1582500000,\"value\":\"<strong>My Company</strong></br>1234 Fake St<br/>Fake,NY<br/>10111\"},\"properties\":{\"name\":{\"description\":\"The name of the snippet, must be unique.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last date-time the snippet was updated.\",\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"value\":{\"description\":\"The contents of the snippet.\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns the created snippet.\"},\"401\":{\"description\":\"Unauthorized request. Make sure that you provided the right credentials.\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"name_blank\":{\"summary\":\"Name empty or blank\",\"value\":{\"errors\":[{\"detail\":\"name cannot be blank\",\"source\":{\"pointer\":\"/name\"},\"status\":\"422\"}]}},\"name_exists\":{\"summary\":\"Name already exists\",\"value\":{\"errors\":[{\"detail\":\"A snippet with that name already exists\",\"source\":{\"pointer\":\"/name\"},\"status\":\"422\"}]}},\"name_too_long\":{\"summary\":\"Name longer than 150 characters\",\"value\":{\"errors\":[{\"detail\":\"name cannot exceed 150 characters\",\"source\":{\"pointer\":\"/name\"},\"status\":\"422\"}]}},\"snippet_reference\":{\"summary\":\"Value contains snippet reference\",\"value\":{\"errors\":[{\"detail\":\"Snippets cannot contain Liquid code referencing other snippets.\",\"source\":{\"pointer\":\"/value\"},\"status\":\"422\"}]}},\"value_blank\":{\"summary\":\"Value empty or blank\",\"value\":{\"errors\":[{\"detail\":\"value cannot be blank\",\"source\":{\"pointer\":\"/value\"},\"status\":\"422\"}]}},\"value_too_long\":{\"summary\":\"Value exceeds max length\",\"value\":{\"errors\":[{\"detail\":\"value cannot exceed 16000 characters\",\"source\":{\"pointer\":\"/value\"},\"status\":\"422\"}]}}},\"schema\":{\"properties\":{\"errors\":{\"description\":\"Contains an array of error objects.\",\"items\":{\"properties\":{\"detail\":{\"description\":\"The reason for the response.\",\"type\":\"string\"},\"source\":{\"description\":\"The field or path that caused the error.\",\"properties\":{\"pointer\":{\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code.\",\"example\":\"422\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Validation error or a snippet with that name already exists.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}},\"500\":{\"description\":\"Internal server error (for example, render service failure when validating Liquid).\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/v1/snippets", "segments": [{ "lit": "v1" }, { "lit": "snippets" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.snippet`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/snippets", "json": "{\"operationId\":\"listSnippets\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"snippets\":{\"items\":{\"description\":\"describes a piece of reusable content. You must provide a name for the snippet and the `value`—the content that appears in messages that use the snippet.\",\"example\":{\"name\":\"address\",\"updated_at\":1582500000,\"value\":\"<strong>My Company</strong></br>1234 Fake St<br/>Fake,NY<br/>10111\"},\"properties\":{\"name\":{\"description\":\"The name of the snippet, must be unique.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last date-time the snippet was updated.\",\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"value\":{\"description\":\"The contents of the snippet.\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `snippets`.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/snippets", "segments": [{ "lit": "v1" }, { "lit": "snippets" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.snippets`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "snippet_name", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "DELETE /v1/snippets/{snippet_name}", "json": "{\"operationId\":\"deleteSnippet\",\"parameters\":[{\"description\":\"The name of a snippet.\",\"in\":\"path\",\"name\":\"snippet_name\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"A successful delete operation returns no content.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"description\":\"Contains an array of error objects.\",\"items\":{\"properties\":{\"detail\":{\"description\":\"Describes the error.\",\"example\":\"unable to delete snippet in use\",\"type\":\"string\"},\"status\":{\"description\":\"The HTTP status code.\",\"example\":\"400\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"The snippet is in use. You can't delete a snippet until you remove it from messages, templates, etc.\"},\"404\":{\"description\":\"The snippet does not exist.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/v1/snippets/{snippet_name}", "rename": { "param": { "snippet_name": "id" } }, "segments": [{ "lit": "v1" }, { "lit": "snippets" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": {}, "contract": { "id": "PUT /v1/snippets", "json": "{\"operationId\":\"updateSnippets\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"Request body for creating or updating a snippet. Only `name` and `value` are accepted; `updated_at` is returned in responses only.\",\"example\":{\"name\":\"address\",\"value\":\"<strong>My Company</strong></br>1234 Fake St<br/>Fake,NY<br/>10111\"},\"properties\":{\"name\":{\"description\":\"The name of the snippet, must be unique. Trimmed of leading and trailing whitespace before storage.\",\"maxLength\":150,\"type\":\"string\"},\"value\":{\"description\":\"The contents of the snippet (plain text or Liquid). Trimmed of leading and trailing whitespace before storage. Max length is environment-specific (default 16000).\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"snippet\":{\"description\":\"describes a piece of reusable content. You must provide a name for the snippet and the `value`—the content that appears in messages that use the snippet.\",\"example\":{\"name\":\"address\",\"updated_at\":1582500000,\"value\":\"<strong>My Company</strong></br>1234 Fake St<br/>Fake,NY<br/>10111\"},\"properties\":{\"name\":{\"description\":\"The name of the snippet, must be unique.\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The last date-time the snippet was updated.\",\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"value\":{\"description\":\"The contents of the snippet.\",\"type\":\"string\"}},\"required\":[\"name\",\"value\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `snippets`.\"},\"400\":{\"description\":\"The request is malformed.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/v1/snippets", "segments": [{ "lit": "v1" }, { "lit": "snippets" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.snippet`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "snippet", "name__orig": "snippet", "Name": "Snippet", "name_": "snippet", "name-": "snippet", "NAME": "SNIPPET", "index$": 41 }, { "active": true, "entity": "snippet", "key$": "BasicSnippetFlow", "kind": "basic", "name": "BasicSnippetFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "snippet_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "snippet_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "snippet_ref01", "srcdatavar": "snippet_ref01_data", "suffix": "_up0", "textfield": "name" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-snippet_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "snippet_ref01", "suffix": "_rm0" }, "match": { "id": "snippet01" }, "op": "remove", "spec": [], "valid": [], "index$": 3 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "snippet_ref01" } }], "index$": 4 }] }, 'Snippet');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const snippet_ref01_ent = client.Snippet();
        let snippet_ref01_data = setup.data.new.snippet['snippet_ref01'];
        snippet_ref01_data = (await snippet_ref01_ent.create(snippet_ref01_data)).data();
        (0, node_assert_1.default)(null != snippet_ref01_data.id);
        // LIST
        const snippet_ref01_match = {};
        const snippet_ref01_list = (await snippet_ref01_ent.list(snippet_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(snippet_ref01_list, { id: snippet_ref01_data.id })));
        // UPDATE
        const snippet_ref01_data_up0 = {};
        snippet_ref01_data_up0.id = snippet_ref01_data.id;
        const snippet_ref01_markdef_up0 = { name: 'name', value: 'Mark01-snippet_ref01_' + setup.now };
        snippet_ref01_data_up0[snippet_ref01_markdef_up0.name] = snippet_ref01_markdef_up0.value;
        const snippet_ref01_resdata_up0 = (await snippet_ref01_ent.update(snippet_ref01_data_up0)).data();
        (0, node_assert_1.default)(snippet_ref01_resdata_up0.id === snippet_ref01_data_up0.id);
        (0, node_assert_1.default)(snippet_ref01_resdata_up0[snippet_ref01_markdef_up0.name] === snippet_ref01_markdef_up0.value);
        // REMOVE
        const snippet_ref01_match_rm0 = { id: snippet_ref01_data.id };
        await snippet_ref01_ent.remove(snippet_ref01_match_rm0);
        // LIST
        const snippet_ref01_match_rt0 = {};
        const snippet_ref01_list_rt0 = (await snippet_ref01_ent.list(snippet_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(snippet_ref01_list_rt0, { id: snippet_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/snippet/SnippetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CustomerioAppSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['snippet01', 'snippet02', 'snippet03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CUSTOMERIO_APP_TEST_SNIPPET_ENTID': idmap,
        'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
        'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
        'CUSTOMERIO_APP_APIKEY': '',
    });
    idmap = env['CUSTOMERIO_APP_TEST_SNIPPET_ENTID'];
    const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CUSTOMERIO_APP_TEST_SNIPPET_ENTID'];
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
//# sourceMappingURL=SnippetEntity.test.js.map