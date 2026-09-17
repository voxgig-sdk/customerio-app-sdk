# CustomerioApp PHP SDK



The PHP SDK for the CustomerioApp API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Action()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/customerio-app-sdk/releases](https://github.com/voxgig-sdk/customerio-app-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'customerioapp_sdk.php';

$client = new CustomerioAppSDK([
    "apikey" => getenv("CUSTOMERIO_APP_APIKEY"),
]);
```

### 3. Load an automation

Automation is nested under campaign, so provide the `campaign_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the Automation record (throws on error).
    $automation = $client->Automation()->load(["campaign_id" => 1]);
    print_r($automation->data_get());
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $collections = $client->Collection()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CustomerioAppSDK::test([
    "entity" => ["collection" => ["test01" => ["id" => "test01"]]],
]);

// list() returns entity instances (throws on error);
// call data_get() for the mock record.
$collection = $client->Collection()->list();
print_r(array_map(fn($item) => $item->data_get(), $collection));
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CustomerioAppSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CUSTOMERIO_APP_TEST_LIVE=TRUE
CUSTOMERIO_APP_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CustomerioAppSDK

```php
require_once 'customerioapp_sdk.php';
$client = new CustomerioAppSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CustomerioAppSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CustomerioAppSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Action` | `($data): ActionEntity` | Create an Action entity instance. |
| `Activity` | `($data): ActivityEntity` | Create an Activity entity instance. |
| `Asset` | `($data): AssetEntity` | Create an Asset entity instance. |
| `Attribute` | `($data): AttributeEntity` | Create an Attribute entity instance. |
| `Automation` | `($data): AutomationEntity` | Create an Automation entity instance. |
| `Broadcast` | `($data): BroadcastEntity` | Create a Broadcast entity instance. |
| `Campaign` | `($data): CampaignEntity` | Create a Campaign entity instance. |
| `Collection` | `($data): CollectionEntity` | Create a Collection entity instance. |
| `Content` | `($data): ContentEntity` | Create a Content entity instance. |
| `Customer` | `($data): CustomerEntity` | Create a Customer entity instance. |
| `DataIndex` | `($data): DataIndexEntity` | Create a DataIndex entity instance. |
| `Delivery` | `($data): DeliveryEntity` | Create a Delivery entity instance. |
| `DesignStudio` | `($data): DesignStudioEntity` | Create a DesignStudio entity instance. |
| `DesignStudioEmail` | `($data): DesignStudioEmailEntity` | Create a DesignStudioEmail entity instance. |
| `Email` | `($data): EmailEntity` | Create an Email entity instance. |
| `End` | `($data): EndEntity` | Create an End entity instance. |
| `EspSuppression` | `($data): EspSuppressionEntity` | Create an EspSuppression entity instance. |
| `Export` | `($data): ExportEntity` | Create an Export entity instance. |
| `Import` | `($data): ImportEntity` | Create an Import entity instance. |
| `InApp` | `($data): InAppEntity` | Create an InApp entity instance. |
| `InboxMessage` | `($data): InboxMessageEntity` | Create an InboxMessage entity instance. |
| `Info` | `($data): InfoEntity` | Create an Info entity instance. |
| `IpAddress` | `($data): IpAddressEntity` | Create an IpAddress entity instance. |
| `Language` | `($data): LanguageEntity` | Create a Language entity instance. |
| `Link` | `($data): LinkEntity` | Create a Link entity instance. |
| `LiveNotification` | `($data): LiveNotificationEntity` | Create a LiveNotification entity instance. |
| `Message` | `($data): MessageEntity` | Create a Message entity instance. |
| `Newsletter` | `($data): NewsletterEntity` | Create a Newsletter entity instance. |
| `NewsletterMetric` | `($data): NewsletterMetricEntity` | Create a NewsletterMetric entity instance. |
| `NewsletterVariant` | `($data): NewsletterVariantEntity` | Create a NewsletterVariant entity instance. |
| `Object` | `($data): ObjectEntity` | Create an Object entity instance. |
| `ObjectType` | `($data): ObjectTypeEntity` | Create an ObjectType entity instance. |
| `OptOut` | `($data): OptOutEntity` | Create an OptOut entity instance. |
| `Push` | `($data): PushEntity` | Create a Push entity instance. |
| `Relationship` | `($data): RelationshipEntity` | Create a Relationship entity instance. |
| `ReportingWebhook` | `($data): ReportingWebhookEntity` | Create a ReportingWebhook entity instance. |
| `SearchSuppression` | `($data): SearchSuppressionEntity` | Create a SearchSuppression entity instance. |
| `Segment` | `($data): SegmentEntity` | Create a Segment entity instance. |
| `SendMessage` | `($data): SendMessageEntity` | Create a SendMessage entity instance. |
| `SenderIdentity` | `($data): SenderIdentityEntity` | Create a SenderIdentity entity instance. |
| `Sms` | `($data): SmsEntity` | Create a Sms entity instance. |
| `Snippet` | `($data): SnippetEntity` | Create a Snippet entity instance. |
| `Start` | `($data): StartEntity` | Create a Start entity instance. |
| `SubscriptionCenter` | `($data): SubscriptionCenterEntity` | Create a SubscriptionCenter entity instance. |
| `SubscriptionChannel` | `($data): SubscriptionChannelEntity` | Create a SubscriptionChannel entity instance. |
| `SubscriptionTopic` | `($data): SubscriptionTopicEntity` | Create a SubscriptionTopic entity instance. |
| `Suppression` | `($data): SuppressionEntity` | Create a Suppression entity instance. |
| `TestGroup` | `($data): TestGroupEntity` | Create a TestGroup entity instance. |
| `Transactional` | `($data): TransactionalEntity` | Create a Transactional entity instance. |
| `Trigger` | `($data): TriggerEntity` | Create a Trigger entity instance. |
| `Update` | `($data): UpdateEntity` | Create an Update entity instance. |
| `Whatsapp` | `($data): WhatsappEntity` | Create a Whatsapp entity instance. |
| `Workspace` | `($data): WorkspaceEntity` | Create a Workspace entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Action

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Activity

| Field | Description |
| --- | --- |
| `customer_id` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` |  |
| `delivery_id` | The message ID. |
| `delivery_type` | The recipient device, if applicable. |
| `id` | The identifier for the action. |
| `name` | The name of the event, for `event` and `screen` activities. |
| `timestamp` | The date and time when the action occurred. |
| `type` | The type of activity. |
| `url` | The page URL, for `page` activities. |

Operations: List.

API path: `/v1/activities`

#### Asset

| Field | Description |
| --- | --- |
| `created` | Unix timestamp when the asset was created. |
| `id` | The unique identifier of the file asset. |
| `name` | The display name of the file asset. |
| `parent_folder_id` | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | The storage URL or path where the file is hosted. |
| `size` | The file size in bytes. |
| `updated` | Unix timestamp when the asset was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/assets/files`

#### Attribute

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Automation

| Field | Description |
| --- | --- |
| `action_id` | The identifier for an action. |
| `actions` | Each object in the array represents an action in your automation. |
| `activated` | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` |  |
| `campaign_id` |  |
| `campaigns` | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | The identifier for a message in a one-time send. |
| `converted` | People who matched the conversion criteria for the automation. |
| `created` | The date time when the referenced ID was created. |
| `customer_id` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | Explains why a message failed, if applicable. |
| `finished` | People who finished the journey. |
| `forgotten` | If true message contents are not retained by Customer.io. |
| `id` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` |  |
| `message_template_id` | The identifier of the message template used to create a message. |
| `messaged` | People who experienced at least one non-delay action in the journey. |
| `metric` | Contains metrics for the link. |
| `metrics` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` |  |
| `next` | Indicates the next page of results. |
| `parent_action_id` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | The recipient address for an action. |
| `res` | The resolution we reported at. |
| `series` | Metrics grouped by the requested resolution. |
| `start` | The start of the window we reported on, in ISO 8601 format. |
| `started` | The total number of people who meet the trigger criteria for a journey. |
| `subject` | The subject line for an `email` action. |
| `tracked_responses` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | The type of message or action for a delivery, automation action, or related object. |

Operations: List, Load, Update.

API path: `/v1/campaigns/{campaign_id}/messages`

#### Broadcast

| Field | Description |
| --- | --- |
| `actions` | A list of actions used by the broadcast. |
| `active` | If true, the broadcast is active. |
| `broadcast_id` | The identifier for a broadcast. |
| `created` | The date time when the referenced ID was created. |
| `created_at` | The date time when the referenced ID was created. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | The date and time when you activated the broadcast. |
| `id` | The identifier for a broadcast trigger. |
| `language_variants` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` |  |
| `metric` | Contains metrics for the link. |
| `msg_template_ids` | Indicates the message template(s) used in this broadcast. |
| `name` | The name of the broadcast. |
| `next` | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | The date-time when Customer.io processed the trigger. |
| `state` | The state of the broadcast. |
| `tags` | An array of tags you set on this broadcast. |
| `type` | The type of broadcast. |
| `updated` | The date time when the referenced ID was last updated. |

Operations: List, Load, Update.

API path: `/v1/broadcasts/{broadcast_id}/messages`

#### Campaign

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Collection

| Field | Description |
| --- | --- |
| `bytes` | The size of the collection in bytes. |
| `created_at` | The date time when the referenced ID was created. |
| `id` | The identifier for the collection. |
| `name` | The name of the collection. |
| `rows` | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/collections`

#### Content

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Customer

| Field | Description |
| --- | --- |
| `cio_id` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | A person's email address, if set. |
| `filter` | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | A person's unique ID, if set. |
| `identifiers` | An array of objects, where each object represents a customer. |
| `ids` | In general, you should use the `identifiers` array. |
| `next` | The `start` value for the next page of results. |

Operations: Create, List, Load.

API path: `/v1/customers`

#### DataIndex

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/v1/data_index/attributes`

#### Delivery

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### DesignStudio

| Field | Description |
| --- | --- |
| `content` | HTML content |
| `created` | Unix timestamp of when the component was created. |
| `id` | ID of the component |
| `name` | Display name of the component. |
| `parent_folder_id` | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | The component tag name, used to reference your component in an email. |
| `updated` | Unix timestamp of the last update to the component. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/design_studio/components`

#### DesignStudioEmail

| Field | Description |
| --- | --- |
| `amp` | AMP HTML variant. |
| `available_languages` | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | Browser used to render the client. |
| `category` | Where the client renders. |
| `check` | Which check produced this finding. |
| `client` | Name of the email client and device. |
| `client_ids` | The device identifiers requested for this job. |
| `content` | The content of your email. |
| `created` | Unix timestamp of when the translation was created. |
| `created_at` | When you submitted the preview job. |
| `created_on_publish` | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | Credits originally granted for a tier. |
| `credits_remaining` | Credits left to spend from this tier. |
| `dependencies` |  |
| `description` | Explanatory text you provided when creating a version. |
| `details` | Explanation and suggested fix. |
| `emails` |  |
| `envelope` | The envelope of your email, like from and to addresses. |
| `expires_at` | When this pool's credits expire, if ever. |
| `feedback` | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` |  |
| `has_unpublished_changes` | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | Full HTML with liquid tags left intact. |
| `id` | Unique identifier for the email. |
| `is_linked` | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | Whether the translation is a template |
| `language` | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | ID of the parent email that groups all translations. |
| `lax_mode` | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` |  |
| `name` | The batch label provided when you sent an email for previews. |
| `node` | The content and settings stored in the version. |
| `node_count` | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | The UUID of the rendered email node. |
| `node_type` | Always `"EMAIL"`. |
| `os` | Operating system the client runs on. |
| `parent_folder_id` | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | One object per requested preview. |
| `replayed` | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | ID of the preview job. |
| `sample_data` | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `severity` | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `state` | Whether this finding represents an issue. |
| `summary` | Location context, for example "In the email body". |
| `template_id` | The ID of the workflow template that received the content. |
| `text` | Plain text version of the email. |
| `tier` | The credit tier this pool belongs to. |
| `title` | Short human-readable title. |
| `total_previews_bounced` | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `total_previews_cached` | Previews served from an earlier run's screenshot. |
| `total_previews_ready` | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `total_previews_requested` | Previews requested in the job, for the email in the path. |
| `total_previews_succeeded` | Previews this run generated itself, excluding cached ones. |
| `transformers` | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | Unix timestamp of the last update to the translation. |
| `updated_at` | When the job's status was last updated. |
| `version` |  |
| `version_id` | The identifier of the template version created by the publish. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/design_studio/emails/{id}/versions/{version_id}/restore`

#### Email

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### End

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### EspSuppression

| Field | Description |
| --- | --- |
| `category` | The reason the addresses are suppressed. |
| `id` |  |
| `next` | The `start` value for the next page of results. |
| `suppressions` | The addresses suppressed in this category. |

Operations: Create, Load, Remove.

API path: `/v1/esp/suppression/{suppression_type}/{email_address}`

#### Export

| Field | Description |
| --- | --- |
| `created_at` | The date time when the referenced ID was created. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | A description of the export. |
| `downloads` | Counts the total number of times the export has been downloaded. |
| `failed` | If true, the export was unsuccessful. |
| `id` | The identifier for the export. |
| `status` | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `total` | The number of entries in the export. |
| `type` | The type of information contained in the export. |
| `updated_at` | The date time when the referenced ID was last updated. |
| `user_email` | The email of the user who created the export. |
| `user_id` | The user who created the export. |

Operations: Create, List, Load.

API path: `/v1/exports/customers`

#### Import

| Field | Description |
| --- | --- |
| `created_at` | The date time when the referenced ID was created. |
| `data_to_process` | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | A helpful description that can help you find and recognize your import operation. |
| `error` | If your import fails, this helps you understand why. |
| `id` | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | The type of identifier you used to identify people in your CSV. |
| `import` |  |
| `name` | A friendly name for your import. |
| `object_type_id` | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | The number of rows we imported from the CSV. |
| `rows_to_import` | The total number of importable rows we found in the CSV. |
| `state` | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | The type of import. |
| `updated_at` | The date time when the referenced ID was last updated. |

Operations: Create, Load.

API path: `/v1/imports`

#### InApp

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### InboxMessage

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Info

| Field | Description |
| --- | --- |

Operations: List.

API path: `/v1/info/ip_addresses`

#### IpAddress

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Language

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Link

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### LiveNotification

| Field | Description |
| --- | --- |
| `created_at` | When the delivery was created (unix timestamp). |
| `id` | The delivery ID. |
| `operation` | The lifecycle operation the delivery carried. |
| `source` | Where the operation originated—the API or the device. |
| `status` | The delivery's status. |

Operations: Create, Load.

API path: `/v1/live_notifications/end`

#### Message

| Field | Description |
| --- | --- |
| `action_id` | The identifier for an action. |
| `broadcast_id` |  |
| `campaign_id` |  |
| `content_id` | The identifier for a message in a one-time send. |
| `created` | The date time when the referenced ID was created. |
| `customer_id` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | Explains why a message failed, if applicable. |
| `forgotten` | If true message contents are not retained by Customer.io. |
| `id` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | The identifier of the message template used to create a message. |
| `metrics` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` |  |
| `parent_action_id` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | The recipient address for an action. |
| `subject` | The subject line for an `email` action. |
| `tracked_responses` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | The type of message or action for a delivery, automation action, or related object. |

Operations: List, Load.

API path: `/v1/messages`

#### Newsletter

| Field | Description |
| --- | --- |
| `content_ids` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | The date time when the referenced ID was created. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | The identifier for a one-time send. |
| `name` | The name of the one-time send. |
| `recipient_segment_ids` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | The last time the one-time send was sent. |
| `subscription_topic_id` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | An array of tags associated with the one-time send. |
| `type` | Channel type for a one-time send or one-time send content variant. |
| `updated` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove.

API path: `/v1/newsletters/{newsletter_id}/schedule`

#### NewsletterMetric

| Field | Description |
| --- | --- |
| `id` |  |
| `link` |  |
| `metric` | Contains metrics for the link. |
| `series` | Metrics grouped by the requested resolution. |
| `type` | Channel type for a one-time send or one-time send content variant. |

Operations: List, Load.

API path: `/v1/newsletters/{newsletter_id}/messages`

#### NewsletterVariant

| Field | Description |
| --- | --- |
| `bcc` | The blind-copy address(es) for this action. |
| `body` | The body of the variant. |
| `body_amp` | AMP-enabled content for your email. |
| `cc` | The carbon-copy address(es) for this action. |
| `content_ids` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | The date time when the referenced ID was created. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `fake_bcc` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | A JSON string containing header objects with `name` and `value`. |
| `id` | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `language` | The language variant for your message. |
| `layout` | The layout used for the variant, if it exists. |
| `name` | The name of the variant, if it exists. |
| `newsletter_id` | The identifier for a one-time send. |
| `preheader_text` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `recipient` | The recipient address for an action. |
| `recipient_segment_ids` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | The address that receives replies for the message, if applicable. |
| `reply_to_id` | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | The last time the one-time send was sent. |
| `subject` | The subject line for an `email` action. |
| `subscription_topic_id` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | An array of tags associated with the one-time send. |
| `type` | Channel type for a one-time send or one-time send content variant. |
| `updated` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language`

#### Object

| Field | Description |
| --- | --- |
| `attributes` | Attributes assigned to this object. |
| `enabled` | If true, the object type is enabled. |
| `filter` | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | Identifies an object. |
| `ids` | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | The name of the object type. |
| `next` | Indicates the next page of results. |
| `object_type_disabled` | If true, the object is disabled. |
| `object_type_id` | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | The singular name of the object type. |
| `singular_slug` | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | The epoch timestamps when corresponding attributes were set on the object. |

Operations: Create, List, Load.

API path: `/v1/objects`

#### ObjectType

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### OptOut

| Field | Description |
| --- | --- |
| `channel` | The channel that the person is opted out of. |
| `cio_id` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | The person's ID. |
| `from` | The sender that the person is opted out of. |
| `optouts` | The senders and channels you want to opt the person out of, or back in to. |

Operations: List, Update.

API path: `/v1/optouts`

#### Push

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Relationship

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ReportingWebhook

| Field | Description |
| --- | --- |
| `disabled` | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | The webhook URL. |
| `events` | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | Set to `false` to send unique open and click events to the webhook. |
| `id` | The identifier for the webhook. |
| `name` | The name of your webhook. |
| `type` | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | Set to `true` to include the message `body` in `_sent` events. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/reporting_webhooks`

#### SearchSuppression

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Segment

| Field | Description |
| --- | --- |
| `created_at` | The date time when the referenced ID was created. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | A description for the segment. |
| `id` | The identifier for a segment; used to target a segment in requests. |
| `name` | The name of the segment. |
| `progress` | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` |  |
| `state` | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | The tags assigned to the segment, if any. |
| `type` | The type of segment. |
| `updated_at` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove.

API path: `/v1/segments`

#### SendMessage

| Field | Description |
| --- | --- |
| `attachments` | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | Blind copy message recipients. |
| `body` | The HTML body of your message. |
| `body_amp` | AMP-enabled content for your email. |
| `body_plain` | The plaintext body of your message. |
| `cc` | Carbon copy message recipients, separated by commas. |
| `custom_data` | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | A device to perform an upsert operation at the time of send. |
| `custom_payload` | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | A unique identifier for the message. |
| `disable_css_preprocessing` | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | If true, the message body is not retained in delivery history. |
| `fake_bcc` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | The address your email is from. |
| `headers` | A JSON string containing header objects with `name` and `value`. |
| `id` | The `trigger_id` for this operation. |
| `identifiers` | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | An image URL to show in the push. |
| `language` | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | A deep link to open when the push is tapped. |
| `message` | The message body for your notification. |
| `message_data` | An object containing the key-value pairs referenced using liquid in your message. |
| `preheader` | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `queue_draft` | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `queued_at` | A Unix timestamp for when Customer.io accepted and queued your request. |
| `reply_to` | The address that recipients can reply to, if different from the `from` address. |
| `send_at` | For a scheduled message, the Unix timestamp when the message is set to send. |
| `send_to_unsubscribed` | If false, your message is not sent to unsubscribed recipients. |
| `sound` | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `subject` | The subject line for your message. |
| `title` | The title for your notification. |
| `to` | The recipients you want to send to, separated by commas. |
| `tracked` | If true, Customer.io tracks opens and link clicks in your message. |
| `transactional_message_id` | The transactional message template you want to use. |

Operations: Create.

API path: `/v1/campaigns/{broadcast_id}/triggers`

#### SenderIdentity

| Field | Description |
| --- | --- |
| `address` | The sender name and email address in the format `name <name@example.com>`. |
| `auto_generated` | If true, the sender is automatically generated by Customer.io. |
| `deduplicate_id` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `email` | The email address of the sender. |
| `hidden` | If true, the sender is hidden in the Customer.io UI. |
| `id` | The identifier of a sender. |
| `name` | The name of the sender. |
| `phone` | The phone number of the sender, used for SMS senders. |
| `template_type` | The type of sender. |

Operations: List, Load.

API path: `/v1/sender_identities`

#### Sms

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Snippet

| Field | Description |
| --- | --- |
| `id` |  |
| `name` | The name of the snippet, must be unique. |
| `updated_at` | The last date-time the snippet was updated. |
| `value` | The contents of the snippet. |

Operations: Create, List, Remove, Update.

API path: `/v1/snippets`

#### Start

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### SubscriptionCenter

| Field | Description |
| --- | --- |
| `description` | A description of the channel. |
| `id` | The system-generated ID for the subscription channel. |
| `identifier` | The key associated with the subscription topic. |
| `name` | The display name of the subscription channel. |
| `subscribed_by_default` | If false, a person is opted-out by default. |
| `type` | The type of delivery channel. |

Operations: List, Load.

API path: `/v1/subscription_channels`

#### SubscriptionChannel

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### SubscriptionTopic

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Suppression

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### TestGroup

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Transactional

| Field | Description |
| --- | --- |
| `bcc` | The blind-copy address(es) for this action. |
| `body` | The body of the transactional message. |
| `body_amp` | AMP-enabled content for your email. |
| `cc` | The carbon-copy address(es) for this action. |
| `content` | The object represents a variant. |
| `created` | The date time when the referenced ID was created. |
| `created_at` | The date time when the referenced ID was created. |
| `description` | A description of the transactional message. |
| `fake_bcc` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | A JSON string containing header objects with `name` and `value`. |
| `hide_message_body` | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `id` | The identifier for an action. |
| `language` | The language variant for your message. |
| `link_tracking` | If true, link tracking is enabled for this message. |
| `name` | The name of the transactional message. |
| `open_tracking` | If true, open-tracking is enabled for this message. |
| `preheader_text` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `queue_drafts` | If true, messages do not send automatically, and queue as drafts instead. |
| `recipient` | The recipient address for an action. |
| `reply_to` | The address that receives replies for the message, if applicable. |
| `reply_to_id` | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | The subject line for an `email` action. |
| `type` | The type of message. |
| `updated` | The date time when the referenced ID was last updated. |
| `updated_at` | The date time when the referenced ID was last updated. |

Operations: List, Load, Update.

API path: `/v1/transactional/{transactional_id}/messages`

#### Trigger

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Update

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Whatsapp

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Workspace

| Field | Description |
| --- | --- |
| `billable_messages_sent` | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `id` | The id of the workspace. |
| `messages_sent` | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `name` | The name of the workspace. |
| `object_types` | The current count of object types in the workspace. |
| `objects` | The current count of object profiles in the workspace. |
| `people` | The current count of people profiles in the workspace. |

Operations: List.

API path: `/v1/workspaces`



## Entities


### Action

Create an instance: `$action = $client->Action();`


### Activity

Create an instance: `$activity = $client->Activity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_id` | `mixed` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `array` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `mixed` |  |
| `delivery_id` | `string` | The message ID. |
| `delivery_type` | `string` | The recipient device, if applicable. |
| `id` | `string` | The identifier for the action. |
| `name` | `string` | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `int` | The date and time when the action occurred. |
| `type` | `string` | The type of activity. |
| `url` | `string` | The page URL, for `page` activities. |

#### Example: List

```php
// list() returns an array of Activity records (throws on error).
$activitys = $client->Activity()->list();
```


### Asset

Create an instance: `$asset = $client->Asset();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Unix timestamp when the asset was created. |
| `id` | `int` | The unique identifier of the file asset. |
| `name` | `string` | The display name of the file asset. |
| `parent_folder_id` | `mixed` | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `string` | The storage URL or path where the file is hosted. |
| `size` | `int` | The file size in bytes. |
| `updated` | `int` | Unix timestamp when the asset was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Asset record (throws on error).
$asset = $client->Asset()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Asset records (throws on error).
$assets = $client->Asset()->list();
```

#### Example: Create

```php
$asset = $client->Asset()->create([
]);
```


### Attribute

Create an instance: `$attribute = $client->Attribute();`


### Automation

Create an instance: `$automation = $client->Automation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_id` | `int` | The identifier for an action. |
| `actions` | `array` | Each object in the array represents an action in your automation. |
| `activated` | `array` | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `string` |  |
| `campaign_id` | `string` |  |
| `campaigns` | `array` | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `int` | The identifier for a message in a one-time send. |
| `converted` | `array` | People who matched the conversion criteria for the automation. |
| `created` | `int` | The date time when the referenced ID was created. |
| `customer_id` | `mixed` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `array` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `string` | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `array` | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `mixed` | Explains why a message failed, if applicable. |
| `finished` | `array` | People who finished the journey. |
| `forgotten` | `bool` | If true message contents are not retained by Customer.io. |
| `id` | `string` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `array` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `array` |  |
| `message_template_id` | `int` | The identifier of the message template used to create a message. |
| `messaged` | `array` | People who experienced at least one non-delay action in the journey. |
| `metric` | `array` | Contains metrics for the link. |
| `metrics` | `array` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `array` | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `string` |  |
| `next` | `string` | Indicates the next page of results. |
| `parent_action_id` | `int` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | The recipient address for an action. |
| `res` | `string` | The resolution we reported at. |
| `series` | `array` | Metrics grouped by the requested resolution. |
| `start` | `string` | The start of the window we reported on, in ISO 8601 format. |
| `started` | `array` | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `string` | The subject line for an `email` action. |
| `tracked_responses` | `array` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | The type of message or action for a delivery, automation action, or related object. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Automation record (throws on error).
$automation = $client->Automation()->load(["campaign_id" => 1]);
```

#### Example: List

```php
// list() returns an array of Automation records (throws on error).
$automations = $client->Automation()->list();
```


### Broadcast

Create an instance: `$broadcast = $client->Broadcast();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `array` | A list of actions used by the broadcast. |
| `active` | `bool` | If true, the broadcast is active. |
| `broadcast_id` | `int` | The identifier for a broadcast. |
| `created` | `int` | The date time when the referenced ID was created. |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `array` | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `int` | The date and time when you activated the broadcast. |
| `id` | `int` | The identifier for a broadcast trigger. |
| `language_variants` | `array` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `array` |  |
| `metric` | `array` | Contains metrics for the link. |
| `msg_template_ids` | `array` | Indicates the message template(s) used in this broadcast. |
| `name` | `string` | The name of the broadcast. |
| `next` | `int` | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `int` | The date-time when Customer.io processed the trigger. |
| `state` | `string` | The state of the broadcast. |
| `tags` | `array` | An array of tags you set on this broadcast. |
| `type` | `string` | The type of broadcast. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Broadcast record (throws on error).
$broadcast = $client->Broadcast()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Broadcast records (throws on error).
$broadcasts = $client->Broadcast()->list();
```


### Campaign

Create an instance: `$campaign = $client->Campaign();`


### Collection

Create an instance: `$collection = $client->Collection();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `int` | The size of the collection in bytes. |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `id` | `int` | The identifier for the collection. |
| `name` | `string` | The name of the collection. |
| `rows` | `int` | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `array` | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Collection record (throws on error).
$collection = $client->Collection()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Collection records (throws on error).
$collections = $client->Collection()->list();
```

#### Example: Create

```php
$collection = $client->Collection()->create([
]);
```


### Content

Create an instance: `$content = $client->Content();`


### Customer

Create an instance: `$customer = $client->Customer();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cio_id` | `string` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `mixed` | A person's email address, if set. |
| `filter` | `mixed` | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `mixed` | A person's unique ID, if set. |
| `identifiers` | `array` | An array of objects, where each object represents a customer. |
| `ids` | `array` | In general, you should use the `identifiers` array. |
| `next` | `string` | The `start` value for the next page of results. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Customer record (throws on error).
$customer = $client->Customer()->load(["id" => "customer_id"]);
```

#### Example: List

```php
// list() returns an array of Customer records (throws on error).
$customers = $client->Customer()->list();
```

#### Example: Create

```php
$customer = $client->Customer()->create([
    "cio_id" => null, // string
    "email" => null, // mixed
    "filter" => null, // mixed
    "id" => null, // mixed
]);
```


### DataIndex

Create an instance: `$data_index = $client->DataIndex();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$data_index = $client->DataIndex()->create([
]);
```


### Delivery

Create an instance: `$delivery = $client->Delivery();`


### DesignStudio

Create an instance: `$design_studio = $client->DesignStudio();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | HTML content |
| `created` | `int` | Unix timestamp of when the component was created. |
| `id` | `string` | ID of the component |
| `name` | `string` | Display name of the component. |
| `parent_folder_id` | `mixed` | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `string` | The component tag name, used to reference your component in an email. |
| `updated` | `int` | Unix timestamp of the last update to the component. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DesignStudio record (throws on error).
$design_studio = $client->DesignStudio()->load(["id" => "design_studio_id"]);
```

#### Example: List

```php
// list() returns an array of DesignStudio records (throws on error).
$design_studios = $client->DesignStudio()->list();
```

#### Example: Create

```php
$design_studio = $client->DesignStudio()->create([
]);
```


### DesignStudioEmail

Create an instance: `$design_studio_email = $client->DesignStudioEmail();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amp` | `string` | AMP HTML variant. |
| `available_languages` | `array` | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `string` | Browser used to render the client. |
| `category` | `string` | Where the client renders. |
| `check` | `string` | Which check produced this finding. |
| `client` | `string` | Name of the email client and device. |
| `client_ids` | `array` | The device identifiers requested for this job. |
| `content` | `array` | The content of your email. |
| `created` | `int` | Unix timestamp of when the translation was created. |
| `created_at` | `int` | When you submitted the preview job. |
| `created_on_publish` | `bool` | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `int` | Credits originally granted for a tier. |
| `credits_remaining` | `int` | Credits left to spend from this tier. |
| `dependencies` | `array` |  |
| `description` | `string` | Explanatory text you provided when creating a version. |
| `details` | `string` | Explanation and suggested fix. |
| `emails` | `array` |  |
| `envelope` | `array` | The envelope of your email, like from and to addresses. |
| `expires_at` | `mixed` | When this pool's credits expire, if ever. |
| `feedback` | `bool` | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `array` |  |
| `has_unpublished_changes` | `bool` | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `string` | Full HTML with liquid tags left intact. |
| `id` | `string` | Unique identifier for the email. |
| `is_linked` | `bool` | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `bool` | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `bool` | Whether the translation is a template |
| `language` | `string` | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `string` | ID of the parent email that groups all translations. |
| `lax_mode` | `bool` | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `array` |  |
| `name` | `string` | The batch label provided when you sent an email for previews. |
| `node` | `array` | The content and settings stored in the version. |
| `node_count` | `int` | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `string` | The UUID of the rendered email node. |
| `node_type` | `string` | Always `"EMAIL"`. |
| `os` | `string` | Operating system the client runs on. |
| `parent_folder_id` | `mixed` | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `array` | One object per requested preview. |
| `replayed` | `bool` | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `int` | ID of the preview job. |
| `sample_data` | `array` | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `severity` | `string` | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `state` | `string` | Whether this finding represents an issue. |
| `summary` | `string` | Location context, for example "In the email body". |
| `template_id` | `int` | The ID of the workflow template that received the content. |
| `text` | `string` | Plain text version of the email. |
| `tier` | `string` | The credit tier this pool belongs to. |
| `title` | `string` | Short human-readable title. |
| `total_previews_bounced` | `int` | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `total_previews_cached` | `int` | Previews served from an earlier run's screenshot. |
| `total_previews_ready` | `int` | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `total_previews_requested` | `int` | Previews requested in the job, for the email in the path. |
| `total_previews_succeeded` | `int` | Previews this run generated itself, excluding cached ones. |
| `transformers` | `array` | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `int` | Unix timestamp of the last update to the translation. |
| `updated_at` | `int` | When the job's status was last updated. |
| `version` | `array` |  |
| `version_id` | `string` | The identifier of the template version created by the publish. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DesignStudioEmail record (throws on error).
$design_studio_email = $client->DesignStudioEmail()->load(["id" => "design_studio_email_id"]);
```

#### Example: List

```php
// list() returns an array of DesignStudioEmail records (throws on error).
$design_studio_emails = $client->DesignStudioEmail()->list();
```

#### Example: Create

```php
$design_studio_email = $client->DesignStudioEmail()->create([
]);
```


### Email

Create an instance: `$email = $client->Email();`


### End

Create an instance: `$end = $client->End();`


### EspSuppression

Create an instance: `$esp_suppression = $client->EspSuppression();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The reason the addresses are suppressed. |
| `id` | `string` |  |
| `next` | `string` | The `start` value for the next page of results. |
| `suppressions` | `array` | The addresses suppressed in this category. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EspSuppression record (throws on error).
$esp_suppression = $client->EspSuppression()->load(["id" => "esp_suppression_id"]);
```

#### Example: Create

```php
$esp_suppression = $client->EspSuppression()->create([
    "email_address" => null, // string
    "suppression_type" => null, // string
]);
```


### Export

Create an instance: `$export = $client->Export();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | A description of the export. |
| `downloads` | `int` | Counts the total number of times the export has been downloaded. |
| `failed` | `bool` | If true, the export was unsuccessful. |
| `id` | `int` | The identifier for the export. |
| `status` | `string` | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `total` | `int` | The number of entries in the export. |
| `type` | `string` | The type of information contained in the export. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |
| `user_email` | `string` | The email of the user who created the export. |
| `user_id` | `int` | The user who created the export. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Export record (throws on error).
$export = $client->Export()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Export records (throws on error).
$exports = $client->Export()->list();
```

#### Example: Create

```php
$export = $client->Export()->create([
]);
```


### Import

Create an instance: `$import = $client->Import();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `data_to_process` | `string` | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | `string` | A helpful description that can help you find and recognize your import operation. |
| `error` | `string` | If your import fails, this helps you understand why. |
| `id` | `int` | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | `string` | The type of identifier you used to identify people in your CSV. |
| `import` | `mixed` |  |
| `name` | `string` | A friendly name for your import. |
| `object_type_id` | `string` | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `string` | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `int` | The number of rows we imported from the CSV. |
| `rows_to_import` | `int` | The total number of importable rows we found in the CSV. |
| `state` | `string` | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `string` | The type of import. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Import record (throws on error).
$import = $client->Import()->load(["id" => 1]);
```

#### Example: Create

```php
$import = $client->Import()->create([
    "import" => null, // mixed
]);
```


### InApp

Create an instance: `$in_app = $client->InApp();`


### InboxMessage

Create an instance: `$inbox_message = $client->InboxMessage();`


### Info

Create an instance: `$info = $client->Info();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Info records (throws on error).
$infos = $client->Info()->list();
```


### IpAddress

Create an instance: `$ip_address = $client->IpAddress();`


### Language

Create an instance: `$language = $client->Language();`


### Link

Create an instance: `$link = $client->Link();`


### LiveNotification

Create an instance: `$live_notification = $client->LiveNotification();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | When the delivery was created (unix timestamp). |
| `id` | `string` | The delivery ID. |
| `operation` | `string` | The lifecycle operation the delivery carried. |
| `source` | `string` | Where the operation originated—the API or the device. |
| `status` | `string` | The delivery's status. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the LiveNotification record (throws on error).
$live_notification = $client->LiveNotification()->load(["id" => "live_notification_id"]);
```

#### Example: Create

```php
$live_notification = $client->LiveNotification()->create([
]);
```


### Message

Create an instance: `$message = $client->Message();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_id` | `int` | The identifier for an action. |
| `broadcast_id` | `string` |  |
| `campaign_id` | `string` |  |
| `content_id` | `int` | The identifier for a message in a one-time send. |
| `created` | `int` | The date time when the referenced ID was created. |
| `customer_id` | `mixed` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `array` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `mixed` | Explains why a message failed, if applicable. |
| `forgotten` | `bool` | If true message contents are not retained by Customer.io. |
| `id` | `string` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `int` | The identifier of the message template used to create a message. |
| `metrics` | `array` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `string` |  |
| `parent_action_id` | `int` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | The recipient address for an action. |
| `subject` | `string` | The subject line for an `email` action. |
| `tracked_responses` | `array` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | The type of message or action for a delivery, automation action, or related object. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Message record (throws on error).
$message = $client->Message()->load(["id" => "message_id"]);
```

#### Example: List

```php
// list() returns an array of Message records (throws on error).
$messages = $client->Message()->list();
```


### Newsletter

Create an instance: `$newsletter = $client->Newsletter();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_ids` | `array` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `int` | The identifier for a one-time send. |
| `name` | `string` | The name of the one-time send. |
| `recipient_segment_ids` | `array` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `int` | The last time the one-time send was sent. |
| `subscription_topic_id` | `int` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `array` | An array of tags associated with the one-time send. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Newsletter record (throws on error).
$newsletter = $client->Newsletter()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Newsletter records (throws on error).
$newsletters = $client->Newsletter()->list();
```

#### Example: Create

```php
$newsletter = $client->Newsletter()->create([
]);
```


### NewsletterMetric

Create an instance: `$newsletter_metric = $client->NewsletterMetric();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `link` | `array` |  |
| `metric` | `array` | Contains metrics for the link. |
| `series` | `array` | Metrics grouped by the requested resolution. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NewsletterMetric record (throws on error).
$newsletter_metric = $client->NewsletterMetric()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of NewsletterMetric records (throws on error).
$newsletter_metrics = $client->NewsletterMetric()->list();
```


### NewsletterVariant

Create an instance: `$newsletter_variant = $client->NewsletterVariant();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `string` | The blind-copy address(es) for this action. |
| `body` | `string` | The body of the variant. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `cc` | `string` | The carbon-copy address(es) for this action. |
| `content_ids` | `array` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `fake_bcc` | `bool` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `language` | `string` | The language variant for your message. |
| `layout` | `string` | The layout used for the variant, if it exists. |
| `name` | `string` | The name of the variant, if it exists. |
| `newsletter_id` | `int` | The identifier for a one-time send. |
| `preheader_text` | `string` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `recipient` | `string` | The recipient address for an action. |
| `recipient_segment_ids` | `array` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `string` | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `mixed` | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `int` | The last time the one-time send was sent. |
| `subject` | `string` | The subject line for an `email` action. |
| `subscription_topic_id` | `int` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `array` | An array of tags associated with the one-time send. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NewsletterVariant record (throws on error).
$newsletter_variant = $client->NewsletterVariant()->load(["newsletter_id" => 1]);
```

#### Example: List

```php
// list() returns an array of NewsletterVariant records (throws on error).
$newsletter_variants = $client->NewsletterVariant()->list();
```

#### Example: Create

```php
$newsletter_variant = $client->NewsletterVariant()->create([
    "newsletter_id" => null, // int
    "test_group_id" => null, // string
]);
```


### Object

Create an instance: `$object = $client->Object();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `array` | Attributes assigned to this object. |
| `enabled` | `bool` | If true, the object type is enabled. |
| `filter` | `mixed` | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `string` | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `string` | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `array` | Identifies an object. |
| `ids` | `array` | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `string` | The name of the object type. |
| `next` | `string` | Indicates the next page of results. |
| `object_type_disabled` | `bool` | If true, the object is disabled. |
| `object_type_id` | `string` | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `string` | The singular name of the object type. |
| `singular_slug` | `string` | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `string` | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `array` | The epoch timestamps when corresponding attributes were set on the object. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Object record (throws on error).
$object = $client->Object()->load(["id" => 1, "object_id" => "object_id"]);
```

#### Example: List

```php
// list() returns an array of Object records (throws on error).
$objects = $client->Object()->list();
```

#### Example: Create

```php
$object = $client->Object()->create([
    "filter" => null, // mixed
]);
```


### ObjectType

Create an instance: `$object_type = $client->ObjectType();`


### OptOut

Create an instance: `$opt_out = $client->OptOut();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The channel that the person is opted out of. |
| `cio_id` | `string` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `string` | The person's ID. |
| `from` | `string` | The sender that the person is opted out of. |
| `optouts` | `array` | The senders and channels you want to opt the person out of, or back in to. |

#### Example: List

```php
// list() returns an array of OptOut records (throws on error).
$opt_outs = $client->OptOut()->list();
```


### Push

Create an instance: `$push = $client->Push();`


### Relationship

Create an instance: `$relationship = $client->Relationship();`


### ReportingWebhook

Create an instance: `$reporting_webhook = $client->ReportingWebhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `bool` | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `string` | The webhook URL. |
| `events` | `array` | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `bool` | Set to `false` to send unique open and click events to the webhook. |
| `id` | `int` | The identifier for the webhook. |
| `name` | `string` | The name of your webhook. |
| `type` | `string` | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `bool` | Set to `true` to include the message `body` in `_sent` events. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ReportingWebhook record (throws on error).
$reporting_webhook = $client->ReportingWebhook()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of ReportingWebhook records (throws on error).
$reporting_webhooks = $client->ReportingWebhook()->list();
```

#### Example: Create

```php
$reporting_webhook = $client->ReportingWebhook()->create([
    "endpoint" => null, // string
    "events" => null, // array
    "name" => null, // string
]);
```


### SearchSuppression

Create an instance: `$search_suppression = $client->SearchSuppression();`


### Segment

Create an instance: `$segment = $client->Segment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | A description for the segment. |
| `id` | `int` | The identifier for a segment; used to target a segment in requests. |
| `name` | `string` | The name of the segment. |
| `progress` | `mixed` | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `array` |  |
| `state` | `string` | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `mixed` | The tags assigned to the segment, if any. |
| `type` | `string` | The type of segment. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Segment record (throws on error).
$segment = $client->Segment()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Segment records (throws on error).
$segments = $client->Segment()->list();
```

#### Example: Create

```php
$segment = $client->Segment()->create([
    "segment" => null, // array
]);
```


### SendMessage

Create an instance: `$send_message = $client->SendMessage();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `array` | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `bool` | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `string` | Blind copy message recipients. |
| `body` | `string` | The HTML body of your message. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `body_plain` | `string` | The plaintext body of your message. |
| `cc` | `string` | Carbon copy message recipients, separated by commas. |
| `custom_data` | `array` | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `mixed` | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `array` | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `string` | A unique identifier for the message. |
| `disable_css_preprocessing` | `bool` | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `bool` | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `bool` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | The address your email is from. |
| `headers` | `string` | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | The `trigger_id` for this operation. |
| `identifiers` | `mixed` | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `string` | An image URL to show in the push. |
| `language` | `string` | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `string` | A deep link to open when the push is tapped. |
| `message` | `string` | The message body for your notification. |
| `message_data` | `array` | An object containing the key-value pairs referenced using liquid in your message. |
| `preheader` | `string` | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `queue_draft` | `bool` | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `queued_at` | `int` | A Unix timestamp for when Customer.io accepted and queued your request. |
| `reply_to` | `string` | The address that recipients can reply to, if different from the `from` address. |
| `send_at` | `int` | For a scheduled message, the Unix timestamp when the message is set to send. |
| `send_to_unsubscribed` | `bool` | If false, your message is not sent to unsubscribed recipients. |
| `sound` | `string` | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `subject` | `string` | The subject line for your message. |
| `title` | `string` | The title for your notification. |
| `to` | `string` | The recipients you want to send to, separated by commas. |
| `tracked` | `bool` | If true, Customer.io tracks opens and link clicks in your message. |
| `transactional_message_id` | `string` | The transactional message template you want to use. |

#### Example: Create

```php
$send_message = $client->SendMessage()->create([
    "custom_device" => null, // mixed
    "to" => null, // string
]);
```


### SenderIdentity

Create an instance: `$sender_identity = $client->SenderIdentity();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The sender name and email address in the format `name <name@example.com>`. |
| `auto_generated` | `bool` | If true, the sender is automatically generated by Customer.io. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `email` | `string` | The email address of the sender. |
| `hidden` | `bool` | If true, the sender is hidden in the Customer.io UI. |
| `id` | `int` | The identifier of a sender. |
| `name` | `string` | The name of the sender. |
| `phone` | `string` | The phone number of the sender, used for SMS senders. |
| `template_type` | `string` | The type of sender. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SenderIdentity record (throws on error).
$sender_identity = $client->SenderIdentity()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of SenderIdentity records (throws on error).
$sender_identitys = $client->SenderIdentity()->list();
```


### Sms

Create an instance: `$sms = $client->Sms();`


### Snippet

Create an instance: `$snippet = $client->Snippet();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The name of the snippet, must be unique. |
| `updated_at` | `int` | The last date-time the snippet was updated. |
| `value` | `string` | The contents of the snippet. |

#### Example: List

```php
// list() returns an array of Snippet records (throws on error).
$snippets = $client->Snippet()->list();
```

#### Example: Create

```php
$snippet = $client->Snippet()->create([
    "name" => null, // string
    "value" => null, // string
]);
```


### Start

Create an instance: `$start = $client->Start();`


### SubscriptionCenter

Create an instance: `$subscription_center = $client->SubscriptionCenter();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A description of the channel. |
| `id` | `int` | The system-generated ID for the subscription channel. |
| `identifier` | `string` | The key associated with the subscription topic. |
| `name` | `string` | The display name of the subscription channel. |
| `subscribed_by_default` | `bool` | If false, a person is opted-out by default. |
| `type` | `string` | The type of delivery channel. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SubscriptionCenter record (throws on error).
$subscription_center = $client->SubscriptionCenter()->load(["id" => "subscription_center_id"]);
```

#### Example: List

```php
// list() returns an array of SubscriptionCenter records (throws on error).
$subscription_centers = $client->SubscriptionCenter()->list();
```


### SubscriptionChannel

Create an instance: `$subscription_channel = $client->SubscriptionChannel();`


### SubscriptionTopic

Create an instance: `$subscription_topic = $client->SubscriptionTopic();`


### Suppression

Create an instance: `$suppression = $client->Suppression();`


### TestGroup

Create an instance: `$test_group = $client->TestGroup();`


### Transactional

Create an instance: `$transactional = $client->Transactional();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `string` | The blind-copy address(es) for this action. |
| `body` | `string` | The body of the transactional message. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `cc` | `string` | The carbon-copy address(es) for this action. |
| `content` | `array` | The object represents a variant. |
| `created` | `int` | The date time when the referenced ID was created. |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `description` | `string` | A description of the transactional message. |
| `fake_bcc` | `bool` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | The address that the message is from, relevant if the action `type` is `email`. |
| `from_id` | `int` | The identifier of the `from` address, commonly known as the "sender". |
| `headers` | `string` | A JSON string containing header objects with `name` and `value`. |
| `hide_message_body` | `bool` | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `id` | `int` | The identifier for an action. |
| `language` | `string` | The language variant for your message. |
| `link_tracking` | `bool` | If true, link tracking is enabled for this message. |
| `name` | `string` | The name of the transactional message. |
| `open_tracking` | `bool` | If true, open-tracking is enabled for this message. |
| `preheader_text` | `string` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `preprocessor` | `string` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `queue_drafts` | `bool` | If true, messages do not send automatically, and queue as drafts instead. |
| `recipient` | `string` | The recipient address for an action. |
| `reply_to` | `string` | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `mixed` | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `bool` | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `string` | The subject line for an `email` action. |
| `type` | `string` | The type of message. |
| `updated` | `int` | The date time when the referenced ID was last updated. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Transactional record (throws on error).
$transactional = $client->Transactional()->load(["id" => 1]);
```

#### Example: List

```php
// list() returns an array of Transactional records (throws on error).
$transactionals = $client->Transactional()->list();
```


### Trigger

Create an instance: `$trigger = $client->Trigger();`


### Update

Create an instance: `$update = $client->Update();`


### Whatsapp

Create an instance: `$whatsapp = $client->Whatsapp();`


### Workspace

Create an instance: `$workspace = $client->Workspace();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `billable_messages_sent` | `int` | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `id` | `int` | The id of the workspace. |
| `messages_sent` | `int` | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `name` | `string` | The name of the workspace. |
| `object_types` | `int` | The current count of object types in the workspace. |
| `objects` | `int` | The current count of object profiles in the workspace. |
| `people` | `int` | The current count of people profiles in the workspace. |

#### Example: List

```php
// list() returns an array of Workspace records (throws on error).
$workspaces = $client->Workspace()->list();
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Open types

6 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `automation` | `campaigns` | 7 | 1 level |
| `customer` | `filter` | 5 | 14 levels |
| `automation` | `actions` | 4 | 1 level |
| `import` | `import` | 4 | 0 levels |
| `object` | `filter` | 4 | 0 levels |
| `send_message` | `identifiers` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── customerioapp_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── schema.php                     -- Generated option + entity specs
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`customerioapp_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$collection = $client->Collection();
$collection->list();

// $collection->data_get() now returns the collection data from the last list
// $collection->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
