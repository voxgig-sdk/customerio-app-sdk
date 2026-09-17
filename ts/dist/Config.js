"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'CustomerioApp',
        slug: "customerio-app",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api.customer.io",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            action: {},
            activity: {},
            asset: {},
            attribute: {},
            automation: {},
            broadcast: {},
            campaign: {},
            collection: {},
            content: {},
            customer: {},
            data_index: {},
            delivery: {},
            design_studio: {},
            design_studio_email: {},
            email: {},
            end: {},
            esp_suppression: {},
            export: {},
            import: {},
            in_app: {},
            inbox_message: {},
            info: {},
            ip_address: {},
            language: {},
            link: {},
            live_notification: {},
            message: {},
            newsletter: {},
            newsletter_metric: {},
            newsletter_variant: {},
            object: {},
            object_type: {},
            opt_out: {},
            push: {},
            relationship: {},
            reporting_webhook: {},
            search_suppression: {},
            segment: {},
            send_message: {},
            sender_identity: {},
            sms: {},
            snippet: {},
            start: {},
            subscription_center: {},
            subscription_channel: {},
            subscription_topic: {},
            suppression: {},
            test_group: {},
            transactional: {},
            trigger: {},
            update: {},
            whatsapp: {},
            workspace: {},
        }
    };
    entity = {
        "action": {
            "fields": [],
            "name": "action",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "broadcast"
                    ],
                    [
                        "campaign"
                    ]
                ]
            }
        },
        "activity": {
            "fields": [
                {
                    "name": "customer_id",
                    "short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "customer_identifiers",
                    "req": true,
                    "short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "data",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "delivery_id",
                    "short": "The message ID.",
                    "type": "`$STRING`"
                },
                {
                    "name": "delivery_type",
                    "short": "The recipient device, if applicable.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The identifier for the action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the event, for `event` and `screen` activities.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "timestamp",
                    "short": "The date and time when the action occurred.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of activity.",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The page URL, for `page` activities.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "activity",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "deleted",
                                        "orig": "deleted",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "something_happened",
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "sent_email",
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/activities",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "activities"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "customer_id",
                                    "deleted",
                                    "id_type",
                                    "limit",
                                    "name",
                                    "start",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.activities`"
                            },
                            "parts": [
                                "v1",
                                "activities"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "asset": {
            "fields": [
                {
                    "format": "int64",
                    "name": "created",
                    "short": "Unix timestamp when the asset was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The unique identifier of the file asset.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The display name of the file asset.",
                    "type": "`$STRING`"
                },
                {
                    "name": "parent_folder_id",
                    "short": "The ID of the parent folder, or null if the asset is at the root level.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "path",
                    "short": "The storage URL or path where the file is hosted.",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "short": "The file size in bytes.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "int64",
                    "name": "updated",
                    "short": "Unix timestamp when the asset was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "asset",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/assets/files",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "files"
                                }
                            ],
                            "select": {
                                "$action": "file"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.asset`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "files"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/assets/folders",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "folders"
                                }
                            ],
                            "select": {
                                "$action": "folder"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.folder`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "folders"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "direct_descendants_only",
                                        "orig": "direct_descendants_only",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "parent_folder_id",
                                        "orig": "parent_folder_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/assets",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "direct_descendants_only",
                                    "limit",
                                    "page",
                                    "parent_folder_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "direct_descendants_only",
                                        "orig": "direct_descendants_only",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "parent_folder_id",
                                        "orig": "parent_folder_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/assets/folders",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "folders"
                                }
                            ],
                            "select": {
                                "$action": "folder",
                                "exist": [
                                    "direct_descendants_only",
                                    "limit",
                                    "page",
                                    "parent_folder_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "folders"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/assets/files/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "files"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.asset`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "files",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/assets/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.folder`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/assets/files/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "files"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "files",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/assets/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/assets/files/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "files"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "files",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/assets/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "assets"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "assets",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "attribute": {
            "fields": [],
            "name": "attribute",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "object"
                    ]
                ]
            }
        },
        "automation": {
            "fields": [
                {
                    "name": "action_id",
                    "readOnly": true,
                    "short": "The identifier for an action.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "actions",
                    "short": "Each object in the array represents an action in your automation.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 4,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "activated",
                    "short": "People who started a journey and were not filtered out before they experienced an action.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "broadcast_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "campaign_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "campaigns",
                    "short": "Each object is an automation in your workspace with one of seven types of automation triggers.",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 7,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "content_id",
                    "readOnly": true,
                    "short": "The identifier for a message in a one-time send.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "converted",
                    "short": "People who matched the conversion criteria for the automation.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "customer_id",
                    "short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "customer_identifiers",
                    "req": true,
                    "short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "format": "ISO 8601",
                    "name": "end",
                    "short": "The end of the window we reported on, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "exited_early",
                    "short": "People who started a journey but stopped meeting the automation trigger/filter criteria.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "failure_message",
                    "short": "Explains why a message failed, if applicable.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "finished",
                    "short": "People who finished the journey.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "forgotten",
                    "short": "If true message contents are not retained by Customer.io.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The identifier for a delivery—the instance of a message intended for an individual recipient.",
                    "type": "`$STRING`"
                },
                {
                    "name": "language_variants",
                    "short": "Metrics for each language variant of a multi-language message, keyed by the variant's action ID.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "link",
                    "type": "`$OBJECT`"
                },
                {
                    "deprecated": true,
                    "name": "message_template_id",
                    "readOnly": true,
                    "short": "The identifier of the message template used to create a message.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "messaged",
                    "short": "People who experienced at least one non-delay action in the journey.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "metric",
                    "short": "Contains metrics for the link.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metrics",
                    "short": "Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "never_activated",
                    "short": "People who started a journey but were filtered out before they could experience any of the actions in the journey.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "newsletter_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "next",
                    "short": "Indicates the next page of results.",
                    "type": "`$STRING`"
                },
                {
                    "name": "parent_action_id",
                    "readOnly": true,
                    "short": "The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "recipient",
                    "short": "The recipient address for an action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "res",
                    "short": "The resolution we reported at.",
                    "type": "`$STRING`"
                },
                {
                    "name": "series",
                    "short": "Metrics grouped by the requested resolution.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "ISO 8601",
                    "name": "start",
                    "short": "The start of the window we reported on, in ISO 8601 format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "started",
                    "short": "The total number of people who meet the trigger criteria for a journey.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "subject",
                    "short": "The subject line for an `email` action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tracked_responses",
                    "short": "Tracked in-app survey responses, keyed by response option name.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "trigger_event_id",
                    "short": "The id of the event that triggered an event-triggered automation (not an API-triggered broadcast).",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "The type of message or action for a delivery, automation action, or related object.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "automation",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "draft",
                                        "orig": "draft",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "metric",
                                        "orig": "metric",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/messages",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "draft",
                                    "end_t",
                                    "get_tracked_response",
                                    "limit",
                                    "metric",
                                    "start",
                                    "start_t",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "messages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "unique",
                                        "orig": "unique",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics/links",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id",
                                    "period",
                                    "step",
                                    "type",
                                    "unique"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "unique",
                                        "orig": "unique",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/metrics/links",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "period",
                                    "step",
                                    "unique"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/actions",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.actions`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.campaigns`"
                            },
                            "parts": [
                                "v1",
                                "campaigns"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1735804800,
                                        "kind": "query",
                                        "name": "end",
                                        "orig": "end",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "res",
                                        "orig": "res",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1735718400,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 45,
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "America/New_York",
                                        "kind": "query",
                                        "name": "tz",
                                        "orig": "tz",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2",
                                        "kind": "query",
                                        "name": "version",
                                        "orig": "version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id",
                                    "end",
                                    "period",
                                    "res",
                                    "start",
                                    "step",
                                    "type",
                                    "tz",
                                    "version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1735804800,
                                        "kind": "query",
                                        "name": "end",
                                        "orig": "end",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "res",
                                        "orig": "res",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1735718400,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 45,
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "America/New_York",
                                        "kind": "query",
                                        "name": "tz",
                                        "orig": "tz",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "2",
                                        "kind": "query",
                                        "name": "version",
                                        "orig": "version",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/metrics",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "end",
                                    "period",
                                    "res",
                                    "start",
                                    "step",
                                    "type",
                                    "tz",
                                    "version"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metric`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end",
                                        "orig": "end",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "resolution",
                                        "orig": "resolution",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1652718066,
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/journey_metrics",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "journey_metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "end",
                                    "resolution",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.journey_metric`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "journey_metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{campaign_id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.campaign`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/campaigns/{campaign_id}/actions/{action_id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "actions",
                                "{action_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "campaign"
                    ],
                    [
                        "campaign",
                        "action"
                    ],
                    [
                        "campaign",
                        "action",
                        "language"
                    ]
                ]
            }
        },
        "broadcast": {
            "fields": [
                {
                    "name": "actions",
                    "short": "A list of actions used by the broadcast.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "active",
                    "short": "If true, the broadcast is active.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "broadcast_id",
                    "short": "The identifier for a broadcast.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "errors",
                    "short": "A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "first_started",
                    "short": "The date and time when you activated the broadcast.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The identifier for a broadcast trigger.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "language_variants",
                    "short": "Metrics for each language variant of a multi-language message, keyed by the variant's action ID.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "link",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metric",
                    "short": "Contains metrics for the link.",
                    "type": "`$OBJECT`"
                },
                {
                    "deprecated": true,
                    "name": "msg_template_ids",
                    "short": "Indicates the message template(s) used in this broadcast.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "readOnly": true,
                    "short": "The name of the broadcast.",
                    "type": "`$STRING`"
                },
                {
                    "name": "next",
                    "short": "The offset to pass as the `start` value to fetch the next page of errors.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "processed_at",
                    "short": "The date-time when Customer.io processed the trigger.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "state",
                    "short": "The state of the broadcast.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "An array of tags you set on this broadcast.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "short": "The type of broadcast.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "broadcast",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "metric",
                                        "orig": "metric",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/messages",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "$action": "message",
                                "exist": [
                                    "end_t",
                                    "get_tracked_response",
                                    "id",
                                    "limit",
                                    "metric",
                                    "start",
                                    "start_t",
                                    "state",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "messages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics/links",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "trigger_id",
                                        "orig": "trigger_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "trigger_id",
                                        "orig": "trigger_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}/errors",
                            "rename": {
                                "param": {
                                    "broadcast_id": "campaign_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "triggers"
                                },
                                {
                                    "var": "trigger_id"
                                },
                                {
                                    "lit": "errors"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "limit",
                                    "start",
                                    "trigger_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.errors`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "triggers",
                                "{trigger_id}",
                                "errors"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "unique",
                                        "orig": "unique",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/metrics/links",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "$action": "metric_link",
                                "exist": [
                                    "id",
                                    "period",
                                    "step",
                                    "unique"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                }
                            ],
                            "select": {
                                "$action": "action",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.actions`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/triggers",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "triggers"
                                }
                            ],
                            "select": {
                                "$action": "trigger",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.triggers`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "triggers"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.broadcasts`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/metrics",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "$action": "metric",
                                "exist": [
                                    "id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metric`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 3,
                                        "kind": "param",
                                        "name": "trigger_id",
                                        "orig": "trigger_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "campaign_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "triggers"
                                },
                                {
                                    "var": "trigger_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id",
                                    "trigger_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "triggers",
                                "{trigger_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/broadcasts/{broadcast_id}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.broadcast`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
                            "rename": {
                                "param": {
                                    "broadcast_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "broadcasts"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "actions"
                                },
                                {
                                    "var": "action_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.action`"
                            },
                            "parts": [
                                "v1",
                                "broadcasts",
                                "{id}",
                                "actions",
                                "{action_id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "action",
                        "language"
                    ],
                    [
                        "campaign",
                        "trigger"
                    ]
                ]
            }
        },
        "campaign": {
            "fields": [],
            "name": "campaign",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "collection": {
            "fields": [
                {
                    "name": "bytes",
                    "short": "The size of the collection in bytes.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The identifier for the collection.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the collection.",
                    "type": "`$STRING`"
                },
                {
                    "name": "rows",
                    "short": "Represents the number of objects in the `data` array or CSV rows in your collection schema.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "schema",
                    "short": "Lists the top-level keys that you can reference within this collection.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "collection",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/collections",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.collection`"
                            },
                            "parts": [
                                "v1",
                                "collections"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/collections",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.collections`"
                            },
                            "parts": [
                                "v1",
                                "collections"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/collections/{collection_id}",
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.collection`"
                            },
                            "parts": [
                                "v1",
                                "collections",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/collections/{collection_id}/content",
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "content"
                                }
                            ],
                            "select": {
                                "$action": "content",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "collections",
                                "{id}",
                                "content"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/collections/{collection_id}",
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "collections",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/collections/{collection_id}",
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.collection`"
                            },
                            "parts": [
                                "v1",
                                "collections",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "collection_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/collections/{collection_id}/content",
                            "rename": {
                                "param": {
                                    "collection_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "collections"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "content"
                                }
                            ],
                            "select": {
                                "$action": "content",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.collection`"
                            },
                            "parts": [
                                "v1",
                                "collections",
                                "{id}",
                                "content"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "content": {
            "fields": [],
            "name": "content",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "newsletter"
                    ],
                    [
                        "transactional"
                    ]
                ]
            }
        },
        "customer": {
            "fields": [
                {
                    "name": "cio_id",
                    "req": true,
                    "short": "A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "req": true,
                    "short": "A person's email address, if set.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "filter",
                    "req": true,
                    "short": "Use `and`, `or`, and `not` to combine segment and attribute conditions.",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 5,
                        "count": 20,
                        "depth": 14
                    }
                },
                {
                    "name": "id",
                    "req": true,
                    "short": "A person's unique ID, if set.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "identifiers",
                    "short": "An array of objects, where each object represents a customer.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "ids",
                    "short": "In general, you should use the `identifiers` array.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "next",
                    "short": "The `start` value for the next page of results.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "customer",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/customers",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "customers"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/customers/attributes",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "$action": "attribute",
                                "exist": [
                                    "id_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "attributes"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "sent_email",
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/activities",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "activities"
                                }
                            ],
                            "select": {
                                "$action": "activity",
                                "exist": [
                                    "id",
                                    "id_type",
                                    "limit",
                                    "name",
                                    "start",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.activities`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "activities"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/messages",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "$action": "message",
                                "exist": [
                                    "end_t",
                                    "id",
                                    "id_type",
                                    "limit",
                                    "start",
                                    "start_t"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "messages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/relationships",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "relationships"
                                }
                            ],
                            "select": {
                                "$action": "relationship",
                                "exist": [
                                    "id",
                                    "id_type",
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.cio_relationships`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "relationships"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/segments",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {
                                "$action": "segment",
                                "exist": [
                                    "id",
                                    "id_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.segments`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "segments"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "email",
                                        "orig": "email",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.results`"
                            },
                            "parts": [
                                "v1",
                                "customers"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "header": [
                                    {
                                        "kind": "header",
                                        "name": "accept_language",
                                        "orig": "accept_language",
                                        "type": "`$STRING`"
                                    }
                                ],
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "language",
                                        "orig": "language",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/subscription_preferences",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "subscription_preferences"
                                }
                            ],
                            "select": {
                                "$action": "subscription_preference",
                                "exist": [
                                    "accept_language",
                                    "id",
                                    "id_type",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.customer`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "subscription_preferences"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/attributes",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "$action": "attribute",
                                "exist": [
                                    "id",
                                    "id_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.customer`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{id}",
                                "attributes"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "data_index": {
            "fields": [],
            "name": "data_index",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/data_index/attributes",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "data_index"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "$action": "attribute"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "data_index",
                                "attributes"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/data_index/events",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "data_index"
                                },
                                {
                                    "lit": "events"
                                }
                            ],
                            "select": {
                                "$action": "event"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "data_index",
                                "events"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "delivery": {
            "fields": [],
            "name": "delivery",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "design_studio": {
            "fields": [
                {
                    "name": "content",
                    "short": "HTML content",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "created",
                    "short": "Unix timestamp of when the component was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "uuid",
                    "name": "id",
                    "short": "ID of the component",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Display name of the component.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uuid",
                    "name": "parent_folder_id",
                    "short": "ID of the parent folder, or `null` if the component is in your root directory.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "tag",
                    "short": "The component tag name, used to reference your component in an email.",
                    "type": "`$STRING`"
                },
                {
                    "format": "int64",
                    "name": "updated",
                    "short": "Unix timestamp of the last update to the component.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "design_studio",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/components",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "components"
                                }
                            ],
                            "select": {
                                "$action": "component"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.component`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "components"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/folders",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "folders"
                                }
                            ],
                            "select": {
                                "$action": "folder"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.folder`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "folders"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_after",
                                        "orig": "created_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_before",
                                        "orig": "created_before",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "direct_descendants_only",
                                        "orig": "direct_descendants_only",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "parent_folder_id",
                                        "orig": "parent_folder_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "created",
                                        "kind": "query",
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "asc",
                                        "kind": "query",
                                        "name": "sort_order",
                                        "orig": "sort_order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "tag",
                                        "orig": "tag",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_after",
                                        "orig": "updated_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_before",
                                        "orig": "updated_before",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/components",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "components"
                                }
                            ],
                            "select": {
                                "$action": "component",
                                "exist": [
                                    "created_after",
                                    "created_before",
                                    "direct_descendants_only",
                                    "limit",
                                    "page",
                                    "parent_folder_id",
                                    "sort_by",
                                    "sort_order",
                                    "tag",
                                    "updated_after",
                                    "updated_before"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "components"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_after",
                                        "orig": "created_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_before",
                                        "orig": "created_before",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "direct_descendants_only",
                                        "orig": "direct_descendants_only",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "parent_folder_id",
                                        "orig": "parent_folder_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "created",
                                        "kind": "query",
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "asc",
                                        "kind": "query",
                                        "name": "sort_order",
                                        "orig": "sort_order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_after",
                                        "orig": "updated_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_before",
                                        "orig": "updated_before",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/folders",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "folders"
                                }
                            ],
                            "select": {
                                "$action": "folder",
                                "exist": [
                                    "created_after",
                                    "created_before",
                                    "direct_descendants_only",
                                    "limit",
                                    "page",
                                    "parent_folder_id",
                                    "sort_by",
                                    "sort_order",
                                    "updated_after",
                                    "updated_before"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "folders"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/components/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.component`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "components",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.folder`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/design_studio/components/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "components",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/design_studio/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/design_studio/components/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "components"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "components",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/design_studio/folders/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "folders"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "folders",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "design_studio_email": {
            "fields": [
                {
                    "name": "amp",
                    "short": "AMP HTML variant.",
                    "type": "`$STRING`"
                },
                {
                    "name": "available_languages",
                    "short": "List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "browser",
                    "short": "Browser used to render the client.",
                    "type": "`$STRING`"
                },
                {
                    "name": "category",
                    "short": "Where the client renders.",
                    "type": "`$STRING`"
                },
                {
                    "name": "check",
                    "short": "Which check produced this finding.",
                    "type": "`$STRING`"
                },
                {
                    "name": "client",
                    "short": "Name of the email client and device.",
                    "type": "`$STRING`"
                },
                {
                    "name": "client_ids",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$ARRAY`"
                        }
                    },
                    "short": "The device identifiers requested for this job.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "content",
                    "short": "The content of your email.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "int64",
                    "name": "created",
                    "short": "Unix timestamp of when the translation was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "Unix timestamp",
                    "name": "created_at",
                    "short": "When you submitted the preview job.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "created_on_publish",
                    "short": "`false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "credits_original",
                    "short": "Credits originally granted for a tier.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "credits_remaining",
                    "short": "Credits left to spend from this tier.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "dependencies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "description",
                    "short": "Explanatory text you provided when creating a version.",
                    "type": "`$STRING`"
                },
                {
                    "name": "details",
                    "short": "Explanation and suggested fix.",
                    "type": "`$STRING`"
                },
                {
                    "name": "emails",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "envelope",
                    "short": "The envelope of your email, like from and to addresses.",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "Unix timestamp",
                    "name": "expires_at",
                    "short": "When this pool's credits expire, if ever.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "feedback",
                    "short": "`true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "folders",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "has_unpublished_changes",
                    "short": "Indicates whether the email or any of its translations has content changes that haven't been published.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "html",
                    "short": "Full HTML with liquid tags left intact.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uuid",
                    "name": "id",
                    "short": "Unique identifier for the email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "is_linked",
                    "short": "Whether the translation is linked to a workflow (automation, broadcast, etc)",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_processed",
                    "short": "`true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "is_template",
                    "short": "Whether the translation is a template",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "language",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation",
                    "type": "`$STRING`"
                },
                {
                    "format": "uuid",
                    "name": "language_group_id",
                    "short": "ID of the parent email that groups all translations.",
                    "type": "`$STRING`"
                },
                {
                    "name": "lax_mode",
                    "short": "Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "meta",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The batch label provided when you sent an email for previews.",
                    "type": "`$STRING`"
                },
                {
                    "name": "node",
                    "short": "The content and settings stored in the version.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "node_count",
                    "short": "How many email nodes the run covers—more than one for a multi-language run.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "uuid",
                    "name": "node_id",
                    "short": "The UUID of the rendered email node.",
                    "type": "`$STRING`"
                },
                {
                    "name": "node_type",
                    "short": "Always `\"EMAIL\"`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "os",
                    "short": "Operating system the client runs on.",
                    "type": "`$STRING`"
                },
                {
                    "format": "uuid",
                    "name": "parent_folder_id",
                    "short": "UUID of the parent folder, or `null` if the email is in your root directory.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "previews",
                    "short": "One object per requested preview.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "replayed",
                    "short": "`true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "run_id",
                    "short": "ID of the preview job.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "sample_data",
                    "short": "Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{\"first_name\": \"Janine\"}` to nested ones like `{\"customer\": {\"first_name\": \"Janine\"}}`.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "severity",
                    "short": "Fix all errors to make sure your recipients get your email and you follow compliance requirements.",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "short": "Whether this finding represents an issue.",
                    "type": "`$STRING`"
                },
                {
                    "name": "summary",
                    "short": "Location context, for example \"In the email body\".",
                    "type": "`$STRING`"
                },
                {
                    "name": "template_id",
                    "short": "The ID of the workflow template that received the content.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "text",
                    "short": "Plain text version of the email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tier",
                    "short": "The credit tier this pool belongs to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "Short human-readable title.",
                    "type": "`$STRING`"
                },
                {
                    "name": "total_previews_bounced",
                    "short": "Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_previews_cached",
                    "short": "Previews served from an earlier run's screenshot.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_previews_ready",
                    "short": "How many previews show a screenshot you can fetch, counted from the tiles themselves.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_previews_requested",
                    "short": "Previews requested in the job, for the email in the path.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "total_previews_succeeded",
                    "short": "Previews this run generated itself, excluding cached ones.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "transformers",
                    "short": "Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers).",
                    "type": "`$OBJECT`"
                },
                {
                    "format": "int64",
                    "name": "updated",
                    "short": "Unix timestamp of the last update to the translation.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "Unix timestamp",
                    "name": "updated_at",
                    "short": "When the job's status was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "version",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "version_id",
                    "short": "The identifier of the template version created by the publish.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "design_studio_email",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "version_id",
                                        "orig": "version_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/versions/{version_id}/restore",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "versions"
                                },
                                {
                                    "var": "version_id"
                                },
                                {
                                    "lit": "restore"
                                }
                            ],
                            "select": {
                                "$action": "restore",
                                "exist": [
                                    "email_id",
                                    "version_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "versions",
                                "{version_id}",
                                "restore"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/inbox_previews",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "inbox_previews"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "inbox_previews"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/languages",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "languages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.email_translation`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "languages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/link",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "link"
                                }
                            ],
                            "select": {
                                "$action": "link",
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.target`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "link"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/preview",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "preview"
                                }
                            ],
                            "select": {
                                "$action": "preview",
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "preview"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/publish",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "publish"
                                }
                            ],
                            "select": {
                                "$action": "publish",
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "publish"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails/{id}/versions",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "versions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.version`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "versions"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/design_studio/emails",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.email`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_after",
                                        "orig": "created_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "created_before",
                                        "orig": "created_before",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "direct_descendants_only",
                                        "orig": "direct_descendants_only",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "any",
                                        "kind": "query",
                                        "name": "has_translation",
                                        "orig": "has_translation",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "any",
                                        "kind": "query",
                                        "name": "is_linked",
                                        "orig": "is_linked",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "any",
                                        "kind": "query",
                                        "name": "is_template",
                                        "orig": "is_template",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "parent_folder_id",
                                        "orig": "parent_folder_id",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "created",
                                        "kind": "query",
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "asc",
                                        "kind": "query",
                                        "name": "sort_order",
                                        "orig": "sort_order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_after",
                                        "orig": "updated_after",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "updated_before",
                                        "orig": "updated_before",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "created_after",
                                    "created_before",
                                    "direct_descendants_only",
                                    "has_translation",
                                    "is_linked",
                                    "is_template",
                                    "limit",
                                    "page",
                                    "parent_folder_id",
                                    "sort_by",
                                    "sort_order",
                                    "updated_after",
                                    "updated_before"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails"
                            ]
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "node_id",
                                        "orig": "node_id",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/inbox_previews/jobs",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "inbox_previews"
                                },
                                {
                                    "lit": "jobs"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "cursor",
                                    "limit",
                                    "node_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "inbox_previews",
                                "jobs"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "end_date",
                                        "orig": "end_date",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 1773856017,
                                        "kind": "query",
                                        "name": "start_date",
                                        "orig": "start_date",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/versions",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "versions"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "end_date",
                                    "start_date"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.versions`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "versions"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "publish_id",
                                        "orig": "publish_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/publish_status",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "publish_status"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "publish_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.mappings`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "publish_status"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/languages",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "languages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.email_translations`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "languages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/review",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "review"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "review"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/inbox_previews/clients",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "inbox_previews"
                                },
                                {
                                    "lit": "clients"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.clients`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "inbox_previews",
                                "clients"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/inbox_previews/credits",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "inbox_previews"
                                },
                                {
                                    "lit": "credits"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.credits`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "inbox_previews",
                                "credits"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "client_id",
                                        "orig": "client_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "inbox_preview_id",
                                        "orig": "run_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "default",
                                        "kind": "query",
                                        "name": "key",
                                        "orig": "key",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "screenshot",
                                        "kind": "query",
                                        "name": "variant",
                                        "orig": "variant",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/inbox_previews/{run_id}/captures/{client_id}",
                            "rename": {
                                "param": {
                                    "id": "email_id",
                                    "run_id": "inbox_preview_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "inbox_previews"
                                },
                                {
                                    "var": "inbox_preview_id"
                                },
                                {
                                    "lit": "captures"
                                },
                                {
                                    "var": "client_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "client_id",
                                    "email_id",
                                    "inbox_preview_id",
                                    "key",
                                    "variant"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "inbox_previews",
                                "{inbox_preview_id}",
                                "captures",
                                "{client_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/languages/{language}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "languages"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.email_translation`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "languages",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "run_id",
                                        "orig": "run_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/inbox_previews/{run_id}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "inbox_previews"
                                },
                                {
                                    "var": "run_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "run_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "inbox_previews",
                                "{run_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "version_id",
                                        "orig": "version_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/versions/{version_id}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "versions"
                                },
                                {
                                    "var": "version_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "version_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "versions",
                                "{version_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/render",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "render"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "render"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}/unpublished_changes",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "unpublished_changes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "unpublished_changes"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/design_studio/emails/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.email`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/design_studio/emails/{id}/languages/{language}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "languages"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "languages",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "version_id",
                                        "orig": "version_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/design_studio/emails/{id}/versions/{version_id}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "versions"
                                },
                                {
                                    "var": "version_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "version_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "versions",
                                "{version_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/design_studio/emails/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/design_studio/emails/{id}/languages/{language}",
                            "rename": {
                                "param": {
                                    "id": "email_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "email_id"
                                },
                                {
                                    "lit": "languages"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{email_id}",
                                "languages",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/design_studio/emails/{id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "design_studio"
                                },
                                {
                                    "lit": "emails"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "design_studio",
                                "emails",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "email"
                    ],
                    [
                        "email",
                        "inbox_preview"
                    ],
                    [
                        "email",
                        "language"
                    ],
                    [
                        "email",
                        "version"
                    ],
                    [
                        "email",
                        "inbox_preview",
                        "capture"
                    ]
                ]
            }
        },
        "email": {
            "fields": [],
            "name": "email",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "end": {
            "fields": [],
            "name": "end",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "esp_suppression": {
            "fields": [
                {
                    "name": "category",
                    "short": "The reason the addresses are suppressed.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "next",
                    "short": "The `start` value for the next page of results.",
                    "type": "`$STRING`"
                },
                {
                    "name": "suppressions",
                    "short": "The addresses suppressed in this category.",
                    "type": "`$ARRAY`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "esp_suppression",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_address",
                                        "orig": "email_address",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "suppression_type",
                                        "orig": "suppression_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/esp/suppression/{suppression_type}/{email_address}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "esp"
                                },
                                {
                                    "lit": "suppression"
                                },
                                {
                                    "var": "suppression_type"
                                },
                                {
                                    "var": "email_address"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_address",
                                    "suppression_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "esp",
                                "suppression",
                                "{suppression_type}",
                                "{email_address}"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "mail.example.com",
                                        "kind": "param",
                                        "name": "domain_id",
                                        "orig": "domain_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "suppression_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "email",
                                        "orig": "email",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/esp/domains/{domain_name}/suppression/{suppression_type}",
                            "rename": {
                                "param": {
                                    "domain_name": "domain_id",
                                    "suppression_type": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "esp"
                                },
                                {
                                    "lit": "domains"
                                },
                                {
                                    "var": "domain_id"
                                },
                                {
                                    "lit": "suppression"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "domain_id",
                                    "email",
                                    "id",
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "esp",
                                "domains",
                                "{domain_id}",
                                "suppression",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "suppression_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "mail.example.com",
                                        "kind": "query",
                                        "name": "domain",
                                        "orig": "domain",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "offset",
                                        "orig": "offset",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/esp/suppression/{suppression_type}",
                            "rename": {
                                "param": {
                                    "suppression_type": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "esp"
                                },
                                {
                                    "lit": "suppression"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "domain",
                                    "id",
                                    "limit",
                                    "offset"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "esp",
                                "suppression",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_address",
                                        "orig": "email_address",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/esp/search_suppression/{email_address}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "esp"
                                },
                                {
                                    "lit": "search_suppression"
                                },
                                {
                                    "var": "email_address"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_address"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "esp",
                                "search_suppression",
                                "{email_address}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "email_address",
                                        "orig": "email_address",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "suppression_type",
                                        "orig": "suppression_type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/esp/suppression/{suppression_type}/{email_address}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "esp"
                                },
                                {
                                    "lit": "suppression"
                                },
                                {
                                    "var": "suppression_type"
                                },
                                {
                                    "var": "email_address"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "email_address",
                                    "suppression_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "esp",
                                "suppression",
                                "{suppression_type}",
                                "{email_address}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "domain"
                    ],
                    [
                        "search_suppression"
                    ],
                    [
                        "suppression"
                    ]
                ]
            }
        },
        "export": {
            "fields": [
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "A description of the export.",
                    "type": "`$STRING`"
                },
                {
                    "name": "downloads",
                    "short": "Counts the total number of times the export has been downloaded.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "failed",
                    "short": "If true, the export was unsuccessful.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The identifier for the export.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "status",
                    "short": "The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable.",
                    "type": "`$STRING`"
                },
                {
                    "name": "total",
                    "short": "The number of entries in the export.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "type",
                    "short": "The type of information contained in the export.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "user_email",
                    "short": "The email of the user who created the export.",
                    "type": "`$STRING`"
                },
                {
                    "name": "user_id",
                    "short": "The user who created the export.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "export",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/exports/customers",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "exports"
                                },
                                {
                                    "lit": "customers"
                                }
                            ],
                            "select": {
                                "$action": "customer"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.export`"
                            },
                            "parts": [
                                "v1",
                                "exports",
                                "customers"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/exports/deliveries",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "exports"
                                },
                                {
                                    "lit": "deliveries"
                                }
                            ],
                            "select": {
                                "$action": "delivery"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.export`"
                            },
                            "parts": [
                                "v1",
                                "exports",
                                "deliveries"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/exports",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "exports"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.exports`"
                            },
                            "parts": [
                                "v1",
                                "exports"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "export_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/exports/{export_id}",
                            "rename": {
                                "param": {
                                    "export_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "exports"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.export`"
                            },
                            "parts": [
                                "v1",
                                "exports",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "export_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/exports/{export_id}/download",
                            "rename": {
                                "param": {
                                    "export_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "exports"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "download"
                                }
                            ],
                            "select": {
                                "$action": "download",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "exports",
                                "{id}",
                                "download"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "import": {
            "fields": [
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "data_to_process",
                    "short": "Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows.",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "A helpful description that can help you find and recognize your import operation.",
                    "type": "`$STRING`"
                },
                {
                    "name": "error",
                    "short": "If your import fails, this helps you understand why.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "identifier",
                    "short": "The type of identifier you used to identify people in your CSV.",
                    "type": "`$STRING`"
                },
                {
                    "name": "import",
                    "req": true,
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "name",
                    "short": "A friendly name for your import.",
                    "type": "`$STRING`"
                },
                {
                    "name": "object_type_id",
                    "short": "The object type an object belongs to—like \"Companies\" or \"Accounts\".",
                    "type": "`$STRING`"
                },
                {
                    "name": "people_to_process",
                    "short": "Returned for people and event imports, even if you imported using the field `data_to_process`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "rows_imported",
                    "short": "The number of rows we imported from the CSV.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "rows_to_import",
                    "short": "The total number of importable rows we found in the CSV.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "state",
                    "short": "The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "short": "The type of import.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "import",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/imports",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "imports"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": {
                                    "import": "`reqdata`"
                                },
                                "res": "`body.import`"
                            },
                            "parts": [
                                "v1",
                                "imports"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "import_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/imports/{import_id}",
                            "rename": {
                                "param": {
                                    "import_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "imports"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.import`"
                            },
                            "parts": [
                                "v1",
                                "imports",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "in_app": {
            "fields": [],
            "name": "in_app",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "inbox_message": {
            "fields": [],
            "name": "inbox_message",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "info": {
            "fields": [],
            "name": "info",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/info/ip_addresses",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "info"
                                },
                                {
                                    "lit": "ip_addresses"
                                }
                            ],
                            "select": {
                                "$action": "ip_address"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.ip_addresses`"
                            },
                            "parts": [
                                "v1",
                                "info",
                                "ip_addresses"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ip_address": {
            "fields": [],
            "name": "ip_address",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "language": {
            "fields": [],
            "name": "language",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "newsletter"
                    ],
                    [
                        "transactional"
                    ],
                    [
                        "broadcast",
                        "action"
                    ],
                    [
                        "campaign",
                        "action"
                    ],
                    [
                        "newsletter",
                        "test_group"
                    ]
                ]
            }
        },
        "link": {
            "fields": [],
            "name": "link",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "broadcast"
                    ],
                    [
                        "campaign"
                    ],
                    [
                        "newsletter"
                    ],
                    [
                        "transactional"
                    ],
                    [
                        "broadcast",
                        "action"
                    ],
                    [
                        "campaign",
                        "action"
                    ],
                    [
                        "newsletter",
                        "content"
                    ]
                ]
            }
        },
        "live_notification": {
            "fields": [
                {
                    "name": "created_at",
                    "short": "When the delivery was created (unix timestamp).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The delivery ID.",
                    "type": "`$STRING`"
                },
                {
                    "name": "operation",
                    "short": "The lifecycle operation the delivery carried.",
                    "type": "`$STRING`"
                },
                {
                    "name": "source",
                    "short": "Where the operation originated—the API or the device.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "short": "The delivery's status.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "live_notification",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/live_notifications/end",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "live_notifications"
                                },
                                {
                                    "lit": "end"
                                }
                            ],
                            "select": {
                                "$action": "end"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "live_notifications",
                                "end"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/live_notifications/start",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "live_notifications"
                                },
                                {
                                    "lit": "start"
                                }
                            ],
                            "select": {
                                "$action": "start"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "live_notifications",
                                "start"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/live_notifications/update",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "live_notifications"
                                },
                                {
                                    "lit": "update"
                                }
                            ],
                            "select": {
                                "$action": "update"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "live_notifications",
                                "update"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "instance_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/live_notifications/{instance_id}",
                            "rename": {
                                "param": {
                                    "instance_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "live_notifications"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.last_delivery`"
                            },
                            "parts": [
                                "v1",
                                "live_notifications",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "message": {
            "fields": [
                {
                    "name": "action_id",
                    "readOnly": true,
                    "short": "The identifier for an action.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "broadcast_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "campaign_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "content_id",
                    "readOnly": true,
                    "short": "The identifier for a message in a one-time send.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "customer_id",
                    "short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "customer_identifiers",
                    "req": true,
                    "short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "failure_message",
                    "short": "Explains why a message failed, if applicable.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$STRING`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "forgotten",
                    "short": "If true message contents are not retained by Customer.io.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The identifier for a delivery—the instance of a message intended for an individual recipient.",
                    "type": "`$STRING`"
                },
                {
                    "deprecated": true,
                    "name": "message_template_id",
                    "readOnly": true,
                    "short": "The identifier of the message template used to create a message.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "metrics",
                    "short": "Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "newsletter_id",
                    "type": "`$STRING`"
                },
                {
                    "name": "parent_action_id",
                    "readOnly": true,
                    "short": "The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc).",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "recipient",
                    "short": "The recipient address for an action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subject",
                    "short": "The subject line for an `email` action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tracked_responses",
                    "short": "Tracked in-app survey responses, keyed by response option name.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "trigger_event_id",
                    "short": "The id of the event that triggered an event-triggered automation (not an API-triggered broadcast).",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "The type of message or action for a delivery, automation action, or related object.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "message",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "action_id",
                                        "orig": "action_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "campaign_id",
                                        "orig": "campaign_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "draft",
                                        "orig": "draft",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "metric",
                                        "orig": "metric",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/messages",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "action_id",
                                    "campaign_id",
                                    "draft",
                                    "end_t",
                                    "get_tracked_response",
                                    "limit",
                                    "metric",
                                    "newsletter_id",
                                    "start",
                                    "start_t",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "messages"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "message_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/messages/{message_id}",
                            "rename": {
                                "param": {
                                    "message_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "messages"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "get_tracked_response",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.message`"
                            },
                            "parts": [
                                "v1",
                                "messages",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "message_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/messages/{message_id}/archived_message",
                            "rename": {
                                "param": {
                                    "message_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "messages"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "archived_message"
                                }
                            ],
                            "select": {
                                "$action": "archived_message",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.archived_message`"
                            },
                            "parts": [
                                "v1",
                                "messages",
                                "{id}",
                                "archived_message"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "newsletter": {
            "fields": [
                {
                    "name": "content_ids",
                    "short": "A list of message variants in a one-time send, where a variant is a translation or A/B test.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The identifier for a one-time send.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "readOnly": true,
                    "short": "The name of the one-time send.",
                    "type": "`$STRING`"
                },
                {
                    "name": "recipient_segment_ids",
                    "short": "If the recipient conditions included segments, this returns a list of those segment ids.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "sent_at",
                    "short": "The last time the one-time send was sent.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "subscription_topic_id",
                    "short": "If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "short": "An array of tags associated with the one-time send.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "Channel type for a one-time send or one-time send content variant.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "newsletter",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters/{newsletter_id}/schedule",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "schedule"
                                }
                            ],
                            "select": {
                                "$action": "schedule",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "schedule"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters/{newsletter_id}/send",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "send"
                                }
                            ],
                            "select": {
                                "$action": "send",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "send"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "sort",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletters`"
                            },
                            "parts": [
                                "v1",
                                "newsletters"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/newsletters/{newsletter_id}",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "newsletter_metric": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "link",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metric",
                    "short": "Contains metrics for the link.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "series",
                    "short": "Metrics grouped by the requested resolution.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "Channel type for a one-time send or one-time send content variant.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "newsletter_metric",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "metric",
                                        "orig": "metric",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/messages",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "$action": "messages",
                                "exist": [
                                    "end_t",
                                    "get_tracked_response",
                                    "id",
                                    "limit",
                                    "metric",
                                    "start",
                                    "start_t"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "messages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics/links",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "contents"
                                },
                                {
                                    "var": "content_id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "newsletter_id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "contents",
                                "{content_id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "unique",
                                        "orig": "unique",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/metrics/links",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "newsletter_id",
                                    "period",
                                    "step",
                                    "unique"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "metrics",
                                "links"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "contents"
                                },
                                {
                                    "var": "content_id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "newsletter_id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metric`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "contents",
                                "{content_id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/metrics",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "period",
                                    "step",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metric`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "metrics"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "newsletter"
                    ],
                    [
                        "newsletter",
                        "content"
                    ]
                ]
            }
        },
        "newsletter_variant": {
            "fields": [
                {
                    "name": "bcc",
                    "readOnly": true,
                    "short": "The blind-copy address(es) for this action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body",
                    "short": "The body of the variant.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_amp",
                    "short": "AMP-enabled content for your email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "cc",
                    "readOnly": true,
                    "short": "The carbon-copy address(es) for this action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "content_ids",
                    "short": "A list of message variants in a one-time send, where a variant is a translation or A/B test.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "fake_bcc",
                    "readOnly": true,
                    "short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "from",
                    "readOnly": true,
                    "short": "The address that the message is from, relevant if the action `type` is `email`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "from_id",
                    "short": "The identifier of the `from` address, commonly known as the \"sender\".",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "json",
                    "name": "headers",
                    "short": "A JSON string containing header objects with `name` and `value`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "language",
                    "readOnly": true,
                    "short": "The language variant for your message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "layout",
                    "readOnly": true,
                    "short": "The layout used for the variant, if it exists.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "readOnly": true,
                    "short": "The name of the variant, if it exists.",
                    "type": "`$STRING`"
                },
                {
                    "name": "newsletter_id",
                    "short": "The identifier for a one-time send.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "preheader_text",
                    "short": "[Also known as \"preview text\"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line.",
                    "type": "`$STRING`"
                },
                {
                    "name": "preprocessor",
                    "readOnly": true,
                    "short": "If CSS pre-processing is enabled, this key is populated with `premailer`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "recipient",
                    "short": "The recipient address for an action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "recipient_segment_ids",
                    "short": "If the recipient conditions included segments, this returns a list of those segment ids.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "reply_to",
                    "readOnly": true,
                    "short": "The address that receives replies for the message, if applicable.",
                    "type": "`$STRING`"
                },
                {
                    "name": "reply_to_id",
                    "short": "The identifier for the `reply_to` address, if applicable.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "format": "unix timestamp",
                    "name": "sent_at",
                    "short": "The last time the one-time send was sent.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "subject",
                    "short": "The subject line for an `email` action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscription_topic_id",
                    "short": "If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "tags",
                    "short": "An array of tags associated with the one-time send.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "Channel type for a one-time send or one-time send content variant.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "newsletter_variant",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "test_group_id",
                                        "orig": "test_group_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "test_group"
                                },
                                {
                                    "var": "test_group_id"
                                },
                                {
                                    "lit": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "newsletter_id",
                                    "test_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "test_group",
                                "{test_group_id}",
                                "language"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters/{newsletter_id}/language",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "language"
                                }
                            ],
                            "select": {
                                "$action": "language",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "language"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/newsletters/{newsletter_id}/test_groups",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "test_groups"
                                }
                            ],
                            "select": {
                                "$action": "test_groups",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.newsletter`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "test_groups"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/contents",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "contents"
                                }
                            ],
                            "select": {
                                "$action": "contents",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.contents`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "contents"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/test_groups",
                            "rename": {
                                "param": {
                                    "newsletter_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "test_groups"
                                }
                            ],
                            "select": {
                                "$action": "test_groups",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.test_groups`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{id}",
                                "test_groups"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "test_group_id",
                                        "orig": "test_group_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "test_group"
                                },
                                {
                                    "var": "test_group_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id",
                                    "test_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "test_group",
                                "{test_group_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "contents"
                                },
                                {
                                    "var": "content_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "newsletter_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "contents",
                                "{content_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/newsletters/{newsletter_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "language",
                                "{language}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "test_group_id",
                                        "orig": "test_group_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "test_group"
                                },
                                {
                                    "var": "test_group_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id",
                                    "test_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "test_group",
                                "{test_group_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/newsletters/{newsletter_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "language",
                                "{language}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "test_group_id",
                                        "orig": "test_group_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "test_group"
                                },
                                {
                                    "var": "test_group_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id",
                                    "test_group_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "test_group",
                                "{test_group_id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "contents"
                                },
                                {
                                    "var": "content_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "newsletter_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "contents",
                                "{content_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "newsletter_id",
                                        "orig": "newsletter_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/newsletters/{newsletter_id}/language/{language}",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "newsletters"
                                },
                                {
                                    "var": "newsletter_id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "language",
                                    "newsletter_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "newsletters",
                                "{newsletter_id}",
                                "language",
                                "{language}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "newsletter",
                        "content"
                    ],
                    [
                        "newsletter",
                        "language"
                    ],
                    [
                        "newsletter",
                        "test_group"
                    ],
                    [
                        "newsletter",
                        "test_group",
                        "language"
                    ]
                ]
            }
        },
        "object": {
            "fields": [
                {
                    "name": "attributes",
                    "short": "Attributes assigned to this object.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "enabled",
                    "short": "If true, the object type is enabled.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "filter",
                    "req": true,
                    "short": "Use `and`, `or`, and `not` to combine object attribute conditions.",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 4,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "icon",
                    "short": "The name of the icon or emoji that represents the object type in the Customer.io UI.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The `object_type_id` that you'll use with the Journeys Track API to create or modify objects.",
                    "type": "`$STRING`"
                },
                {
                    "name": "identifiers",
                    "short": "Identifies an object.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "ids",
                    "short": "A list of object IDs matching the object_type_id and filter in the request.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "short": "The name of the object type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "next",
                    "short": "Indicates the next page of results.",
                    "type": "`$STRING`"
                },
                {
                    "name": "object_type_disabled",
                    "short": "If true, the object is disabled.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "object_type_id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The object type an object belongs to—like \"Companies\" or \"Accounts\".",
                    "type": "`$STRING`"
                },
                {
                    "name": "singular_name",
                    "short": "The singular name of the object type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "singular_slug",
                    "short": "The singular slug of the page in the Customer.io UI for the object type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "slug",
                    "short": "The slug of the page in the Customer.io UI for the object type.",
                    "type": "`$STRING`"
                },
                {
                    "name": "timestamps",
                    "short": "The epoch timestamps when corresponding attributes were set on the object.",
                    "type": "`$OBJECT`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "object",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/objects",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "objects"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "objects"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 1,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "object_type_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "abc123",
                                        "kind": "param",
                                        "name": "object_id",
                                        "orig": "object_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "object_id",
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/objects/{object_type_id}/{object_id}/relationships",
                            "rename": {
                                "param": {
                                    "object_type_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "objects"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "var": "object_id"
                                },
                                {
                                    "lit": "relationships"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "id_type",
                                    "limit",
                                    "object_id",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.cio_relationships`"
                            },
                            "parts": [
                                "v1",
                                "objects",
                                "{id}",
                                "{object_id}",
                                "relationships"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/object_types",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "object_types"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.types`"
                            },
                            "parts": [
                                "v1",
                                "object_types"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 1,
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "object_type_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "abc123",
                                        "kind": "param",
                                        "name": "object_id",
                                        "orig": "object_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "object_id",
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/objects/{object_type_id}/{object_id}/attributes",
                            "rename": {
                                "param": {
                                    "object_type_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "objects"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "var": "object_id"
                                },
                                {
                                    "lit": "attributes"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "id_type",
                                    "object_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.object`"
                            },
                            "parts": [
                                "v1",
                                "objects",
                                "{id}",
                                "{object_id}",
                                "attributes"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "object_type": {
            "fields": [],
            "name": "object_type",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "opt_out": {
            "fields": [
                {
                    "name": "channel",
                    "short": "The channel that the person is opted out of.",
                    "type": "`$STRING`"
                },
                {
                    "name": "cio_id",
                    "short": "A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.",
                    "type": "`$STRING`"
                },
                {
                    "name": "customer_id",
                    "short": "The person's ID.",
                    "type": "`$STRING`"
                },
                {
                    "name": "from",
                    "short": "The sender that the person is opted out of.",
                    "type": "`$STRING`"
                },
                {
                    "name": "optouts",
                    "op": {
                        "list": {
                            "type": "`$ARRAY`"
                        }
                    },
                    "req": true,
                    "short": "The senders and channels you want to opt the person out of, or back in to.",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "opt_out",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "+15551234567",
                                        "kind": "query",
                                        "name": "from",
                                        "orig": "from",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 100,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "MTox",
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/optouts",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "optouts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "from",
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.optouts`"
                            },
                            "parts": [
                                "v1",
                                "optouts"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/customers/{customer_id}/optouts",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "optouts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "customer_id",
                                    "id_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.optouts`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{customer_id}",
                                "optouts"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": 12345,
                                        "kind": "param",
                                        "name": "customer_id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_type",
                                        "orig": "id_type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/customers/{customer_id}/optouts",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "customers"
                                },
                                {
                                    "var": "customer_id"
                                },
                                {
                                    "lit": "optouts"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "customer_id",
                                    "id_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "customers",
                                "{customer_id}",
                                "optouts"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "customer"
                    ]
                ]
            }
        },
        "push": {
            "fields": [],
            "name": "push",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "relationship": {
            "fields": [],
            "name": "relationship",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "object"
                    ]
                ]
            }
        },
        "reporting_webhook": {
            "fields": [
                {
                    "name": "disabled",
                    "short": "Set to `true` to quit sending events to the webhook URL.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "url",
                    "name": "endpoint",
                    "req": true,
                    "short": "The webhook URL.",
                    "type": "`$STRING`"
                },
                {
                    "name": "events",
                    "req": true,
                    "short": "Specifies the types of events you want to report to your webhook.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "full_resolution",
                    "short": "Set to `false` to send unique open and click events to the webhook.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The identifier for the webhook.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of your webhook.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook.",
                    "type": "`$STRING`"
                },
                {
                    "name": "with_content",
                    "short": "Set to `true` to include the message `body` in `_sent` events.",
                    "type": "`$BOOLEAN`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "reporting_webhook",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/reporting_webhooks",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "reporting_webhooks"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "reporting_webhooks"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/reporting_webhooks",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "reporting_webhooks"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.reporting_webhooks`"
                            },
                            "parts": [
                                "v1",
                                "reporting_webhooks"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "webhook_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/reporting_webhooks/{webhook_id}",
                            "rename": {
                                "param": {
                                    "webhook_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "reporting_webhooks"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "reporting_webhooks",
                                "{id}"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "webhook_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/reporting_webhooks/{webhook_id}",
                            "rename": {
                                "param": {
                                    "webhook_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "reporting_webhooks"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "reporting_webhooks",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "webhook_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/reporting_webhooks/{webhook_id}",
                            "rename": {
                                "param": {
                                    "webhook_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "reporting_webhooks"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "reporting_webhooks",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "search_suppression": {
            "fields": [],
            "name": "search_suppression",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "segment": {
            "fields": [
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "description",
                    "short": "A description for the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The identifier for a segment; used to target a segment in requests.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the segment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "progress",
                    "short": "If Customer.io has not finished processing the segment, this indicates the percentage complete.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "segment",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "state",
                    "short": "The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start…",
                    "type": "`$STRING`"
                },
                {
                    "name": "tags",
                    "short": "The tags assigned to the segment, if any.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$ARRAY`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "type",
                    "short": "The type of segment.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "segment",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/segments",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": {
                                    "segment": "`reqdata`"
                                },
                                "res": "`body.segment`"
                            },
                            "parts": [
                                "v1",
                                "segments"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/segments",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.segments`"
                            },
                            "parts": [
                                "v1",
                                "segments"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": 1000,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/segments/{segment_id}/membership",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "membership"
                                }
                            ],
                            "select": {
                                "$action": "membership",
                                "exist": [
                                    "id",
                                    "limit",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "segments",
                                "{id}",
                                "membership"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/segments/{segment_id}",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.segment`"
                            },
                            "parts": [
                                "v1",
                                "segments",
                                "{id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/segments/{segment_id}/customer_count",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "customer_count"
                                }
                            ],
                            "select": {
                                "$action": "customer_count",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "segments",
                                "{id}",
                                "customer_count"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/segments/{segment_id}/used_by",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "used_by"
                                }
                            ],
                            "select": {
                                "$action": "used_by",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.used_by`"
                            },
                            "parts": [
                                "v1",
                                "segments",
                                "{id}",
                                "used_by"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "segment_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/segments/{segment_id}",
                            "rename": {
                                "param": {
                                    "segment_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "segments"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "segments",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "send_message": {
            "fields": [
                {
                    "name": "attachments",
                    "short": "A dictionary of attachments where the filename is the key and the value is the base64-encoded contents.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "auto_create",
                    "short": "If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "bcc",
                    "short": "Blind copy message recipients.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body",
                    "short": "The HTML body of your message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_amp",
                    "short": "AMP-enabled content for your email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_plain",
                    "short": "The plaintext body of your message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "cc",
                    "short": "Carbon copy message recipients, separated by commas.",
                    "type": "`$STRING`"
                },
                {
                    "name": "custom_data",
                    "short": "Optional key/value pairs you want to attach to the push payload.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "custom_device",
                    "req": true,
                    "short": "A device to perform an upsert operation at the time of send.",
                    "type": "`$ANY`"
                },
                {
                    "name": "custom_payload",
                    "short": "Optional key/value pairs you want to attach to the push payload.",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 5,
                        "depth": 14
                    }
                },
                {
                    "name": "delivery_id",
                    "short": "A unique identifier for the message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "disable_css_preprocessing",
                    "short": "Set to `true` to disable CSS preprocessing.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "disable_message_retention",
                    "short": "If true, the message body is not retained in delivery history.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "fake_bcc",
                    "short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "from",
                    "short": "The address your email is from.",
                    "type": "`$STRING`"
                },
                {
                    "format": "json",
                    "name": "headers",
                    "short": "A JSON string containing header objects with `name` and `value`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The `trigger_id` for this operation.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "identifiers",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    },
                    "short": "Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`.",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 3,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "image_url",
                    "short": "An image URL to show in the push.",
                    "type": "`$STRING`"
                },
                {
                    "name": "language",
                    "short": "Overrides language preferences for the person you want to send your transactional message to.",
                    "type": "`$STRING`"
                },
                {
                    "name": "link",
                    "short": "A deep link to open when the push is tapped.",
                    "type": "`$STRING`"
                },
                {
                    "name": "message",
                    "short": "The message body for your notification.",
                    "type": "`$STRING`"
                },
                {
                    "name": "message_data",
                    "short": "An object containing the key-value pairs referenced using liquid in your message.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "preheader",
                    "short": "Also known as \"preview text\", this is the block block of text that users see next to, or underneath, the subject line in their inbox.",
                    "type": "`$STRING`"
                },
                {
                    "name": "queue_draft",
                    "short": "If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "unix timestamp",
                    "name": "queued_at",
                    "short": "A Unix timestamp for when Customer.io accepted and queued your request.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "reply_to",
                    "short": "The address that recipients can reply to, if different from the `from` address.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "send_at",
                    "short": "For a scheduled message, the Unix timestamp when the message is set to send.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "send_to_unsubscribed",
                    "short": "If false, your message is not sent to unsubscribed recipients.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "sound",
                    "short": "**For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subject",
                    "short": "The subject line for your message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "The title for your notification.",
                    "type": "`$STRING`"
                },
                {
                    "name": "to",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The recipients you want to send to, separated by commas.",
                    "type": "`$STRING`"
                },
                {
                    "name": "tracked",
                    "short": "If true, Customer.io tracks opens and link clicks in your message.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "transactional_message_id",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The transactional message template you want to use.",
                    "type": "`$STRING`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "send_message",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "campaign_id",
                                        "orig": "broadcast_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/campaigns/{broadcast_id}/triggers",
                            "rename": {
                                "param": {
                                    "broadcast_id": "campaign_id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "campaigns"
                                },
                                {
                                    "var": "campaign_id"
                                },
                                {
                                    "lit": "triggers"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "campaign_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "campaigns",
                                "{campaign_id}",
                                "triggers"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/email",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "email"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "email"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/in_app",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "in_app"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "in_app"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/inbox_message",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "inbox_message"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "inbox_message"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/push",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "push"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "push"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/sms",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "sms"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "sms"
                            ]
                        },
                        {
                            "args": {
                                "header": [
                                    {
                                        "example": 100,
                                        "kind": "header",
                                        "name": "x_workspace_id",
                                        "orig": "x_workspace_id",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/send/whatsapp",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "send"
                                },
                                {
                                    "lit": "whatsapp"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "x_workspace_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "send",
                                "whatsapp"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "campaign"
                    ]
                ]
            }
        },
        "sender_identity": {
            "fields": [
                {
                    "name": "address",
                    "short": "The sender name and email address in the format `name <name@example.com>`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "auto_generated",
                    "short": "If true, the sender is automatically generated by Customer.io.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "deduplicate_id",
                    "readOnly": true,
                    "short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
                    "type": "`$STRING`"
                },
                {
                    "name": "email",
                    "short": "The email address of the sender.",
                    "type": "`$STRING`"
                },
                {
                    "name": "hidden",
                    "short": "If true, the sender is hidden in the Customer.io UI.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "short": "The identifier of a sender.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the sender.",
                    "type": "`$STRING`"
                },
                {
                    "name": "phone",
                    "short": "The phone number of the sender, used for SMS senders.",
                    "type": "`$STRING`"
                },
                {
                    "name": "template_type",
                    "short": "The type of sender.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "sender_identity",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "hidden",
                                        "orig": "hidden",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/sender_identities",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "sender_identities"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "hidden",
                                    "limit",
                                    "sort",
                                    "start"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.sender_identities`"
                            },
                            "parts": [
                                "v1",
                                "sender_identities"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "sender_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/sender_identities/{sender_id}/used_by",
                            "rename": {
                                "param": {
                                    "sender_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "sender_identities"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "used_by"
                                }
                            ],
                            "select": {
                                "$action": "used_by",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "sender_identities",
                                "{id}",
                                "used_by"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "sender_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/sender_identities/{sender_id}",
                            "rename": {
                                "param": {
                                    "sender_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "sender_identities"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.sender_identity`"
                            },
                            "parts": [
                                "v1",
                                "sender_identities",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "sms": {
            "fields": [],
            "name": "sms",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "snippet": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "req": true,
                    "short": "The name of the snippet, must be unique.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The last date-time the snippet was updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "value",
                    "req": true,
                    "short": "The contents of the snippet.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "snippet",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/snippets",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "snippets"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.snippet`"
                            },
                            "parts": [
                                "v1",
                                "snippets"
                            ]
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/snippets",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "snippets"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.snippets`"
                            },
                            "parts": [
                                "v1",
                                "snippets"
                            ]
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "snippet_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/v1/snippets/{snippet_name}",
                            "rename": {
                                "param": {
                                    "snippet_name": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "snippets"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "snippets",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/snippets",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "snippets"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.snippet`"
                            },
                            "parts": [
                                "v1",
                                "snippets"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "start": {
            "fields": [],
            "name": "start",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "subscription_center": {
            "fields": [
                {
                    "name": "description",
                    "short": "A description of the channel.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "short": "The system-generated ID for the subscription channel.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "identifier",
                    "short": "The key associated with the subscription topic.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The display name of the subscription channel.",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscribed_by_default",
                    "short": "If false, a person is opted-out by default.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "type",
                    "short": "The type of delivery channel.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "subscription_center",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/subscription_channels",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "subscription_channels"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.channels`"
                            },
                            "parts": [
                                "v1",
                                "subscription_channels"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/subscription_topics",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "subscription_topics"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.topics`"
                            },
                            "parts": [
                                "v1",
                                "subscription_topics"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "person@example.com",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "customer_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/subscription_center/{customer_id}/token",
                            "rename": {
                                "param": {
                                    "customer_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "subscription_center"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "token"
                                }
                            ],
                            "select": {
                                "$action": "token",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "subscription_center",
                                "{id}",
                                "token"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "subscription_channel": {
            "fields": [],
            "name": "subscription_channel",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "subscription_topic": {
            "fields": [],
            "name": "subscription_topic",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "suppression": {
            "fields": [],
            "name": "suppression",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "domain"
                    ],
                    [
                        "suppression"
                    ]
                ]
            }
        },
        "test_group": {
            "fields": [],
            "name": "test_group",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "newsletter"
                    ]
                ]
            }
        },
        "transactional": {
            "fields": [
                {
                    "name": "bcc",
                    "readOnly": true,
                    "short": "The blind-copy address(es) for this action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body",
                    "short": "The body of the transactional message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "body_amp",
                    "short": "AMP-enabled content for your email.",
                    "type": "`$STRING`"
                },
                {
                    "name": "cc",
                    "readOnly": true,
                    "short": "The carbon-copy address(es) for this action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "content",
                    "short": "The object represents a variant.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "created_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was created.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "description",
                    "short": "A description of the transactional message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "fake_bcc",
                    "readOnly": true,
                    "short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "from",
                    "readOnly": true,
                    "short": "The address that the message is from, relevant if the action `type` is `email`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "from_id",
                    "short": "The identifier of the `from` address, commonly known as the \"sender\".",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "json",
                    "name": "headers",
                    "short": "A JSON string containing header objects with `name` and `value`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "hide_message_body",
                    "short": "If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "readOnly": true,
                    "short": "The identifier for an action.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "language",
                    "readOnly": true,
                    "short": "The language variant for your message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "link_tracking",
                    "short": "If true, link tracking is enabled for this message.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "name",
                    "readOnly": true,
                    "short": "The name of the transactional message.",
                    "type": "`$STRING`"
                },
                {
                    "name": "open_tracking",
                    "short": "If true, open-tracking is enabled for this message.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "preheader_text",
                    "short": "[Also known as \"preview text\"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line.",
                    "type": "`$STRING`"
                },
                {
                    "name": "preprocessor",
                    "readOnly": true,
                    "short": "If CSS pre-processing is enabled, this key is populated with `premailer`.",
                    "type": "`$STRING`"
                },
                {
                    "name": "queue_drafts",
                    "short": "If true, messages do not send automatically, and queue as drafts instead.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "recipient",
                    "short": "The recipient address for an action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "reply_to",
                    "readOnly": true,
                    "short": "The address that receives replies for the message, if applicable.",
                    "type": "`$STRING`"
                },
                {
                    "name": "reply_to_id",
                    "short": "The identifier for the `reply_to` address, if applicable.",
                    "type": [
                        "`$ONE`",
                        [
                            "`$INTEGER`",
                            "`$NULL`"
                        ]
                    ]
                },
                {
                    "name": "send_to_unsubscribed",
                    "short": "If true, people with an `unsubscribed` attribute set to `true` can trigger the message.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "subject",
                    "short": "The subject line for an `email` action.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "readOnly": true,
                    "short": "The type of message.",
                    "type": "`$STRING`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "unix timestamp",
                    "name": "updated_at",
                    "readOnly": true,
                    "short": "The date time when the referenced ID was last updated.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "transactional",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "end_t",
                                        "orig": "end_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "get_tracked_response",
                                        "orig": "get_tracked_response",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "metric",
                                        "orig": "metric",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_t",
                                        "orig": "start_t",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/messages",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "messages"
                                }
                            ],
                            "select": {
                                "$action": "message",
                                "exist": [
                                    "end_t",
                                    "get_tracked_response",
                                    "id",
                                    "limit",
                                    "metric",
                                    "start",
                                    "start_t",
                                    "state"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "messages"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "unique",
                                        "orig": "unique",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/metrics/links",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                },
                                {
                                    "lit": "links"
                                }
                            ],
                            "select": {
                                "$action": "metric_link",
                                "exist": [
                                    "id",
                                    "period",
                                    "step",
                                    "unique"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.links`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "metrics",
                                "links"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/contents",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "contents"
                                }
                            ],
                            "select": {
                                "$action": "content",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.contents`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "contents"
                            ]
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.messages`"
                            },
                            "parts": [
                                "v1",
                                "transactional"
                            ]
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "days",
                                        "kind": "query",
                                        "name": "period",
                                        "orig": "period",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "step",
                                        "orig": "step",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/metrics",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "metrics"
                                }
                            ],
                            "select": {
                                "$action": "metric",
                                "exist": [
                                    "id",
                                    "period",
                                    "step"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.metric`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "metrics"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/contents/{content_id}",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "contents"
                                },
                                {
                                    "var": "content_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.content`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "contents",
                                "{content_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}/language/{language}",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "language",
                                "{language}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/transactional/{transactional_id}",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.message`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}"
                            ]
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "content_id",
                                        "orig": "content_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/transactional/{transactional_id}/content/{content_id}",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "content"
                                },
                                {
                                    "var": "content_id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "content_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "content",
                                "{content_id}"
                            ]
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "transactional_id",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "language",
                                        "orig": "language",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/v1/transactional/{transactional_id}/language/{language}",
                            "rename": {
                                "param": {
                                    "transactional_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "transactional"
                                },
                                {
                                    "var": "id"
                                },
                                {
                                    "lit": "language"
                                },
                                {
                                    "var": "language"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "language"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "transactional",
                                "{id}",
                                "language",
                                "{language}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "content"
                    ],
                    [
                        "language"
                    ]
                ]
            }
        },
        "trigger": {
            "fields": [],
            "name": "trigger",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "campaign"
                    ]
                ]
            }
        },
        "update": {
            "fields": [],
            "name": "update",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "whatsapp": {
            "fields": [],
            "name": "whatsapp",
            "op": {},
            "relations": {
                "ancestors": []
            }
        },
        "workspace": {
            "fields": [
                {
                    "name": "billable_messages_sent",
                    "short": "The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "short": "The id of the workspace.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "messages_sent",
                    "short": "The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "name",
                    "short": "The name of the workspace.",
                    "type": "`$STRING`"
                },
                {
                    "name": "object_types",
                    "short": "The current count of object types in the workspace.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "objects",
                    "short": "The current count of object profiles in the workspace.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "people",
                    "short": "The current count of people profiles in the workspace.",
                    "type": "`$INTEGER`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "workspace",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/workspaces",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "workspaces"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.workspaces`"
                            },
                            "parts": [
                                "v1",
                                "workspaces"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map