# CustomerioApp JavaScript SDK Reference

Complete API reference for the CustomerioApp JavaScript SDK.


## CustomerioAppSDK

### Constructor

```ts
new CustomerioAppSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CustomerioAppSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CustomerioAppSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CustomerioAppSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `Activity(data?: object)`

Create a new `Activity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivityEntity` instance.

#### `Asset(data?: object)`

Create a new `Asset` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssetEntity` instance.

#### `Attribute(data?: object)`

Create a new `Attribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AttributeEntity` instance.

#### `Automation(data?: object)`

Create a new `Automation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationEntity` instance.

#### `Broadcast(data?: object)`

Create a new `Broadcast` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BroadcastEntity` instance.

#### `Campaign(data?: object)`

Create a new `Campaign` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CampaignEntity` instance.

#### `Collection(data?: object)`

Create a new `Collection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionEntity` instance.

#### `Content(data?: object)`

Create a new `Content` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContentEntity` instance.

#### `Customer(data?: object)`

Create a new `Customer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomerEntity` instance.

#### `DataIndex(data?: object)`

Create a new `DataIndex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DataIndexEntity` instance.

#### `Delivery(data?: object)`

Create a new `Delivery` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeliveryEntity` instance.

#### `DesignStudio(data?: object)`

Create a new `DesignStudio` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DesignStudioEntity` instance.

#### `DesignStudioEmail(data?: object)`

Create a new `DesignStudioEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DesignStudioEmailEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `End(data?: object)`

Create a new `End` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EndEntity` instance.

#### `EspSuppression(data?: object)`

Create a new `EspSuppression` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EspSuppressionEntity` instance.

#### `Export(data?: object)`

Create a new `Export` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportEntity` instance.

#### `Import(data?: object)`

Create a new `Import` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ImportEntity` instance.

#### `InApp(data?: object)`

Create a new `InApp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InAppEntity` instance.

#### `InboxMessage(data?: object)`

Create a new `InboxMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InboxMessageEntity` instance.

#### `Info(data?: object)`

Create a new `Info` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InfoEntity` instance.

#### `IpAddress(data?: object)`

Create a new `IpAddress` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpAddressEntity` instance.

#### `Language(data?: object)`

Create a new `Language` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LanguageEntity` instance.

#### `Link(data?: object)`

Create a new `Link` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LinkEntity` instance.

#### `LiveNotification(data?: object)`

Create a new `LiveNotification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LiveNotificationEntity` instance.

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `Newsletter(data?: object)`

Create a new `Newsletter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewsletterEntity` instance.

#### `NewsletterMetric(data?: object)`

Create a new `NewsletterMetric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewsletterMetricEntity` instance.

#### `NewsletterVariant(data?: object)`

Create a new `NewsletterVariant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewsletterVariantEntity` instance.

#### `Object(data?: object)`

Create a new `Object` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObjectEntity` instance.

#### `ObjectType(data?: object)`

Create a new `ObjectType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ObjectTypeEntity` instance.

#### `OptOut(data?: object)`

Create a new `OptOut` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OptOutEntity` instance.

#### `Push(data?: object)`

Create a new `Push` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PushEntity` instance.

#### `Relationship(data?: object)`

Create a new `Relationship` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RelationshipEntity` instance.

#### `ReportingWebhook(data?: object)`

Create a new `ReportingWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReportingWebhookEntity` instance.

#### `SearchSuppression(data?: object)`

Create a new `SearchSuppression` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchSuppressionEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `SendMessage(data?: object)`

Create a new `SendMessage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SendMessageEntity` instance.

#### `SenderIdentity(data?: object)`

Create a new `SenderIdentity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SenderIdentityEntity` instance.

#### `Sms(data?: object)`

Create a new `Sms` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SmsEntity` instance.

#### `Snippet(data?: object)`

Create a new `Snippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetEntity` instance.

#### `Start(data?: object)`

Create a new `Start` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StartEntity` instance.

#### `SubscriptionCenter(data?: object)`

Create a new `SubscriptionCenter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionCenterEntity` instance.

#### `SubscriptionChannel(data?: object)`

Create a new `SubscriptionChannel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionChannelEntity` instance.

#### `SubscriptionTopic(data?: object)`

Create a new `SubscriptionTopic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubscriptionTopicEntity` instance.

#### `Suppression(data?: object)`

Create a new `Suppression` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SuppressionEntity` instance.

#### `TestGroup(data?: object)`

Create a new `TestGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TestGroupEntity` instance.

#### `Transactional(data?: object)`

Create a new `Transactional` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransactionalEntity` instance.

#### `Trigger(data?: object)`

Create a new `Trigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TriggerEntity` instance.

#### `Update(data?: object)`

Create a new `Update` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateEntity` instance.

#### `Whatsapp(data?: object)`

Create a new `Whatsapp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WhatsappEntity` instance.

#### `Workspace(data?: object)`

Create a new `Workspace` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkspaceEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CustomerioAppSDK.test()`.

**Returns:** `CustomerioAppSDK` instance in test mode.


---

## ActionEntity

```ts
const action = client.Action()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivityEntity

```ts
const activity = client.Activity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer_id` | `string|null` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `Object` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `*` | No |  |
| `delivery_id` | `string` | No | The message ID. |
| `delivery_type` | `string` | No | The recipient device, if applicable. |
| `id` | `string` | No | The identifier for the action. |
| `name` | `string` | No | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `number` | No | The date and time when the action occurred. |
| `type` | `string` | No | The type of activity. |
| `url` | `string` | No | The page URL, for `page` activities. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Activity().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssetEntity

```ts
const asset = client.Asset()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `number` | No | Unix timestamp when the asset was created. |
| `id` | `number` | No | The unique identifier of the file asset. |
| `name` | `string` | No | The display name of the file asset. |
| `parent_folder_id` | `number|null` | No | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `string` | No | The storage URL or path where the file is hosted. |
| `size` | `number` | No | The file size in bytes. |
| `updated` | `number` | No | Unix timestamp when the asset was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Asset().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Asset().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Asset().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Asset().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Asset().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AttributeEntity

```ts
const attribute = client.Attribute()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationEntity

```ts
const automation = client.Automation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `number` | No | The identifier for an action. |
| `actions` | `Array` | No | Each object in the array represents an action in your automation. |
| `activated` | `Array` | No | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `campaigns` | `Array` | No | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `number` | No | The identifier for a message in a one-time send. |
| `converted` | `Array` | No | People who matched the conversion criteria for the automation. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `customer_id` | `string|null` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `Object` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `string` | No | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `Array` | No | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `string|null` | No | Explains why a message failed, if applicable. |
| `finished` | `Array` | No | People who finished the journey. |
| `forgotten` | `boolean` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `Object` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `Object` | No |  |
| `message_template_id` | `number` | No | The identifier of the message template used to create a message. |
| `messaged` | `Array` | No | People who experienced at least one non-delay action in the journey. |
| `metric` | `Object` | No | Contains metrics for the link. |
| `metrics` | `Object` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `Array` | No | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `string` | No |  |
| `next` | `string` | No | Indicates the next page of results. |
| `parent_action_id` | `number` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `res` | `string` | No | The resolution we reported at. |
| `series` | `Object` | No | Metrics grouped by the requested resolution. |
| `start` | `string` | No | The start of the window we reported on, in ISO 8601 format. |
| `started` | `Array` | No | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `Object` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Automation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Automation().load({ campaign_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Automation().update({
  action_id: 1,
  campaign_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BroadcastEntity

```ts
const broadcast = client.Broadcast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | No | A list of actions used by the broadcast. |
| `active` | `boolean` | No | If true, the broadcast is active. |
| `broadcast_id` | `number` | No | The identifier for a broadcast. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `Array` | No | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `number` | No | The date and time when you activated the broadcast. |
| `id` | `number` | No | The identifier for a broadcast trigger. |
| `language_variants` | `Object` | No | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `Object` | No |  |
| `metric` | `Object` | No | Contains metrics for the link. |
| `msg_template_ids` | `Array` | No | Indicates the message template(s) used in this broadcast. |
| `name` | `string` | No | The name of the broadcast. |
| `next` | `number` | No | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `number` | No | The date-time when Customer.io processed the trigger. |
| `state` | `string` | No | The state of the broadcast. |
| `tags` | `Array` | No | An array of tags you set on this broadcast. |
| `type` | `string` | No | The type of broadcast. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Broadcast().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Broadcast().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Broadcast().update({
  id: 1,
  action_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BroadcastEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CampaignEntity

```ts
const campaign = client.Campaign()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CampaignEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionEntity

```ts
const collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bytes` | `number` | No | The size of the collection in bytes. |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `id` | `number` | No | The identifier for the collection. |
| `name` | `string` | No | The name of the collection. |
| `rows` | `number` | No | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `Array` | No | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Collection().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Collection().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Collection().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Collection().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Collection().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContentEntity

```ts
const content = client.Content()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomerEntity

```ts
const customer = client.Customer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cio_id` | `string` | Yes | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `string|null` | Yes | A person's email address, if set. |
| `filter` | `*` | Yes | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `string|null` | Yes | A person's unique ID, if set. |
| `identifiers` | `Array` | No | An array of objects, where each object represents a customer. |
| `ids` | `Array` | No | In general, you should use the `identifiers` array. |
| `next` | `string` | No | The `start` value for the next page of results. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Customer().create({
  cio_id: 'example_cio_id',
  email: 'example_email',
  filter: 'example_filter',
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Customer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Customer().load({ id: 'customer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DataIndexEntity

```ts
const data_index = client.DataIndex()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DataIndex().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DataIndexEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeliveryEntity

```ts
const delivery = client.Delivery()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeliveryEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DesignStudioEntity

```ts
const design_studio = client.DesignStudio()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | No | HTML content |
| `created` | `number` | No | Unix timestamp of when the component was created. |
| `id` | `string` | No | ID of the component |
| `name` | `string` | No | Display name of the component. |
| `parent_folder_id` | `string|null` | No | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `string` | No | The component tag name, used to reference your component in an email. |
| `updated` | `number` | No | Unix timestamp of the last update to the component. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DesignStudio().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DesignStudio().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DesignStudio().load({ id: 'design_studio_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DesignStudio().remove({ id: 'design_studio_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DesignStudio().update({
  id: 'design_studio_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DesignStudioEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DesignStudioEmailEntity

```ts
const design_studio_email = client.DesignStudioEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amp` | `string` | No | AMP HTML variant. |
| `available_languages` | `Array` | No | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `string` | No | Browser used to render the client. |
| `category` | `string` | No | Where the client renders. |
| `check` | `string` | No | Which check produced this finding. |
| `client` | `string` | No | Name of the email client and device. |
| `client_ids` | `Array` | No | The device identifiers requested for this job. |
| `content` | `Object` | No | The content of your email. |
| `created` | `number` | No | Unix timestamp of when the translation was created. |
| `created_at` | `number` | No | When you submitted the preview job. |
| `created_on_publish` | `boolean` | No | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `number` | No | Credits originally granted for a tier. |
| `credits_remaining` | `number` | No | Credits left to spend from this tier. |
| `dependencies` | `Array` | No |  |
| `description` | `string` | No | Explanatory text you provided when creating a version. |
| `details` | `string` | No | Explanation and suggested fix. |
| `emails` | `Array` | No |  |
| `envelope` | `Object` | No | The envelope of your email, like from and to addresses. |
| `expires_at` | `number|null` | No | When this pool's credits expire, if ever. |
| `feedback` | `boolean` | No | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `Array` | No |  |
| `has_unpublished_changes` | `boolean` | No | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `string` | No | Full HTML with liquid tags left intact. |
| `id` | `string` | No | Unique identifier for the email. |
| `is_linked` | `boolean` | No | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `boolean` | No | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `boolean` | No | Whether the translation is a template |
| `language` | `string` | No | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `string` | No | ID of the parent email that groups all translations. |
| `lax_mode` | `boolean` | No | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `Object` | No |  |
| `name` | `string` | No | The batch label provided when you sent an email for previews. |
| `node` | `Object` | No | The content and settings stored in the version. |
| `node_count` | `number` | No | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `string` | No | The UUID of the rendered email node. |
| `node_type` | `string` | No | Always `"EMAIL"`. |
| `os` | `string` | No | Operating system the client runs on. |
| `parent_folder_id` | `string|null` | No | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `Array` | No | One object per requested preview. |
| `replayed` | `boolean` | No | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `number` | No | ID of the preview job. |
| `sample_data` | `Object` | No | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
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
| `transformers` | `Object` | No | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `number` | No | Unix timestamp of the last update to the translation. |
| `updated_at` | `number` | No | When the job's status was last updated. |
| `version` | `Object` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DesignStudioEmail().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.DesignStudioEmail().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DesignStudioEmail().load({ id: 'design_studio_email_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.DesignStudioEmail().remove({ id: 'design_studio_email_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.DesignStudioEmail().update({
  id: 'design_studio_email_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DesignStudioEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EndEntity

```ts
const end = client.End()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EndEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EspSuppressionEntity

```ts
const esp_suppression = client.EspSuppression()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No | The reason the addresses are suppressed. |
| `id` | `string` | No |  |
| `next` | `string` | No | The `start` value for the next page of results. |
| `suppressions` | `Array` | No | The addresses suppressed in this category. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EspSuppression().create({
  email_address: 'example_email_address',
  suppression_type: 'example_suppression_type',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EspSuppression().load({ id: 'esp_suppression_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EspSuppression().remove({ email_address: 'email_address', suppression_type: 'suppression_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EspSuppressionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExportEntity

```ts
const export_ = client.Export()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Export().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Export().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Export().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ImportEntity

```ts
const import_ = client.Import()
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
| `import` | `*` | Yes |  |
| `name` | `string` | No | A friendly name for your import. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `string` | No | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `number` | No | The number of rows we imported from the CSV. |
| `rows_to_import` | `number` | No | The total number of importable rows we found in the CSV. |
| `state` | `string` | No | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `string` | No | The type of import. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Import().create({
  import: 'example_import',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Import().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InAppEntity

```ts
const in_app = client.InApp()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InAppEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InboxMessageEntity

```ts
const inbox_message = client.InboxMessage()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InboxMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InfoEntity

```ts
const info = client.Info()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Info().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InfoEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpAddressEntity

```ts
const ip_address = client.IpAddress()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpAddressEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LanguageEntity

```ts
const language = client.Language()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LanguageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LinkEntity

```ts
const link = client.Link()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LinkEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LiveNotificationEntity

```ts
const live_notification = client.LiveNotification()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.LiveNotification().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.LiveNotification().load({ id: 'live_notification_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LiveNotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MessageEntity

```ts
const message = client.Message()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_id` | `number` | No | The identifier for an action. |
| `broadcast_id` | `string` | No |  |
| `campaign_id` | `string` | No |  |
| `content_id` | `number` | No | The identifier for a message in a one-time send. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `customer_id` | `string|null` | No | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `Object` | Yes | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `string|null` | No | Explains why a message failed, if applicable. |
| `forgotten` | `boolean` | No | If true message contents are not retained by Customer.io. |
| `id` | `string` | No | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `number` | No | The identifier of the message template used to create a message. |
| `metrics` | `Object` | No | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `string` | No |  |
| `parent_action_id` | `number` | No | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | No | The recipient address for an action. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `tracked_responses` | `Object` | No | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | No | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | No | The type of message or action for a delivery, automation action, or related object. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Message().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Message().load({ id: 'message_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewsletterEntity

```ts
const newsletter = client.Newsletter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_ids` | `Array` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `number` | No | The identifier for a one-time send. |
| `name` | `string` | No | The name of the one-time send. |
| `recipient_segment_ids` | `Array` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `number` | No | The last time the one-time send was sent. |
| `subscription_topic_id` | `number` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `Array` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Newsletter().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Newsletter().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Newsletter().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Newsletter().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewsletterEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewsletterMetricEntity

```ts
const newsletter_metric = client.NewsletterMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `link` | `Object` | No |  |
| `metric` | `Object` | No | Contains metrics for the link. |
| `series` | `Object` | No | Metrics grouped by the requested resolution. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NewsletterMetric().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NewsletterMetric().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewsletterMetricEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewsletterVariantEntity

```ts
const newsletter_variant = client.NewsletterVariant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the variant. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content_ids` | `Array` | No | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
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
| `recipient_segment_ids` | `Array` | No | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `string` | No | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `number|null` | No | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `number` | No | The last time the one-time send was sent. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `subscription_topic_id` | `number` | No | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `Array` | No | An array of tags associated with the one-time send. |
| `type` | `string` | No | Channel type for a one-time send or one-time send content variant. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NewsletterVariant().create({
  newsletter_id: 1,
  test_group_id: 'example_test_group_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NewsletterVariant().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NewsletterVariant().load({ newsletter_id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.NewsletterVariant().remove({ language: 'language', newsletter_id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NewsletterVariant().update({
  newsletter_id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewsletterVariantEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObjectEntity

```ts
const object = client.Object()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `Object` | No | Attributes assigned to this object. |
| `enabled` | `boolean` | No | If true, the object type is enabled. |
| `filter` | `*` | Yes | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `string` | No | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `string` | No | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `Object` | No | Identifies an object. |
| `ids` | `Array` | No | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `string` | No | The name of the object type. |
| `next` | `string` | No | Indicates the next page of results. |
| `object_type_disabled` | `boolean` | No | If true, the object is disabled. |
| `object_type_id` | `string` | No | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `string` | No | The singular name of the object type. |
| `singular_slug` | `string` | No | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `string` | No | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `Object` | No | The epoch timestamps when corresponding attributes were set on the object. |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Object().create({
  filter: 'example_filter',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Object().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Object().load({ id: 1, object_id: 'object_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ObjectTypeEntity

```ts
const object_type = client.ObjectType()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ObjectTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OptOutEntity

```ts
const opt_out = client.OptOut()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | No | The channel that the person is opted out of. |
| `cio_id` | `string` | No | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `string` | No | The person's ID. |
| `from` | `string` | No | The sender that the person is opted out of. |
| `optouts` | `Array` | Yes | The senders and channels you want to opt the person out of, or back in to. |

### Field Usage by Operation

| Field | list | update |
| --- | --- | --- |
| `channel` | - | - |
| `cio_id` | - | - |
| `customer_id` | - | - |
| `from` | - | - |
| `optouts` | Yes | - |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OptOut().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.OptOut().update({
  customer_id: 'customer_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OptOutEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PushEntity

```ts
const push = client.Push()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PushEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RelationshipEntity

```ts
const relationship = client.Relationship()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RelationshipEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReportingWebhookEntity

```ts
const reporting_webhook = client.ReportingWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `disabled` | `boolean` | No | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `string` | Yes | The webhook URL. |
| `events` | `Array` | Yes | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `boolean` | No | Set to `false` to send unique open and click events to the webhook. |
| `id` | `number` | No | The identifier for the webhook. |
| `name` | `string` | Yes | The name of your webhook. |
| `type` | `string` | No | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `boolean` | No | Set to `true` to include the message `body` in `_sent` events. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ReportingWebhook().create({
  endpoint: 'example_endpoint',
  events: [],
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ReportingWebhook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReportingWebhook().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ReportingWebhook().remove({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ReportingWebhook().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReportingWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchSuppressionEntity

```ts
const search_suppression = client.SearchSuppression()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchSuppressionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `number` | No | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | No | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | No | A description for the segment. |
| `id` | `number` | No | The identifier for a segment; used to target a segment in requests. |
| `name` | `string` | No | The name of the segment. |
| `progress` | `number|null` | No | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `Object` | Yes |  |
| `state` | `string` | No | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `Array|null` | No | The tags assigned to the segment, if any. |
| `type` | `string` | No | The type of segment. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Segment().create({
  segment: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Segment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Segment().load({ id: 1 })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Segment().remove({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SendMessageEntity

```ts
const send_message = client.SendMessage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `Object` | No | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `boolean` | No | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `string` | No | Blind copy message recipients. |
| `body` | `string` | No | The HTML body of your message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `body_plain` | `string` | No | The plaintext body of your message. |
| `cc` | `string` | No | Carbon copy message recipients, separated by commas. |
| `custom_data` | `Object` | No | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `*` | Yes | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `Object` | No | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `string` | No | A unique identifier for the message. |
| `disable_css_preprocessing` | `boolean` | No | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `boolean` | No | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `boolean` | No | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | No | The address your email is from. |
| `headers` | `string` | No | A JSON string containing header objects with `name` and `value`. |
| `id` | `number` | No | The `trigger_id` for this operation. |
| `identifiers` | `*` | No | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `string` | No | An image URL to show in the push. |
| `language` | `string` | No | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `string` | No | A deep link to open when the push is tapped. |
| `message` | `string` | No | The message body for your notification. |
| `message_data` | `Object` | No | An object containing the key-value pairs referenced using liquid in your message. |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SendMessage().create({
  custom_device: 'example_custom_device',
  to: 'example_to',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SendMessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SenderIdentityEntity

```ts
const sender_identity = client.SenderIdentity()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SenderIdentity().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SenderIdentity().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SenderIdentityEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SmsEntity

```ts
const sms = client.Sms()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SmsEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetEntity

```ts
const snippet = client.Snippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | Yes | The name of the snippet, must be unique. |
| `updated_at` | `number` | No | The last date-time the snippet was updated. |
| `value` | `string` | Yes | The contents of the snippet. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Snippet().create({
  name: 'example_name',
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Snippet().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Snippet().remove({ id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Snippet().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StartEntity

```ts
const start = client.Start()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StartEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionCenterEntity

```ts
const subscription_center = client.SubscriptionCenter()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SubscriptionCenter().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SubscriptionCenter().load({ id: 'subscription_center_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionCenterEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionChannelEntity

```ts
const subscription_channel = client.SubscriptionChannel()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionChannelEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubscriptionTopicEntity

```ts
const subscription_topic = client.SubscriptionTopic()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubscriptionTopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SuppressionEntity

```ts
const suppression = client.Suppression()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SuppressionEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TestGroupEntity

```ts
const test_group = client.TestGroup()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TestGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransactionalEntity

```ts
const transactional = client.Transactional()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bcc` | `string` | No | The blind-copy address(es) for this action. |
| `body` | `string` | No | The body of the transactional message. |
| `body_amp` | `string` | No | AMP-enabled content for your email. |
| `cc` | `string` | No | The carbon-copy address(es) for this action. |
| `content` | `Array` | No | The object represents a variant. |
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
| `reply_to_id` | `number|null` | No | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `boolean` | No | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `string` | No | The subject line for an `email` action. |
| `type` | `string` | No | The type of message. |
| `updated` | `number` | No | The date time when the referenced ID was last updated. |
| `updated_at` | `number` | No | The date time when the referenced ID was last updated. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Transactional().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Transactional().load({ id: 1 })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Transactional().update({
  id: 1,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransactionalEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TriggerEntity

```ts
const trigger = client.Trigger()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateEntity

```ts
const update = client.Update()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WhatsappEntity

```ts
const whatsapp = client.Whatsapp()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WhatsappEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkspaceEntity

```ts
const workspace = client.Workspace()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Workspace().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkspaceEntity` instance with the same client and
options.

#### `client()`

Return the parent `CustomerioAppSDK` instance.

#### `entopts()`

Return a copy of the entity options.


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

```ts
const client = new CustomerioAppSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
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

