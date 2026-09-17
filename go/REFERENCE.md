# CustomerioApp Golang SDK Reference

Complete API reference for the CustomerioApp Golang SDK.


## CustomerioAppSDK

### Constructor

```go
func NewCustomerioAppSDK(options map[string]any) *CustomerioAppSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CustomerioAppSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CustomerioAppSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Action(data map[string]any) CustomerioAppEntity`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `Activity(data map[string]any) CustomerioAppEntity`

Create a new `Activity` entity instance. Pass `nil` for no initial data.

#### `Asset(data map[string]any) CustomerioAppEntity`

Create a new `Asset` entity instance. Pass `nil` for no initial data.

#### `Attribute(data map[string]any) CustomerioAppEntity`

Create a new `Attribute` entity instance. Pass `nil` for no initial data.

#### `Automation(data map[string]any) CustomerioAppEntity`

Create a new `Automation` entity instance. Pass `nil` for no initial data.

#### `Broadcast(data map[string]any) CustomerioAppEntity`

Create a new `Broadcast` entity instance. Pass `nil` for no initial data.

#### `Campaign(data map[string]any) CustomerioAppEntity`

Create a new `Campaign` entity instance. Pass `nil` for no initial data.

#### `Collection(data map[string]any) CustomerioAppEntity`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `Content(data map[string]any) CustomerioAppEntity`

Create a new `Content` entity instance. Pass `nil` for no initial data.

#### `Customer(data map[string]any) CustomerioAppEntity`

Create a new `Customer` entity instance. Pass `nil` for no initial data.

#### `DataIndex(data map[string]any) CustomerioAppEntity`

Create a new `DataIndex` entity instance. Pass `nil` for no initial data.

#### `Delivery(data map[string]any) CustomerioAppEntity`

Create a new `Delivery` entity instance. Pass `nil` for no initial data.

#### `DesignStudio(data map[string]any) CustomerioAppEntity`

Create a new `DesignStudio` entity instance. Pass `nil` for no initial data.

#### `DesignStudioEmail(data map[string]any) CustomerioAppEntity`

Create a new `DesignStudioEmail` entity instance. Pass `nil` for no initial data.

#### `Email(data map[string]any) CustomerioAppEntity`

Create a new `Email` entity instance. Pass `nil` for no initial data.

#### `End(data map[string]any) CustomerioAppEntity`

Create a new `End` entity instance. Pass `nil` for no initial data.

#### `EspSuppression(data map[string]any) CustomerioAppEntity`

Create a new `EspSuppression` entity instance. Pass `nil` for no initial data.

#### `Export(data map[string]any) CustomerioAppEntity`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `Import(data map[string]any) CustomerioAppEntity`

Create a new `Import` entity instance. Pass `nil` for no initial data.

#### `InApp(data map[string]any) CustomerioAppEntity`

Create a new `InApp` entity instance. Pass `nil` for no initial data.

#### `InboxMessage(data map[string]any) CustomerioAppEntity`

Create a new `InboxMessage` entity instance. Pass `nil` for no initial data.

#### `Info(data map[string]any) CustomerioAppEntity`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `IpAddress(data map[string]any) CustomerioAppEntity`

Create a new `IpAddress` entity instance. Pass `nil` for no initial data.

#### `Language(data map[string]any) CustomerioAppEntity`

Create a new `Language` entity instance. Pass `nil` for no initial data.

#### `Link(data map[string]any) CustomerioAppEntity`

Create a new `Link` entity instance. Pass `nil` for no initial data.

#### `LiveNotification(data map[string]any) CustomerioAppEntity`

Create a new `LiveNotification` entity instance. Pass `nil` for no initial data.

#### `Message(data map[string]any) CustomerioAppEntity`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `Newsletter(data map[string]any) CustomerioAppEntity`

Create a new `Newsletter` entity instance. Pass `nil` for no initial data.

#### `NewsletterMetric(data map[string]any) CustomerioAppEntity`

Create a new `NewsletterMetric` entity instance. Pass `nil` for no initial data.

#### `NewsletterVariant(data map[string]any) CustomerioAppEntity`

Create a new `NewsletterVariant` entity instance. Pass `nil` for no initial data.

#### `Object(data map[string]any) CustomerioAppEntity`

Create a new `Object` entity instance. Pass `nil` for no initial data.

#### `ObjectType(data map[string]any) CustomerioAppEntity`

Create a new `ObjectType` entity instance. Pass `nil` for no initial data.

#### `OptOut(data map[string]any) CustomerioAppEntity`

Create a new `OptOut` entity instance. Pass `nil` for no initial data.

#### `Push(data map[string]any) CustomerioAppEntity`

Create a new `Push` entity instance. Pass `nil` for no initial data.

#### `Relationship(data map[string]any) CustomerioAppEntity`

Create a new `Relationship` entity instance. Pass `nil` for no initial data.

#### `ReportingWebhook(data map[string]any) CustomerioAppEntity`

Create a new `ReportingWebhook` entity instance. Pass `nil` for no initial data.

#### `SearchSuppression(data map[string]any) CustomerioAppEntity`

Create a new `SearchSuppression` entity instance. Pass `nil` for no initial data.

#### `Segment(data map[string]any) CustomerioAppEntity`

Create a new `Segment` entity instance. Pass `nil` for no initial data.

#### `SendMessage(data map[string]any) CustomerioAppEntity`

Create a new `SendMessage` entity instance. Pass `nil` for no initial data.

#### `SenderIdentity(data map[string]any) CustomerioAppEntity`

Create a new `SenderIdentity` entity instance. Pass `nil` for no initial data.

#### `Sms(data map[string]any) CustomerioAppEntity`

Create a new `Sms` entity instance. Pass `nil` for no initial data.

#### `Snippet(data map[string]any) CustomerioAppEntity`

Create a new `Snippet` entity instance. Pass `nil` for no initial data.

#### `Start(data map[string]any) CustomerioAppEntity`

Create a new `Start` entity instance. Pass `nil` for no initial data.

#### `SubscriptionCenter(data map[string]any) CustomerioAppEntity`

Create a new `SubscriptionCenter` entity instance. Pass `nil` for no initial data.

#### `SubscriptionChannel(data map[string]any) CustomerioAppEntity`

Create a new `SubscriptionChannel` entity instance. Pass `nil` for no initial data.

#### `SubscriptionTopic(data map[string]any) CustomerioAppEntity`

Create a new `SubscriptionTopic` entity instance. Pass `nil` for no initial data.

#### `Suppression(data map[string]any) CustomerioAppEntity`

Create a new `Suppression` entity instance. Pass `nil` for no initial data.

#### `TestGroup(data map[string]any) CustomerioAppEntity`

Create a new `TestGroup` entity instance. Pass `nil` for no initial data.

#### `Transactional(data map[string]any) CustomerioAppEntity`

Create a new `Transactional` entity instance. Pass `nil` for no initial data.

#### `Trigger(data map[string]any) CustomerioAppEntity`

Create a new `Trigger` entity instance. Pass `nil` for no initial data.

#### `Update(data map[string]any) CustomerioAppEntity`

Create a new `Update` entity instance. Pass `nil` for no initial data.

#### `Whatsapp(data map[string]any) CustomerioAppEntity`

Create a new `Whatsapp` entity instance. Pass `nil` for no initial data.

#### `Workspace(data map[string]any) CustomerioAppEntity`

Create a new `Workspace` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActionEntity

```go
action := client.Action(nil)
fmt.Println(action.GetName()) // "action"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActivityEntity

```go
activity := client.Activity(nil)
fmt.Println(activity.GetName()) // "activity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `any` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `any` | No |  |
| `delivery_id` | `string` | No | The message ID. |
| `delivery_type` | `string` | No | The recipient device, if applicable. |
| `id` | `string` | No | The identifier for the action. |
| `name` | `string` | No | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `int` | No | The date and time when the action occurred. |
| `type` | `string` | No | The type of activity. |
| `url` | `string` | No | The page URL, for `page` activities. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssetEntity

```go
asset := client.Asset(nil)
fmt.Println(asset.GetName()) // "asset"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `int` | No | Unix timestamp when the asset was created. |
| `id` | `int` | No | The unique identifier of the file asset. |
| `name` | `string` | No | The display name of the file asset. |
| `parent_folder_id` | `any` | No | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `string` | No | The storage URL or path where the file is hosted. |
| `size` | `int` | No | The file size in bytes. |
| `updated` | `int` | No | Unix timestamp when the asset was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Asset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Asset(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Asset(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Asset(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Asset(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AttributeEntity

```go
attribute := client.Attribute(nil)
fmt.Println(attribute.GetName()) // "attribute"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AttributeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AutomationEntity

```go
automation := client.Automation(nil)
fmt.Println(automation.GetName()) // "automation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `int` | No | The identifier for an action. |
| `actions` | `[]any` | No | Each object in the array represents an action in your automation. |
| `activated` | `[]any` | No | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `campaigns` | `[]any` | No | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `int` | No | The identifier for a message in a one-time send. |
| `converted` | `[]any` | No | People who matched the conversion criteria for the automation. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `customer_id` | `any` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `string` | No | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `[]any` | No | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `any` | No | Explains why a message failed, if applicable. |
| `finished` | `[]any` | No | People who finished the journey. |
| `forgotten` | `bool` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `map[string]any` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `map[string]any` | No |  |
| `message_template_id` | `int` | No | The identifier of the message template used to create a message. |
| `messaged` | `[]any` | No | People who experienced at least one non-delay action in the journey. |
| `metric` | `map[string]any` | No | Contains metrics for the link. |
| `metrics` | `map[string]any` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `[]any` | No | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `string` | No |  |
| `next` | `string` | No | Indicates the next page of results. |
| `parent_action_id` | `int` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `res` | `string` | No | The resolution we reported at. |
| `series` | `map[string]any` | No | Metrics grouped by the requested resolution. |
| `start` | `string` | No | The start of the window we reported on, in ISO 8601 format. |
| `started` | `[]any` | No | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `map[string]any` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Automation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Automation(nil).Load(map[string]any{"campaign_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Automation(nil).Update(map[string]any{
    "action_id": 1,
    "campaign_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AutomationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BroadcastEntity

```go
broadcast := client.Broadcast(nil)
fmt.Println(broadcast.GetName()) // "broadcast"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | No | A list of actions used by the broadcast. |
| `active` | `bool` | No | If true, the broadcast is active. |
| `broadcast_id` | `int` | No | The identifier for a broadcast. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `[]any` | No | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `int` | No | The date and time when you activated the broadcast. |
| `id` | `int` | No | The identifier for a broadcast trigger. |
| `language_variants` | `map[string]any` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `map[string]any` | No |  |
| `metric` | `map[string]any` | No | Contains metrics for the link. |
| `msg_template_ids` | `[]any` | No | Indicates the message template(s) used in this broadcast. |
| `name` | `string` | No | The name of the broadcast. |
| `next` | `int` | No | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `int` | No | The date-time when Customer.io processed the trigger. |
| `state` | `string` | No | The state of the broadcast. |
| `tags` | `[]any` | No | An array of tags you set on this broadcast. |
| `type` | `string` | No | The type of broadcast. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Broadcast(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Broadcast(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Broadcast(nil).Update(map[string]any{
    "id": 1,
    "action_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BroadcastEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CampaignEntity

```go
campaign := client.Campaign(nil)
fmt.Println(campaign.GetName()) // "campaign"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CampaignEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollectionEntity

```go
collection := client.Collection(nil)
fmt.Println(collection.GetName()) // "collection"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `int` | No | The size of the collection in bytes. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `id` | `int` | No | The identifier for the collection. |
| `name` | `string` | No | The name of the collection. |
| `rows` | `int` | No | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `[]any` | No | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Collection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Collection(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Collection(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Collection(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Collection(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContentEntity

```go
content := client.Content(nil)
fmt.Println(content.GetName()) // "content"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomerEntity

```go
customer := client.Customer(nil)
fmt.Println(customer.GetName()) // "customer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cio_id` | `string` | Yes | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `any` | Yes | A person's email address, if set. |
| `filter` | `any` | Yes | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `any` | Yes | A person's unique ID, if set. |
| `identifiers` | `[]any` | No | An array of objects, where each object represents a customer. |
| `ids` | `[]any` | No | In general, you should use the `identifiers` array. |
| `next` | `string` | No | The `start` value for the next page of results. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Customer(nil).Create(map[string]any{
    "cio_id": "example_cio_id",
    "email": "example_email",
    "filter": "example_filter",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DataIndexEntity

```go
dataIndex := client.DataIndex(nil)
fmt.Println(dataIndex.GetName()) // "data_index"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DataIndex(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DataIndexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DeliveryEntity

```go
delivery := client.Delivery(nil)
fmt.Println(delivery.GetName()) // "delivery"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DeliveryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DesignStudioEntity

```go
designStudio := client.DesignStudio(nil)
fmt.Println(designStudio.GetName()) // "design_studio"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | HTML content |
| `created` | `int` | No | Unix timestamp of when the component was created. |
| `id` | `string` | No | ID of the component |
| `name` | `string` | No | Display name of the component. |
| `parent_folder_id` | `any` | No | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `string` | No | The component tag name, used to reference your component in an email. |
| `updated` | `int` | No | Unix timestamp of the last update to the component. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DesignStudio(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DesignStudio(nil).Load(map[string]any{"id": "design_studio_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DesignStudio(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DesignStudio(nil).Update(map[string]any{
    "id": "design_studio_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DesignStudio(nil).Remove(map[string]any{"id": "design_studio_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DesignStudioEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DesignStudioEmailEntity

```go
designStudioEmail := client.DesignStudioEmail(nil)
fmt.Println(designStudioEmail.GetName()) // "design_studio_email"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amp` | `string` | No | AMP HTML variant. |
| `available_languages` | `[]any` | No | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `string` | No | Browser used to render the client. |
| `category` | `string` | No | Where the client renders. |
| `check` | `string` | No | Which check produced this finding. |
| `client` | `string` | No | Name of the email client and device. |
| `client_ids` | `[]any` | No | The device identifiers requested for this job. |
| `content` | `map[string]any` | No | The content of your email. |
| `created` | `int` | No | Unix timestamp of when the translation was created. |
| `created_at` | `int` | No | When you submitted the preview job. |
| `created_on_publish` | `bool` | No | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `int` | No | Credits originally granted for a tier. |
| `credits_remaining` | `int` | No | Credits left to spend from this tier. |
| `dependencies` | `[]any` | No |  |
| `description` | `string` | No | Explanatory text you provided when creating a version. |
| `details` | `string` | No | Explanation and suggested fix. |
| `emails` | `[]any` | No |  |
| `envelope` | `map[string]any` | No | The envelope of your email, like from and to addresses. |
| `expires_at` | `any` | No | When this pool's credits expire, if ever. |
| `feedback` | `bool` | No | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `[]any` | No |  |
| `has_unpublished_changes` | `bool` | No | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `string` | No | Full HTML with liquid tags left intact. |
| `id` | `string` | No | Unique identifier for the email. |
| `is_linked` | `bool` | No | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `bool` | No | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `bool` | No | Whether the translation is a template |
| `language` | `string` | No | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `string` | No | ID of the parent email that groups all translations. |
| `lax_mode` | `bool` | No | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `map[string]any` | No |  |
| `name` | `string` | No | The batch label provided when you sent an email for previews. |
| `node` | `map[string]any` | No | The content and settings stored in the version. |
| `node_count` | `int` | No | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `string` | No | The UUID of the rendered email node. |
| `node_type` | `string` | No | Always `"EMAIL"`. |
| `os` | `string` | No | Operating system the client runs on. |
| `parent_folder_id` | `any` | No | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `[]any` | No | One object per requested preview. |
| `replayed` | `bool` | No | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `int` | No | ID of the preview job. |
| `sample_data` | `map[string]any` | No | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `severity` | `string` | No | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `state` | `string` | No | Whether this finding represents an issue. |
| `summary` | `string` | No | Location context, for example "In the email body". |
| `template_id` | `int` | No | The ID of the workflow template that received the content. |
| `text` | `string` | No | Plain text version of the email. |
| `tier` | `string` | No | The credit tier this pool belongs to. |
| `title` | `string` | No | Short human-readable title. |
| `total_previews_bounced` | `int` | No | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `total_previews_cached` | `int` | No | Previews served from an earlier run's screenshot. |
| `total_previews_ready` | `int` | No | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `total_previews_requested` | `int` | No | Previews requested in the job, for the email in the path. |
| `total_previews_succeeded` | `int` | No | Previews this run generated itself, excluding cached ones. |
| `transformers` | `map[string]any` | No | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `int` | No | Unix timestamp of the last update to the translation. |
| `updated_at` | `int` | No | When the job's status was last updated. |
| `version` | `map[string]any` | No |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.DesignStudioEmail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DesignStudioEmail(nil).Load(map[string]any{"id": "design_studio_email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DesignStudioEmail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.DesignStudioEmail(nil).Update(map[string]any{
    "id": "design_studio_email_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.DesignStudioEmail(nil).Remove(map[string]any{"id": "design_studio_email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DesignStudioEmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailEntity

```go
email := client.Email(nil)
fmt.Println(email.GetName()) // "email"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EndEntity

```go
end := client.End(nil)
fmt.Println(end.GetName()) // "end"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EndEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EspSuppressionEntity

```go
espSuppression := client.EspSuppression(nil)
fmt.Println(espSuppression.GetName()) // "esp_suppression"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The reason the addresses are suppressed. |
| `id` | `string` | No |  |
| `next` | `string` | No | The `start` value for the next page of results. |
| `suppressions` | `[]any` | No | The addresses suppressed in this category. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EspSuppression(nil).Load(map[string]any{"id": "esp_suppression_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EspSuppression(nil).Create(map[string]any{
    "email_address": "example_email_address",
    "suppression_type": "example_suppression_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.EspSuppression(nil).Remove(map[string]any{"email_address": "email_address", "suppression_type": "suppression_type"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EspSuppressionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExportEntity

```go
export := client.Export(nil)
fmt.Println(export.GetName()) // "export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | No | A description of the export. |
| `downloads` | `int` | No | Counts the total number of times the export has been downloaded. |
| `failed` | `bool` | No | If true, the export was unsuccessful. |
| `id` | `int` | No | The identifier for the export. |
| `status` | `string` | No | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `total` | `int` | No | The number of entries in the export. |
| `type` | `string` | No | The type of information contained in the export. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |
| `user_email` | `string` | No | The email of the user who created the export. |
| `user_id` | `int` | No | The user who created the export. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Export(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Export(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Export(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ImportEntity

```go
import_ := client.Import(nil)
fmt.Println(import_.GetName()) // "import"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `data_to_process` | `string` | No | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | `string` | No | A helpful description that can help you find and recognize your import operation. |
| `error` | `string` | No | If your import fails, this helps you understand why. |
| `id` | `int` | No | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | `string` | No | The type of identifier you used to identify people in your CSV. |
| `import` | `any` | Yes |  |
| `name` | `string` | No | A friendly name for your import. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `string` | No | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `int` | No | The number of rows we imported from the CSV. |
| `rows_to_import` | `int` | No | The total number of importable rows we found in the CSV. |
| `state` | `string` | No | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `string` | No | The type of import. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Import(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Import(nil).Create(map[string]any{
    "import": "example_import",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ImportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InAppEntity

```go
inApp := client.InApp(nil)
fmt.Println(inApp.GetName()) // "in_app"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InAppEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InboxMessageEntity

```go
inboxMessage := client.InboxMessage(nil)
fmt.Println(inboxMessage.GetName()) // "inbox_message"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InboxMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## InfoEntity

```go
info := client.Info(nil)
fmt.Println(info.GetName()) // "info"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Info(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IpAddressEntity

```go
ipAddress := client.IpAddress(nil)
fmt.Println(ipAddress.GetName()) // "ip_address"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpAddressEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LanguageEntity

```go
language := client.Language(nil)
fmt.Println(language.GetName()) // "language"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LanguageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LinkEntity

```go
link := client.Link(nil)
fmt.Println(link.GetName()) // "link"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LinkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LiveNotificationEntity

```go
liveNotification := client.LiveNotification(nil)
fmt.Println(liveNotification.GetName()) // "live_notification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | When the delivery was created (unix timestamp). |
| `id` | `string` | No | The delivery ID. |
| `operation` | `string` | No | The lifecycle operation the delivery carried. |
| `source` | `string` | No | Where the operation originated—the API or the device. |
| `status` | `string` | No | The delivery's status. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.LiveNotification(nil).Load(map[string]any{"id": "live_notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.LiveNotification(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LiveNotificationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MessageEntity

```go
message := client.Message(nil)
fmt.Println(message.GetName()) // "message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `int` | No | The identifier for an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `content_id` | `int` | No | The identifier for a message in a one-time send. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `customer_id` | `any` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `any` | No | Explains why a message failed, if applicable. |
| `forgotten` | `bool` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `int` | No | The identifier of the message template used to create a message. |
| `metrics` | `map[string]any` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `string` | No |  |
| `parent_action_id` | `int` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `map[string]any` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Message(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Message(nil).Load(map[string]any{"id": "message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewsletterEntity

```go
newsletter := client.Newsletter(nil)
fmt.Println(newsletter.GetName()) // "newsletter"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_ids` | `[]any` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `int` | No | The identifier for a one-time send. |
| `name` | `string` | No | The name of the one-time send. |
| `recipient_segment_ids` | `[]any` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `int` | No | The last time the one-time send was sent. |
| `subscription_topic_id` | `int` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `[]any` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Newsletter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Newsletter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Newsletter(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Newsletter(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewsletterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewsletterMetricEntity

```go
newsletterMetric := client.NewsletterMetric(nil)
fmt.Println(newsletterMetric.GetName()) // "newsletter_metric"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `link` | `map[string]any` | No |  |
| `metric` | `map[string]any` | No | Contains metrics for the link. |
| `series` | `map[string]any` | No | Metrics grouped by the requested resolution. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NewsletterMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NewsletterMetric(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewsletterMetricEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewsletterVariantEntity

```go
newsletterVariant := client.NewsletterVariant(nil)
fmt.Println(newsletterVariant.GetName()) // "newsletter_variant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the variant. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content_ids` | `[]any` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | No | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `language` | `string` | No | The language variant for your message. |
| `layout` | `string` | No | The layout used for the variant, if it exists. |
| `name` | `string` | No | The name of the variant, if it exists. |
| `newsletter_id` | `int` | No | The identifier for a one-time send. |
| `preheader_text` | `string` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `recipient` | `string` | No | The recipient address for an action. |
| `recipient_segment_ids` | `[]any` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `string` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `any` | No | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `int` | No | The last time the one-time send was sent. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `subscription_topic_id` | `int` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `[]any` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NewsletterVariant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NewsletterVariant(nil).Load(map[string]any{"newsletter_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.NewsletterVariant(nil).Create(map[string]any{
    "newsletter_id": 1,
    "test_group_id": "example_test_group_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NewsletterVariant(nil).Update(map[string]any{
    "newsletter_id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.NewsletterVariant(nil).Remove(map[string]any{"language": "language", "newsletter_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewsletterVariantEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObjectEntity

```go
object := client.Object(nil)
fmt.Println(object.GetName()) // "object"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `map[string]any` | No | Attributes assigned to this object. |
| `enabled` | `bool` | No | If true, the object type is enabled. |
| `filter` | `any` | Yes | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `string` | No | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `string` | No | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `map[string]any` | No | Identifies an object. |
| `ids` | `[]any` | No | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `string` | No | The name of the object type. |
| `next` | `string` | No | Indicates the next page of results. |
| `object_type_disabled` | `bool` | No | If true, the object is disabled. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `string` | No | The singular name of the object type. |
| `singular_slug` | `string` | No | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `string` | No | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `map[string]any` | No | The epoch timestamps when corresponding attributes were set on the object. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Object(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Object(nil).Load(map[string]any{"id": 1, "object_id": "object_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Object(nil).Create(map[string]any{
    "filter": "example_filter",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObjectEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ObjectTypeEntity

```go
objectType := client.ObjectType(nil)
fmt.Println(objectType.GetName()) // "object_type"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ObjectTypeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OptOutEntity

```go
optOut := client.OptOut(nil)
fmt.Println(optOut.GetName()) // "opt_out"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | No | The channel that the person is opted out of. |
| `cio_id` | `string` | No | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `string` | No | The person's ID. |
| `from` | `string` | No | The sender that the person is opted out of. |
| `optouts` | `[]any` | Yes | The senders and channels you want to opt the person out of, or back in to. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `channel` | - | - |
| `cio_id` | - | - |
| `customer_id` | - | - |
| `from` | - | - |
| `optouts` | Yes | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.OptOut(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.OptOut(nil).Update(map[string]any{
    "customer_id": "customer_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OptOutEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PushEntity

```go
push := client.Push(nil)
fmt.Println(push.GetName()) // "push"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PushEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RelationshipEntity

```go
relationship := client.Relationship(nil)
fmt.Println(relationship.GetName()) // "relationship"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RelationshipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReportingWebhookEntity

```go
reportingWebhook := client.ReportingWebhook(nil)
fmt.Println(reportingWebhook.GetName()) // "reporting_webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `bool` | No | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `string` | Yes | The webhook URL. |
| `events` | `[]any` | Yes | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `bool` | No | Set to `false` to send unique open and click events to the webhook. |
| `id` | `int` | No | The identifier for the webhook. |
| `name` | `string` | Yes | The name of your webhook. |
| `type` | `string` | No | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `bool` | No | Set to `true` to include the message `body` in `_sent` events. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ReportingWebhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ReportingWebhook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.ReportingWebhook(nil).Create(map[string]any{
    "endpoint": "example_endpoint",
    "events": []any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ReportingWebhook(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ReportingWebhook(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReportingWebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchSuppressionEntity

```go
searchSuppression := client.SearchSuppression(nil)
fmt.Println(searchSuppression.GetName()) // "search_suppression"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchSuppressionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SegmentEntity

```go
segment := client.Segment(nil)
fmt.Println(segment.GetName()) // "segment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | No | A description for the segment. |
| `id` | `int` | No | The identifier for a segment; used to target a segment in requests. |
| `name` | `string` | No | The name of the segment. |
| `progress` | `any` | No | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `map[string]any` | Yes |  |
| `state` | `string` | No | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `any` | No | The tags assigned to the segment, if any. |
| `type` | `string` | No | The type of segment. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Segment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Segment(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Segment(nil).Create(map[string]any{
    "segment": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Segment(nil).Remove(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SegmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SendMessageEntity

```go
sendMessage := client.SendMessage(nil)
fmt.Println(sendMessage.GetName()) // "send_message"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `map[string]any` | No | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `bool` | No | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `string` | No | Blind copy message recipients. |
| `body` | `string` | No | The HTML body of your message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `body_plain` | `string` | No | The plaintext body of your message. |
| `cc` | `string` | No | Carbon copy message recipients, separated by commas. |
| `custom_data` | `map[string]any` | No | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `any` | Yes | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `map[string]any` | No | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `string` | No | A unique identifier for the message. |
| `disable_css_preprocessing` | `bool` | No | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `bool` | No | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address your email is from. |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | No | The `trigger_id` for this operation. |
| `identifiers` | `any` | No | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `string` | No | An image URL to show in the push. |
| `language` | `string` | No | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `string` | No | A deep link to open when the push is tapped. |
| `message` | `string` | No | The message body for your notification. |
| `message_data` | `map[string]any` | No | An object containing the key-value pairs referenced using liquid in your message. |
| `preheader` | `string` | No | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `queue_draft` | `bool` | No | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `queued_at` | `int` | No | A Unix timestamp for when Customer.io accepted and queued your request. |
| `reply_to` | `string` | No | The address that recipients can reply to, if different from the `from` address. |
| `send_at` | `int` | No | For a scheduled message, the Unix timestamp when the message is set to send. |
| `send_to_unsubscribed` | `bool` | No | If false, your message is not sent to unsubscribed recipients. |
| `sound` | `string` | No | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `subject` | `string` | No | The subject line for your message. |
| `title` | `string` | No | The title for your notification. |
| `to` | `string` | Yes | The recipients you want to send to, separated by commas. |
| `tracked` | `bool` | No | If true, Customer.io tracks opens and link clicks in your message. |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SendMessage(nil).Create(map[string]any{
    "custom_device": "example_custom_device",
    "to": "example_to",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SenderIdentityEntity

```go
senderIdentity := client.SenderIdentity(nil)
fmt.Println(senderIdentity.GetName()) // "sender_identity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No | The sender name and email address in the format `name <name@example.com>`. |
| `auto_generated` | `bool` | No | If true, the sender is automatically generated by Customer.io. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `email` | `string` | No | The email address of the sender. |
| `hidden` | `bool` | No | If true, the sender is hidden in the Customer.io UI. |
| `id` | `int` | No | The identifier of a sender. |
| `name` | `string` | No | The name of the sender. |
| `phone` | `string` | No | The phone number of the sender, used for SMS senders. |
| `template_type` | `string` | No | The type of sender. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SenderIdentity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SenderIdentity(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SenderIdentityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SmsEntity

```go
sms := client.Sms(nil)
fmt.Println(sms.GetName()) // "sms"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SmsEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SnippetEntity

```go
snippet := client.Snippet(nil)
fmt.Println(snippet.GetName()) // "snippet"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the snippet, must be unique. |
| `updated_at` | `int` | No | The last date-time the snippet was updated. |
| `value` | `string` | Yes | The contents of the snippet. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Snippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Snippet(nil).Create(map[string]any{
    "name": "example_name",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Snippet(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Snippet(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SnippetEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StartEntity

```go
start := client.Start(nil)
fmt.Println(start.GetName()) // "start"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StartEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionCenterEntity

```go
subscriptionCenter := client.SubscriptionCenter(nil)
fmt.Println(subscriptionCenter.GetName()) // "subscription_center"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the channel. |
| `id` | `int` | No | The system-generated ID for the subscription channel. |
| `identifier` | `string` | No | The key associated with the subscription topic. |
| `name` | `string` | No | The display name of the subscription channel. |
| `subscribed_by_default` | `bool` | No | If false, a person is opted-out by default. |
| `type` | `string` | No | The type of delivery channel. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SubscriptionCenter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SubscriptionCenter(nil).Load(map[string]any{"id": "subscription_center_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionCenterEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionChannelEntity

```go
subscriptionChannel := client.SubscriptionChannel(nil)
fmt.Println(subscriptionChannel.GetName()) // "subscription_channel"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionChannelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SubscriptionTopicEntity

```go
subscriptionTopic := client.SubscriptionTopic(nil)
fmt.Println(subscriptionTopic.GetName()) // "subscription_topic"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SubscriptionTopicEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SuppressionEntity

```go
suppression := client.Suppression(nil)
fmt.Println(suppression.GetName()) // "suppression"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SuppressionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TestGroupEntity

```go
testGroup := client.TestGroup(nil)
fmt.Println(testGroup.GetName()) // "test_group"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TestGroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransactionalEntity

```go
transactional := client.Transactional(nil)
fmt.Println(transactional.GetName()) // "transactional"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the transactional message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content` | `[]any` | No | The object represents a variant. |
| `created` | `int` | No | The date time when the referenced ID was created. |
| `created_at` | `int` | No | The date time when the referenced ID was created. |
| `description` | `string` | No | A description of the transactional message. |
| `fake_bcc` | `bool` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | No | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `hide_message_body` | `bool` | No | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `id` | `int` | No | The identifier for an action. |
| `language` | `string` | No | The language variant for your message. |
| `link_tracking` | `bool` | No | If true, link tracking is enabled for this message. |
| `name` | `string` | No | The name of the transactional message. |
| `open_tracking` | `bool` | No | If true, open-tracking is enabled for this message. |
| `preheader_text` | `string` | No | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | No | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `queue_drafts` | `bool` | No | If true, messages do not send automatically, and queue as drafts instead. |
| `recipient` | `string` | No | The recipient address for an action. |
| `reply_to` | `string` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `any` | No | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `bool` | No | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `type` | `string` | No | The type of message. |
| `updated` | `int` | No | The date time when the referenced ID was last updated. |
| `updated_at` | `int` | No | The date time when the referenced ID was last updated. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Transactional(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Transactional(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Transactional(nil).Update(map[string]any{
    "id": 1,
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransactionalEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TriggerEntity

```go
trigger := client.Trigger(nil)
fmt.Println(trigger.GetName()) // "trigger"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TriggerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpdateEntity

```go
update := client.Update(nil)
fmt.Println(update.GetName()) // "update"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpdateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WhatsappEntity

```go
whatsapp := client.Whatsapp(nil)
fmt.Println(whatsapp.GetName()) // "whatsapp"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WhatsappEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WorkspaceEntity

```go
workspace := client.Workspace(nil)
fmt.Println(workspace.GetName()) // "workspace"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `billable_messages_sent` | `int` | No | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `id` | `int` | No | The id of the workspace. |
| `messages_sent` | `int` | No | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `name` | `string` | No | The name of the workspace. |
| `object_types` | `int` | No | The current count of object types in the workspace. |
| `objects` | `int` | No | The current count of object profiles in the workspace. |
| `people` | `int` | No | The current count of people profiles in the workspace. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Workspace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `GetName() string`

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

```go
client := sdk.NewCustomerioAppSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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

