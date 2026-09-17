# CustomerioApp Lua SDK Reference

Complete API reference for the CustomerioApp Lua SDK.


## CustomerioAppSDK

### Constructor

```lua
local sdk = require("customerio-app_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Action(data)`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `Activity(data)`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Asset(data)`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `Attribute(data)`

Create a new `Attribute` entity instance. Pass `nil` for no initial data.

#### `Automation(data)`

Create a new `Automation` entity instance. Pass `nil` for no initial data.

#### `Broadcast(data)`

Create a new `Broadcast` entity instance. Pass `nil` for no initial data.

#### `Campaign(data)`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Collection(data)`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `Content(data)`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `Customer(data)`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `DataIndex(data)`

Create a new `DataIndex` entity instance. Pass `nil` for no initial data.

#### `Delivery(data)`

Create a new `Delivery` entity instance. Pass `nil` for no initial data.

#### `DesignStudio(data)`

Create a new `DesignStudio` entity instance. Pass `nil` for no initial data.

#### `DesignStudioEmail(data)`

Create a new `DesignStudioEmail` entity instance. Pass `nil` for no initial data.

#### `Email(data)`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `End(data)`

Create a new `End` entity instance. Pass `nil` for no initial data.

#### `EspSuppression(data)`

Create a new `EspSuppression` entity instance. Pass `nil` for no initial data.

#### `Export(data)`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `Import(data)`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `InApp(data)`

Create a new `InApp` entity instance. Pass `nil` for no initial data.

#### `InboxMessage(data)`

Create a new `InboxMessage` entity instance. Pass `nil` for no initial data.

#### `Info(data)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `IpAddress(data)`

Create a new `IpAddress` entity instance. Pass `nil` for no initial data.

#### `Language(data)`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `Link(data)`

Create a new `Link` entity instance. Pass `nil` for no initial data.

#### `LiveNotification(data)`

Create a new `LiveNotification` entity instance. Pass `nil` for no initial data.

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Newsletter(data)`

Create a new `Newsletter` entity instance. Pass `nil` for no initial data.

#### `NewsletterMetric(data)`

Create a new `NewsletterMetric` entity instance. Pass `nil` for no initial data.

#### `NewsletterVariant(data)`

Create a new `NewsletterVariant` entity instance. Pass `nil` for no initial data.

#### `Object(data)`

Create a new `Object` entity instance. Pass `nil` for no initial data.

#### `ObjectType(data)`

Create a new `ObjectType` entity instance. Pass `nil` for no initial data.

#### `OptOut(data)`

Create a new `OptOut` entity instance. Pass `nil` for no initial data.

#### `Push(data)`

Create a new `Push` entity instance. Pass `nil` for no initial data.

#### `Relationship(data)`

Create a new `Relationship` entity instance. Pass `nil` for no initial data.

#### `ReportingWebhook(data)`

Create a new `ReportingWebhook` entity instance. Pass `nil` for no initial data.

#### `SearchSuppression(data)`

Create a new `SearchSuppression` entity instance. Pass `nil` for no initial data.

#### `Segment(data)`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SendMessage(data)`

Create a new `SendMessage` entity instance. Pass `nil` for no initial data.

#### `SenderIdentity(data)`

Create a new `SenderIdentity` entity instance. Pass `nil` for no initial data.

#### `Sms(data)`

Create a new `Sms` entity instance. Pass `nil` for no initial data.

#### `Snippet(data)`

Create a new `Snippet` entity instance. Pass `nil` for no initial data.

#### `Start(data)`

Create a new `Start` entity instance. Pass `nil` for no initial data.

#### `SubscriptionCenter(data)`

Create a new `SubscriptionCenter` entity instance. Pass `nil` for no initial data.

#### `SubscriptionChannel(data)`

Create a new `SubscriptionChannel` entity instance. Pass `nil` for no initial data.

#### `SubscriptionTopic(data)`

Create a new `SubscriptionTopic` entity instance. Pass `nil` for no initial data.

#### `Suppression(data)`

Create a new `Suppression` entity instance. Pass `nil` for no initial data.

#### `TestGroup(data)`

Create a new `TestGroup` entity instance. Pass `nil` for no initial data.

#### `Transactional(data)`

Create a new `Transactional` entity instance. Pass `nil` for no initial data.

#### `Trigger(data)`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `Update(data)`

Create a new `Update` entity instance. Pass `nil` for no initial data.

#### `Whatsapp(data)`

Create a new `Whatsapp` entity instance. Pass `nil` for no initial data.

#### `Workspace(data)`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActionEntity

```lua
local action = client:Action(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActivityEntity

```lua
local activity = client:Activity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `string|nil` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `table` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `any` | No |  |
| `delivery_id` | `string` | No | The message ID. |
| `delivery_type` | `string` | No | The recipient device, if applicable. |
| `id` | `string` | No | The identifier for the action. |
| `name` | `string` | No | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `number` | No | The date and time when the action occurred. |
| `type` | `string` | No | The type of activity. |
| `url` | `string` | No | The page URL, for `page` activities. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Activity():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssetEntity

```lua
local asset = client:Asset(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | No | Unix timestamp when the asset was created. |
| `id` | `number` | No | The unique identifier of the file asset. |
| `name` | `string` | No | The display name of the file asset. |
| `parent_folder_id` | `number|nil` | No | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `string` | No | The storage URL or path where the file is hosted. |
| `size` | `number` | No | The file size in bytes. |
| `updated` | `number` | No | Unix timestamp when the asset was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Asset():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Asset():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Asset():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Asset():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Asset():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AttributeEntity

```lua
local attribute = client:Attribute(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AutomationEntity

```lua
local automation = client:Automation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `number` | No | The identifier for an action. |
| `actions` | `table` | No | Each object in the array represents an action in your automation. |
| `activated` | `table` | No | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `campaigns` | `table` | No | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `number` | No | The identifier for a message in a one-time send. |
| `converted` | `table` | No | People who matched the conversion criteria for the automation. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `customer_id` | `string|nil` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `table` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `string` | No | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `table` | No | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `string|nil` | No | Explains why a message failed, if applicable. |
| `finished` | `table` | No | People who finished the journey. |
| `forgotten` | `boolean` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `table` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `table` | No |  |
| `message_template_id` | `number` | No | The identifier of the message template used to create a message. |
| `messaged` | `table` | No | People who experienced at least one non-delay action in the journey. |
| `metric` | `table` | No | Contains metrics for the link. |
| `metrics` | `table` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `table` | No | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `string` | No |  |
| `next` | `string` | No | Indicates the next page of results. |
| `parent_action_id` | `number` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `res` | `string` | No | The resolution we reported at. |
| `series` | `table` | No | Metrics grouped by the requested resolution. |
| `start` | `string` | No | The start of the window we reported on, in ISO 8601 format. |
| `started` | `table` | No | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `table` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Automation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Automation():load({ campaign_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Automation():update({
  action_id = 1,
  campaign_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BroadcastEntity

```lua
local broadcast = client:Broadcast(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | No | A list of actions used by the broadcast. |
| `active` | `boolean` | No | If true, the broadcast is active. |
| `broadcast_id` | `number` | No | The identifier for a broadcast. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `table` | No | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `number` | No | The date and time when you activated the broadcast. |
| `id` | `number` | No | The identifier for a broadcast trigger. |
| `language_variants` | `table` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `table` | No |  |
| `metric` | `table` | No | Contains metrics for the link. |
| `msg_template_ids` | `table` | No | Indicates the message template(s) used in this broadcast. |
| `name` | `string` | No | The name of the broadcast. |
| `next` | `number` | No | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `number` | No | The date-time when Customer.io processed the trigger. |
| `state` | `string` | No | The state of the broadcast. |
| `tags` | `table` | No | An array of tags you set on this broadcast. |
| `type` | `string` | No | The type of broadcast. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Broadcast():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Broadcast():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Broadcast():update({
  id = 1,
  action_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BroadcastEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CampaignEntity

```lua
local campaign = client:Campaign(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CollectionEntity

```lua
local collection = client:Collection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `number` | No | The size of the collection in bytes. |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `id` | `number` | No | The identifier for the collection. |
| `name` | `string` | No | The name of the collection. |
| `rows` | `number` | No | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `table` | No | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Collection():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Collection():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Collection():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Collection():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Collection():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContentEntity

```lua
local content = client:Content(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomerEntity

```lua
local customer = client:Customer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cio_id` | `string` | Yes | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `string|nil` | Yes | A person's email address, if set. |
| `filter` | `any` | Yes | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `string|nil` | Yes | A person's unique ID, if set. |
| `identifiers` | `table` | No | An array of objects, where each object represents a customer. |
| `ids` | `table` | No | In general, you should use the `identifiers` array. |
| `next` | `string` | No | The `start` value for the next page of results. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Customer():create({
  cio_id = --[[ string ]],
  email = --[[ string|nil ]],
  filter = --[[ any ]],
  id = --[[ string|nil ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Customer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Customer():load({ id = "customer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DataIndexEntity

```lua
local data_index = client:DataIndex(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DataIndex():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DataIndexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DeliveryEntity

```lua
local delivery = client:Delivery(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DeliveryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DesignStudioEntity

```lua
local design_studio = client:DesignStudio(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | HTML content |
| `created` | `number` | No | Unix timestamp of when the component was created. |
| `id` | `string` | No | ID of the component |
| `name` | `string` | No | Display name of the component. |
| `parent_folder_id` | `string|nil` | No | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `string` | No | The component tag name, used to reference your component in an email. |
| `updated` | `number` | No | Unix timestamp of the last update to the component. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DesignStudio():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DesignStudio():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DesignStudio():load({ id = "design_studio_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DesignStudio():remove({ id = "design_studio_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DesignStudio():update({
  id = "design_studio_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DesignStudioEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DesignStudioEmailEntity

```lua
local design_studio_email = client:DesignStudioEmail(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amp` | `string` | No | AMP HTML variant. |
| `available_languages` | `table` | No | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `string` | No | Browser used to render the client. |
| `category` | `string` | No | Where the client renders. |
| `check` | `string` | No | Which check produced this finding. |
| `client` | `string` | No | Name of the email client and device. |
| `client_ids` | `table` | No | The device identifiers requested for this job. |
| `content` | `table` | No | The content of your email. |
| `created` | `number` | No | Unix timestamp of when the translation was created. |
| `created_at` | `number` | No | When you submitted the preview job. |
| `created_on_publish` | `boolean` | No | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `number` | No | Credits originally granted for a tier. |
| `credits_remaining` | `number` | No | Credits left to spend from this tier. |
| `dependencies` | `table` | No |  |
| `description` | `string` | No | Explanatory text you provided when creating a version. |
| `details` | `string` | No | Explanation and suggested fix. |
| `emails` | `table` | No |  |
| `envelope` | `table` | No | The envelope of your email, like from and to addresses. |
| `expires_at` | `number|nil` | No | When this pool's credits expire, if ever. |
| `feedback` | `boolean` | No | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `table` | No |  |
| `has_unpublished_changes` | `boolean` | No | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `string` | No | Full HTML with liquid tags left intact. |
| `id` | `string` | No | Unique identifier for the email. |
| `is_linked` | `boolean` | No | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `boolean` | No | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `boolean` | No | Whether the translation is a template |
| `language` | `string` | No | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `string` | No | ID of the parent email that groups all translations. |
| `lax_mode` | `boolean` | No | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `table` | No |  |
| `name` | `string` | No | The batch label provided when you sent an email for previews. |
| `node` | `table` | No | The content and settings stored in the version. |
| `node_count` | `number` | No | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `string` | No | The UUID of the rendered email node. |
| `node_type` | `string` | No | Always `"EMAIL"`. |
| `os` | `string` | No | Operating system the client runs on. |
| `parent_folder_id` | `string|nil` | No | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `table` | No | One object per requested preview. |
| `replayed` | `boolean` | No | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `number` | No | ID of the preview job. |
| `sample_data` | `table` | No | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `severity` | `string` | No | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `state` | `string` | No | Whether this finding represents an issue. |
| `summary` | `string` | No | Location context, for example "In the email body". |
| `template_id` | `number` | No | The ID of the workflow template that received the content. |
| `text` | `string` | No | Plain text version of the email. |
| `tier` | `string` | No | The credit tier this pool belongs to. |
| `title` | `string` | No | Short human-readable title. |
| `total_previews_bounced` | `number` | No | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `total_previews_cached` | `number` | No | Previews served from an earlier run's screenshot. |
| `total_previews_ready` | `number` | No | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `total_previews_requested` | `number` | No | Previews requested in the job, for the email in the path. |
| `total_previews_succeeded` | `number` | No | Previews this run generated itself, excluding cached ones. |
| `transformers` | `table` | No | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `number` | No | Unix timestamp of the last update to the translation. |
| `updated_at` | `number` | No | When the job's status was last updated. |
| `version` | `table` | No |  |
| `version_id` | `string` | No | The identifier of the template version created by the publish. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DesignStudioEmail():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DesignStudioEmail():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DesignStudioEmail():load({ id = "design_studio_email_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:DesignStudioEmail():remove({ id = "design_studio_email_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:DesignStudioEmail():update({
  id = "design_studio_email_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DesignStudioEmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailEntity

```lua
local email = client:Email(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EndEntity

```lua
local end_ = client:End(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EndEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EspSuppressionEntity

```lua
local esp_suppression = client:EspSuppression(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The reason the addresses are suppressed. |
| `id` | `string` | No |  |
| `next` | `string` | No | The `start` value for the next page of results. |
| `suppressions` | `table` | No | The addresses suppressed in this category. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EspSuppression():create({
  email_address = --[[ string ]],
  suppression_type = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EspSuppression():load({ id = "esp_suppression_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:EspSuppression():remove({ email_address = "email_address", suppression_type = "suppression_type" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EspSuppressionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExportEntity

```lua
local export = client:Export(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | No | A description of the export. |
| `downloads` | `number` | No | Counts the total number of times the export has been downloaded. |
| `failed` | `boolean` | No | If true, the export was unsuccessful. |
| `id` | `number` | No | The identifier for the export. |
| `status` | `string` | No | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `total` | `number` | No | The number of entries in the export. |
| `type` | `string` | No | The type of information contained in the export. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |
| `user_email` | `string` | No | The email of the user who created the export. |
| `user_id` | `number` | No | The user who created the export. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Export():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Export():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Export():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ImportEntity

```lua
local import = client:Import(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `data_to_process` | `string` | No | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | `string` | No | A helpful description that can help you find and recognize your import operation. |
| `error` | `string` | No | If your import fails, this helps you understand why. |
| `id` | `number` | No | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | `string` | No | The type of identifier you used to identify people in your CSV. |
| `import` | `any` | Yes |  |
| `name` | `string` | No | A friendly name for your import. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `string` | No | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `number` | No | The number of rows we imported from the CSV. |
| `rows_to_import` | `number` | No | The total number of importable rows we found in the CSV. |
| `state` | `string` | No | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `string` | No | The type of import. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Import():create({
  import = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Import():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InAppEntity

```lua
local in_app = client:InApp(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InAppEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InboxMessageEntity

```lua
local inbox_message = client:InboxMessage(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InboxMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InfoEntity

```lua
local info = client:Info(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Info():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpAddressEntity

```lua
local ip_address = client:IpAddress(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAddressEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LanguageEntity

```lua
local language = client:Language(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LinkEntity

```lua
local link = client:Link(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LinkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LiveNotificationEntity

```lua
local live_notification = client:LiveNotification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | When the delivery was created (unix timestamp). |
| `id` | `string` | No | The delivery ID. |
| `operation` | `string` | No | The lifecycle operation the delivery carried. |
| `source` | `string` | No | Where the operation originated—the API or the device. |
| `status` | `string` | No | The delivery's status. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:LiveNotification():create({
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:LiveNotification():load({ id = "live_notification_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LiveNotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MessageEntity

```lua
local message = client:Message(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `number` | No | The identifier for an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `content_id` | `number` | No | The identifier for a message in a one-time send. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `customer_id` | `string|nil` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `table` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `string|nil` | No | Explains why a message failed, if applicable. |
| `forgotten` | `boolean` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `number` | No | The identifier of the message template used to create a message. |
| `metrics` | `table` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `string` | No |  |
| `parent_action_id` | `number` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `table` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Message():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Message():load({ id = "message_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewsletterEntity

```lua
local newsletter = client:Newsletter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_ids` | `table` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `number` | No | The identifier for a one-time send. |
| `name` | `string` | No | The name of the one-time send. |
| `recipient_segment_ids` | `table` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `number` | No | The last time the one-time send was sent. |
| `subscription_topic_id` | `number` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `table` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Newsletter():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Newsletter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Newsletter():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Newsletter():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewsletterMetricEntity

```lua
local newsletter_metric = client:NewsletterMetric(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `link` | `table` | No |  |
| `metric` | `table` | No | Contains metrics for the link. |
| `series` | `table` | No | Metrics grouped by the requested resolution. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NewsletterMetric():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NewsletterMetric():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterMetricEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewsletterVariantEntity

```lua
local newsletter_variant = client:NewsletterVariant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the variant. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content_ids` | `table` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `fake_bcc` | `boolean` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `number` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `number` | No | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `language` | `string` | No | The language variant for your message. |
| `layout` | `string` | No | The layout used for the variant, if it exists. |
| `name` | `string` | No | The name of the variant, if it exists. |
| `newsletter_id` | `number` | No | The identifier for a one-time send. |
| `preheader_text` | `string` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `recipient` | `string` | No | The recipient address for an action. |
| `recipient_segment_ids` | `table` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `string` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `number|nil` | No | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `number` | No | The last time the one-time send was sent. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `subscription_topic_id` | `number` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `table` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:NewsletterVariant():create({
  newsletter_id = --[[ number ]],
  test_group_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NewsletterVariant():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NewsletterVariant():load({ newsletter_id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:NewsletterVariant():remove({ language = "language", newsletter_id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NewsletterVariant():update({
  newsletter_id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewsletterVariantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObjectEntity

```lua
local object = client:Object(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `table` | No | Attributes assigned to this object. |
| `enabled` | `boolean` | No | If true, the object type is enabled. |
| `filter` | `any` | Yes | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `string` | No | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `string` | No | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `table` | No | Identifies an object. |
| `ids` | `table` | No | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `string` | No | The name of the object type. |
| `next` | `string` | No | Indicates the next page of results. |
| `object_type_disabled` | `boolean` | No | If true, the object is disabled. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `string` | No | The singular name of the object type. |
| `singular_slug` | `string` | No | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `string` | No | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `table` | No | The epoch timestamps when corresponding attributes were set on the object. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Object():create({
  filter = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Object():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Object():load({ id = 1, object_id = "object_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ObjectTypeEntity

```lua
local object_type = client:ObjectType(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ObjectTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OptOutEntity

```lua
local opt_out = client:OptOut(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | No | The channel that the person is opted out of. |
| `cio_id` | `string` | No | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `string` | No | The person's ID. |
| `from` | `string` | No | The sender that the person is opted out of. |
| `optouts` | `table` | Yes | The senders and channels you want to opt the person out of, or back in to. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `channel` | - | - |
| `cio_id` | - | - |
| `customer_id` | - | - |
| `from` | - | - |
| `optouts` | Yes | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OptOut():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OptOut():update({
  customer_id = "customer_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptOutEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PushEntity

```lua
local push = client:Push(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PushEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RelationshipEntity

```lua
local relationship = client:Relationship(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RelationshipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReportingWebhookEntity

```lua
local reporting_webhook = client:ReportingWebhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | No | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `string` | Yes | The webhook URL. |
| `events` | `table` | Yes | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `boolean` | No | Set to `false` to send unique open and click events to the webhook. |
| `id` | `number` | No | The identifier for the webhook. |
| `name` | `string` | Yes | The name of your webhook. |
| `type` | `string` | No | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `boolean` | No | Set to `true` to include the message `body` in `_sent` events. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ReportingWebhook():create({
  endpoint = --[[ string ]],
  events = --[[ table ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ReportingWebhook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ReportingWebhook():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ReportingWebhook():remove({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ReportingWebhook():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReportingWebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchSuppressionEntity

```lua
local search_suppression = client:SearchSuppression(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchSuppressionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SegmentEntity

```lua
local segment = client:Segment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | No | A description for the segment. |
| `id` | `number` | No | The identifier for a segment; used to target a segment in requests. |
| `name` | `string` | No | The name of the segment. |
| `progress` | `number|nil` | No | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `table` | Yes |  |
| `state` | `string` | No | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `table|nil` | No | The tags assigned to the segment, if any. |
| `type` | `string` | No | The type of segment. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Segment():create({
  segment = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Segment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Segment():load({ id = 1 })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Segment():remove({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SendMessageEntity

```lua
local send_message = client:SendMessage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `boolean` | No | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `string` | No | Blind copy message recipients. |
| `body` | `string` | No | The HTML body of your message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `body_plain` | `string` | No | The plaintext body of your message. |
| `cc` | `string` | No | Carbon copy message recipients, separated by commas. |
| `custom_data` | `table` | No | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `any` | Yes | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `table` | No | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `string` | No | A unique identifier for the message. |
| `disable_css_preprocessing` | `boolean` | No | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `boolean` | No | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `boolean` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address your email is from. |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `number` | No | The `trigger_id` for this operation. |
| `identifiers` | `any` | No | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `string` | No | An image URL to show in the push. |
| `language` | `string` | No | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `string` | No | A deep link to open when the push is tapped. |
| `message` | `string` | No | The message body for your notification. |
| `message_data` | `table` | No | An object containing the key-value pairs referenced using liquid in your message. |
| `preheader` | `string` | No | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `queue_draft` | `boolean` | No | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `queued_at` | `number` | No | A Unix timestamp for when Customer.io accepted and queued your request. |
| `reply_to` | `string` | No | The address that recipients can reply to, if different from the `from` address. |
| `send_at` | `number` | No | For a scheduled message, the Unix timestamp when the message is set to send. |
| `send_to_unsubscribed` | `boolean` | No | If false, your message is not sent to unsubscribed recipients. |
| `sound` | `string` | No | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `subject` | `string` | No | The subject line for your message. |
| `title` | `string` | No | The title for your notification. |
| `to` | `string` | Yes | The recipients you want to send to, separated by commas. |
| `tracked` | `boolean` | No | If true, Customer.io tracks opens and link clicks in your message. |
| `transactional_message_id` | `string` | No | The transactional message template you want to use. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SendMessage():create({
  custom_device = --[[ any ]],
  to = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SenderIdentityEntity

```lua
local sender_identity = client:SenderIdentity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | The sender name and email address in the format `name <name@example.com>`. |
| `auto_generated` | `boolean` | No | If true, the sender is automatically generated by Customer.io. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `email` | `string` | No | The email address of the sender. |
| `hidden` | `boolean` | No | If true, the sender is hidden in the Customer.io UI. |
| `id` | `number` | No | The identifier of a sender. |
| `name` | `string` | No | The name of the sender. |
| `phone` | `string` | No | The phone number of the sender, used for SMS senders. |
| `template_type` | `string` | No | The type of sender. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SenderIdentity():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SenderIdentity():load({ id = 1 })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SenderIdentityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SmsEntity

```lua
local sms = client:Sms(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SmsEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SnippetEntity

```lua
local snippet = client:Snippet(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the snippet, must be unique. |
| `updated_at` | `number` | No | The last date-time the snippet was updated. |
| `value` | `string` | Yes | The contents of the snippet. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Snippet():create({
  name = --[[ string ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Snippet():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Snippet():remove({ id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Snippet():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StartEntity

```lua
local start = client:Start(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StartEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionCenterEntity

```lua
local subscription_center = client:SubscriptionCenter(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the channel. |
| `id` | `number` | No | The system-generated ID for the subscription channel. |
| `identifier` | `string` | No | The key associated with the subscription topic. |
| `name` | `string` | No | The display name of the subscription channel. |
| `subscribed_by_default` | `boolean` | No | If false, a person is opted-out by default. |
| `type` | `string` | No | The type of delivery channel. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SubscriptionCenter():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SubscriptionCenter():load({ id = "subscription_center_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionCenterEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionChannelEntity

```lua
local subscription_channel = client:SubscriptionChannel(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionChannelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SubscriptionTopicEntity

```lua
local subscription_topic = client:SubscriptionTopic(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SubscriptionTopicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SuppressionEntity

```lua
local suppression = client:Suppression(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SuppressionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestGroupEntity

```lua
local test_group = client:TestGroup(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestGroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransactionalEntity

```lua
local transactional = client:Transactional(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the transactional message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content` | `table` | No | The object represents a variant. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `description` | `string` | No | A description of the transactional message. |
| `fake_bcc` | `boolean` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `number` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `hide_message_body` | `boolean` | No | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `id` | `number` | No | The identifier for an action. |
| `language` | `string` | No | The language variant for your message. |
| `link_tracking` | `boolean` | No | If true, link tracking is enabled for this message. |
| `name` | `string` | No | The name of the transactional message. |
| `open_tracking` | `boolean` | No | If true, open-tracking is enabled for this message. |
| `preheader_text` | `string` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `queue_drafts` | `boolean` | No | If true, messages do not send automatically, and queue as drafts instead. |
| `recipient` | `string` | No | The recipient address for an action. |
| `reply_to` | `string` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `number|nil` | No | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `boolean` | No | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `type` | `string` | No | The type of message. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Transactional():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Transactional():load({ id = 1 })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Transactional():update({
  id = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransactionalEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TriggerEntity

```lua
local trigger = client:Trigger(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpdateEntity

```lua
local update = client:Update(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WhatsappEntity

```lua
local whatsapp = client:Whatsapp(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WhatsappEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkspaceEntity

```lua
local workspace = client:Workspace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billable_messages_sent` | `number` | No | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `id` | `number` | No | The id of the workspace. |
| `messages_sent` | `number` | No | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `name` | `string` | No | The name of the workspace. |
| `object_types` | `number` | No | The current count of object types in the workspace. |
| `objects` | `number` | No | The current count of object profiles in the workspace. |
| `people` | `number` | No | The current count of people profiles in the workspace. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Workspace():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `get_name() -> string`

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

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

