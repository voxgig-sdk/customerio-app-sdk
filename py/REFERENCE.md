# CustomerioApp Python SDK Reference

Complete API reference for the CustomerioApp Python SDK.


## CustomerioAppSDK

### Constructor

```python
from customerioapp_sdk import CustomerioAppSDK

client = CustomerioAppSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CustomerioAppSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CustomerioAppSDK.test()
```


### Instance Methods

#### `Action(data=None)`

Create a new `ActionEntity` instance. Pass `None` for no initial data.

#### `Activity(data=None)`

Create a new `ActivityEntity` instance. Pass `None` for no initial data.

#### `Asset(data=None)`

Create a new `AssetEntity` instance. Pass `None` for no initial data.

#### `Attribute(data=None)`

Create a new `AttributeEntity` instance. Pass `None` for no initial data.

#### `Automation(data=None)`

Create a new `AutomationEntity` instance. Pass `None` for no initial data.

#### `Broadcast(data=None)`

Create a new `BroadcastEntity` instance. Pass `None` for no initial data.

#### `Campaign(data=None)`

Create a new `CampaignEntity` instance. Pass `None` for no initial data.

#### `Collection(data=None)`

Create a new `CollectionEntity` instance. Pass `None` for no initial data.

#### `Content(data=None)`

Create a new `ContentEntity` instance. Pass `None` for no initial data.

#### `Customer(data=None)`

Create a new `CustomerEntity` instance. Pass `None` for no initial data.

#### `DataIndex(data=None)`

Create a new `DataIndexEntity` instance. Pass `None` for no initial data.

#### `Delivery(data=None)`

Create a new `DeliveryEntity` instance. Pass `None` for no initial data.

#### `DesignStudio(data=None)`

Create a new `DesignStudioEntity` instance. Pass `None` for no initial data.

#### `DesignStudioEmail(data=None)`

Create a new `DesignStudioEmailEntity` instance. Pass `None` for no initial data.

#### `Email(data=None)`

Create a new `EmailEntity` instance. Pass `None` for no initial data.

#### `End(data=None)`

Create a new `EndEntity` instance. Pass `None` for no initial data.

#### `EspSuppression(data=None)`

Create a new `EspSuppressionEntity` instance. Pass `None` for no initial data.

#### `Export(data=None)`

Create a new `ExportEntity` instance. Pass `None` for no initial data.

#### `Import(data=None)`

Create a new `ImportEntity` instance. Pass `None` for no initial data.

#### `InApp(data=None)`

Create a new `InAppEntity` instance. Pass `None` for no initial data.

#### `InboxMessage(data=None)`

Create a new `InboxMessageEntity` instance. Pass `None` for no initial data.

#### `Info(data=None)`

Create a new `InfoEntity` instance. Pass `None` for no initial data.

#### `IpAddress(data=None)`

Create a new `IpAddressEntity` instance. Pass `None` for no initial data.

#### `Language(data=None)`

Create a new `LanguageEntity` instance. Pass `None` for no initial data.

#### `Link(data=None)`

Create a new `LinkEntity` instance. Pass `None` for no initial data.

#### `LiveNotification(data=None)`

Create a new `LiveNotificationEntity` instance. Pass `None` for no initial data.

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `Newsletter(data=None)`

Create a new `NewsletterEntity` instance. Pass `None` for no initial data.

#### `NewsletterMetric(data=None)`

Create a new `NewsletterMetricEntity` instance. Pass `None` for no initial data.

#### `NewsletterVariant(data=None)`

Create a new `NewsletterVariantEntity` instance. Pass `None` for no initial data.

#### `Object(data=None)`

Create a new `ObjectEntity` instance. Pass `None` for no initial data.

#### `ObjectType(data=None)`

Create a new `ObjectTypeEntity` instance. Pass `None` for no initial data.

#### `OptOut(data=None)`

Create a new `OptOutEntity` instance. Pass `None` for no initial data.

#### `Push(data=None)`

Create a new `PushEntity` instance. Pass `None` for no initial data.

#### `Relationship(data=None)`

Create a new `RelationshipEntity` instance. Pass `None` for no initial data.

#### `ReportingWebhook(data=None)`

Create a new `ReportingWebhookEntity` instance. Pass `None` for no initial data.

#### `SearchSuppression(data=None)`

Create a new `SearchSuppressionEntity` instance. Pass `None` for no initial data.

#### `Segment(data=None)`

Create a new `SegmentEntity` instance. Pass `None` for no initial data.

#### `SendMessage(data=None)`

Create a new `SendMessageEntity` instance. Pass `None` for no initial data.

#### `SenderIdentity(data=None)`

Create a new `SenderIdentityEntity` instance. Pass `None` for no initial data.

#### `Sms(data=None)`

Create a new `SmsEntity` instance. Pass `None` for no initial data.

#### `Snippet(data=None)`

Create a new `SnippetEntity` instance. Pass `None` for no initial data.

#### `Start(data=None)`

Create a new `StartEntity` instance. Pass `None` for no initial data.

#### `SubscriptionCenter(data=None)`

Create a new `SubscriptionCenterEntity` instance. Pass `None` for no initial data.

#### `SubscriptionChannel(data=None)`

Create a new `SubscriptionChannelEntity` instance. Pass `None` for no initial data.

#### `SubscriptionTopic(data=None)`

Create a new `SubscriptionTopicEntity` instance. Pass `None` for no initial data.

#### `Suppression(data=None)`

Create a new `SuppressionEntity` instance. Pass `None` for no initial data.

#### `TestGroup(data=None)`

Create a new `TestGroupEntity` instance. Pass `None` for no initial data.

#### `Transactional(data=None)`

Create a new `TransactionalEntity` instance. Pass `None` for no initial data.

#### `Trigger(data=None)`

Create a new `TriggerEntity` instance. Pass `None` for no initial data.

#### `Update(data=None)`

Create a new `UpdateEntity` instance. Pass `None` for no initial data.

#### `Whatsapp(data=None)`

Create a new `WhatsappEntity` instance. Pass `None` for no initial data.

#### `Workspace(data=None)`

Create a new `WorkspaceEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActionEntity

```python
action = client.Action()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActivityEntity

```python
activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `str | None` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `dict` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `Any` | No |  |
| `delivery_id` | `str` | No | The message ID. |
| `delivery_type` | `str` | No | The recipient device, if applicable. |
| `id` | `str` | No | The identifier for the action. |
| `name` | `str` | No | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `int` | No | The date and time when the action occurred. |
| `type` | `str` | No | The type of activity. |
| `url` | `str` | No | The page URL, for `page` activities. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Activity().list()
for activity in results:
    print(activity)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssetEntity

```python
asset = client.Asset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | No | Unix timestamp when the asset was created. |
| `id` | `int` | No | The unique identifier of the file asset. |
| `name` | `str` | No | The display name of the file asset. |
| `parent_folder_id` | `int | None` | No | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `str` | No | The storage URL or path where the file is hosted. |
| `size` | `int` | No | The file size in bytes. |
| `updated` | `int` | No | Unix timestamp when the asset was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Asset().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Asset().list()
for asset in results:
    print(asset)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Asset().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Asset().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Asset().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AttributeEntity

```python
attribute = client.Attribute()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationEntity

```python
automation = client.Automation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `int` | No | The identifier for an action. |
| `actions` | `list` | No | Each object in the array represents an action in your automation. |
| `activated` | `list` | No | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `str` | No |  |
| `campaign_id` | `str` | No |  |
| `campaigns` | `list` | No | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `int` | No | The identifier for a message in a one-time send. |
| `converted` | `list` | No | People who matched the conversion criteria for the automation. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `customer_id` | `str | None` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `dict` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `str` | No | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `list` | No | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `str | None` | No | Explains why a message failed, if applicable. |
| `finished` | `list` | No | People who finished the journey. |
| `forgotten` | `bool` | No | If true message contents are not retained by Customer.io. |
| `id` | `str` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `dict` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `dict` | No |  |
| `message_template_id` | `int` | No | The identifier of the message template used to create a message. |
| `messaged` | `list` | No | People who experienced at least one non-delay action in the journey. |
| `metric` | `dict` | No | Contains metrics for the link. |
| `metrics` | `dict` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `list` | No | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `str` | No |  |
| `next` | `str` | No | Indicates the next page of results. |
| `parent_action_id` | `int` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `str` | No | The recipient address for an action. |
| `res` | `str` | No | The resolution we reported at. |
| `series` | `dict` | No | Metrics grouped by the requested resolution. |
| `start` | `str` | No | The start of the window we reported on, in ISO 8601 format. |
| `started` | `list` | No | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `str` | No | The subject line for an `email` action. |
| `tracked_responses` | `dict` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `str` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `str` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Automation().list()
for automation in results:
    print(automation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Automation().load({"campaign_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Automation().update({
    "action_id": 1,
    "campaign_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BroadcastEntity

```python
broadcast = client.Broadcast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | No | A list of actions used by the broadcast. |
| `active` | `bool` | No | If true, the broadcast is active. |
| `broadcast_id` | `int` | No | The identifier for a broadcast. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `list` | No | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `int` | No | The date and time when you activated the broadcast. |
| `id` | `int` | No | The identifier for a broadcast trigger. |
| `language_variants` | `dict` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `dict` | No |  |
| `metric` | `dict` | No | Contains metrics for the link. |
| `msg_template_ids` | `list` | No | Indicates the message template(s) used in this broadcast. |
| `name` | `str` | No | The name of the broadcast. |
| `next` | `int` | No | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `int` | No | The date-time when Customer.io processed the trigger. |
| `state` | `str` | No | The state of the broadcast. |
| `tags` | `list` | No | An array of tags you set on this broadcast. |
| `type` | `str` | No | The type of broadcast. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Broadcast().list()
for broadcast in results:
    print(broadcast)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Broadcast().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Broadcast().update({
    "id": 1,
    "action_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BroadcastEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CampaignEntity

```python
campaign = client.Campaign()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CollectionEntity

```python
collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `int` | No | The size of the collection in bytes. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `id` | `int` | No | The identifier for the collection. |
| `name` | `str` | No | The name of the collection. |
| `rows` | `int` | No | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `list` | No | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Collection().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Collection().list()
for collection in results:
    print(collection)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Collection().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Collection().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Collection().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContentEntity

```python
content = client.Content()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomerEntity

```python
customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cio_id` | `str` | Yes | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `str | None` | Yes | A person's email address, if set. |
| `filter` | `Any` | Yes | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `str | None` | Yes | A person's unique ID, if set. |
| `identifiers` | `list` | No | An array of objects, where each object represents a customer. |
| `ids` | `list` | No | In general, you should use the `identifiers` array. |
| `next` | `str` | No | The `start` value for the next page of results. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Customer().create({
    "cio_id": "example_cio_id",  # str
    "email": "example_email",  # str | None
    "filter": "example_filter",  # Any
    "id": "example_id",  # str | None
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Customer().list({"email": "example"})
for customer in results:
    print(customer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Customer().load({"id": "customer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DataIndexEntity

```python
data_index = client.DataIndex()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DataIndex().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataIndexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DeliveryEntity

```python
delivery = client.Delivery()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeliveryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DesignStudioEntity

```python
design_studio = client.DesignStudio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | No | HTML content |
| `created` | `int` | No | Unix timestamp of when the component was created. |
| `id` | `str` | No | ID of the component |
| `name` | `str` | No | Display name of the component. |
| `parent_folder_id` | `str | None` | No | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `str` | No | The component tag name, used to reference your component in an email. |
| `updated` | `int` | No | Unix timestamp of the last update to the component. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DesignStudio().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DesignStudio().list()
for design_studio in results:
    print(design_studio)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DesignStudio().load({"id": "design_studio_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DesignStudio().remove({"id": "design_studio_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DesignStudio().update({
    "id": "design_studio_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DesignStudioEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DesignStudioEmailEntity

```python
design_studio_email = client.DesignStudioEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amp` | `str` | No | AMP HTML variant. |
| `available_languages` | `list` | No | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `str` | No | Browser used to render the client. |
| `category` | `str` | No | Where the client renders. |
| `check` | `str` | No | Which check produced this finding. |
| `client` | `str` | No | Name of the email client and device. |
| `client_ids` | `list` | No | The device identifiers requested for this job. |
| `content` | `dict` | No | The content of your email. |
| `created` | `int` | No | Unix timestamp of when the translation was created. |
| `created_at` | `int` | No | When you submitted the preview job. |
| `created_on_publish` | `bool` | No | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `int` | No | Credits originally granted for a tier. |
| `credits_remaining` | `int` | No | Credits left to spend from this tier. |
| `dependencies` | `list` | No |  |
| `description` | `str` | No | Explanatory text you provided when creating a version. |
| `details` | `str` | No | Explanation and suggested fix. |
| `emails` | `list` | No |  |
| `envelope` | `dict` | No | The envelope of your email, like from and to addresses. |
| `expires_at` | `int | None` | No | When this pool's credits expire, if ever. |
| `feedback` | `bool` | No | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `list` | No |  |
| `has_unpublished_changes` | `bool` | No | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `str` | No | Full HTML with liquid tags left intact. |
| `id` | `str` | No | Unique identifier for the email. |
| `is_linked` | `bool` | No | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `bool` | No | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `bool` | No | Whether the translation is a template |
| `language` | `str` | No | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `str` | No | ID of the parent email that groups all translations. |
| `lax_mode` | `bool` | No | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `dict` | No |  |
| `name` | `str` | No | The batch label provided when you sent an email for previews. |
| `node` | `dict` | No | The content and settings stored in the version. |
| `node_count` | `int` | No | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `str` | No | The UUID of the rendered email node. |
| `node_type` | `str` | No | Always `"EMAIL"`. |
| `os` | `str` | No | Operating system the client runs on. |
| `parent_folder_id` | `str | None` | No | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `list` | No | One object per requested preview. |
| `replayed` | `bool` | No | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `int` | No | ID of the preview job. |
| `sample_data` | `dict` | No | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `severity` | `str` | No | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `state` | `str` | No | Whether this finding represents an issue. |
| `summary` | `str` | No | Location context, for example "In the email body". |
| `template_id` | `int` | No | The ID of the workflow template that received the content. |
| `text` | `str` | No | Plain text version of the email. |
| `tier` | `str` | No | The credit tier this pool belongs to. |
| `title` | `str` | No | Short human-readable title. |
| `total_previews_bounced` | `int` | No | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `total_previews_cached` | `int` | No | Previews served from an earlier run's screenshot. |
| `total_previews_ready` | `int` | No | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `total_previews_requested` | `int` | No | Previews requested in the job, for the email in the path. |
| `total_previews_succeeded` | `int` | No | Previews this run generated itself, excluding cached ones. |
| `transformers` | `dict` | No | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `int` | No | Unix timestamp of the last update to the translation. |
| `updated_at` | `int` | No | When the job's status was last updated. |
| `version` | `dict` | No |  |
| `version_id` | `str` | No | The identifier of the template version created by the publish. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `amp` | - | - | - | - | - |
| `available_languages` | - | - | - | - | - |
| `browser` | - | - | - | - | - |
| `category` | - | - | - | - | - |
| `check` | - | - | - | - | - |
| `client` | - | - | - | - | - |
| `client_ids` | - | - | Yes | - | - |
| `content` | - | - | - | - | - |
| `created` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `created_on_publish` | - | - | - | - | - |
| `credits_original` | - | - | - | - | - |
| `credits_remaining` | - | - | - | - | - |
| `dependencies` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `details` | - | - | - | - | - |
| `emails` | - | - | - | - | - |
| `envelope` | - | - | - | - | - |
| `expires_at` | - | - | - | - | - |
| `feedback` | - | - | - | - | - |
| `folders` | - | - | - | - | - |
| `has_unpublished_changes` | - | - | - | - | - |
| `html` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `is_linked` | - | - | - | - | - |
| `is_processed` | - | - | - | - | - |
| `is_template` | - | - | - | - | - |
| `language` | - | - | Yes | - | - |
| `language_group_id` | - | - | - | - | - |
| `lax_mode` | - | - | - | - | - |
| `meta` | - | - | - | - | - |
| `name` | - | - | Yes | - | - |
| `node` | - | - | - | - | - |
| `node_count` | - | - | - | - | - |
| `node_id` | - | - | - | - | - |
| `node_type` | - | - | - | - | - |
| `os` | - | - | - | - | - |
| `parent_folder_id` | - | - | - | - | - |
| `previews` | - | - | - | - | - |
| `replayed` | - | - | - | - | - |
| `run_id` | - | - | - | - | - |
| `sample_data` | - | - | - | - | - |
| `severity` | - | - | - | - | - |
| `state` | - | - | - | - | - |
| `summary` | - | - | - | - | - |
| `template_id` | - | - | - | - | - |
| `text` | - | - | - | - | - |
| `tier` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `total_previews_bounced` | - | - | - | - | - |
| `total_previews_cached` | - | - | - | - | - |
| `total_previews_ready` | - | - | - | - | - |
| `total_previews_requested` | - | - | - | - | - |
| `total_previews_succeeded` | - | - | - | - | - |
| `transformers` | - | - | - | - | - |
| `updated` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `version_id` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DesignStudioEmail().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.DesignStudioEmail().list()
for design_studio_email in results:
    print(design_studio_email)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DesignStudioEmail().load({"id": "design_studio_email_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.DesignStudioEmail().remove({"id": "design_studio_email_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.DesignStudioEmail().update({
    "id": "design_studio_email_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DesignStudioEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailEntity

```python
email = client.Email()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EndEntity

```python
end = client.End()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EspSuppressionEntity

```python
esp_suppression = client.EspSuppression()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No | The reason the addresses are suppressed. |
| `id` | `str` | No |  |
| `next` | `str` | No | The `start` value for the next page of results. |
| `suppressions` | `list` | No | The addresses suppressed in this category. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EspSuppression().create({
    "email_address": "example_email_address",  # str
    "suppression_type": "example_suppression_type",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EspSuppression().load({"id": "esp_suppression_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.EspSuppression().remove({"email_address": "email_address", "suppression_type": "suppression_type"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EspSuppressionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExportEntity

```python
export = client.Export()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `str` | No | A description of the export. |
| `downloads` | `int` | No | Counts the total number of times the export has been downloaded. |
| `failed` | `bool` | No | If true, the export was unsuccessful. |
| `id` | `int` | No | The identifier for the export. |
| `status` | `str` | No | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `total` | `int` | No | The number of entries in the export. |
| `type` | `str` | No | The type of information contained in the export. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |
| `user_email` | `str` | No | The email of the user who created the export. |
| `user_id` | `int` | No | The user who created the export. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Export().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Export().list()
for export in results:
    print(export)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Export().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ImportEntity

```python
import_ = client.Import()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `data_to_process` | `str` | No | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | `str` | No | A helpful description that can help you find and recognize your import operation. |
| `error` | `str` | No | If your import fails, this helps you understand why. |
| `id` | `int` | No | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | `str` | No | The type of identifier you used to identify people in your CSV. |
| `import` | `Any` | Yes |  |
| `name` | `str` | No | A friendly name for your import. |
| `object_type_id` | `str` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `str` | No | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `int` | No | The number of rows we imported from the CSV. |
| `rows_to_import` | `int` | No | The total number of importable rows we found in the CSV. |
| `state` | `str` | No | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `str` | No | The type of import. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Import().create({
    "import": "example_import",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Import().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InAppEntity

```python
in_app = client.InApp()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InAppEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InboxMessageEntity

```python
inbox_message = client.InboxMessage()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboxMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## InfoEntity

```python
info = client.Info()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Info().list()
for info in results:
    print(info)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpAddressEntity

```python
ip_address = client.IpAddress()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAddressEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LanguageEntity

```python
language = client.Language()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LinkEntity

```python
link = client.Link()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LiveNotificationEntity

```python
live_notification = client.LiveNotification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | When the delivery was created (unix timestamp). |
| `id` | `str` | No | The delivery ID. |
| `operation` | `str` | No | The lifecycle operation the delivery carried. |
| `source` | `str` | No | Where the operation originated—the API or the device. |
| `status` | `str` | No | The delivery's status. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.LiveNotification().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.LiveNotification().load({"id": "live_notification_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveNotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MessageEntity

```python
message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `int` | No | The identifier for an action. |
| `broadcast_id` | `str` | No |  |
| `campaign_id` | `str` | No |  |
| `content_id` | `int` | No | The identifier for a message in a one-time send. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `customer_id` | `str | None` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `dict` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `str | None` | No | Explains why a message failed, if applicable. |
| `forgotten` | `bool` | No | If true message contents are not retained by Customer.io. |
| `id` | `str` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `int` | No | The identifier of the message template used to create a message. |
| `metrics` | `dict` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `str` | No |  |
| `parent_action_id` | `int` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `str` | No | The recipient address for an action. |
| `subject` | `str` | No | The subject line for an `email` action. |
| `tracked_responses` | `dict` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `str` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `str` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Message().list()
for message in results:
    print(message)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Message().load({"id": "message_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewsletterEntity

```python
newsletter = client.Newsletter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_ids` | `list` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `int` | No | The identifier for a one-time send. |
| `name` | `str` | No | The name of the one-time send. |
| `recipient_segment_ids` | `list` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `int` | No | The last time the one-time send was sent. |
| `subscription_topic_id` | `int` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `list` | No | An array of tags associated with the one-time send. |
| `type` | `str` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Newsletter().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Newsletter().list()
for newsletter in results:
    print(newsletter)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Newsletter().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Newsletter().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewsletterMetricEntity

```python
newsletter_metric = client.NewsletterMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `link` | `dict` | No |  |
| `metric` | `dict` | No | Contains metrics for the link. |
| `series` | `dict` | No | Metrics grouped by the requested resolution. |
| `type` | `str` | No | Channel type for a one-time send or one-time send content variant. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NewsletterMetric().list({"newsletter_id": 1})
for newsletter_metric in results:
    print(newsletter_metric)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NewsletterMetric().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterMetricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewsletterVariantEntity

```python
newsletter_variant = client.NewsletterVariant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `str` | No | The blind-copy address(es) for this action. |
| `body` | `str` | No | The body of the variant. |
| `body_amp` | `str` | No | AMP-enabled content for your email. |
| `cc` | `str` | No | The carbon-copy address(es) for this action. |
| `content_ids` | `list` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `str` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `str` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | No | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `language` | `str` | No | The language variant for your message. |
| `layout` | `str` | No | The layout used for the variant, if it exists. |
| `name` | `str` | No | The name of the variant, if it exists. |
| `newsletter_id` | `int` | No | The identifier for a one-time send. |
| `preheader_text` | `str` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `str` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `recipient` | `str` | No | The recipient address for an action. |
| `recipient_segment_ids` | `list` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `str` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `int | None` | No | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `int` | No | The last time the one-time send was sent. |
| `subject` | `str` | No | The subject line for an `email` action. |
| `subscription_topic_id` | `int` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `list` | No | An array of tags associated with the one-time send. |
| `type` | `str` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.NewsletterVariant().create({
    "newsletter_id": 1,  # int
    "test_group_id": "example_test_group_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NewsletterVariant().list({"id": 1})
for newsletter_variant in results:
    print(newsletter_variant)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NewsletterVariant().load({"newsletter_id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.NewsletterVariant().remove({"language": "language", "newsletter_id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NewsletterVariant().update({
    "newsletter_id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterVariantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObjectEntity

```python
object = client.Object()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `dict` | No | Attributes assigned to this object. |
| `enabled` | `bool` | No | If true, the object type is enabled. |
| `filter` | `Any` | Yes | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `str` | No | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `str` | No | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `dict` | No | Identifies an object. |
| `ids` | `list` | No | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `str` | No | The name of the object type. |
| `next` | `str` | No | Indicates the next page of results. |
| `object_type_disabled` | `bool` | No | If true, the object is disabled. |
| `object_type_id` | `str` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `str` | No | The singular name of the object type. |
| `singular_slug` | `str` | No | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `str` | No | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `dict` | No | The epoch timestamps when corresponding attributes were set on the object. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `attributes` | - | - | - |
| `enabled` | - | - | - |
| `filter` | - | - | - |
| `icon` | - | - | - |
| `id` | - | - | - |
| `identifiers` | - | - | - |
| `ids` | - | - | - |
| `name` | - | - | - |
| `next` | - | - | - |
| `object_type_disabled` | - | - | - |
| `object_type_id` | - | - | Yes |
| `singular_name` | - | - | - |
| `singular_slug` | - | - | - |
| `slug` | - | - | - |
| `timestamps` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Object().create({
    "filter": "example_filter",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Object().list()
for object in results:
    print(object)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Object().load({"id": 1, "object_id": "object_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ObjectTypeEntity

```python
object_type = client.ObjectType()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OptOutEntity

```python
opt_out = client.OptOut()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `str` | No | The channel that the person is opted out of. |
| `cio_id` | `str` | No | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `str` | No | The person's ID. |
| `from` | `str` | No | The sender that the person is opted out of. |
| `optouts` | `list` | Yes | The senders and channels you want to opt the person out of, or back in to. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `channel` | - | - |
| `cio_id` | - | - |
| `customer_id` | - | - |
| `from` | - | - |
| `optouts` | Yes | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OptOut().list()
for opt_out in results:
    print(opt_out)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.OptOut().update({
    "customer_id": "customer_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptOutEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PushEntity

```python
push = client.Push()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RelationshipEntity

```python
relationship = client.Relationship()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RelationshipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReportingWebhookEntity

```python
reporting_webhook = client.ReportingWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `bool` | No | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `str` | Yes | The webhook URL. |
| `events` | `list` | Yes | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `bool` | No | Set to `false` to send unique open and click events to the webhook. |
| `id` | `int` | No | The identifier for the webhook. |
| `name` | `str` | Yes | The name of your webhook. |
| `type` | `str` | No | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `bool` | No | Set to `true` to include the message `body` in `_sent` events. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ReportingWebhook().create({
    "endpoint": "example_endpoint",  # str
    "events": [],  # list
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ReportingWebhook().list()
for reporting_webhook in results:
    print(reporting_webhook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReportingWebhook().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ReportingWebhook().remove({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ReportingWebhook().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingWebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchSuppressionEntity

```python
search_suppression = client.SearchSuppression()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchSuppressionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SegmentEntity

```python
segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `str` | No | A description for the segment. |
| `id` | `int` | No | The identifier for a segment; used to target a segment in requests. |
| `name` | `str` | No | The name of the segment. |
| `progress` | `int | None` | No | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `dict` | Yes |  |
| `state` | `str` | No | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `list | None` | No | The tags assigned to the segment, if any. |
| `type` | `str` | No | The type of segment. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Segment().create({
    "segment": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Segment().list()
for segment in results:
    print(segment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Segment().load({"id": 1})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Segment().remove({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SendMessageEntity

```python
send_message = client.SendMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `dict` | No | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `bool` | No | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `str` | No | Blind copy message recipients. |
| `body` | `str` | No | The HTML body of your message. |
| `body_amp` | `str` | No | AMP-enabled content for your email. |
| `body_plain` | `str` | No | The plaintext body of your message. |
| `cc` | `str` | No | Carbon copy message recipients, separated by commas. |
| `custom_data` | `dict` | No | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `Any` | Yes | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `dict` | No | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `str` | No | A unique identifier for the message. |
| `disable_css_preprocessing` | `bool` | No | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `bool` | No | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `str` | No | The address your email is from. |
| `headers` | `str` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | No | The `trigger_id` for this operation. |
| `identifiers` | `Any` | No | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `str` | No | An image URL to show in the push. |
| `language` | `str` | No | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `str` | No | A deep link to open when the push is tapped. |
| `message` | `str` | No | The message body for your notification. |
| `message_data` | `dict` | No | An object containing the key-value pairs referenced using liquid in your message. |
| `preheader` | `str` | No | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `queue_draft` | `bool` | No | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `queued_at` | `int` | No | A Unix timestamp for when Customer.io accepted and queued your request. |
| `reply_to` | `str` | No | The address that recipients can reply to, if different from the `from` address. |
| `send_at` | `int` | No | For a scheduled message, the Unix timestamp when the message is set to send. |
| `send_to_unsubscribed` | `bool` | No | If false, your message is not sent to unsubscribed recipients. |
| `sound` | `str` | No | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `subject` | `str` | No | The subject line for your message. |
| `title` | `str` | No | The title for your notification. |
| `to` | `str` | Yes | The recipients you want to send to, separated by commas. |
| `tracked` | `bool` | No | If true, Customer.io tracks opens and link clicks in your message. |
| `transactional_message_id` | `str` | No | The transactional message template you want to use. |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `attachments` | - |
| `auto_create` | - |
| `bcc` | - |
| `body` | - |
| `body_amp` | - |
| `body_plain` | - |
| `cc` | - |
| `custom_data` | - |
| `custom_device` | - |
| `custom_payload` | - |
| `delivery_id` | - |
| `disable_css_preprocessing` | - |
| `disable_message_retention` | - |
| `fake_bcc` | - |
| `from` | - |
| `headers` | - |
| `id` | - |
| `identifiers` | Yes |
| `image_url` | - |
| `language` | - |
| `link` | - |
| `message` | - |
| `message_data` | - |
| `preheader` | - |
| `queue_draft` | - |
| `queued_at` | - |
| `reply_to` | - |
| `send_at` | - |
| `send_to_unsubscribed` | - |
| `sound` | - |
| `subject` | - |
| `title` | - |
| `to` | Yes |
| `tracked` | - |
| `transactional_message_id` | Yes |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SendMessage().create({
    "custom_device": "example_custom_device",  # Any
    "to": "example_to",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendMessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SenderIdentityEntity

```python
sender_identity = client.SenderIdentity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No | The sender name and email address in the format `name <name@example.com>`. |
| `auto_generated` | `bool` | No | If true, the sender is automatically generated by Customer.io. |
| `deduplicate_id` | `str` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `email` | `str` | No | The email address of the sender. |
| `hidden` | `bool` | No | If true, the sender is hidden in the Customer.io UI. |
| `id` | `int` | No | The identifier of a sender. |
| `name` | `str` | No | The name of the sender. |
| `phone` | `str` | No | The phone number of the sender, used for SMS senders. |
| `template_type` | `str` | No | The type of sender. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SenderIdentity().list()
for sender_identity in results:
    print(sender_identity)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SenderIdentity().load({"id": 1})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SenderIdentityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SmsEntity

```python
sms = client.Sms()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmsEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SnippetEntity

```python
snippet = client.Snippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | Yes | The name of the snippet, must be unique. |
| `updated_at` | `int` | No | The last date-time the snippet was updated. |
| `value` | `str` | Yes | The contents of the snippet. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Snippet().create({
    "name": "example_name",  # str
    "value": "example_value",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Snippet().list()
for snippet in results:
    print(snippet)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Snippet().remove({"id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Snippet().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnippetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StartEntity

```python
start = client.Start()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StartEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionCenterEntity

```python
subscription_center = client.SubscriptionCenter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | A description of the channel. |
| `id` | `int` | No | The system-generated ID for the subscription channel. |
| `identifier` | `str` | No | The key associated with the subscription topic. |
| `name` | `str` | No | The display name of the subscription channel. |
| `subscribed_by_default` | `bool` | No | If false, a person is opted-out by default. |
| `type` | `str` | No | The type of delivery channel. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SubscriptionCenter().list()
for subscription_center in results:
    print(subscription_center)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SubscriptionCenter().load({"id": "subscription_center_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionCenterEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionChannelEntity

```python
subscription_channel = client.SubscriptionChannel()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionChannelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SubscriptionTopicEntity

```python
subscription_topic = client.SubscriptionTopic()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionTopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SuppressionEntity

```python
suppression = client.Suppression()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SuppressionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TestGroupEntity

```python
test_group = client.TestGroup()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestGroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransactionalEntity

```python
transactional = client.Transactional()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `str` | No | The blind-copy address(es) for this action. |
| `body` | `str` | No | The body of the transactional message. |
| `body_amp` | `str` | No | AMP-enabled content for your email. |
| `cc` | `str` | No | The carbon-copy address(es) for this action. |
| `content` | `list` | No | The object represents a variant. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `description` | `str` | No | A description of the transactional message. |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `str` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `str` | No | A JSON string containing header objects with `name` and `value`. |
| `hide_message_body` | `bool` | No | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `id` | `int` | No | The identifier for an action. |
| `language` | `str` | No | The language variant for your message. |
| `link_tracking` | `bool` | No | If true, link tracking is enabled for this message. |
| `name` | `str` | No | The name of the transactional message. |
| `open_tracking` | `bool` | No | If true, open-tracking is enabled for this message. |
| `preheader_text` | `str` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `str` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `queue_drafts` | `bool` | No | If true, messages do not send automatically, and queue as drafts instead. |
| `recipient` | `str` | No | The recipient address for an action. |
| `reply_to` | `str` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `int | None` | No | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `bool` | No | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `str` | No | The subject line for an `email` action. |
| `type` | `str` | No | The type of message. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Transactional().list()
for transactional in results:
    print(transactional)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Transactional().load({"id": 1})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Transactional().update({
    "id": 1,
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionalEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TriggerEntity

```python
trigger = client.Trigger()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateEntity

```python
update = client.Update()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WhatsappEntity

```python
whatsapp = client.Whatsapp()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkspaceEntity

```python
workspace = client.Workspace()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billable_messages_sent` | `int` | No | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `id` | `int` | No | The id of the workspace. |
| `messages_sent` | `int` | No | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `name` | `str` | No | The name of the workspace. |
| `object_types` | `int` | No | The current count of object types in the workspace. |
| `objects` | `int` | No | The current count of object profiles in the workspace. |
| `people` | `int` | No | The current count of people profiles in the workspace. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Workspace().list()
for workspace in results:
    print(workspace)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```python
client = CustomerioAppSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

