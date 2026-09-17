# CustomerioApp Golang SDK



The Golang SDK for the CustomerioApp API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Action(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/customerio-app-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/customerio-app-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/customerio-app-sdk/go=../customerio-app-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "os"
    sdk "github.com/voxgig-sdk/customerio-app-sdk/go"
)

func main() {
    client := sdk.NewCustomerioAppSDK(map[string]any{
        "apikey": os.Getenv("CUSTOMERIO_APP_APIKEY"),
    })

    _ = client
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
collections, err := client.Collection(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = collections
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

collection, err := client.Collection(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(collection) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewCustomerioAppSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CUSTOMERIO_APP_TEST_LIVE=TRUE
CUSTOMERIO_APP_APIKEY=<your-key>
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewCustomerioAppSDK

```go
func NewCustomerioAppSDK(options map[string]any) *CustomerioAppSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *CustomerioAppSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CustomerioAppSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Action` | `(data map[string]any) CustomerioAppEntity` | Create an Action entity instance. |
| `Activity` | `(data map[string]any) CustomerioAppEntity` | Create an Activity entity instance. |
| `Asset` | `(data map[string]any) CustomerioAppEntity` | Create an Asset entity instance. |
| `Attribute` | `(data map[string]any) CustomerioAppEntity` | Create an Attribute entity instance. |
| `Automation` | `(data map[string]any) CustomerioAppEntity` | Create an Automation entity instance. |
| `Broadcast` | `(data map[string]any) CustomerioAppEntity` | Create a Broadcast entity instance. |
| `Campaign` | `(data map[string]any) CustomerioAppEntity` | Create a Campaign entity instance. |
| `Collection` | `(data map[string]any) CustomerioAppEntity` | Create a Collection entity instance. |
| `Content` | `(data map[string]any) CustomerioAppEntity` | Create a Content entity instance. |
| `Customer` | `(data map[string]any) CustomerioAppEntity` | Create a Customer entity instance. |
| `DataIndex` | `(data map[string]any) CustomerioAppEntity` | Create a DataIndex entity instance. |
| `Delivery` | `(data map[string]any) CustomerioAppEntity` | Create a Delivery entity instance. |
| `DesignStudio` | `(data map[string]any) CustomerioAppEntity` | Create a DesignStudio entity instance. |
| `DesignStudioEmail` | `(data map[string]any) CustomerioAppEntity` | Create a DesignStudioEmail entity instance. |
| `Email` | `(data map[string]any) CustomerioAppEntity` | Create an Email entity instance. |
| `End` | `(data map[string]any) CustomerioAppEntity` | Create an End entity instance. |
| `EspSuppression` | `(data map[string]any) CustomerioAppEntity` | Create an EspSuppression entity instance. |
| `Export` | `(data map[string]any) CustomerioAppEntity` | Create an Export entity instance. |
| `Import` | `(data map[string]any) CustomerioAppEntity` | Create an Import entity instance. |
| `InApp` | `(data map[string]any) CustomerioAppEntity` | Create an InApp entity instance. |
| `InboxMessage` | `(data map[string]any) CustomerioAppEntity` | Create an InboxMessage entity instance. |
| `Info` | `(data map[string]any) CustomerioAppEntity` | Create an Info entity instance. |
| `IpAddress` | `(data map[string]any) CustomerioAppEntity` | Create an IpAddress entity instance. |
| `Language` | `(data map[string]any) CustomerioAppEntity` | Create a Language entity instance. |
| `Link` | `(data map[string]any) CustomerioAppEntity` | Create a Link entity instance. |
| `LiveNotification` | `(data map[string]any) CustomerioAppEntity` | Create a LiveNotification entity instance. |
| `Message` | `(data map[string]any) CustomerioAppEntity` | Create a Message entity instance. |
| `Newsletter` | `(data map[string]any) CustomerioAppEntity` | Create a Newsletter entity instance. |
| `NewsletterMetric` | `(data map[string]any) CustomerioAppEntity` | Create a NewsletterMetric entity instance. |
| `NewsletterVariant` | `(data map[string]any) CustomerioAppEntity` | Create a NewsletterVariant entity instance. |
| `Object` | `(data map[string]any) CustomerioAppEntity` | Create an Object entity instance. |
| `ObjectType` | `(data map[string]any) CustomerioAppEntity` | Create an ObjectType entity instance. |
| `OptOut` | `(data map[string]any) CustomerioAppEntity` | Create an OptOut entity instance. |
| `Push` | `(data map[string]any) CustomerioAppEntity` | Create a Push entity instance. |
| `Relationship` | `(data map[string]any) CustomerioAppEntity` | Create a Relationship entity instance. |
| `ReportingWebhook` | `(data map[string]any) CustomerioAppEntity` | Create a ReportingWebhook entity instance. |
| `SearchSuppression` | `(data map[string]any) CustomerioAppEntity` | Create a SearchSuppression entity instance. |
| `Segment` | `(data map[string]any) CustomerioAppEntity` | Create a Segment entity instance. |
| `SendMessage` | `(data map[string]any) CustomerioAppEntity` | Create a SendMessage entity instance. |
| `SenderIdentity` | `(data map[string]any) CustomerioAppEntity` | Create a SenderIdentity entity instance. |
| `Sms` | `(data map[string]any) CustomerioAppEntity` | Create a Sms entity instance. |
| `Snippet` | `(data map[string]any) CustomerioAppEntity` | Create a Snippet entity instance. |
| `Start` | `(data map[string]any) CustomerioAppEntity` | Create a Start entity instance. |
| `SubscriptionCenter` | `(data map[string]any) CustomerioAppEntity` | Create a SubscriptionCenter entity instance. |
| `SubscriptionChannel` | `(data map[string]any) CustomerioAppEntity` | Create a SubscriptionChannel entity instance. |
| `SubscriptionTopic` | `(data map[string]any) CustomerioAppEntity` | Create a SubscriptionTopic entity instance. |
| `Suppression` | `(data map[string]any) CustomerioAppEntity` | Create a Suppression entity instance. |
| `TestGroup` | `(data map[string]any) CustomerioAppEntity` | Create a TestGroup entity instance. |
| `Transactional` | `(data map[string]any) CustomerioAppEntity` | Create a Transactional entity instance. |
| `Trigger` | `(data map[string]any) CustomerioAppEntity` | Create a Trigger entity instance. |
| `Update` | `(data map[string]any) CustomerioAppEntity` | Create an Update entity instance. |
| `Whatsapp` | `(data map[string]any) CustomerioAppEntity` | Create a Whatsapp entity instance. |
| `Workspace` | `(data map[string]any) CustomerioAppEntity` | Create a Workspace entity instance. |

### Entity interface (CustomerioAppEntity)

All entities implement the `CustomerioAppEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    activity, err := client.Activity(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // activity is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Activity

| Field | Description |
| --- | --- |
| `"customer_id"` | The ID of a customer profile, analogous to a "person" in the UI. |
| `"customer_identifiers"` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `"data"` |  |
| `"delivery_id"` | The message ID. |
| `"delivery_type"` | The recipient device, if applicable. |
| `"id"` | The identifier for the action. |
| `"name"` | The name of the event, for `event` and `screen` activities. |
| `"timestamp"` | The date and time when the action occurred. |
| `"type"` | The type of activity. |
| `"url"` | The page URL, for `page` activities. |

Operations: List.

API path: `/v1/activities`

#### Asset

| Field | Description |
| --- | --- |
| `"created"` | Unix timestamp when the asset was created. |
| `"id"` | The unique identifier of the file asset. |
| `"name"` | The display name of the file asset. |
| `"parent_folder_id"` | The ID of the parent folder, or null if the asset is at the root level. |
| `"path"` | The storage URL or path where the file is hosted. |
| `"size"` | The file size in bytes. |
| `"updated"` | Unix timestamp when the asset was last updated. |

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
| `"action_id"` | The identifier for an action. |
| `"actions"` | Each object in the array represents an action in your automation. |
| `"activated"` | People who started a journey and were not filtered out before they experienced an action. |
| `"broadcast_id"` |  |
| `"campaign_id"` |  |
| `"campaigns"` | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `"content_id"` | The identifier for a message in a one-time send. |
| `"converted"` | People who matched the conversion criteria for the automation. |
| `"created"` | The date time when the referenced ID was created. |
| `"customer_id"` | The ID of a customer profile, analogous to a "person" in the UI. |
| `"customer_identifiers"` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"end"` | The end of the window we reported on, in ISO 8601 format. |
| `"exited_early"` | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `"failure_message"` | Explains why a message failed, if applicable. |
| `"finished"` | People who finished the journey. |
| `"forgotten"` | If true message contents are not retained by Customer.io. |
| `"id"` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `"language_variants"` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `"link"` |  |
| `"message_template_id"` | The identifier of the message template used to create a message. |
| `"messaged"` | People who experienced at least one non-delay action in the journey. |
| `"metric"` | Contains metrics for the link. |
| `"metrics"` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `"never_activated"` | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `"newsletter_id"` |  |
| `"next"` | Indicates the next page of results. |
| `"parent_action_id"` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `"recipient"` | The recipient address for an action. |
| `"res"` | The resolution we reported at. |
| `"series"` | Metrics grouped by the requested resolution. |
| `"start"` | The start of the window we reported on, in ISO 8601 format. |
| `"started"` | The total number of people who meet the trigger criteria for a journey. |
| `"subject"` | The subject line for an `email` action. |
| `"tracked_responses"` | Tracked in-app survey responses, keyed by response option name. |
| `"trigger_event_id"` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `"type"` | The type of message or action for a delivery, automation action, or related object. |

Operations: List, Load, Update.

API path: `/v1/campaigns/{campaign_id}/messages`

#### Broadcast

| Field | Description |
| --- | --- |
| `"actions"` | A list of actions used by the broadcast. |
| `"active"` | If true, the broadcast is active. |
| `"broadcast_id"` | The identifier for a broadcast. |
| `"created"` | The date time when the referenced ID was created. |
| `"created_at"` | The date time when the referenced ID was created. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"errors"` | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `"first_started"` | The date and time when you activated the broadcast. |
| `"id"` | The identifier for a broadcast trigger. |
| `"language_variants"` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `"link"` |  |
| `"metric"` | Contains metrics for the link. |
| `"msg_template_ids"` | Indicates the message template(s) used in this broadcast. |
| `"name"` | The name of the broadcast. |
| `"next"` | The offset to pass as the `start` value to fetch the next page of errors. |
| `"processed_at"` | The date-time when Customer.io processed the trigger. |
| `"state"` | The state of the broadcast. |
| `"tags"` | An array of tags you set on this broadcast. |
| `"type"` | The type of broadcast. |
| `"updated"` | The date time when the referenced ID was last updated. |

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
| `"bytes"` | The size of the collection in bytes. |
| `"created_at"` | The date time when the referenced ID was created. |
| `"id"` | The identifier for the collection. |
| `"name"` | The name of the collection. |
| `"rows"` | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `"schema"` | Lists the top-level keys that you can reference within this collection. |
| `"updated_at"` | The date time when the referenced ID was last updated. |

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
| `"cio_id"` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `"email"` | A person's email address, if set. |
| `"filter"` | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `"id"` | A person's unique ID, if set. |
| `"identifiers"` | An array of objects, where each object represents a customer. |
| `"ids"` | In general, you should use the `identifiers` array. |
| `"next"` | The `start` value for the next page of results. |

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
| `"content"` | HTML content |
| `"created"` | Unix timestamp of when the component was created. |
| `"id"` | ID of the component |
| `"name"` | Display name of the component. |
| `"parent_folder_id"` | ID of the parent folder, or `null` if the component is in your root directory. |
| `"tag"` | The component tag name, used to reference your component in an email. |
| `"updated"` | Unix timestamp of the last update to the component. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/design_studio/components`

#### DesignStudioEmail

| Field | Description |
| --- | --- |
| `"amp"` | AMP HTML variant. |
| `"available_languages"` | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `"browser"` | Browser used to render the client. |
| `"category"` | Where the client renders. |
| `"check"` | Which check produced this finding. |
| `"client"` | Name of the email client and device. |
| `"client_ids"` | The device identifiers requested for this job. |
| `"content"` | The content of your email. |
| `"created"` | Unix timestamp of when the translation was created. |
| `"created_at"` | When you submitted the preview job. |
| `"created_on_publish"` | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `"credits_original"` | Credits originally granted for a tier. |
| `"credits_remaining"` | Credits left to spend from this tier. |
| `"dependencies"` |  |
| `"description"` | Explanatory text you provided when creating a version. |
| `"details"` | Explanation and suggested fix. |
| `"emails"` |  |
| `"envelope"` | The envelope of your email, like from and to addresses. |
| `"expires_at"` | When this pool's credits expire, if ever. |
| `"feedback"` | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `"folders"` |  |
| `"has_unpublished_changes"` | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `"html"` | Full HTML with liquid tags left intact. |
| `"id"` | Unique identifier for the email. |
| `"is_linked"` | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `"is_processed"` | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `"is_template"` | Whether the translation is a template |
| `"language"` | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `"language_group_id"` | ID of the parent email that groups all translations. |
| `"lax_mode"` | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `"meta"` |  |
| `"name"` | The batch label provided when you sent an email for previews. |
| `"node"` | The content and settings stored in the version. |
| `"node_count"` | How many email nodes the run covers—more than one for a multi-language run. |
| `"node_id"` | The UUID of the rendered email node. |
| `"node_type"` | Always `"EMAIL"`. |
| `"os"` | Operating system the client runs on. |
| `"parent_folder_id"` | UUID of the parent folder, or `null` if the email is in your root directory. |
| `"previews"` | One object per requested preview. |
| `"replayed"` | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `"run_id"` | ID of the preview job. |
| `"sample_data"` | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
| `"severity"` | Fix all errors to make sure your recipients get your email and you follow compliance requirements. |
| `"state"` | Whether this finding represents an issue. |
| `"summary"` | Location context, for example "In the email body". |
| `"template_id"` | The ID of the workflow template that received the content. |
| `"text"` | Plain text version of the email. |
| `"tier"` | The credit tier this pool belongs to. |
| `"title"` | Short human-readable title. |
| `"total_previews_bounced"` | Previews that produced no screenshot, whether the vendor bounced them or they failed on Customer.io's side. |
| `"total_previews_cached"` | Previews served from an earlier run's screenshot. |
| `"total_previews_ready"` | How many previews show a screenshot you can fetch, counted from the tiles themselves. |
| `"total_previews_requested"` | Previews requested in the job, for the email in the path. |
| `"total_previews_succeeded"` | Previews this run generated itself, excluding cached ones. |
| `"transformers"` | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `"updated"` | Unix timestamp of the last update to the translation. |
| `"updated_at"` | When the job's status was last updated. |
| `"version"` |  |
| `"version_id"` | The identifier of the template version created by the publish. |

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
| `"category"` | The reason the addresses are suppressed. |
| `"id"` |  |
| `"next"` | The `start` value for the next page of results. |
| `"suppressions"` | The addresses suppressed in this category. |

Operations: Create, Load, Remove.

API path: `/v1/esp/suppression/{suppression_type}/{email_address}`

#### Export

| Field | Description |
| --- | --- |
| `"created_at"` | The date time when the referenced ID was created. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"description"` | A description of the export. |
| `"downloads"` | Counts the total number of times the export has been downloaded. |
| `"failed"` | If true, the export was unsuccessful. |
| `"id"` | The identifier for the export. |
| `"status"` | The state of your export where `done` indicates an export that you can download, `pending`, indicates that your export is not ready to download, and `failed` indicates an export that has failed and will not be downloadable. |
| `"total"` | The number of entries in the export. |
| `"type"` | The type of information contained in the export. |
| `"updated_at"` | The date time when the referenced ID was last updated. |
| `"user_email"` | The email of the user who created the export. |
| `"user_id"` | The user who created the export. |

Operations: Create, List, Load.

API path: `/v1/exports/customers`

#### Import

| Field | Description |
| --- | --- |
| `"created_at"` | The date time when the referenced ID was created. |
| `"data_to_process"` | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `"description"` | A helpful description that can help you find and recognize your import operation. |
| `"error"` | If your import fails, this helps you understand why. |
| `"id"` | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `"identifier"` | The type of identifier you used to identify people in your CSV. |
| `"import"` |  |
| `"name"` | A friendly name for your import. |
| `"object_type_id"` | The object type an object belongs to—like "Companies" or "Accounts". |
| `"people_to_process"` | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `"rows_imported"` | The number of rows we imported from the CSV. |
| `"rows_to_import"` | The total number of importable rows we found in the CSV. |
| `"state"` | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `"type"` | The type of import. |
| `"updated_at"` | The date time when the referenced ID was last updated. |

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
| `"created_at"` | When the delivery was created (unix timestamp). |
| `"id"` | The delivery ID. |
| `"operation"` | The lifecycle operation the delivery carried. |
| `"source"` | Where the operation originated—the API or the device. |
| `"status"` | The delivery's status. |

Operations: Create, Load.

API path: `/v1/live_notifications/end`

#### Message

| Field | Description |
| --- | --- |
| `"action_id"` | The identifier for an action. |
| `"broadcast_id"` |  |
| `"campaign_id"` |  |
| `"content_id"` | The identifier for a message in a one-time send. |
| `"created"` | The date time when the referenced ID was created. |
| `"customer_id"` | The ID of a customer profile, analogous to a "person" in the UI. |
| `"customer_identifiers"` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"failure_message"` | Explains why a message failed, if applicable. |
| `"forgotten"` | If true message contents are not retained by Customer.io. |
| `"id"` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `"message_template_id"` | The identifier of the message template used to create a message. |
| `"metrics"` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `"newsletter_id"` |  |
| `"parent_action_id"` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `"recipient"` | The recipient address for an action. |
| `"subject"` | The subject line for an `email` action. |
| `"tracked_responses"` | Tracked in-app survey responses, keyed by response option name. |
| `"trigger_event_id"` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `"type"` | The type of message or action for a delivery, automation action, or related object. |

Operations: List, Load.

API path: `/v1/messages`

#### Newsletter

| Field | Description |
| --- | --- |
| `"content_ids"` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `"created"` | The date time when the referenced ID was created. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"id"` | The identifier for a one-time send. |
| `"name"` | The name of the one-time send. |
| `"recipient_segment_ids"` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `"sent_at"` | The last time the one-time send was sent. |
| `"subscription_topic_id"` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `"tags"` | An array of tags associated with the one-time send. |
| `"type"` | Channel type for a one-time send or one-time send content variant. |
| `"updated"` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove.

API path: `/v1/newsletters/{newsletter_id}/schedule`

#### NewsletterMetric

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"link"` |  |
| `"metric"` | Contains metrics for the link. |
| `"series"` | Metrics grouped by the requested resolution. |
| `"type"` | Channel type for a one-time send or one-time send content variant. |

Operations: List, Load.

API path: `/v1/newsletters/{newsletter_id}/messages`

#### NewsletterVariant

| Field | Description |
| --- | --- |
| `"bcc"` | The blind-copy address(es) for this action. |
| `"body"` | The body of the variant. |
| `"body_amp"` | AMP-enabled content for your email. |
| `"cc"` | The carbon-copy address(es) for this action. |
| `"content_ids"` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `"created"` | The date time when the referenced ID was created. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"fake_bcc"` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `"from"` | The address that the message is from, relevant if the action `type` is `email`. |
| `"from_id"` | The identifier of the `from` address, commonly known as the "sender". |
| `"headers"` | A JSON string containing header objects with `name` and `value`. |
| `"id"` | The identifier of a one-time send variant—a language in a multi-language one-time send or a test in an A/B test. |
| `"language"` | The language variant for your message. |
| `"layout"` | The layout used for the variant, if it exists. |
| `"name"` | The name of the variant, if it exists. |
| `"newsletter_id"` | The identifier for a one-time send. |
| `"preheader_text"` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `"preprocessor"` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `"recipient"` | The recipient address for an action. |
| `"recipient_segment_ids"` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `"reply_to"` | The address that receives replies for the message, if applicable. |
| `"reply_to_id"` | The identifier for the `reply_to` address, if applicable. |
| `"sent_at"` | The last time the one-time send was sent. |
| `"subject"` | The subject line for an `email` action. |
| `"subscription_topic_id"` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `"tags"` | An array of tags associated with the one-time send. |
| `"type"` | Channel type for a one-time send or one-time send content variant. |
| `"updated"` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language`

#### Object

| Field | Description |
| --- | --- |
| `"attributes"` | Attributes assigned to this object. |
| `"enabled"` | If true, the object type is enabled. |
| `"filter"` | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `"icon"` | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `"id"` | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `"identifiers"` | Identifies an object. |
| `"ids"` | A list of object IDs matching the object_type_id and filter in the request. |
| `"name"` | The name of the object type. |
| `"next"` | Indicates the next page of results. |
| `"object_type_disabled"` | If true, the object is disabled. |
| `"object_type_id"` | The object type an object belongs to—like "Companies" or "Accounts". |
| `"singular_name"` | The singular name of the object type. |
| `"singular_slug"` | The singular slug of the page in the Customer.io UI for the object type. |
| `"slug"` | The slug of the page in the Customer.io UI for the object type. |
| `"timestamps"` | The epoch timestamps when corresponding attributes were set on the object. |

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
| `"channel"` | The channel that the person is opted out of. |
| `"cio_id"` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `"customer_id"` | The person's ID. |
| `"from"` | The sender that the person is opted out of. |
| `"optouts"` | The senders and channels you want to opt the person out of, or back in to. |

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
| `"disabled"` | Set to `true` to quit sending events to the webhook URL. |
| `"endpoint"` | The webhook URL. |
| `"events"` | Specifies the types of events you want to report to your webhook. |
| `"full_resolution"` | Set to `false` to send unique open and click events to the webhook. |
| `"id"` | The identifier for the webhook. |
| `"name"` | The name of your webhook. |
| `"type"` | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `"with_content"` | Set to `true` to include the message `body` in `_sent` events. |

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
| `"created_at"` | The date time when the referenced ID was created. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"description"` | A description for the segment. |
| `"id"` | The identifier for a segment; used to target a segment in requests. |
| `"name"` | The name of the segment. |
| `"progress"` | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `"segment"` |  |
| `"state"` | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `"tags"` | The tags assigned to the segment, if any. |
| `"type"` | The type of segment. |
| `"updated_at"` | The date time when the referenced ID was last updated. |

Operations: Create, List, Load, Remove.

API path: `/v1/segments`

#### SendMessage

| Field | Description |
| --- | --- |
| `"attachments"` | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `"auto_create"` | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `"bcc"` | Blind copy message recipients. |
| `"body"` | The HTML body of your message. |
| `"body_amp"` | AMP-enabled content for your email. |
| `"body_plain"` | The plaintext body of your message. |
| `"cc"` | Carbon copy message recipients, separated by commas. |
| `"custom_data"` | Optional key/value pairs you want to attach to the push payload. |
| `"custom_device"` | A device to perform an upsert operation at the time of send. |
| `"custom_payload"` | Optional key/value pairs you want to attach to the push payload. |
| `"delivery_id"` | A unique identifier for the message. |
| `"disable_css_preprocessing"` | Set to `true` to disable CSS preprocessing. |
| `"disable_message_retention"` | If true, the message body is not retained in delivery history. |
| `"fake_bcc"` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `"from"` | The address your email is from. |
| `"headers"` | A JSON string containing header objects with `name` and `value`. |
| `"id"` | The `trigger_id` for this operation. |
| `"identifiers"` | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `"image_url"` | An image URL to show in the push. |
| `"language"` | Overrides language preferences for the person you want to send your transactional message to. |
| `"link"` | A deep link to open when the push is tapped. |
| `"message"` | The message body for your notification. |
| `"message_data"` | An object containing the key-value pairs referenced using liquid in your message. |
| `"preheader"` | Also known as "preview text", this is the block block of text that users see next to, or underneath, the subject line in their inbox. |
| `"queue_draft"` | If true, your transactional message is held as a draft in Customer.io and not sent directly to your audience. |
| `"queued_at"` | A Unix timestamp for when Customer.io accepted and queued your request. |
| `"reply_to"` | The address that recipients can reply to, if different from the `from` address. |
| `"send_at"` | For a scheduled message, the Unix timestamp when the message is set to send. |
| `"send_to_unsubscribed"` | If false, your message is not sent to unsubscribed recipients. |
| `"sound"` | **For iOS Only**: your notification can alert users with the device's default notification sound or play no sound at all. |
| `"subject"` | The subject line for your message. |
| `"title"` | The title for your notification. |
| `"to"` | The recipients you want to send to, separated by commas. |
| `"tracked"` | If true, Customer.io tracks opens and link clicks in your message. |
| `"transactional_message_id"` | The transactional message template you want to use. |

Operations: Create.

API path: `/v1/campaigns/{broadcast_id}/triggers`

#### SenderIdentity

| Field | Description |
| --- | --- |
| `"address"` | The sender name and email address in the format `name <name@example.com>`. |
| `"auto_generated"` | If true, the sender is automatically generated by Customer.io. |
| `"deduplicate_id"` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `"email"` | The email address of the sender. |
| `"hidden"` | If true, the sender is hidden in the Customer.io UI. |
| `"id"` | The identifier of a sender. |
| `"name"` | The name of the sender. |
| `"phone"` | The phone number of the sender, used for SMS senders. |
| `"template_type"` | The type of sender. |

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
| `"id"` |  |
| `"name"` | The name of the snippet, must be unique. |
| `"updated_at"` | The last date-time the snippet was updated. |
| `"value"` | The contents of the snippet. |

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
| `"description"` | A description of the channel. |
| `"id"` | The system-generated ID for the subscription channel. |
| `"identifier"` | The key associated with the subscription topic. |
| `"name"` | The display name of the subscription channel. |
| `"subscribed_by_default"` | If false, a person is opted-out by default. |
| `"type"` | The type of delivery channel. |

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
| `"bcc"` | The blind-copy address(es) for this action. |
| `"body"` | The body of the transactional message. |
| `"body_amp"` | AMP-enabled content for your email. |
| `"cc"` | The carbon-copy address(es) for this action. |
| `"content"` | The object represents a variant. |
| `"created"` | The date time when the referenced ID was created. |
| `"created_at"` | The date time when the referenced ID was created. |
| `"description"` | A description of the transactional message. |
| `"fake_bcc"` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `"from"` | The address that the message is from, relevant if the action `type` is `email`. |
| `"from_id"` | The identifier of the `from` address, commonly known as the "sender". |
| `"headers"` | A JSON string containing header objects with `name` and `value`. |
| `"hide_message_body"` | If true, message contents are not retained in delivery history—you cannot recall the exact contents of the message. |
| `"id"` | The identifier for an action. |
| `"language"` | The language variant for your message. |
| `"link_tracking"` | If true, link tracking is enabled for this message. |
| `"name"` | The name of the transactional message. |
| `"open_tracking"` | If true, open-tracking is enabled for this message. |
| `"preheader_text"` | [Also known as "preview text"](/journeys/channels/email/headers/custom-preheader-text/), this is the small block of text shown in an email inbox next to or underneath the subject line. |
| `"preprocessor"` | If CSS pre-processing is enabled, this key is populated with `premailer`. |
| `"queue_drafts"` | If true, messages do not send automatically, and queue as drafts instead. |
| `"recipient"` | The recipient address for an action. |
| `"reply_to"` | The address that receives replies for the message, if applicable. |
| `"reply_to_id"` | The identifier for the `reply_to` address, if applicable. |
| `"send_to_unsubscribed"` | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `"subject"` | The subject line for an `email` action. |
| `"type"` | The type of message. |
| `"updated"` | The date time when the referenced ID was last updated. |
| `"updated_at"` | The date time when the referenced ID was last updated. |

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
| `"billable_messages_sent"` | The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. |
| `"id"` | The id of the workspace. |
| `"messages_sent"` | The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period. |
| `"name"` | The name of the workspace. |
| `"object_types"` | The current count of object types in the workspace. |
| `"objects"` | The current count of object profiles in the workspace. |
| `"people"` | The current count of people profiles in the workspace. |

Operations: List.

API path: `/v1/workspaces`



## Entities


### Action

Create an instance: `action := client.Action(nil)`


### Activity

Create an instance: `activity := client.Activity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer_id` | `any` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `data` | `any` |  |
| `delivery_id` | `string` | The message ID. |
| `delivery_type` | `string` | The recipient device, if applicable. |
| `id` | `string` | The identifier for the action. |
| `name` | `string` | The name of the event, for `event` and `screen` activities. |
| `timestamp` | `int` | The date and time when the action occurred. |
| `type` | `string` | The type of activity. |
| `url` | `string` | The page URL, for `page` activities. |

#### Example: List

```go
activitys, err := client.Activity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(activitys) // the array of records
```


### Asset

Create an instance: `asset := client.Asset(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `int` | Unix timestamp when the asset was created. |
| `id` | `int` | The unique identifier of the file asset. |
| `name` | `string` | The display name of the file asset. |
| `parent_folder_id` | `any` | The ID of the parent folder, or null if the asset is at the root level. |
| `path` | `string` | The storage URL or path where the file is hosted. |
| `size` | `int` | The file size in bytes. |
| `updated` | `int` | Unix timestamp when the asset was last updated. |

#### Example: Load

```go
asset, err := client.Asset(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(asset) // the loaded record
```

#### Example: List

```go
assets, err := client.Asset(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(assets) // the array of records
```

#### Example: Create

```go
result, err := client.Asset(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Attribute

Create an instance: `attribute := client.Attribute(nil)`


### Automation

Create an instance: `automation := client.Automation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_id` | `int` | The identifier for an action. |
| `actions` | `[]any` | Each object in the array represents an action in your automation. |
| `activated` | `[]any` | People who started a journey and were not filtered out before they experienced an action. |
| `broadcast_id` | `string` |  |
| `campaign_id` | `string` |  |
| `campaigns` | `[]any` | Each object is an automation in your workspace with one of seven types of automation triggers. |
| `content_id` | `int` | The identifier for a message in a one-time send. |
| `converted` | `[]any` | People who matched the conversion criteria for the automation. |
| `created` | `int` | The date time when the referenced ID was created. |
| `customer_id` | `any` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `end` | `string` | The end of the window we reported on, in ISO 8601 format. |
| `exited_early` | `[]any` | People who started a journey but stopped meeting the automation trigger/filter criteria. |
| `failure_message` | `any` | Explains why a message failed, if applicable. |
| `finished` | `[]any` | People who finished the journey. |
| `forgotten` | `bool` | If true message contents are not retained by Customer.io. |
| `id` | `string` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `language_variants` | `map[string]any` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `map[string]any` |  |
| `message_template_id` | `int` | The identifier of the message template used to create a message. |
| `messaged` | `[]any` | People who experienced at least one non-delay action in the journey. |
| `metric` | `map[string]any` | Contains metrics for the link. |
| `metrics` | `map[string]any` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `never_activated` | `[]any` | People who started a journey but were filtered out before they could experience any of the actions in the journey. |
| `newsletter_id` | `string` |  |
| `next` | `string` | Indicates the next page of results. |
| `parent_action_id` | `int` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | The recipient address for an action. |
| `res` | `string` | The resolution we reported at. |
| `series` | `map[string]any` | Metrics grouped by the requested resolution. |
| `start` | `string` | The start of the window we reported on, in ISO 8601 format. |
| `started` | `[]any` | The total number of people who meet the trigger criteria for a journey. |
| `subject` | `string` | The subject line for an `email` action. |
| `tracked_responses` | `map[string]any` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | The type of message or action for a delivery, automation action, or related object. |

#### Example: Load

```go
automation, err := client.Automation(nil).Load(map[string]any{"campaign_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(automation) // the loaded record
```

#### Example: List

```go
automations, err := client.Automation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(automations) // the array of records
```


### Broadcast

Create an instance: `broadcast := client.Broadcast(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` | A list of actions used by the broadcast. |
| `active` | `bool` | If true, the broadcast is active. |
| `broadcast_id` | `int` | The identifier for a broadcast. |
| `created` | `int` | The date time when the referenced ID was created. |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `errors` | `[]any` | A list of errors in the format `line <x>: <error text>` to help you troubleshoot errors associated with your audience or data file. |
| `first_started` | `int` | The date and time when you activated the broadcast. |
| `id` | `int` | The identifier for a broadcast trigger. |
| `language_variants` | `map[string]any` | Metrics for each language variant of a multi-language message, keyed by the variant's action ID. |
| `link` | `map[string]any` |  |
| `metric` | `map[string]any` | Contains metrics for the link. |
| `msg_template_ids` | `[]any` | Indicates the message template(s) used in this broadcast. |
| `name` | `string` | The name of the broadcast. |
| `next` | `int` | The offset to pass as the `start` value to fetch the next page of errors. |
| `processed_at` | `int` | The date-time when Customer.io processed the trigger. |
| `state` | `string` | The state of the broadcast. |
| `tags` | `[]any` | An array of tags you set on this broadcast. |
| `type` | `string` | The type of broadcast. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
broadcast, err := client.Broadcast(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(broadcast) // the loaded record
```

#### Example: List

```go
broadcasts, err := client.Broadcast(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(broadcasts) // the array of records
```


### Campaign

Create an instance: `campaign := client.Campaign(nil)`


### Collection

Create an instance: `collection := client.Collection(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bytes` | `int` | The size of the collection in bytes. |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `id` | `int` | The identifier for the collection. |
| `name` | `string` | The name of the collection. |
| `rows` | `int` | Represents the number of objects in the `data` array or CSV rows in your collection schema. |
| `schema` | `[]any` | Lists the top-level keys that you can reference within this collection. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
collection, err := client.Collection(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(collection) // the loaded record
```

#### Example: List

```go
collections, err := client.Collection(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(collections) // the array of records
```

#### Example: Create

```go
result, err := client.Collection(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Content

Create an instance: `content := client.Content(nil)`


### Customer

Create an instance: `customer := client.Customer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cio_id` | `string` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `email` | `any` | A person's email address, if set. |
| `filter` | `any` | Use `and`, `or`, and `not` to combine segment and attribute conditions. |
| `id` | `any` | A person's unique ID, if set. |
| `identifiers` | `[]any` | An array of objects, where each object represents a customer. |
| `ids` | `[]any` | In general, you should use the `identifiers` array. |
| `next` | `string` | The `start` value for the next page of results. |

#### Example: Load

```go
customer, err := client.Customer(nil).Load(map[string]any{"id": "customer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customer) // the loaded record
```

#### Example: List

```go
customers, err := client.Customer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customers) // the array of records
```

#### Example: Create

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


### DataIndex

Create an instance: `dataIndex := client.DataIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.DataIndex(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Delivery

Create an instance: `delivery := client.Delivery(nil)`


### DesignStudio

Create an instance: `designStudio := client.DesignStudio(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | HTML content |
| `created` | `int` | Unix timestamp of when the component was created. |
| `id` | `string` | ID of the component |
| `name` | `string` | Display name of the component. |
| `parent_folder_id` | `any` | ID of the parent folder, or `null` if the component is in your root directory. |
| `tag` | `string` | The component tag name, used to reference your component in an email. |
| `updated` | `int` | Unix timestamp of the last update to the component. |

#### Example: Load

```go
designStudio, err := client.DesignStudio(nil).Load(map[string]any{"id": "design_studio_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(designStudio) // the loaded record
```

#### Example: List

```go
designStudios, err := client.DesignStudio(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(designStudios) // the array of records
```

#### Example: Create

```go
result, err := client.DesignStudio(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DesignStudioEmail

Create an instance: `designStudioEmail := client.DesignStudioEmail(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amp` | `string` | AMP HTML variant. |
| `available_languages` | `[]any` | List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to. |
| `browser` | `string` | Browser used to render the client. |
| `category` | `string` | Where the client renders. |
| `check` | `string` | Which check produced this finding. |
| `client` | `string` | Name of the email client and device. |
| `client_ids` | `[]any` | The device identifiers requested for this job. |
| `content` | `map[string]any` | The content of your email. |
| `created` | `int` | Unix timestamp of when the translation was created. |
| `created_at` | `int` | When you submitted the preview job. |
| `created_on_publish` | `bool` | `false` if you [saved the email](/integrations/api/app/tag/design-studio-emails/saveVersion/). |
| `credits_original` | `int` | Credits originally granted for a tier. |
| `credits_remaining` | `int` | Credits left to spend from this tier. |
| `dependencies` | `[]any` |  |
| `description` | `string` | Explanatory text you provided when creating a version. |
| `details` | `string` | Explanation and suggested fix. |
| `emails` | `[]any` |  |
| `envelope` | `map[string]any` | The envelope of your email, like from and to addresses. |
| `expires_at` | `any` | When this pool's credits expire, if ever. |
| `feedback` | `bool` | `true` is you saved this version by creating a [round of feedback in Design Studio](/messaging/design-studio/collaboration/feedback/). |
| `folders` | `[]any` |  |
| `has_unpublished_changes` | `bool` | Indicates whether the email or any of its translations has content changes that haven't been published. |
| `html` | `string` | Full HTML with liquid tags left intact. |
| `id` | `string` | Unique identifier for the email. |
| `is_linked` | `bool` | Whether the translation is linked to a workflow (automation, broadcast, etc) |
| `is_processed` | `bool` | `true` once every device has settled, for the email in the path—a multi-language run reports each of its emails separately, so this doesn't reflect the whole run when it covers more than one. |
| `is_template` | `bool` | Whether the translation is a template |
| `language` | `string` | The [language code](/journeys/channels/localization/attribute/#supported-languages) of the translation |
| `language_group_id` | `string` | ID of the parent email that groups all translations. |
| `lax_mode` | `bool` | Set to `true` to render liquid variables missing from `sample_data` as blank instead of failing the job. |
| `meta` | `map[string]any` |  |
| `name` | `string` | The batch label provided when you sent an email for previews. |
| `node` | `map[string]any` | The content and settings stored in the version. |
| `node_count` | `int` | How many email nodes the run covers—more than one for a multi-language run. |
| `node_id` | `string` | The UUID of the rendered email node. |
| `node_type` | `string` | Always `"EMAIL"`. |
| `os` | `string` | Operating system the client runs on. |
| `parent_folder_id` | `any` | UUID of the parent folder, or `null` if the email is in your root directory. |
| `previews` | `[]any` | One object per requested preview. |
| `replayed` | `bool` | `true` when this call returned an existing run instead of starting a new one, and you weren't charged a second time for it. |
| `run_id` | `int` | ID of the preview job. |
| `sample_data` | `map[string]any` | Liquid variables to render with, as a JSON object—any shape is accepted, from flat variables like `{"first_name": "Janine"}` to nested ones like `{"customer": {"first_name": "Janine"}}`. |
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
| `transformers` | `map[string]any` | Automate repetitive actions like removing white space and inlining CSS with [transformers](/journeys/design-studio/emails/code-editor/overview/#transformers). |
| `updated` | `int` | Unix timestamp of the last update to the translation. |
| `updated_at` | `int` | When the job's status was last updated. |
| `version` | `map[string]any` |  |
| `version_id` | `string` | The identifier of the template version created by the publish. |

#### Example: Load

```go
designStudioEmail, err := client.DesignStudioEmail(nil).Load(map[string]any{"id": "design_studio_email_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(designStudioEmail) // the loaded record
```

#### Example: List

```go
designStudioEmails, err := client.DesignStudioEmail(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(designStudioEmails) // the array of records
```

#### Example: Create

```go
result, err := client.DesignStudioEmail(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Email

Create an instance: `email := client.Email(nil)`


### End

Create an instance: `end := client.End(nil)`


### EspSuppression

Create an instance: `espSuppression := client.EspSuppression(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | The reason the addresses are suppressed. |
| `id` | `string` |  |
| `next` | `string` | The `start` value for the next page of results. |
| `suppressions` | `[]any` | The addresses suppressed in this category. |

#### Example: Load

```go
espSuppression, err := client.EspSuppression(nil).Load(map[string]any{"id": "esp_suppression_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(espSuppression) // the loaded record
```

#### Example: Create

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


### Export

Create an instance: `export := client.Export(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
export, err := client.Export(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(export) // the loaded record
```

#### Example: List

```go
exports, err := client.Export(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exports) // the array of records
```

#### Example: Create

```go
result, err := client.Export(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Import

Create an instance: `import_ := client.Import(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `data_to_process` | `string` | Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. |
| `description` | `string` | A helpful description that can help you find and recognize your import operation. |
| `error` | `string` | If your import fails, this helps you understand why. |
| `id` | `int` | This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/). |
| `identifier` | `string` | The type of identifier you used to identify people in your CSV. |
| `import` | `any` |  |
| `name` | `string` | A friendly name for your import. |
| `object_type_id` | `string` | The object type an object belongs to—like "Companies" or "Accounts". |
| `people_to_process` | `string` | Returned for people and event imports, even if you imported using the field `data_to_process`. |
| `rows_imported` | `int` | The number of rows we imported from the CSV. |
| `rows_to_import` | `int` | The total number of importable rows we found in the CSV. |
| `state` | `string` | The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed. |
| `type` | `string` | The type of import. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
import_, err := client.Import(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(import_) // the loaded record
```

#### Example: Create

```go
result, err := client.Import(nil).Create(map[string]any{
    "import": "example_import",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### InApp

Create an instance: `inApp := client.InApp(nil)`


### InboxMessage

Create an instance: `inboxMessage := client.InboxMessage(nil)`


### Info

Create an instance: `info := client.Info(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
infos, err := client.Info(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(infos) // the array of records
```


### IpAddress

Create an instance: `ipAddress := client.IpAddress(nil)`


### Language

Create an instance: `language := client.Language(nil)`


### Link

Create an instance: `link := client.Link(nil)`


### LiveNotification

Create an instance: `liveNotification := client.LiveNotification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | When the delivery was created (unix timestamp). |
| `id` | `string` | The delivery ID. |
| `operation` | `string` | The lifecycle operation the delivery carried. |
| `source` | `string` | Where the operation originated—the API or the device. |
| `status` | `string` | The delivery's status. |

#### Example: Load

```go
liveNotification, err := client.LiveNotification(nil).Load(map[string]any{"id": "live_notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(liveNotification) // the loaded record
```

#### Example: Create

```go
result, err := client.LiveNotification(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Message

Create an instance: `message := client.Message(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_id` | `int` | The identifier for an action. |
| `broadcast_id` | `string` |  |
| `campaign_id` | `string` |  |
| `content_id` | `int` | The identifier for a message in a one-time send. |
| `created` | `int` | The date time when the referenced ID was created. |
| `customer_id` | `any` | The ID of a customer profile, analogous to a "person" in the UI. |
| `customer_identifiers` | `map[string]any` | Identifiers for the person in a response—`id`, `cio_id`, and `email`. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `failure_message` | `any` | Explains why a message failed, if applicable. |
| `forgotten` | `bool` | If true message contents are not retained by Customer.io. |
| `id` | `string` | The identifier for a delivery—the instance of a message intended for an individual recipient. |
| `message_template_id` | `int` | The identifier of the message template used to create a message. |
| `metrics` | `map[string]any` | Metrics for an individual instance of a message; each item in the object represents the timestamp when a message achieved a particular metric. |
| `newsletter_id` | `string` |  |
| `parent_action_id` | `int` | The ID of the parent action, if the action occurred within an automation and has a parent (like a randomized split, etc). |
| `recipient` | `string` | The recipient address for an action. |
| `subject` | `string` | The subject line for an `email` action. |
| `tracked_responses` | `map[string]any` | Tracked in-app survey responses, keyed by response option name. |
| `trigger_event_id` | `string` | The id of the event that triggered an event-triggered automation (not an API-triggered broadcast). |
| `type` | `string` | The type of message or action for a delivery, automation action, or related object. |

#### Example: Load

```go
message, err := client.Message(nil).Load(map[string]any{"id": "message_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(message) // the loaded record
```

#### Example: List

```go
messages, err := client.Message(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(messages) // the array of records
```


### Newsletter

Create an instance: `newsletter := client.Newsletter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_ids` | `[]any` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
| `created` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `id` | `int` | The identifier for a one-time send. |
| `name` | `string` | The name of the one-time send. |
| `recipient_segment_ids` | `[]any` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `sent_at` | `int` | The last time the one-time send was sent. |
| `subscription_topic_id` | `int` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `[]any` | An array of tags associated with the one-time send. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
newsletter, err := client.Newsletter(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletter) // the loaded record
```

#### Example: List

```go
newsletters, err := client.Newsletter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletters) // the array of records
```

#### Example: Create

```go
result, err := client.Newsletter(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### NewsletterMetric

Create an instance: `newsletterMetric := client.NewsletterMetric(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `link` | `map[string]any` |  |
| `metric` | `map[string]any` | Contains metrics for the link. |
| `series` | `map[string]any` | Metrics grouped by the requested resolution. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |

#### Example: Load

```go
newsletterMetric, err := client.NewsletterMetric(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletterMetric) // the loaded record
```

#### Example: List

```go
newsletterMetrics, err := client.NewsletterMetric(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletterMetrics) // the array of records
```


### NewsletterVariant

Create an instance: `newsletterVariant := client.NewsletterVariant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `string` | The blind-copy address(es) for this action. |
| `body` | `string` | The body of the variant. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `cc` | `string` | The carbon-copy address(es) for this action. |
| `content_ids` | `[]any` | A list of message variants in a one-time send, where a variant is a translation or A/B test. |
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
| `recipient_segment_ids` | `[]any` | If the recipient conditions included segments, this returns a list of those segment ids. |
| `reply_to` | `string` | The address that receives replies for the message, if applicable. |
| `reply_to_id` | `any` | The identifier for the `reply_to` address, if applicable. |
| `sent_at` | `int` | The last time the one-time send was sent. |
| `subject` | `string` | The subject line for an `email` action. |
| `subscription_topic_id` | `int` | If you enabled a [subscription center](/journeys/channels/subscriptions/center/) on your workspace, this returns the id of the subscription preference you set. |
| `tags` | `[]any` | An array of tags associated with the one-time send. |
| `type` | `string` | Channel type for a one-time send or one-time send content variant. |
| `updated` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
newsletterVariant, err := client.NewsletterVariant(nil).Load(map[string]any{"newsletter_id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletterVariant) // the loaded record
```

#### Example: List

```go
newsletterVariants, err := client.NewsletterVariant(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(newsletterVariants) // the array of records
```

#### Example: Create

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


### Object

Create an instance: `object := client.Object(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `map[string]any` | Attributes assigned to this object. |
| `enabled` | `bool` | If true, the object type is enabled. |
| `filter` | `any` | Use `and`, `or`, and `not` to combine object attribute conditions. |
| `icon` | `string` | The name of the icon or emoji that represents the object type in the Customer.io UI. |
| `id` | `string` | The `object_type_id` that you'll use with the Journeys Track API to create or modify objects. |
| `identifiers` | `map[string]any` | Identifies an object. |
| `ids` | `[]any` | A list of object IDs matching the object_type_id and filter in the request. |
| `name` | `string` | The name of the object type. |
| `next` | `string` | Indicates the next page of results. |
| `object_type_disabled` | `bool` | If true, the object is disabled. |
| `object_type_id` | `string` | The object type an object belongs to—like "Companies" or "Accounts". |
| `singular_name` | `string` | The singular name of the object type. |
| `singular_slug` | `string` | The singular slug of the page in the Customer.io UI for the object type. |
| `slug` | `string` | The slug of the page in the Customer.io UI for the object type. |
| `timestamps` | `map[string]any` | The epoch timestamps when corresponding attributes were set on the object. |

#### Example: Load

```go
object, err := client.Object(nil).Load(map[string]any{"id": 1, "object_id": "object_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(object) // the loaded record
```

#### Example: List

```go
objects, err := client.Object(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(objects) // the array of records
```

#### Example: Create

```go
result, err := client.Object(nil).Create(map[string]any{
    "filter": "example_filter",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ObjectType

Create an instance: `objectType := client.ObjectType(nil)`


### OptOut

Create an instance: `optOut := client.OptOut(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `channel` | `string` | The channel that the person is opted out of. |
| `cio_id` | `string` | A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers. |
| `customer_id` | `string` | The person's ID. |
| `from` | `string` | The sender that the person is opted out of. |
| `optouts` | `[]any` | The senders and channels you want to opt the person out of, or back in to. |

#### Example: List

```go
optOuts, err := client.OptOut(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(optOuts) // the array of records
```


### Push

Create an instance: `push := client.Push(nil)`


### Relationship

Create an instance: `relationship := client.Relationship(nil)`


### ReportingWebhook

Create an instance: `reportingWebhook := client.ReportingWebhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `disabled` | `bool` | Set to `true` to quit sending events to the webhook URL. |
| `endpoint` | `string` | The webhook URL. |
| `events` | `[]any` | Specifies the types of events you want to report to your webhook. |
| `full_resolution` | `bool` | Set to `false` to send unique open and click events to the webhook. |
| `id` | `int` | The identifier for the webhook. |
| `name` | `string` | The name of your webhook. |
| `type` | `string` | The type of webhook—`webhook` for a standard reporting webhook or `js` for a JavaScript webhook. |
| `with_content` | `bool` | Set to `true` to include the message `body` in `_sent` events. |

#### Example: Load

```go
reportingWebhook, err := client.ReportingWebhook(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportingWebhook) // the loaded record
```

#### Example: List

```go
reportingWebhooks, err := client.ReportingWebhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(reportingWebhooks) // the array of records
```

#### Example: Create

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


### SearchSuppression

Create an instance: `searchSuppression := client.SearchSuppression(nil)`


### Segment

Create an instance: `segment := client.Segment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `int` | The date time when the referenced ID was created. |
| `deduplicate_id` | `string` | An identifier in the format `id:timestamp` where the id is for the object you're working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was update… |
| `description` | `string` | A description for the segment. |
| `id` | `int` | The identifier for a segment; used to target a segment in requests. |
| `name` | `string` | The name of the segment. |
| `progress` | `any` | If Customer.io has not finished processing the segment, this indicates the percentage complete. |
| `segment` | `map[string]any` |  |
| `state` | `string` | The segment build state: - `events`—handling event conditions for this segment - `build`—handling profile attribute conditions for this segment - `events_queued`—waiting to start handling event conditions - `build_queued`—waiting to start… |
| `tags` | `any` | The tags assigned to the segment, if any. |
| `type` | `string` | The type of segment. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
segment, err := client.Segment(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(segment) // the loaded record
```

#### Example: List

```go
segments, err := client.Segment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(segments) // the array of records
```

#### Example: Create

```go
result, err := client.Segment(nil).Create(map[string]any{
    "segment": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SendMessage

Create an instance: `sendMessage := client.SendMessage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `map[string]any` | A dictionary of attachments where the filename is the key and the value is the base64-encoded contents. |
| `auto_create` | `bool` | If `true` and your `transactional_message_id` doesn't match a record, Customer.io creates an empty record using that value as the *Trigger Name*. |
| `bcc` | `string` | Blind copy message recipients. |
| `body` | `string` | The HTML body of your message. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `body_plain` | `string` | The plaintext body of your message. |
| `cc` | `string` | Carbon copy message recipients, separated by commas. |
| `custom_data` | `map[string]any` | Optional key/value pairs you want to attach to the push payload. |
| `custom_device` | `any` | A device to perform an upsert operation at the time of send. |
| `custom_payload` | `map[string]any` | Optional key/value pairs you want to attach to the push payload. |
| `delivery_id` | `string` | A unique identifier for the message. |
| `disable_css_preprocessing` | `bool` | Set to `true` to disable CSS preprocessing. |
| `disable_message_retention` | `bool` | If true, the message body is not retained in delivery history. |
| `fake_bcc` | `bool` | If true, rather than sending true copies to BCC addresses, Customer.io sends a copy of the message with the subject line containing the recipient address(es). |
| `from` | `string` | The address your email is from. |
| `headers` | `string` | A JSON string containing header objects with `name` and `value`. |
| `id` | `int` | The `trigger_id` for this operation. |
| `identifiers` | `any` | Identifies the person represented by your transactional message by one of, and only one of, `id`, `email`, or `cio_id`. |
| `image_url` | `string` | An image URL to show in the push. |
| `language` | `string` | Overrides language preferences for the person you want to send your transactional message to. |
| `link` | `string` | A deep link to open when the push is tapped. |
| `message` | `string` | The message body for your notification. |
| `message_data` | `map[string]any` | An object containing the key-value pairs referenced using liquid in your message. |
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


### SenderIdentity

Create an instance: `senderIdentity := client.SenderIdentity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
senderIdentity, err := client.SenderIdentity(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(senderIdentity) // the loaded record
```

#### Example: List

```go
senderIdentitys, err := client.SenderIdentity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(senderIdentitys) // the array of records
```


### Sms

Create an instance: `sms := client.Sms(nil)`


### Snippet

Create an instance: `snippet := client.Snippet(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` | The name of the snippet, must be unique. |
| `updated_at` | `int` | The last date-time the snippet was updated. |
| `value` | `string` | The contents of the snippet. |

#### Example: List

```go
snippets, err := client.Snippet(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(snippets) // the array of records
```

#### Example: Create

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


### Start

Create an instance: `start := client.Start(nil)`


### SubscriptionCenter

Create an instance: `subscriptionCenter := client.SubscriptionCenter(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

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

```go
subscriptionCenter, err := client.SubscriptionCenter(nil).Load(map[string]any{"id": "subscription_center_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionCenter) // the loaded record
```

#### Example: List

```go
subscriptionCenters, err := client.SubscriptionCenter(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(subscriptionCenters) // the array of records
```


### SubscriptionChannel

Create an instance: `subscriptionChannel := client.SubscriptionChannel(nil)`


### SubscriptionTopic

Create an instance: `subscriptionTopic := client.SubscriptionTopic(nil)`


### Suppression

Create an instance: `suppression := client.Suppression(nil)`


### TestGroup

Create an instance: `testGroup := client.TestGroup(nil)`


### Transactional

Create an instance: `transactional := client.Transactional(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bcc` | `string` | The blind-copy address(es) for this action. |
| `body` | `string` | The body of the transactional message. |
| `body_amp` | `string` | AMP-enabled content for your email. |
| `cc` | `string` | The carbon-copy address(es) for this action. |
| `content` | `[]any` | The object represents a variant. |
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
| `reply_to_id` | `any` | The identifier for the `reply_to` address, if applicable. |
| `send_to_unsubscribed` | `bool` | If true, people with an `unsubscribed` attribute set to `true` can trigger the message. |
| `subject` | `string` | The subject line for an `email` action. |
| `type` | `string` | The type of message. |
| `updated` | `int` | The date time when the referenced ID was last updated. |
| `updated_at` | `int` | The date time when the referenced ID was last updated. |

#### Example: Load

```go
transactional, err := client.Transactional(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transactional) // the loaded record
```

#### Example: List

```go
transactionals, err := client.Transactional(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(transactionals) // the array of records
```


### Trigger

Create an instance: `trigger := client.Trigger(nil)`


### Update

Create an instance: `update := client.Update(nil)`


### Whatsapp

Create an instance: `whatsapp := client.Whatsapp(nil)`


### Workspace

Create an instance: `workspace := client.Workspace(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

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

```go
workspaces, err := client.Workspace(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workspaces) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/customerio-app-sdk/go/
├── customerio-app.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/customerio-app-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
collection := client.Collection(nil)
collection.List(nil, nil)

// collection.Data() now returns the collection data from the last list
// collection.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
