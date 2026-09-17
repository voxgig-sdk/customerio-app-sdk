package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CustomerioApp",
			"slug": "customerio-app",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.customer.io",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"action": map[string]any{},
				"activity": map[string]any{},
				"asset": map[string]any{},
				"attribute": map[string]any{},
				"automation": map[string]any{},
				"broadcast": map[string]any{},
				"campaign": map[string]any{},
				"collection": map[string]any{},
				"content": map[string]any{},
				"customer": map[string]any{},
				"data_index": map[string]any{},
				"delivery": map[string]any{},
				"design_studio": map[string]any{},
				"design_studio_email": map[string]any{},
				"email": map[string]any{},
				"end": map[string]any{},
				"esp_suppression": map[string]any{},
				"export": map[string]any{},
				"import": map[string]any{},
				"in_app": map[string]any{},
				"inbox_message": map[string]any{},
				"info": map[string]any{},
				"ip_address": map[string]any{},
				"language": map[string]any{},
				"link": map[string]any{},
				"live_notification": map[string]any{},
				"message": map[string]any{},
				"newsletter": map[string]any{},
				"newsletter_metric": map[string]any{},
				"newsletter_variant": map[string]any{},
				"object": map[string]any{},
				"object_type": map[string]any{},
				"opt_out": map[string]any{},
				"push": map[string]any{},
				"relationship": map[string]any{},
				"reporting_webhook": map[string]any{},
				"search_suppression": map[string]any{},
				"segment": map[string]any{},
				"send_message": map[string]any{},
				"sender_identity": map[string]any{},
				"sms": map[string]any{},
				"snippet": map[string]any{},
				"start": map[string]any{},
				"subscription_center": map[string]any{},
				"subscription_channel": map[string]any{},
				"subscription_topic": map[string]any{},
				"suppression": map[string]any{},
				"test_group": map[string]any{},
				"transactional": map[string]any{},
				"trigger": map[string]any{},
				"update": map[string]any{},
				"whatsapp": map[string]any{},
				"workspace": map[string]any{},
			},
		},
		"entity": map[string]any{
			"action": map[string]any{
				"fields": []any{},
				"name": "action",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"broadcast",
						},
						[]any{
							"campaign",
						},
					},
				},
			},
			"activity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "customer_id",
						"short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "customer_identifiers",
						"req": true,
						"short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "delivery_id",
						"short": "The message ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "delivery_type",
						"short": "The recipient device, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for the action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the event, for `event` and `screen` activities.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "timestamp",
						"short": "The date and time when the action occurred.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of activity.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The page URL, for `page` activities.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "activity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "customer_id",
											"orig": "customer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "deleted",
											"orig": "deleted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "something_happened",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "sent_email",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/activities",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "activities",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
										"deleted",
										"id_type",
										"limit",
										"name",
										"start",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.activities`",
								},
								"parts": []any{
									"v1",
									"activities",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"asset": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "int64",
						"name": "created",
						"short": "Unix timestamp when the asset was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The unique identifier of the file asset.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The display name of the file asset.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_folder_id",
						"short": "The ID of the parent folder, or null if the asset is at the root level.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "path",
						"short": "The storage URL or path where the file is hosted.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"short": "The file size in bytes.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "int64",
						"name": "updated",
						"short": "Unix timestamp when the asset was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "asset",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/assets/files",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "files",
									},
								},
								"select": map[string]any{
									"$action": "file",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.asset`",
								},
								"parts": []any{
									"v1",
									"assets",
									"files",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/assets/folders",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "folders",
									},
								},
								"select": map[string]any{
									"$action": "folder",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.folder`",
								},
								"parts": []any{
									"v1",
									"assets",
									"folders",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "direct_descendants_only",
											"orig": "direct_descendants_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_folder_id",
											"orig": "parent_folder_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assets",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"direct_descendants_only",
										"limit",
										"page",
										"parent_folder_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "direct_descendants_only",
											"orig": "direct_descendants_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_folder_id",
											"orig": "parent_folder_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assets/folders",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "folders",
									},
								},
								"select": map[string]any{
									"$action": "folder",
									"exist": []any{
										"direct_descendants_only",
										"limit",
										"page",
										"parent_folder_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
									"folders",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assets/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.asset`",
								},
								"parts": []any{
									"v1",
									"assets",
									"files",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/assets/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.folder`",
								},
								"parts": []any{
									"v1",
									"assets",
									"folders",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/assets/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
									"files",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/assets/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
									"folders",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/assets/files/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "files",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
									"files",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/assets/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "assets",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"assets",
									"folders",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"attribute": map[string]any{
				"fields": []any{},
				"name": "attribute",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"object",
						},
					},
				},
			},
			"automation": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_id",
						"readOnly": true,
						"short": "The identifier for an action.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "actions",
						"short": "Each object in the array represents an action in your automation.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "activated",
						"short": "People who started a journey and were not filtered out before they experienced an action.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "broadcast_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "campaign_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "campaigns",
						"short": "Each object is an automation in your workspace with one of seven types of automation triggers.",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 7,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "content_id",
						"readOnly": true,
						"short": "The identifier for a message in a one-time send.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "converted",
						"short": "People who matched the conversion criteria for the automation.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "customer_id",
						"short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "customer_identifiers",
						"req": true,
						"short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "ISO 8601",
						"name": "end",
						"short": "The end of the window we reported on, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "exited_early",
						"short": "People who started a journey but stopped meeting the automation trigger/filter criteria.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "failure_message",
						"short": "Explains why a message failed, if applicable.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "finished",
						"short": "People who finished the journey.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "forgotten",
						"short": "If true message contents are not retained by Customer.io.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The identifier for a delivery—the instance of a message intended for an individual recipient.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language_variants",
						"short": "Metrics for each language variant of a multi-language message, keyed by the variant's action ID.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "link",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"deprecated": true,
						"name": "message_template_id",
						"readOnly": true,
						"short": "The identifier of the message template used to create a message.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "messaged",
						"short": "People who experienced at least one non-delay action in the journey.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "metric",
						"short": "Contains metrics for the link.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metrics",
						"short": "Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "never_activated",
						"short": "People who started a journey but were filtered out before they could experience any of the actions in the journey.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "newsletter_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "next",
						"short": "Indicates the next page of results.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_action_id",
						"readOnly": true,
						"short": "The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "recipient",
						"short": "The recipient address for an action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "res",
						"short": "The resolution we reported at.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "series",
						"short": "Metrics grouped by the requested resolution.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "ISO 8601",
						"name": "start",
						"short": "The start of the window we reported on, in ISO 8601 format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "started",
						"short": "The total number of people who meet the trigger criteria for a journey.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line for an `email` action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tracked_responses",
						"short": "Tracked in-app survey responses, keyed by response option name.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "trigger_event_id",
						"short": "The id of the event that triggered an event-triggered automation (not an API-triggered broadcast).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "The type of message or action for a delivery, automation action, or related object.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "automation",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "draft",
											"orig": "draft",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/messages",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"draft",
										"end_t",
										"get_tracked_response",
										"limit",
										"metric",
										"start",
										"start_t",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "unique",
											"orig": "unique",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics/links",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
										"period",
										"step",
										"type",
										"unique",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "unique",
											"orig": "unique",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/metrics/links",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"period",
										"step",
										"unique",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/actions",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.actions`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.campaigns`",
								},
								"parts": []any{
									"v1",
									"campaigns",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1735804800,
											"kind": "query",
											"name": "end",
											"orig": "end",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "res",
											"orig": "res",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1735718400,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 45,
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "America/New_York",
											"kind": "query",
											"name": "tz",
											"orig": "tz",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2",
											"kind": "query",
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
										"end",
										"period",
										"res",
										"start",
										"step",
										"type",
										"tz",
										"version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1735804800,
											"kind": "query",
											"name": "end",
											"orig": "end",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "res",
											"orig": "res",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1735718400,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 45,
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "America/New_York",
											"kind": "query",
											"name": "tz",
											"orig": "tz",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "2",
											"kind": "query",
											"name": "version",
											"orig": "version",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/metrics",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"end",
										"period",
										"res",
										"start",
										"step",
										"type",
										"tz",
										"version",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metric`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end",
											"orig": "end",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "resolution",
											"orig": "resolution",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1652718066,
											"kind": "query",
											"name": "start",
											"orig": "start",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/journey_metrics",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "journey_metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"end",
										"resolution",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.journey_metric`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"journey_metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{campaign_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.campaign`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "campaign_id",
											"orig": "campaign_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/campaigns/{campaign_id}/actions/{action_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"campaign_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"actions",
									"{action_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"campaign",
						},
						[]any{
							"campaign",
							"action",
						},
						[]any{
							"campaign",
							"action",
							"language",
						},
					},
				},
			},
			"broadcast": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "actions",
						"short": "A list of actions used by the broadcast.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "active",
						"short": "If true, the broadcast is active.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "broadcast_id",
						"short": "The identifier for a broadcast.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "errors",
						"short": "A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "first_started",
						"short": "The date and time when you activated the broadcast.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for a broadcast trigger.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "language_variants",
						"short": "Metrics for each language variant of a multi-language message, keyed by the variant's action ID.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "link",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metric",
						"short": "Contains metrics for the link.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"deprecated": true,
						"name": "msg_template_ids",
						"short": "Indicates the message template(s) used in this broadcast.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"readOnly": true,
						"short": "The name of the broadcast.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "next",
						"short": "The offset to pass as the `start` value to fetch the next page of errors.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "processed_at",
						"short": "The date-time when Customer.io processed the trigger.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "state",
						"short": "The state of the broadcast.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "An array of tags you set on this broadcast.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of broadcast.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "broadcast",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"$action": "message",
									"exist": []any{
										"end_t",
										"get_tracked_response",
										"id",
										"limit",
										"metric",
										"start",
										"start_t",
										"state",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics/links",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "campaign_id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "campaign_id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}/errors",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "campaign_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "triggers",
									},
									map[string]any{
										"var": "trigger_id",
									},
									map[string]any{
										"lit": "errors",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"limit",
										"start",
										"trigger_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.errors`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"triggers",
									"{trigger_id}",
									"errors",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "unique",
											"orig": "unique",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/metrics/links",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"$action": "metric_link",
									"exist": []any{
										"id",
										"period",
										"step",
										"unique",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"$action": "action",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.actions`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/triggers",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"select": map[string]any{
									"$action": "trigger",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.triggers`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"triggers",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.broadcasts`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/metrics",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"$action": "metric",
									"exist": []any{
										"id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metric`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "campaign_id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 3,
											"kind": "param",
											"name": "trigger_id",
											"orig": "trigger_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "campaign_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "triggers",
									},
									map[string]any{
										"var": "trigger_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
										"trigger_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"triggers",
									"{trigger_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/broadcasts/{broadcast_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.broadcast`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "action_id",
											"orig": "action_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "broadcasts",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.action`",
								},
								"parts": []any{
									"v1",
									"broadcasts",
									"{id}",
									"actions",
									"{action_id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"action",
						},
						[]any{
							"action",
							"language",
						},
						[]any{
							"campaign",
							"trigger",
						},
					},
				},
			},
			"campaign": map[string]any{
				"fields": []any{},
				"name": "campaign",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bytes",
						"short": "The size of the collection in bytes.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for the collection.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the collection.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rows",
						"short": "Represents the number of objects in the `data` array or CSV rows in your collection schema.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "schema",
						"short": "Lists the top-level keys that you can reference within this collection.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "collection",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/collections",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.collection`",
								},
								"parts": []any{
									"v1",
									"collections",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/collections",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.collections`",
								},
								"parts": []any{
									"v1",
									"collections",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/collections/{collection_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"collection_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.collection`",
								},
								"parts": []any{
									"v1",
									"collections",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/collections/{collection_id}/content",
								"rename": map[string]any{
									"param": map[string]any{
										"collection_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"select": map[string]any{
									"$action": "content",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"collections",
									"{id}",
									"content",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/collections/{collection_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"collection_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"collections",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/collections/{collection_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"collection_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.collection`",
								},
								"parts": []any{
									"v1",
									"collections",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/collections/{collection_id}/content",
								"rename": map[string]any{
									"param": map[string]any{
										"collection_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "content",
									},
								},
								"select": map[string]any{
									"$action": "content",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.collection`",
								},
								"parts": []any{
									"v1",
									"collections",
									"{id}",
									"content",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"content": map[string]any{
				"fields": []any{},
				"name": "content",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsletter",
						},
						[]any{
							"transactional",
						},
					},
				},
			},
			"customer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cio_id",
						"req": true,
						"short": "A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"req": true,
						"short": "A person's email address, if set.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "filter",
						"req": true,
						"short": "Use `and`, `or`, and `not` to combine segment and attribute conditions.",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 5,
							"count": 20,
							"depth": 14,
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "A person's unique ID, if set.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "identifiers",
						"short": "An array of objects, where each object represents a customer.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ids",
						"short": "In general, you should use the `identifiers` array.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "next",
						"short": "The `start` value for the next page of results.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "customer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/customers",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"customers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/customers/attributes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"$action": "attribute",
									"exist": []any{
										"id_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"customers",
									"attributes",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "sent_email",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/activities",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "activities",
									},
								},
								"select": map[string]any{
									"$action": "activity",
									"exist": []any{
										"id",
										"id_type",
										"limit",
										"name",
										"start",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.activities`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"activities",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"$action": "message",
									"exist": []any{
										"end_t",
										"id",
										"id_type",
										"limit",
										"start",
										"start_t",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/relationships",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "relationships",
									},
								},
								"select": map[string]any{
									"$action": "relationship",
									"exist": []any{
										"id",
										"id_type",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.cio_relationships`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"relationships",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/segments",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{
									"$action": "segment",
									"exist": []any{
										"id",
										"id_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.segments`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"segments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "email",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"v1",
									"customers",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "accept_language",
											"orig": "accept_language",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "language",
											"orig": "language",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/subscription_preferences",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "subscription_preferences",
									},
								},
								"select": map[string]any{
									"$action": "subscription_preference",
									"exist": []any{
										"accept_language",
										"id",
										"id_type",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.customer`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"subscription_preferences",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/attributes",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"$action": "attribute",
									"exist": []any{
										"id",
										"id_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.customer`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{id}",
									"attributes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"data_index": map[string]any{
				"fields": []any{},
				"name": "data_index",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/data_index/attributes",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "data_index",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"$action": "attribute",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"data_index",
									"attributes",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/data_index/events",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "data_index",
									},
									map[string]any{
										"lit": "events",
									},
								},
								"select": map[string]any{
									"$action": "event",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"data_index",
									"events",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"delivery": map[string]any{
				"fields": []any{},
				"name": "delivery",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"design_studio": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content",
						"short": "HTML content",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "created",
						"short": "Unix timestamp of when the component was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"short": "ID of the component",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Display name of the component.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "parent_folder_id",
						"short": "ID of the parent folder, or `null` if the component is in your root directory.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "tag",
						"short": "The component tag name, used to reference your component in an email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "int64",
						"name": "updated",
						"short": "Unix timestamp of the last update to the component.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "design_studio",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/components",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "components",
									},
								},
								"select": map[string]any{
									"$action": "component",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.component`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"components",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/folders",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "folders",
									},
								},
								"select": map[string]any{
									"$action": "folder",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.folder`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"folders",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "direct_descendants_only",
											"orig": "direct_descendants_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_folder_id",
											"orig": "parent_folder_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "created",
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "asc",
											"kind": "query",
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/components",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "components",
									},
								},
								"select": map[string]any{
									"$action": "component",
									"exist": []any{
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
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"components",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "direct_descendants_only",
											"orig": "direct_descendants_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_folder_id",
											"orig": "parent_folder_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "created",
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "asc",
											"kind": "query",
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/folders",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "folders",
									},
								},
								"select": map[string]any{
									"$action": "folder",
									"exist": []any{
										"created_after",
										"created_before",
										"direct_descendants_only",
										"limit",
										"page",
										"parent_folder_id",
										"sort_by",
										"sort_order",
										"updated_after",
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"folders",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/components/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.component`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"components",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.folder`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"folders",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/design_studio/components/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"components",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/design_studio/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"folders",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/design_studio/components/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "components",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"components",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/design_studio/folders/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "folders",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"folders",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"design_studio_email": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amp",
						"short": "AMP HTML variant.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "available_languages",
						"short": "List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "browser",
						"short": "Browser used to render the client.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Where the client renders.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "check",
						"short": "Which check produced this finding.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client",
						"short": "Name of the email client and device.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "client_ids",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ARRAY`",
							},
						},
						"short": "The device identifiers requested for this job.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "content",
						"short": "The content of your email.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int64",
						"name": "created",
						"short": "Unix timestamp of when the translation was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "Unix timestamp",
						"name": "created_at",
						"short": "When you submitted the preview job.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "created_on_publish",
						"short": "`false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "credits_original",
						"short": "Credits originally granted for a tier.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "credits_remaining",
						"short": "Credits left to spend from this tier.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "dependencies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "description",
						"short": "Explanatory text you provided when creating a version.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "details",
						"short": "Explanation and suggested fix.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "emails",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "envelope",
						"short": "The envelope of your email, like from and to addresses.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "Unix timestamp",
						"name": "expires_at",
						"short": "When this pool's credits expire, if ever.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "feedback",
						"short": "`true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "folders",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "has_unpublished_changes",
						"short": "Indicates whether the email or any of its translations has content changes that haven't been published.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "html",
						"short": "Full HTML with liquid tags left intact.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "id",
						"short": "Unique identifier for the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_linked",
						"short": "Whether the translation is linked to a workflow (automation, broadcast, etc)",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_processed",
						"short": "`true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "is_template",
						"short": "Whether the translation is a template",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "language",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "language_group_id",
						"short": "ID of the parent email that groups all translations.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lax_mode",
						"short": "Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The batch label provided when you sent an email for previews.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "node",
						"short": "The content and settings stored in the version.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "node_count",
						"short": "How many email nodes the run covers—more than one for a multi-language run.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uuid",
						"name": "node_id",
						"short": "The UUID of the rendered email node.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "node_type",
						"short": "Always `\"EMAIL\"`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "os",
						"short": "Operating system the client runs on.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uuid",
						"name": "parent_folder_id",
						"short": "UUID of the parent folder, or `null` if the email is in your root directory.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "previews",
						"short": "One object per requested preview.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "replayed",
						"short": "`true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "run_id",
						"short": "ID of the preview job.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "sample_data",
						"short": "Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{\"first_name\": \"Janine\"}` to nested ones like `{\"customer\": {\"first_name\": \"Janine\"}}`.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "severity",
						"short": "Fix all errors to make sure your recipients get your email and you follow compliance requirements.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"short": "Whether this finding represents an issue.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "summary",
						"short": "Location context, for example \"In the email body\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template_id",
						"short": "The ID of the workflow template that received the content.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "text",
						"short": "Plain text version of the email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tier",
						"short": "The credit tier this pool belongs to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Short human-readable title.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total_previews_bounced",
						"short": "Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_previews_cached",
						"short": "Previews served from an earlier run's screenshot.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_previews_ready",
						"short": "How many previews show a screenshot you can fetch, counted from the tiles themselves.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_previews_requested",
						"short": "Previews requested in the job, for the email in the path.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "total_previews_succeeded",
						"short": "Previews this run generated itself, excluding cached ones.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "transformers",
						"short": "Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "int64",
						"name": "updated",
						"short": "Unix timestamp of the last update to the translation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "Unix timestamp",
						"name": "updated_at",
						"short": "When the job's status was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "version",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "version_id",
						"short": "The identifier of the template version created by the publish.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "design_studio_email",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "version_id",
											"orig": "version_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/versions/{version_id}/restore",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version_id",
									},
									map[string]any{
										"lit": "restore",
									},
								},
								"select": map[string]any{
									"$action": "restore",
									"exist": []any{
										"email_id",
										"version_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"versions",
									"{version_id}",
									"restore",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/inbox_previews",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"inbox_previews",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/languages",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "languages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.email_translation`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"languages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/link",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "link",
									},
								},
								"select": map[string]any{
									"$action": "link",
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.target`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"link",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/preview",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "preview",
									},
								},
								"select": map[string]any{
									"$action": "preview",
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"preview",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/publish",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "publish",
									},
								},
								"select": map[string]any{
									"$action": "publish",
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"publish",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails/{id}/versions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.version`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"versions",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/design_studio/emails",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.email`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "created_before",
											"orig": "created_before",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "direct_descendants_only",
											"orig": "direct_descendants_only",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "any",
											"kind": "query",
											"name": "has_translation",
											"orig": "has_translation",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "any",
											"kind": "query",
											"name": "is_linked",
											"orig": "is_linked",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "any",
											"kind": "query",
											"name": "is_template",
											"orig": "is_template",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "parent_folder_id",
											"orig": "parent_folder_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "created",
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "asc",
											"kind": "query",
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_after",
											"orig": "updated_after",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "updated_before",
											"orig": "updated_before",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"updated_before",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "node_id",
											"orig": "node_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/inbox_previews/jobs",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
									map[string]any{
										"lit": "jobs",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"cursor",
										"limit",
										"node_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"inbox_previews",
									"jobs",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "end_date",
											"orig": "end_date",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1773856017,
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/versions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "versions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"end_date",
										"start_date",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.versions`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"versions",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "publish_id",
											"orig": "publish_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/publish_status",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "publish_status",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"publish_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.mappings`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"publish_status",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/languages",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "languages",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.email_translations`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"languages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/review",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "review",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"review",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/inbox_previews/clients",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
									map[string]any{
										"lit": "clients",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.clients`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"inbox_previews",
									"clients",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/inbox_previews/credits",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
									map[string]any{
										"lit": "credits",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.credits`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"inbox_previews",
									"credits",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "client_id",
											"orig": "client_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "inbox_preview_id",
											"orig": "run_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "default",
											"kind": "query",
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "screenshot",
											"kind": "query",
											"name": "variant",
											"orig": "variant",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/inbox_previews/{run_id}/captures/{client_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
										"run_id": "inbox_preview_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
									map[string]any{
										"var": "inbox_preview_id",
									},
									map[string]any{
										"lit": "captures",
									},
									map[string]any{
										"var": "client_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"client_id",
										"email_id",
										"inbox_preview_id",
										"key",
										"variant",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"inbox_previews",
									"{inbox_preview_id}",
									"captures",
									"{client_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/languages/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "languages",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.email_translation`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"languages",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "run_id",
											"orig": "run_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/inbox_previews/{run_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "inbox_previews",
									},
									map[string]any{
										"var": "run_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"run_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"inbox_previews",
									"{run_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "version_id",
											"orig": "version_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/versions/{version_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"version_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"versions",
									"{version_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/render",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "render",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"render",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}/unpublished_changes",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "unpublished_changes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"unpublished_changes",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/design_studio/emails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.email`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/design_studio/emails/{id}/languages/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "languages",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"languages",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "version_id",
											"orig": "version_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/design_studio/emails/{id}/versions/{version_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "versions",
									},
									map[string]any{
										"var": "version_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"version_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"versions",
									"{version_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/design_studio/emails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/design_studio/emails/{id}/languages/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "email_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "email_id",
									},
									map[string]any{
										"lit": "languages",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{email_id}",
									"languages",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/design_studio/emails/{id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "design_studio",
									},
									map[string]any{
										"lit": "emails",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"design_studio",
									"emails",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"email",
						},
						[]any{
							"email",
							"inbox_preview",
						},
						[]any{
							"email",
							"language",
						},
						[]any{
							"email",
							"version",
						},
						[]any{
							"email",
							"inbox_preview",
							"capture",
						},
					},
				},
			},
			"email": map[string]any{
				"fields": []any{},
				"name": "email",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"end": map[string]any{
				"fields": []any{},
				"name": "end",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"esp_suppression": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"short": "The reason the addresses are suppressed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "next",
						"short": "The `start` value for the next page of results.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "suppressions",
						"short": "The addresses suppressed in this category.",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "esp_suppression",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_address",
											"orig": "email_address",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "suppression_type",
											"orig": "suppression_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/esp/suppression/{suppression_type}/{email_address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "esp",
									},
									map[string]any{
										"lit": "suppression",
									},
									map[string]any{
										"var": "suppression_type",
									},
									map[string]any{
										"var": "email_address",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_address",
										"suppression_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"esp",
									"suppression",
									"{suppression_type}",
									"{email_address}",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "mail.example.com",
											"kind": "param",
											"name": "domain_id",
											"orig": "domain_name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "suppression_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/esp/domains/{domain_name}/suppression/{suppression_type}",
								"rename": map[string]any{
									"param": map[string]any{
										"domain_name": "domain_id",
										"suppression_type": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "esp",
									},
									map[string]any{
										"lit": "domains",
									},
									map[string]any{
										"var": "domain_id",
									},
									map[string]any{
										"lit": "suppression",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain_id",
										"email",
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"esp",
									"domains",
									"{domain_id}",
									"suppression",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "suppression_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "mail.example.com",
											"kind": "query",
											"name": "domain",
											"orig": "domain",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/esp/suppression/{suppression_type}",
								"rename": map[string]any{
									"param": map[string]any{
										"suppression_type": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "esp",
									},
									map[string]any{
										"lit": "suppression",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"domain",
										"id",
										"limit",
										"offset",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"esp",
									"suppression",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_address",
											"orig": "email_address",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/esp/search_suppression/{email_address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "esp",
									},
									map[string]any{
										"lit": "search_suppression",
									},
									map[string]any{
										"var": "email_address",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_address",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"esp",
									"search_suppression",
									"{email_address}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "email_address",
											"orig": "email_address",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "suppression_type",
											"orig": "suppression_type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/esp/suppression/{suppression_type}/{email_address}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "esp",
									},
									map[string]any{
										"lit": "suppression",
									},
									map[string]any{
										"var": "suppression_type",
									},
									map[string]any{
										"var": "email_address",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"email_address",
										"suppression_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"esp",
									"suppression",
									"{suppression_type}",
									"{email_address}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"domain",
						},
						[]any{
							"search_suppression",
						},
						[]any{
							"suppression",
						},
					},
				},
			},
			"export": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the export.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "downloads",
						"short": "Counts the total number of times the export has been downloaded.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "failed",
						"short": "If true, the export was unsuccessful.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for the export.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "status",
						"short": "The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "total",
						"short": "The number of entries in the export.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of information contained in the export.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "user_email",
						"short": "The email of the user who created the export.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "user_id",
						"short": "The user who created the export.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/exports/customers",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "customers",
									},
								},
								"select": map[string]any{
									"$action": "customer",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.export`",
								},
								"parts": []any{
									"v1",
									"exports",
									"customers",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/exports/deliveries",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "deliveries",
									},
								},
								"select": map[string]any{
									"$action": "delivery",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.export`",
								},
								"parts": []any{
									"v1",
									"exports",
									"deliveries",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/exports",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.exports`",
								},
								"parts": []any{
									"v1",
									"exports",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "export_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/exports/{export_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"export_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.export`",
								},
								"parts": []any{
									"v1",
									"exports",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "export_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/exports/{export_id}/download",
								"rename": map[string]any{
									"param": map[string]any{
										"export_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "download",
									},
								},
								"select": map[string]any{
									"$action": "download",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"exports",
									"{id}",
									"download",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"import": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "data_to_process",
						"short": "Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A helpful description that can help you find and recognize your import operation.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "error",
						"short": "If your import fails, this helps you understand why.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "identifier",
						"short": "The type of identifier you used to identify people in your CSV.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "import",
						"req": true,
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "name",
						"short": "A friendly name for your import.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type_id",
						"short": "The object type an object belongs to—like \"Companies\" or \"Accounts\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "people_to_process",
						"short": "Returned for people and event imports, even if you imported using the field `data_to_process`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rows_imported",
						"short": "The number of rows we imported from the CSV.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "rows_to_import",
						"short": "The total number of importable rows we found in the CSV.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "state",
						"short": "The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of import.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "import",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/imports",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "imports",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"import": "`reqdata`",
									},
									"res": "`body.import`",
								},
								"parts": []any{
									"v1",
									"imports",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "import_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/imports/{import_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"import_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "imports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.import`",
								},
								"parts": []any{
									"v1",
									"imports",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"in_app": map[string]any{
				"fields": []any{},
				"name": "in_app",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"inbox_message": map[string]any{
				"fields": []any{},
				"name": "inbox_message",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"info": map[string]any{
				"fields": []any{},
				"name": "info",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/info/ip_addresses",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "info",
									},
									map[string]any{
										"lit": "ip_addresses",
									},
								},
								"select": map[string]any{
									"$action": "ip_address",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.ip_addresses`",
								},
								"parts": []any{
									"v1",
									"info",
									"ip_addresses",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ip_address": map[string]any{
				"fields": []any{},
				"name": "ip_address",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"language": map[string]any{
				"fields": []any{},
				"name": "language",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsletter",
						},
						[]any{
							"transactional",
						},
						[]any{
							"broadcast",
							"action",
						},
						[]any{
							"campaign",
							"action",
						},
						[]any{
							"newsletter",
							"test_group",
						},
					},
				},
			},
			"link": map[string]any{
				"fields": []any{},
				"name": "link",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"broadcast",
						},
						[]any{
							"campaign",
						},
						[]any{
							"newsletter",
						},
						[]any{
							"transactional",
						},
						[]any{
							"broadcast",
							"action",
						},
						[]any{
							"campaign",
							"action",
						},
						[]any{
							"newsletter",
							"content",
						},
					},
				},
			},
			"live_notification": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"short": "When the delivery was created (unix timestamp).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The delivery ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "operation",
						"short": "The lifecycle operation the delivery carried.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "source",
						"short": "Where the operation originated—the API or the device.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "The delivery's status.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "live_notification",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/live_notifications/end",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live_notifications",
									},
									map[string]any{
										"lit": "end",
									},
								},
								"select": map[string]any{
									"$action": "end",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"live_notifications",
									"end",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/live_notifications/start",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live_notifications",
									},
									map[string]any{
										"lit": "start",
									},
								},
								"select": map[string]any{
									"$action": "start",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"live_notifications",
									"start",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/live_notifications/update",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live_notifications",
									},
									map[string]any{
										"lit": "update",
									},
								},
								"select": map[string]any{
									"$action": "update",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"live_notifications",
									"update",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "instance_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/live_notifications/{instance_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"instance_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "live_notifications",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.last_delivery`",
								},
								"parts": []any{
									"v1",
									"live_notifications",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_id",
						"readOnly": true,
						"short": "The identifier for an action.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "broadcast_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "campaign_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_id",
						"readOnly": true,
						"short": "The identifier for a message in a one-time send.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "customer_id",
						"short": "The ID of a customer profile, analogous to a \"person\" in the UI.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "customer_identifiers",
						"req": true,
						"short": "Identifiers for the person in a response—`id`, `cio_id`, and `email`.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "failure_message",
						"short": "Explains why a message failed, if applicable.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$STRING`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "forgotten",
						"short": "If true message contents are not retained by Customer.io.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The identifier for a delivery—the instance of a message intended for an individual recipient.",
						"type": "`$STRING`",
					},
					map[string]any{
						"deprecated": true,
						"name": "message_template_id",
						"readOnly": true,
						"short": "The identifier of the message template used to create a message.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "metrics",
						"short": "Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "newsletter_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_action_id",
						"readOnly": true,
						"short": "The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc).",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "recipient",
						"short": "The recipient address for an action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line for an `email` action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tracked_responses",
						"short": "Tracked in-app survey responses, keyed by response option name.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "trigger_event_id",
						"short": "The id of the event that triggered an event-triggered automation (not an API-triggered broadcast).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "The type of message or action for a delivery, automation action, or related object.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "message",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "action_id",
											"orig": "action_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "campaign_id",
											"orig": "campaign_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "draft",
											"orig": "draft",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/messages",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"messages",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/messages/{message_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"message_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"get_tracked_response",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
								"parts": []any{
									"v1",
									"messages",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "message_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/messages/{message_id}/archived_message",
								"rename": map[string]any{
									"param": map[string]any{
										"message_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "messages",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "archived_message",
									},
								},
								"select": map[string]any{
									"$action": "archived_message",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.archived_message`",
								},
								"parts": []any{
									"v1",
									"messages",
									"{id}",
									"archived_message",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"newsletter": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content_ids",
						"short": "A list of message variants in a one-time send, where a variant is a translation or A/B test.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for a one-time send.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"readOnly": true,
						"short": "The name of the one-time send.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recipient_segment_ids",
						"short": "If the recipient conditions included segments, this returns a list of those segment ids.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "sent_at",
						"short": "The last time the one-time send was sent.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "subscription_topic_id",
						"short": "If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "An array of tags associated with the one-time send.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "Channel type for a one-time send or one-time send content variant.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "newsletter",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters/{newsletter_id}/schedule",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "schedule",
									},
								},
								"select": map[string]any{
									"$action": "schedule",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"schedule",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters/{newsletter_id}/send",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "send",
									},
								},
								"select": map[string]any{
									"$action": "send",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"send",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletters`",
								},
								"parts": []any{
									"v1",
									"newsletters",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/newsletters/{newsletter_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"newsletter_metric": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metric",
						"short": "Contains metrics for the link.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "series",
						"short": "Metrics grouped by the requested resolution.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "Channel type for a one-time send or one-time send content variant.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "newsletter_metric",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"$action": "messages",
									"exist": []any{
										"end_t",
										"get_tracked_response",
										"id",
										"limit",
										"metric",
										"start",
										"start_t",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics/links",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "contents",
									},
									map[string]any{
										"var": "content_id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"newsletter_id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"contents",
									"{content_id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "unique",
											"orig": "unique",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/metrics/links",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"newsletter_id",
										"period",
										"step",
										"unique",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"metrics",
									"links",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "contents",
									},
									map[string]any{
										"var": "content_id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"newsletter_id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metric`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"contents",
									"{content_id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/metrics",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"period",
										"step",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metric`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"metrics",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsletter",
						},
						[]any{
							"newsletter",
							"content",
						},
					},
				},
			},
			"newsletter_variant": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bcc",
						"readOnly": true,
						"short": "The blind-copy address(es) for this action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"short": "The body of the variant.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_amp",
						"short": "AMP-enabled content for your email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cc",
						"readOnly": true,
						"short": "The carbon-copy address(es) for this action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content_ids",
						"short": "A list of message variants in a one-time send, where a variant is a translation or A/B test.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fake_bcc",
						"readOnly": true,
						"short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "from",
						"readOnly": true,
						"short": "The address that the message is from, relevant if the action `type` is `email`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "from_id",
						"short": "The identifier of the `from` address, commonly known as the \"sender\".",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "json",
						"name": "headers",
						"short": "A JSON string containing header objects with `name` and `value`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "language",
						"readOnly": true,
						"short": "The language variant for your message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "layout",
						"readOnly": true,
						"short": "The layout used for the variant, if it exists.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"readOnly": true,
						"short": "The name of the variant, if it exists.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newsletter_id",
						"short": "The identifier for a one-time send.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "preheader_text",
						"short": "[Also known as \"preview text\"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preprocessor",
						"readOnly": true,
						"short": "If CSS pre-processing is enabled, this key is populated with `premailer`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recipient",
						"short": "The recipient address for an action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "recipient_segment_ids",
						"short": "If the recipient conditions included segments, this returns a list of those segment ids.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "reply_to",
						"readOnly": true,
						"short": "The address that receives replies for the message, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reply_to_id",
						"short": "The identifier for the `reply_to` address, if applicable.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "sent_at",
						"short": "The last time the one-time send was sent.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line for an `email` action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscription_topic_id",
						"short": "If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "tags",
						"short": "An array of tags associated with the one-time send.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "Channel type for a one-time send or one-time send content variant.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "newsletter_variant",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "test_group_id",
											"orig": "test_group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "test_group",
									},
									map[string]any{
										"var": "test_group_id",
									},
									map[string]any{
										"lit": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"newsletter_id",
										"test_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"test_group",
									"{test_group_id}",
									"language",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters/{newsletter_id}/language",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "language",
									},
								},
								"select": map[string]any{
									"$action": "language",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"language",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/newsletters/{newsletter_id}/test_groups",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "test_groups",
									},
								},
								"select": map[string]any{
									"$action": "test_groups",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.newsletter`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"test_groups",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/contents",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "contents",
									},
								},
								"select": map[string]any{
									"$action": "contents",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.contents`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"contents",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/test_groups",
								"rename": map[string]any{
									"param": map[string]any{
										"newsletter_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "test_groups",
									},
								},
								"select": map[string]any{
									"$action": "test_groups",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.test_groups`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{id}",
									"test_groups",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "test_group_id",
											"orig": "test_group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "test_group",
									},
									map[string]any{
										"var": "test_group_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
										"test_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"test_group",
									"{test_group_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "contents",
									},
									map[string]any{
										"var": "content_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"newsletter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"contents",
									"{content_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/newsletters/{newsletter_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"language",
									"{language}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "test_group_id",
											"orig": "test_group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "test_group",
									},
									map[string]any{
										"var": "test_group_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
										"test_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"test_group",
									"{test_group_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/newsletters/{newsletter_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"language",
									"{language}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "test_group_id",
											"orig": "test_group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "test_group",
									},
									map[string]any{
										"var": "test_group_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
										"test_group_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"test_group",
									"{test_group_id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "contents",
									},
									map[string]any{
										"var": "content_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"newsletter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"contents",
									"{content_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "newsletter_id",
											"orig": "newsletter_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/newsletters/{newsletter_id}/language/{language}",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "newsletters",
									},
									map[string]any{
										"var": "newsletter_id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"language",
										"newsletter_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"newsletters",
									"{newsletter_id}",
									"language",
									"{language}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsletter",
							"content",
						},
						[]any{
							"newsletter",
							"language",
						},
						[]any{
							"newsletter",
							"test_group",
						},
						[]any{
							"newsletter",
							"test_group",
							"language",
						},
					},
				},
			},
			"object": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attributes",
						"short": "Attributes assigned to this object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "enabled",
						"short": "If true, the object type is enabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "filter",
						"req": true,
						"short": "Use `and`, `or`, and `not` to combine object attribute conditions.",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 4,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "icon",
						"short": "The name of the icon or emoji that represents the object type in the Customer.io UI.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The `object_type_id` that you'll use with the Journeys Track API to create or modify objects.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifiers",
						"short": "Identifies an object.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "ids",
						"short": "A list of object IDs matching the object_type_id and filter in the request.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "next",
						"short": "Indicates the next page of results.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type_disabled",
						"short": "If true, the object is disabled.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "object_type_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The object type an object belongs to—like \"Companies\" or \"Accounts\".",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "singular_name",
						"short": "The singular name of the object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "singular_slug",
						"short": "The singular slug of the page in the Customer.io UI for the object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"short": "The slug of the page in the Customer.io UI for the object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "timestamps",
						"short": "The epoch timestamps when corresponding attributes were set on the object.",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "object",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/objects",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "objects",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"objects",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1,
											"kind": "param",
											"name": "id",
											"orig": "object_type_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "abc123",
											"kind": "param",
											"name": "object_id",
											"orig": "object_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "object_id",
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/objects/{object_type_id}/{object_id}/relationships",
								"rename": map[string]any{
									"param": map[string]any{
										"object_type_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "objects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "object_id",
									},
									map[string]any{
										"lit": "relationships",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_type",
										"limit",
										"object_id",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.cio_relationships`",
								},
								"parts": []any{
									"v1",
									"objects",
									"{id}",
									"{object_id}",
									"relationships",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/object_types",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "object_types",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.types`",
								},
								"parts": []any{
									"v1",
									"object_types",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1,
											"kind": "param",
											"name": "id",
											"orig": "object_type_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "abc123",
											"kind": "param",
											"name": "object_id",
											"orig": "object_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "object_id",
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/objects/{object_type_id}/{object_id}/attributes",
								"rename": map[string]any{
									"param": map[string]any{
										"object_type_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "objects",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "object_id",
									},
									map[string]any{
										"lit": "attributes",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_type",
										"object_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.object`",
								},
								"parts": []any{
									"v1",
									"objects",
									"{id}",
									"{object_id}",
									"attributes",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"object_type": map[string]any{
				"fields": []any{},
				"name": "object_type",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"opt_out": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "channel",
						"short": "The channel that the person is opted out of.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cio_id",
						"short": "A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "customer_id",
						"short": "The person's ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "from",
						"short": "The sender that the person is opted out of.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "optouts",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$ARRAY`",
							},
						},
						"req": true,
						"short": "The senders and channels you want to opt the person out of, or back in to.",
						"type": "`$ARRAY`",
					},
				},
				"name": "opt_out",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "+15551234567",
											"kind": "query",
											"name": "from",
											"orig": "from",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 100,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "MTox",
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/optouts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "optouts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"from",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.optouts`",
								},
								"parts": []any{
									"v1",
									"optouts",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "customer_id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/customers/{customer_id}/optouts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "optouts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
										"id_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.optouts`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{customer_id}",
									"optouts",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 12345,
											"kind": "param",
											"name": "customer_id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "id_type",
											"orig": "id_type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/customers/{customer_id}/optouts",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "customers",
									},
									map[string]any{
										"var": "customer_id",
									},
									map[string]any{
										"lit": "optouts",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"customer_id",
										"id_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"customers",
									"{customer_id}",
									"optouts",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"customer",
						},
					},
				},
			},
			"push": map[string]any{
				"fields": []any{},
				"name": "push",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"relationship": map[string]any{
				"fields": []any{},
				"name": "relationship",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"object",
						},
					},
				},
			},
			"reporting_webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "disabled",
						"short": "Set to `true` to quit sending events to the webhook URL.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "url",
						"name": "endpoint",
						"req": true,
						"short": "The webhook URL.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "events",
						"req": true,
						"short": "Specifies the types of events you want to report to your webhook.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "full_resolution",
						"short": "Set to `false` to send unique open and click events to the webhook.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The identifier for the webhook.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of your webhook.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "with_content",
						"short": "Set to `true` to include the message `body` in `_sent` events.",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reporting_webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/reporting_webhooks",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "reporting_webhooks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"reporting_webhooks",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/reporting_webhooks",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "reporting_webhooks",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.reporting_webhooks`",
								},
								"parts": []any{
									"v1",
									"reporting_webhooks",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/reporting_webhooks/{webhook_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "reporting_webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"reporting_webhooks",
									"{id}",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/reporting_webhooks/{webhook_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "reporting_webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"reporting_webhooks",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "webhook_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/reporting_webhooks/{webhook_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "reporting_webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"reporting_webhooks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"search_suppression": map[string]any{
				"fields": []any{},
				"name": "search_suppression",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"segment": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "A description for the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier for a segment; used to target a segment in requests.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "progress",
						"short": "If Customer.io has not finished processing the segment, this indicates the percentage complete.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "segment",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "state",
						"short": "The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tags",
						"short": "The tags assigned to the segment, if any.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$ARRAY`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "type",
						"short": "The type of segment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "segment",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/segments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": map[string]any{
										"segment": "`reqdata`",
									},
									"res": "`body.segment`",
								},
								"parts": []any{
									"v1",
									"segments",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/segments",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.segments`",
								},
								"parts": []any{
									"v1",
									"segments",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": 1000,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/segments/{segment_id}/membership",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "membership",
									},
								},
								"select": map[string]any{
									"$action": "membership",
									"exist": []any{
										"id",
										"limit",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"segments",
									"{id}",
									"membership",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/segments/{segment_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.segment`",
								},
								"parts": []any{
									"v1",
									"segments",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/segments/{segment_id}/customer_count",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "customer_count",
									},
								},
								"select": map[string]any{
									"$action": "customer_count",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"segments",
									"{id}",
									"customer_count",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/segments/{segment_id}/used_by",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "used_by",
									},
								},
								"select": map[string]any{
									"$action": "used_by",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.used_by`",
								},
								"parts": []any{
									"v1",
									"segments",
									"{id}",
									"used_by",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "segment_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/segments/{segment_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"segment_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "segments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"segments",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"send_message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"short": "A dictionary of attachments where the filename is the key and the value is the base64-encoded contents.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "auto_create",
						"short": "If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "bcc",
						"short": "Blind copy message recipients.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"short": "The HTML body of your message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_amp",
						"short": "AMP-enabled content for your email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_plain",
						"short": "The plaintext body of your message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cc",
						"short": "Carbon copy message recipients, separated by commas.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "custom_data",
						"short": "Optional key/value pairs you want to attach to the push payload.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "custom_device",
						"req": true,
						"short": "A device to perform an upsert operation at the time of send.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "custom_payload",
						"short": "Optional key/value pairs you want to attach to the push payload.",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 5,
							"depth": 14,
						},
					},
					map[string]any{
						"name": "delivery_id",
						"short": "A unique identifier for the message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disable_css_preprocessing",
						"short": "Set to `true` to disable CSS preprocessing.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "disable_message_retention",
						"short": "If true, the message body is not retained in delivery history.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fake_bcc",
						"short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "from",
						"short": "The address your email is from.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "json",
						"name": "headers",
						"short": "A JSON string containing header objects with `name` and `value`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The `trigger_id` for this operation.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "identifiers",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`.",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 3,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "image_url",
						"short": "An image URL to show in the push.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "language",
						"short": "Overrides language preferences for the person you want to send your transactional message to.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link",
						"short": "A deep link to open when the push is tapped.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message",
						"short": "The message body for your notification.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "message_data",
						"short": "An object containing the key-value pairs referenced using liquid in your message.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "preheader",
						"short": "Also known as \"preview text\", this is the block block of text that users see next to, or underneath, the subject line in their inbox.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queue_draft",
						"short": "If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "queued_at",
						"short": "A Unix timestamp for when Customer.io accepted and queued your request.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reply_to",
						"short": "The address that recipients can reply to, if different from the `from` address.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "send_at",
						"short": "For a scheduled message, the Unix timestamp when the message is set to send.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "send_to_unsubscribed",
						"short": "If false, your message is not sent to unsubscribed recipients.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "sound",
						"short": "**For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line for your message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "The title for your notification.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "to",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The recipients you want to send to, separated by commas.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tracked",
						"short": "If true, Customer.io tracks opens and link clicks in your message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "transactional_message_id",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The transactional message template you want to use.",
						"type": "`$STRING`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "send_message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "campaign_id",
											"orig": "broadcast_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/campaigns/{broadcast_id}/triggers",
								"rename": map[string]any{
									"param": map[string]any{
										"broadcast_id": "campaign_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "campaigns",
									},
									map[string]any{
										"var": "campaign_id",
									},
									map[string]any{
										"lit": "triggers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"campaign_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"campaigns",
									"{campaign_id}",
									"triggers",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/email",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "email",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"email",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/in_app",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "in_app",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"in_app",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/inbox_message",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "inbox_message",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"inbox_message",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/push",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "push",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"push",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/sms",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "sms",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"sms",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"example": 100,
											"kind": "header",
											"name": "x_workspace_id",
											"orig": "x_workspace_id",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/send/whatsapp",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "send",
									},
									map[string]any{
										"lit": "whatsapp",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"x_workspace_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"send",
									"whatsapp",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"campaign",
						},
					},
				},
			},
			"sender_identity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"short": "The sender name and email address in the format `name <name@example.com>`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "auto_generated",
						"short": "If true, the sender is automatically generated by Customer.io.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "deduplicate_id",
						"readOnly": true,
						"short": "An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update…",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"short": "The email address of the sender.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hidden",
						"short": "If true, the sender is hidden in the Customer.io UI.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"short": "The identifier of a sender.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the sender.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"short": "The phone number of the sender, used for SMS senders.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "template_type",
						"short": "The type of sender.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sender_identity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "hidden",
											"orig": "hidden",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/sender_identities",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "sender_identities",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"hidden",
										"limit",
										"sort",
										"start",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sender_identities`",
								},
								"parts": []any{
									"v1",
									"sender_identities",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "sender_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/sender_identities/{sender_id}/used_by",
								"rename": map[string]any{
									"param": map[string]any{
										"sender_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "sender_identities",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "used_by",
									},
								},
								"select": map[string]any{
									"$action": "used_by",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"sender_identities",
									"{id}",
									"used_by",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "sender_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/sender_identities/{sender_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"sender_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "sender_identities",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.sender_identity`",
								},
								"parts": []any{
									"v1",
									"sender_identities",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"sms": map[string]any{
				"fields": []any{},
				"name": "sms",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"snippet": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the snippet, must be unique.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The last date-time the snippet was updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "value",
						"req": true,
						"short": "The contents of the snippet.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "snippet",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/v1/snippets",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "snippets",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.snippet`",
								},
								"parts": []any{
									"v1",
									"snippets",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/snippets",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "snippets",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.snippets`",
								},
								"parts": []any{
									"v1",
									"snippets",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "snippet_name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/v1/snippets/{snippet_name}",
								"rename": map[string]any{
									"param": map[string]any{
										"snippet_name": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "snippets",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"snippets",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/snippets",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "snippets",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.snippet`",
								},
								"parts": []any{
									"v1",
									"snippets",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"start": map[string]any{
				"fields": []any{},
				"name": "start",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_center": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "A description of the channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "The system-generated ID for the subscription channel.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "identifier",
						"short": "The key associated with the subscription topic.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The display name of the subscription channel.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed_by_default",
						"short": "If false, a person is opted-out by default.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "type",
						"short": "The type of delivery channel.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "subscription_center",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/subscription_channels",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscription_channels",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.channels`",
								},
								"parts": []any{
									"v1",
									"subscription_channels",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/subscription_topics",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscription_topics",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.topics`",
								},
								"parts": []any{
									"v1",
									"subscription_topics",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "person@example.com",
											"kind": "param",
											"name": "id",
											"orig": "customer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/subscription_center/{customer_id}/token",
								"rename": map[string]any{
									"param": map[string]any{
										"customer_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "subscription_center",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "token",
									},
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"subscription_center",
									"{id}",
									"token",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_channel": map[string]any{
				"fields": []any{},
				"name": "subscription_channel",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"subscription_topic": map[string]any{
				"fields": []any{},
				"name": "subscription_topic",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"suppression": map[string]any{
				"fields": []any{},
				"name": "suppression",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"domain",
						},
						[]any{
							"suppression",
						},
					},
				},
			},
			"test_group": map[string]any{
				"fields": []any{},
				"name": "test_group",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"newsletter",
						},
					},
				},
			},
			"transactional": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bcc",
						"readOnly": true,
						"short": "The blind-copy address(es) for this action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body",
						"short": "The body of the transactional message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "body_amp",
						"short": "AMP-enabled content for your email.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cc",
						"readOnly": true,
						"short": "The carbon-copy address(es) for this action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"short": "The object represents a variant.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "created_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was created.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "description",
						"short": "A description of the transactional message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fake_bcc",
						"readOnly": true,
						"short": "If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es).",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "from",
						"readOnly": true,
						"short": "The address that the message is from, relevant if the action `type` is `email`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "from_id",
						"short": "The identifier of the `from` address, commonly known as the \"sender\".",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "json",
						"name": "headers",
						"short": "A JSON string containing header objects with `name` and `value`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "hide_message_body",
						"short": "If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"readOnly": true,
						"short": "The identifier for an action.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "language",
						"readOnly": true,
						"short": "The language variant for your message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link_tracking",
						"short": "If true, link tracking is enabled for this message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "name",
						"readOnly": true,
						"short": "The name of the transactional message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "open_tracking",
						"short": "If true, open-tracking is enabled for this message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "preheader_text",
						"short": "[Also known as \"preview text\"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "preprocessor",
						"readOnly": true,
						"short": "If CSS pre-processing is enabled, this key is populated with `premailer`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "queue_drafts",
						"short": "If true, messages do not send automatically, and queue as drafts instead.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "recipient",
						"short": "The recipient address for an action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reply_to",
						"readOnly": true,
						"short": "The address that receives replies for the message, if applicable.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reply_to_id",
						"short": "The identifier for the `reply_to` address, if applicable.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$INTEGER`",
								"`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "send_to_unsubscribed",
						"short": "If true, people with an `unsubscribed` attribute set to `true` can trigger the message.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subject",
						"short": "The subject line for an `email` action.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"readOnly": true,
						"short": "The type of message.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "unix timestamp",
						"name": "updated_at",
						"readOnly": true,
						"short": "The date time when the referenced ID was last updated.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "transactional",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "end_t",
											"orig": "end_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "get_tracked_response",
											"orig": "get_tracked_response",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "metric",
											"orig": "metric",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_t",
											"orig": "start_t",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/messages",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{
									"$action": "message",
									"exist": []any{
										"end_t",
										"get_tracked_response",
										"id",
										"limit",
										"metric",
										"start",
										"start_t",
										"state",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"messages",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "unique",
											"orig": "unique",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/metrics/links",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
									map[string]any{
										"lit": "links",
									},
								},
								"select": map[string]any{
									"$action": "metric_link",
									"exist": []any{
										"id",
										"period",
										"step",
										"unique",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.links`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"metrics",
									"links",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/contents",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "contents",
									},
								},
								"select": map[string]any{
									"$action": "content",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.contents`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"contents",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.messages`",
								},
								"parts": []any{
									"v1",
									"transactional",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "days",
											"kind": "query",
											"name": "period",
											"orig": "period",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "step",
											"orig": "step",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/metrics",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metrics",
									},
								},
								"select": map[string]any{
									"$action": "metric",
									"exist": []any{
										"id",
										"period",
										"step",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.metric`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"metrics",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/contents/{content_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "contents",
									},
									map[string]any{
										"var": "content_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.content`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"contents",
									"{content_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}/language/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"language",
									"{language}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/transactional/{transactional_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.message`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "content_id",
											"orig": "content_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/transactional/{transactional_id}/content/{content_id}",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "content",
									},
									map[string]any{
										"var": "content_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"content_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"content",
									"{content_id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "transactional_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "param",
											"name": "language",
											"orig": "language",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/v1/transactional/{transactional_id}/language/{language}",
								"rename": map[string]any{
									"param": map[string]any{
										"transactional_id": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "transactional",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "language",
									},
									map[string]any{
										"var": "language",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"language",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"transactional",
									"{id}",
									"language",
									"{language}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"content",
						},
						[]any{
							"language",
						},
					},
				},
			},
			"trigger": map[string]any{
				"fields": []any{},
				"name": "trigger",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"campaign",
						},
					},
				},
			},
			"update": map[string]any{
				"fields": []any{},
				"name": "update",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"whatsapp": map[string]any{
				"fields": []any{},
				"name": "whatsapp",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"workspace": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "billable_messages_sent",
						"short": "The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "The id of the workspace.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "messages_sent",
						"short": "The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the workspace.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_types",
						"short": "The current count of object types in the workspace.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "objects",
						"short": "The current count of object profiles in the workspace.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "people",
						"short": "The current count of people profiles in the workspace.",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "workspace",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/v1/workspaces",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "workspaces",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.workspaces`",
								},
								"parts": []any{
									"v1",
									"workspaces",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
