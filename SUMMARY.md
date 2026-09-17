# Customer.io App API

Our App API provides ways to trigger messages and retrieve information about people, automations, broadcasts, and more. # Overview The App API provides methods to send newsletters, transactional messages, and API-triggered broadcasts. You can create newsletters from scratch and update transactional messages and API-triggered broadcasts. For transactional messages and API-triggered broadcasts, your payload acts as a message &quot;trigger&quot; and can contain `data` that you reference in your messages using liquid, `&#123;&#123;trigger.&lt;data&gt;&#125;&#125;`. The other endpoints help you retrieve information about people, segments, automations, broadcasts, etc; it also lets you update automation actions, messages, newsletter variants, etc. Aside from the [API-triggered broadcast](/integrations/api/app/tag/send-messages/triggerBroadcast/) endpoint (1 per 10 seconds), requests are limited to 10 per second. [Transactional](/integrations/api/app/tag/send-messages/sendEmail/) messages go through the same high-throughput ingress as our Track and Pipelines APIs and share their soft rate limit of 3000 requests per 3 seconds, which isn&#39;t strictly enforced. # We may add to these APIs As we release new features, we add endpoints and we may even add fields to existing endpoints. We don&#39;t announce these additions in advance. Fields we add will be backward compatible: existing fields keep their names and types. Build your integration to ignore fields it doesn&#39;t recognize. If you validate responses against a schema, make sure the schema accepts unknown keys. In JSON Schema, for example, don&#39;t set `additionalProperties: false`. # Use our Postman collection We&#39;ve generated a Postman collection to help you get started with our APIs. If you fork this collection, you might want to disable the *Watch original collection* option. We automatically update our Postman collection whenever we release changes to our documentation, even if we don&#39;t change our APIs, which happens daily! Rather than being flooded with Postman notifications, you can check out our [Release Notes](/release-notes/) for updates to our APIs. **NOTE**: Postman endpoints default to our US APIs. If you&#39;re in our European (EU) region, you&#39;ll need to add `-eu` to the server variables (`track_api_url` and `app_api_url`). [&lt;img src=&quot;https://run.pstmn.io/button.svg&quot; alt=&quot;Run In Postman&quot; style=&quot;width: 128px; height: 32px;&quot;&gt;](https://god.gw.postman.com/run-collection/23697545-2931c004-e63d-4cdc-bf4b-e685ba6da42d?action=collection%2Ffork&amp;source=rip_markdown&amp;collection-url=entityId%3D23697545-2931c004-e63d-4cdc-bf4b-e685ba6da42d%26entityType%3Dcollection%26workspaceId%3Db886877f-fc09-475f-84fe-6221a98f4d18#?env%5BCustomer.io%20API%20Environment%5D=W3sia2V5IjoidHJhY2tfYXBpX3VybCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiJ0cmFjay5jdXN0b21lci5pbyIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYXBwX2FwaV91cmwiLCJ0eXBlIjoiZGVmYXVsdCIsInZhbHVlIjoiYXBpLmN1c3RvbWVyLmlvIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJzaXRlX2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYXBpX2tleSIsInR5cGUiOiJzZWNyZXQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYmVhcmVyIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiYnJvYWRjYXN0X2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiaW1wb3J0X2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiZW1haWxfYWRkcmVzcyIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InN1cHByZXNzaW9uX3R5cGUiLCJ0eXBlIjoiZGVmYXVsdCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjb2xsZWN0aW9uX2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5Ijoic25pcHBldF9uYW1lIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5Ijoid2ViaG9va19pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InNlbmRlcl9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImV4cG9ydF9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6Im1lc3NhZ2VfaWQiLCJ0eXBlIjoiZGVmYXVsdCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJzZWdtZW50X2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoibmV3c2xldHRlcl9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImNvbnRlbnRfaWQiLCJ0eXBlIjoiZGVmYXVsdCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJjYW1wYWlnbl9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImFjdGlvbl9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImN1c3RvbWVyX2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoidHJhbnNhY3Rpb25hbF9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InRyaWdnZXJfaWQiLCJ0eXBlIjoiZGVmYXVsdCIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZX0seyJrZXkiOiJmb3JtX2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9LHsia2V5IjoiaWRlbnRpZmllciIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImRldmljZV9pZCIsInR5cGUiOiJkZWZhdWx0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6ImRlbGl2ZXJ5X2lkIiwidHlwZSI6ImRlZmF1bHQiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWV9XQ==) # Server addresses: US and EU Customer.io hosts services in the United States (US) and European Union. Select the appropriate server address for your region. | Region | Server Address | | :-- | :-- | | US | https://api.customer.io | | EU | https://api-eu.customer.io | # Authentication All requests to the Customer.io App API use an [App API Key](#authentication). To authenticate, provide your key as a Bearer token in a HTTP Authorization header. You can create and manage your API keys, including keys with different scopes, in [your account settings page](https://fly.customer.io/settings/api_credentials?keyType=app). Each operation on this page references the authorization header it requires. # Rate Limits Most endpoints on this page are limited to 10 requests per second. The exceptions are: * [Transactional messages](/integrations/api/app/tag/send-messages/sendEmail/) use the same soft rate limit of our Track and Pipelines APIs (3000 requests per 3 seconds, not strictly enforced). * The [API-triggered broadcast endpoint](/integrations/api/app/tag/send-messages/triggerBroadcast/) is limited to 1 request every 10 seconds. **Rate limits are subject to change. We may adjust these thresholds to ensure stable performance for all customers.**

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 53 entities and 186 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Action](docs/api/action.html)

SDK operations: .

### [Activity](docs/api/activity.html)

Results: Returns an array of `activities`.

SDK operations: `list`.

Key fields to recognise:

- `customer_id`: The ID of a customer profile, analogous to a &quot;person&quot; in the UI. If your workspace supports multiple identifiers (email and ID), this value can be null.
- `customer_identifiers`: Identifiers for the person in a response, `id`, `cio_id`, and `email`. Unset `id` or `email` values are `null`. We recommend this object over the less descriptive `customer_id`. This object doesn&#39;t include `phone`, even if your workspace uses phone numbers as an identifier; look for the person&#39;s `phone` attribute instead.
- `delivery_id`: The message ID.
- `delivery_type`: The recipient device, if applicable.
- `id`: The identifier for the action.

### [Asset](docs/api/asset.html)

Results: The newly created file asset.; The newly created folder.; A paginated list of file assets with metadata.; A paginated list of folders with metadata.; The requested file asset.; The requested folder.; File asset deleted successfully.; Folder deleted successfully.; File asset updated successfully.; Folder updated successfully.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created`: Unix timestamp when the asset was created.
- `id`: The unique identifier of the file asset.
- `name`: The display name of the file asset.
- `parent_folder_id`: The ID of the parent folder, or null if the asset is at the root level.
- `path`: The storage URL or path where the file is hosted.

### [Attribute](docs/api/attribute.html)

SDK operations: .

### [Automation](docs/api/automation.html)

Results: Returns an array of `messages`. Each object represents a different message in your automation.; Returns action metrics by `series` (with increments are based on the `period` and `step` in your request) for the automation.; Returns an array of link objects. Each object represents a different link in your automation and contains independent metrics.; Returns automation `actions`. Each object represents an individual action.; Returns an array of automation objects.; Returns action metrics by `series`, where each increment is based on the `res` in your request. For a multi-language message, also returns a per-variant breakdown in `language_variants`.; Returns automation metrics by `series` based on the parameters of the request.; Each `journey_metric` item in the response is an array. Each item in a metric array represents the number of journeys that started within the time increment (&quot;resolution&quot;, day or month) and eventually achieved that metric.; Returns information for the requested automation `action` language variant.; Returns the requested automation `action`.; Returns metadata for the automation.; Returns the updated automation action.; Returns the updated automation `action`.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `action_id`: The identifier for an action.
- `actions`: Each object in the array represents an action in your automation.
- `activated`: People who started a journey and were not filtered out before they experienced an action.
- `campaigns`: Each object is an automation in your workspace with one of seven types of automation triggers.
- `content_id`: The identifier for a message in a one-time send. One-time sends can have multiple content IDs (for multi-language messages or A/B tests).

### [Broadcast](docs/api/broadcast.html)

Results: Returns an array of `messages`. Each object represents a different message in your broadcast.; Returns broadcast variant metrics by `series` (with increments are based on the `period` and `step` in your request) for the broadcast.; Returns an array of errors.; Returns an array of link objects. Each object represents a different link in your broadcast and contains independent metrics.; Returns broadcast `actions`. Each object represents an individual variant for this broadcast.; Returns an array of `triggers`.; Returns an array of API-triggered broadcasts.; Returns action metrics by `series` (with increments are based on the `period` and `step` in your request) for the broadcast. For a multi-language message, also returns a per-variant breakdown in `language_variants`.; Returns broadcast metrics by `series` (with increments are based on the `period` and `step` in your request) for the broadcast.; Returns information for the requested language variant for a broadcast `action`.; Returns the requested broadcast `action`.; Returns the status of your broadcast.; Returns metadata for the broadcast.; Returns the updated broadcast action.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `actions`: A list of actions used by the broadcast.
- `active`: If true, the broadcast is active.
- `broadcast_id`: The identifier for a broadcast.
- `created`: The date time when the referenced ID was created.
- `created_at`: The date time when the referenced ID was created.

### [Campaign](docs/api/campaign.html)

SDK operations: .

### [Collection](docs/api/collection.html)

Results: The collection was created successfully.; Returns metadata about your collection.; Returns your collection&#39;s contents, the `data` (or `url` contents) from your POST or PUT call.; The collection is deleted.; Returns your collection metadata and the updated schema.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `bytes`: The size of the collection in bytes.
- `created_at`: The date time when the referenced ID was created.
- `id`: The identifier for the collection. This is how you&#39;ll reference the collection from the API.
- `name`: The name of the collection. This is how you&#39;ll reference the collection in liquid, for example `&#123;&#123;collection_name.data_property&#125;&#125;`.
- `rows`: Represents the number of objects in the `data` array or CSV rows in your collection schema.

### [Content](docs/api/content.html)

SDK operations: .

### [Customer](docs/api/customer.html)

Results: Returns an array of customers matching your filters.; Returns an array of `customers`. Each object represents a customer profile.; Returns an array of activity objects. Each object represents an activity that the customer performed, or that you performed on behalf of the customer.; Returns an array of message objects. Each object represents a message that you sent a customer.; Returns an array of `cio_relationships`.; Returns an array of segments that the customer belongs to.; Returns an array of `results`; each result represents a person.; Returns the customer&#39;s associated subscription preferences.; Returns the `customer` and associated attributes.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `cio_id`: A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.
- `email`: A person&#39;s email address, if set.
- `filter`: Use `and`, `or`, and `not` to combine segment and attribute conditions.
- `id`: A person&#39;s unique ID, if set.
- `identifiers`: An array of objects, where each object represents a customer. Each object contains identifiers for a customer.

### [DataIndex](docs/api/data_index.html)

Results: Attributes updated successfully; Events updated successfully.

SDK operations: `create`.

### [Delivery](docs/api/delivery.html)

SDK operations: .

### [DesignStudio](docs/api/design_studio.html)

Results: Component created; Folder created; Successful response; Component deleted; Successful response, no content returned; Component updated.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `content`: HTML content
- `created`: Unix timestamp of when the component was created.
- `id`: ID of the component
- `name`: Display name of the component. You see this on your Design Studio dashboard. This may be different from the component tag name.
- `parent_folder_id`: ID of the parent folder, or `null` if the component is in your root directory.

### [DesignStudioEmail](docs/api/design_studio_email.html)

Results: Version restored; Preview job submitted; Translation created; Email linked; Successful response; Publish completed (`done`) or accepted and still running (`pending`).; Returns the new version saved, or the latest version if nothing changed.; Email created; Current publish status.; Image bytes for the requested capture, in whatever format the vendor sent it.; Returns whether the email has unpublished changes.; Translation deleted; Version deleted; Email deleted; Translation updated; Email updated, no content returned.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `amp`: AMP HTML body.
- `available_languages`: List of [language codes](/journeys/channels/localization/attribute/#supported-languages) that reflect the languages this default email has been translated to.
- `browser`: Browser used to render the client. Populates when `category` is `Web`.
- `category`: Where the client renders. `Mobile` is a phone&#39;s native mail app, for example the Gmail App on Android devices. `Application` is a desktop native mail app, for example Apple Mail on macOS. `Web` is webmail viewed in a desktop browser, for example Gmail.com in Firefox, and includes a `browser` value.
- `check`: Which check produced this finding.

### [Email](docs/api/email.html)

SDK operations: .

### [End](docs/api/end.html)

SDK operations: .

### [EspSuppression](docs/api/esp_suppression.html)

Results: A successful request produces an empty response.; Returns an array of suppressed email addresses for the domain.; Returns an array of suppressed email addresses.; A successful request produces no content.

SDK operations: `create`, `load`, `remove`.

Key fields to recognise:

- `category`: The reason the addresses are suppressed.
- `next`: The `start` value for the next page of results.
- `suppressions`: The addresses suppressed in this category.

### [Export](docs/api/export.html)

Results: Returns an export.; Returns an array of exports.; Returns a link to an export.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: The date time when the referenced ID was created.
- `deduplicate_id`: An identifier in the format `id:timestamp` where the id is for the object you&#39;re working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was updated.
- `description`: A description of the export.
- `downloads`: Counts the total number of times the export has been downloaded.
- `failed`: If true, the export was unsuccessful.

### [Import](docs/api/import.html)

Results: Returns an import payload.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: The date time when the referenced ID was created.
- `data_to_process`: Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.
- `description`: A helpful description that can help you find and recognize your import operation.
- `error`: If your import fails, this helps you understand why.
- `id`: This is the `import_id` you&#39;ll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).

### [InApp](docs/api/in_app.html)

SDK operations: .

### [InboxMessage](docs/api/inbox_message.html)

SDK operations: .

### [Info](docs/api/info.html)

Results: Returns an array of IP addresses.

SDK operations: `list`.

### [IpAddress](docs/api/ip_address.html)

SDK operations: .

### [Language](docs/api/language.html)

SDK operations: .

### [Link](docs/api/link.html)

SDK operations: .

### [LiveNotification](docs/api/live_notification.html)

Results: The end event was queued.; The activity was queued. Returns the instance ID for the new activity.; The update was queued.; The activity&#39;s current status.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: When the delivery was created (unix timestamp).
- `id`: The delivery ID.
- `operation`: The lifecycle operation the delivery carried.
- `source`: Where the operation originated, the API or the device.
- `status`: The delivery&#39;s status.

### [Message](docs/api/message.html)

Results: Returns an array of message objects.; Returns a message object.; Returns the archived message object.

SDK operations: `list`, `load`.

Key fields to recognise:

- `action_id`: The identifier for an action.
- `content_id`: The identifier for a message in a one-time send. One-time sends can have multiple content IDs (for multi-language messages or A/B tests).
- `created`: The date time when the referenced ID was created.
- `customer_id`: The ID of a customer profile, analogous to a &quot;person&quot; in the UI. If your workspace supports multiple identifiers (email and ID), this value can be null.
- `customer_identifiers`: Identifiers for the person in a response, `id`, `cio_id`, and `email`. Unset `id` or `email` values are `null`. We recommend this object over the less descriptive `customer_id`. This object doesn&#39;t include `phone`, even if your workspace uses phone numbers as an identifier; look for the person&#39;s `phone` attribute instead.

### [Newsletter](docs/api/newsletter.html)

Results: The one-time send is scheduled for sending.; The one-time send is queued.; Returns the newly created one-time send.; Returns an array of one-time send objects.; Returns metadata for the one-time send.; Success. No content.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `content_ids`: A list of message variants in a one-time send, where a variant is a translation or A/B test.
- `created`: The date time when the referenced ID was created.
- `deduplicate_id`: An identifier in the format `id:timestamp` where the id is for the object you&#39;re working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was updated.
- `id`: The identifier for a one-time send.
- `name`: The name of the one-time send. Must be 190 characters or less.

### [NewsletterMetric](docs/api/newsletter_metric.html)

Results: Returns an array of `messages`. Each object represents a different delivery to a recipient.; Returns one-time send variant metrics by `series` (with increments are based on the `period` and `step` in your request) for the one-time send.; Returns an array of link objects. Each object represents a different link in your one-time send and contains independent metrics.; Returns one-time send metrics by `series` (with increments are based on the `period` and `step` in your request) for the one-time send.

SDK operations: `list`, `load`.

Key fields to recognise:

- `metric`: Contains metrics for the link.
- `series`: Metrics grouped by the requested resolution. Each property is an array where each entry represents one period, such as one day.
- `type`: Channel type for a one-time send or one-time send content variant.

### [NewsletterVariant](docs/api/newsletter_variant.html)

Results: Returns the updated one-time send, including new `content_ids`.; Returns the updated one-time send with the new test group&#39;s content IDs.; Returns one-time send `content_id`s. Each object represents an individual variant of this one-time send.; Returns metadata for each test group in a one-time send.; Returns one-time send `content` for a language variant in a test group.; Returns one-time send `content`.; Returns one-time send `content` for a language variant.; Success. No content.; Returns the updated one-time send variant.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `bcc`: The blind-copy address(es) for this action.
- `body`: The body of the variant. You cannot modify the body if you created it with our drag-and-drop editor.
- `body_amp`: AMP-enabled content for your email. If a recipient&#39;s email client doesn&#39;t support AMP, they receive your `body` content instead. Make sure you&#39;re [set up to send AMP](/journeys/channels/email/layouts/amp-for-email/) first.
- `cc`: The carbon-copy address(es) for this action.
- `content_ids`: A list of message variants in a one-time send, where a variant is a translation or A/B test.

### [Object](docs/api/object.html)

Results: Returns arrays of `identifiers` and `ids`.; Returns an array of `cio_relationships`. Each object in the array represents a person related to the object specified in the endpoint path.; Returns an array of `types`.; Returns information about the attributes for the `object` specified in the endpoint path.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `attributes`: Attributes assigned to this object.
- `enabled`: If true, the object type is enabled.
- `filter`: Use `and`, `or`, and `not` to combine object attribute conditions.
- `icon`: The name of the icon or emoji that represents the object type in the Customer.io UI. Most commonly, you&#39;ll see this in the left-side navigation panel in Journeys.
- `id`: The ID of a customer profile, analogous to a &quot;person&quot; in the UI. If your workspace supports multiple identifiers (email and ID), this value can be null.

### [ObjectType](docs/api/object_type.html)

SDK operations: .

### [OptOut](docs/api/opt_out.html)

Results: Returns an array of opt-out records, one per person.; Returns the person&#39;s opt-outs across channels.; A successful request produces an empty response.

SDK operations: `list`, `update`.

Key fields to recognise:

- `channel`: The channel that the person is opted out of.
- `cio_id`: A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.
- `customer_id`: The person&#39;s ID.
- `from`: The sender that the person is opted out of. For SMS, this is a sender phone number (E.164), an alphanumeric sender ID, or a messaging-service SID; for WhatsApp, it&#39;s the sender phone number.
- `optouts`: A list of people and their opt-outs. Each object represents a person and the senders/channels they&#39;ve opted out of.

### [Push](docs/api/push.html)

SDK operations: .

### [Relationship](docs/api/relationship.html)

SDK operations: .

### [ReportingWebhook](docs/api/reporting_webhook.html)

Results: Returns your webhook configuration and the ID of the webhook.; Returns an array of your `reporting_webhooks`.; Returns an individual webhook configuration.; A successful request has no response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `disabled`: Set to `true` to quit sending events to the webhook URL. Set to `false` to enable the webhook.
- `endpoint`: The webhook URL.
- `events`: Specifies the types of events you want to report to your webhook. See our [reporting webhooks reference](/integrations/api/webhooks/) for more information about event types and the information they return.
- `full_resolution`: Set to `false` to send unique open and click events to the webhook. Set to `true` to send all events.
- `id`: The identifier for the webhook.

### [SearchSuppression](docs/api/search_suppression.html)

SDK operations: .

### [Segment](docs/api/segment.html)

Results: Returns the segment ID and other information.; Returns an array of `segments`. Each object in the response represents an individual segment.; Returns an array of customers for a segment.; Returns the information about the segment.; Returns the customer `count` for a segment.; Returns the IDs of items that reference the segment.; The segment is deleted.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: The date time when the referenced ID was created.
- `deduplicate_id`: An identifier in the format `id:timestamp` where the id is for the object you&#39;re working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was updated.
- `description`: A description for the segment. This can help you understand the purpose of the segment when you encounter it in other requests or in the UI.
- `id`: The identifier for a segment; used to target a segment in requests.
- `name`: The name of the segment.

### [SendMessage](docs/api/send_message.html)

Results: A successful request returns the trigger ID.; Returns a unique ID for the delivery.

SDK operations: `create`.

Key fields to recognise:

- `attachments`: A dictionary of attachments where the filename is the key and the value is the base64-encoded contents.
- `auto_create`: If `true` and your `transactional_message_id` doesn&#39;t match a record, Customer.io creates an empty record using that value as the *Trigger Name*.
- `bcc`: Blind copy message recipients.
- `body`: The HTML body of your message.
- `body_amp`: AMP-enabled content for your email.

### [SenderIdentity](docs/api/sender_identity.html)

Results: Returns an array of `sender_identities`.; Returns arrays of automations and one-time sends.; Returns the `sender_identity` you requested.

SDK operations: `list`, `load`.

Key fields to recognise:

- `address`: The sender name and email address in the format `name &lt;name@example.com&gt;`.
- `auto_generated`: If true, the sender is automatically generated by Customer.io.
- `deduplicate_id`: An identifier in the format `id:timestamp` where the id is for the object you&#39;re working with (Automations, Deliveries, Exports, Identities, One-time sends, Segments, and Templates), and the timestamp is the last time the object was updated.
- `email`: The email address of the sender.
- `hidden`: If true, the sender is hidden in the Customer.io UI.

### [Sms](docs/api/sms.html)

SDK operations: .

### [Snippet](docs/api/snippet.html)

Results: Returns the created snippet.; Returns an array of `snippets`.; A successful delete operation returns no content.

SDK operations: `create`, `list`, `remove`, `update`.

Key fields to recognise:

- `name`: The name of the snippet, must be unique.
- `updated_at`: The last date-time the snippet was updated.
- `value`: The contents of the snippet.

### [Start](docs/api/start.html)

SDK operations: .

### [SubscriptionCenter](docs/api/subscription_center.html)

Results: Returns an array of `channels`.; Returns an array of `topics`.; Returns a signed `token` and a subscription center `url` for the person.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: A description of the channel.
- `id`: The system-generated ID for the subscription channel.
- `identifier`: The key associated with the subscription topic. The format is `topic_&lt;id&gt;`.
- `name`: The display name of the subscription channel.
- `subscribed_by_default`: If false, a person is opted-out by default. If true, a person is opted-in by default.

### [SubscriptionChannel](docs/api/subscription_channel.html)

SDK operations: .

### [SubscriptionTopic](docs/api/subscription_topic.html)

SDK operations: .

### [Suppression](docs/api/suppression.html)

SDK operations: .

### [TestGroup](docs/api/test_group.html)

SDK operations: .

### [Transactional](docs/api/transactional.html)

Results: Returns an array of `messages`. Each object represents a different delivery originating from the transactional ID. For transactional messages, the action, one-time send, automation, content, and broadcast IDs are all `null`. All deliveries originate from the transactional ID in the path of your request.; Returns an array of link objects. Each object represents a different link in your transactional message and contains independent metrics.; Returns each variant of the transactional message.; Returns an array of transactional messages.; Returns transactional message metrics by `series` (with increments are based on the `period` and `step` in your request) for transactional message.; Returns the specified translation of the transactional message.; Returns the specified variant of the transactional message.; Returns metadata for the transactional message ID in the path.; Returns the updated transactional message.; Returns the updated variant of the transactional message.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `bcc`: The blind-copy address(es) for this action.
- `body`: The body of the transactional message. You cannot modify the body if you created it with our drag-and-drop editor.
- `body_amp`: AMP-enabled content for your email. If a recipient&#39;s email client doesn&#39;t support AMP, they receive your `body` content instead. Make sure you&#39;re [set up to send AMP](/journeys/channels/email/layouts/amp-for-email/) first.
- `cc`: The carbon-copy address(es) for this action.
- `content`: The object represents a variant.

### [Trigger](docs/api/trigger.html)

SDK operations: .

### [Update](docs/api/update.html)

SDK operations: .

### [Whatsapp](docs/api/whatsapp.html)

SDK operations: .

### [Workspace](docs/api/workspace.html)

Results: Returns an array of `workspaces`.

SDK operations: `list`.

Key fields to recognise:

- `billable_messages_sent`: The count of [emails sent](/journeys/channels/message-statuses/#sent) that are considered for billing in your current billing period. Ultimately, we only bill for the overages on your plan.
- `id`: The id of the workspace.
- `messages_sent`: The count of [messages sent](/journeys/channels/message-statuses/#sent) via any channel (email, SMS, in-app, push, slack) in the current billing period.
- `name`: The name of the workspace.
- `object_types`: The current count of object types in the workspace. Updates roughly every hour.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Activity](docs/api/activity.html) | `list` | `GET /v1/activities` | Required |
| [Asset](docs/api/asset.html) | `create` | `POST /v1/assets/files` | See reference |
| [Asset](docs/api/asset.html) | `create` | `POST /v1/assets/folders` | See reference |
| [Asset](docs/api/asset.html) | `list` | `GET /v1/assets` | See reference |
| [Asset](docs/api/asset.html) | `list` | `GET /v1/assets/folders` | See reference |
| [Asset](docs/api/asset.html) | `load` | `GET /v1/assets/files/{id}` | See reference |
| [Asset](docs/api/asset.html) | `load` | `GET /v1/assets/folders/{id}` | See reference |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /v1/assets/files/{id}` | See reference |
| [Asset](docs/api/asset.html) | `remove` | `DELETE /v1/assets/folders/{id}` | See reference |
| [Asset](docs/api/asset.html) | `update` | `PUT /v1/assets/files/{id}` | See reference |
| [Asset](docs/api/asset.html) | `update` | `PUT /v1/assets/folders/{id}` | See reference |
| [Automation](docs/api/automation.html) | `list` | `GET /v1/campaigns/{campaign_id}/messages` | Required |
| [Automation](docs/api/automation.html) | `list` | `GET /v1/campaigns/{campaign_id}/actions/{action_id}/metrics/links` | Required |
| [Automation](docs/api/automation.html) | `list` | `GET /v1/campaigns/{campaign_id}/metrics/links` | Required |
| [Automation](docs/api/automation.html) | `list` | `GET /v1/campaigns/{campaign_id}/actions` | Required |
| [Automation](docs/api/automation.html) | `list` | `GET /v1/campaigns` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}/actions/{action_id}/metrics` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}/metrics` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}/journey_metrics` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}/actions/{action_id}` | Required |
| [Automation](docs/api/automation.html) | `load` | `GET /v1/campaigns/{campaign_id}` | Required |
| [Automation](docs/api/automation.html) | `update` | `PUT /v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}` | Required |
| [Automation](docs/api/automation.html) | `update` | `PUT /v1/campaigns/{campaign_id}/actions/{action_id}` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts/{broadcast_id}/messages` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics/links` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/campaigns/{broadcast_id}/triggers/{trigger_id}/errors` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts/{broadcast_id}/metrics/links` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts/{broadcast_id}/actions` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts/{broadcast_id}/triggers` | Required |
| [Broadcast](docs/api/broadcast.html) | `list` | `GET /v1/broadcasts` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/broadcasts/{broadcast_id}/metrics` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/broadcasts/{broadcast_id}/actions/{action_id}` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/campaigns/{broadcast_id}/triggers/{trigger_id}` | Required |
| [Broadcast](docs/api/broadcast.html) | `load` | `GET /v1/broadcasts/{broadcast_id}` | Required |
| [Broadcast](docs/api/broadcast.html) | `update` | `PUT /v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}` | Required |
| [Broadcast](docs/api/broadcast.html) | `update` | `PUT /v1/broadcasts/{broadcast_id}/actions/{action_id}` | Required |
| [Collection](docs/api/collection.html) | `create` | `POST /v1/collections` | Required |
| [Collection](docs/api/collection.html) | `list` | `GET /v1/collections` | Required |
| [Collection](docs/api/collection.html) | `load` | `GET /v1/collections/{collection_id}` | Required |
| [Collection](docs/api/collection.html) | `load` | `GET /v1/collections/{collection_id}/content` | Required |
| [Collection](docs/api/collection.html) | `remove` | `DELETE /v1/collections/{collection_id}` | Required |
| [Collection](docs/api/collection.html) | `update` | `PUT /v1/collections/{collection_id}` | Required |
| [Collection](docs/api/collection.html) | `update` | `PUT /v1/collections/{collection_id}/content` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /v1/customers` | Required |
| [Customer](docs/api/customer.html) | `create` | `POST /v1/customers/attributes` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers/{customer_id}/activities` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers/{customer_id}/messages` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers/{customer_id}/relationships` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers/{customer_id}/segments` | Required |
| [Customer](docs/api/customer.html) | `list` | `GET /v1/customers` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /v1/customers/{customer_id}/subscription_preferences` | Required |
| [Customer](docs/api/customer.html) | `load` | `GET /v1/customers/{customer_id}/attributes` | Required |
| [DataIndex](docs/api/data_index.html) | `create` | `POST /v1/data_index/attributes` | Required |
| [DataIndex](docs/api/data_index.html) | `create` | `POST /v1/data_index/events` | Required |
| [DesignStudio](docs/api/design_studio.html) | `create` | `POST /v1/design_studio/components` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `create` | `POST /v1/design_studio/folders` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `list` | `GET /v1/design_studio/components` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `list` | `GET /v1/design_studio/folders` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `load` | `GET /v1/design_studio/components/{id}` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `load` | `GET /v1/design_studio/folders/{id}` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `remove` | `DELETE /v1/design_studio/components/{id}` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `remove` | `DELETE /v1/design_studio/folders/{id}` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `update` | `PUT /v1/design_studio/components/{id}` | See reference |
| [DesignStudio](docs/api/design_studio.html) | `update` | `PUT /v1/design_studio/folders/{id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/versions/{version_id}/restore` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/inbox_previews` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/languages` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/link` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/preview` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/publish` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails/{id}/versions` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `create` | `POST /v1/design_studio/emails` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/emails` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/inbox_previews/jobs` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/emails/{id}/versions` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/emails/{id}/publish_status` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/emails/{id}/languages` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/emails/{id}/review` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/inbox_previews/clients` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `list` | `GET /v1/design_studio/inbox_previews/credits` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/inbox_previews/{run_id}/captures/{client_id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/languages/{language}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/inbox_previews/{run_id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/versions/{version_id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/render` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}/unpublished_changes` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `load` | `GET /v1/design_studio/emails/{id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `remove` | `DELETE /v1/design_studio/emails/{id}/languages/{language}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `remove` | `DELETE /v1/design_studio/emails/{id}/versions/{version_id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `remove` | `DELETE /v1/design_studio/emails/{id}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `update` | `PUT /v1/design_studio/emails/{id}/languages/{language}` | See reference |
| [DesignStudioEmail](docs/api/design_studio_email.html) | `update` | `PUT /v1/design_studio/emails/{id}` | See reference |
| [EspSuppression](docs/api/esp_suppression.html) | `create` | `POST /v1/esp/suppression/{suppression_type}/{email_address}` | Required |
| [EspSuppression](docs/api/esp_suppression.html) | `load` | `GET /v1/esp/domains/{domain_name}/suppression/{suppression_type}` | Required |
| [EspSuppression](docs/api/esp_suppression.html) | `load` | `GET /v1/esp/suppression/{suppression_type}` | Required |
| [EspSuppression](docs/api/esp_suppression.html) | `load` | `GET /v1/esp/search_suppression/{email_address}` | Required |
| [EspSuppression](docs/api/esp_suppression.html) | `remove` | `DELETE /v1/esp/suppression/{suppression_type}/{email_address}` | Required |
| [Export](docs/api/export.html) | `create` | `POST /v1/exports/customers` | Required |
| [Export](docs/api/export.html) | `create` | `POST /v1/exports/deliveries` | Required |
| [Export](docs/api/export.html) | `list` | `GET /v1/exports` | Required |
| [Export](docs/api/export.html) | `load` | `GET /v1/exports/{export_id}` | Required |
| [Export](docs/api/export.html) | `load` | `GET /v1/exports/{export_id}/download` | Required |
| [Import](docs/api/import.html) | `create` | `POST /v1/imports` | Required |
| [Import](docs/api/import.html) | `load` | `GET /v1/imports/{import_id}` | Required |
| [Info](docs/api/info.html) | `list` | `GET /v1/info/ip_addresses` | Not required |
| [LiveNotification](docs/api/live_notification.html) | `create` | `POST /v1/live_notifications/end` | Required |
| [LiveNotification](docs/api/live_notification.html) | `create` | `POST /v1/live_notifications/start` | Required |
| [LiveNotification](docs/api/live_notification.html) | `create` | `POST /v1/live_notifications/update` | Required |
| [LiveNotification](docs/api/live_notification.html) | `load` | `GET /v1/live_notifications/{instance_id}` | Required |
| [Message](docs/api/message.html) | `list` | `GET /v1/messages` | Required |
| [Message](docs/api/message.html) | `load` | `GET /v1/messages/{message_id}` | Required |
| [Message](docs/api/message.html) | `load` | `GET /v1/messages/{message_id}/archived_message` | Required |
| [Newsletter](docs/api/newsletter.html) | `create` | `POST /v1/newsletters/{newsletter_id}/schedule` | Required |
| [Newsletter](docs/api/newsletter.html) | `create` | `POST /v1/newsletters/{newsletter_id}/send` | Required |
| [Newsletter](docs/api/newsletter.html) | `create` | `POST /v1/newsletters` | Required |
| [Newsletter](docs/api/newsletter.html) | `list` | `GET /v1/newsletters` | Required |
| [Newsletter](docs/api/newsletter.html) | `load` | `GET /v1/newsletters/{newsletter_id}` | Required |
| [Newsletter](docs/api/newsletter.html) | `remove` | `DELETE /v1/newsletters/{newsletter_id}` | Required |
| [NewsletterMetric](docs/api/newsletter_metric.html) | `list` | `GET /v1/newsletters/{newsletter_id}/messages` | Required |
| [NewsletterMetric](docs/api/newsletter_metric.html) | `list` | `GET /v1/newsletters/{newsletter_id}/contents/{content_id}/metrics/links` | Required |
| [NewsletterMetric](docs/api/newsletter_metric.html) | `list` | `GET /v1/newsletters/{newsletter_id}/metrics/links` | Required |
| [NewsletterMetric](docs/api/newsletter_metric.html) | `load` | `GET /v1/newsletters/{newsletter_id}/contents/{content_id}/metrics` | Required |
| [NewsletterMetric](docs/api/newsletter_metric.html) | `load` | `GET /v1/newsletters/{newsletter_id}/metrics` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `create` | `POST /v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `create` | `POST /v1/newsletters/{newsletter_id}/language` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `create` | `POST /v1/newsletters/{newsletter_id}/test_groups` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `list` | `GET /v1/newsletters/{newsletter_id}/contents` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `list` | `GET /v1/newsletters/{newsletter_id}/test_groups` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `load` | `GET /v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `load` | `GET /v1/newsletters/{newsletter_id}/contents/{content_id}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `load` | `GET /v1/newsletters/{newsletter_id}/language/{language}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `remove` | `DELETE /v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `remove` | `DELETE /v1/newsletters/{newsletter_id}/language/{language}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `update` | `PUT /v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `update` | `PUT /v1/newsletters/{newsletter_id}/contents/{content_id}` | Required |
| [NewsletterVariant](docs/api/newsletter_variant.html) | `update` | `PUT /v1/newsletters/{newsletter_id}/language/{language}` | Required |
| [Object](docs/api/object.html) | `create` | `POST /v1/objects` | Required |
| [Object](docs/api/object.html) | `list` | `GET /v1/objects/{object_type_id}/{object_id}/relationships` | Required |
| [Object](docs/api/object.html) | `list` | `GET /v1/object_types` | Required |
| [Object](docs/api/object.html) | `load` | `GET /v1/objects/{object_type_id}/{object_id}/attributes` | Required |
| [OptOut](docs/api/opt_out.html) | `list` | `GET /v1/optouts` | Required |
| [OptOut](docs/api/opt_out.html) | `list` | `GET /v1/customers/{customer_id}/optouts` | Required |
| [OptOut](docs/api/opt_out.html) | `update` | `PUT /v1/customers/{customer_id}/optouts` | Required |
| [ReportingWebhook](docs/api/reporting_webhook.html) | `create` | `POST /v1/reporting_webhooks` | Required |
| [ReportingWebhook](docs/api/reporting_webhook.html) | `list` | `GET /v1/reporting_webhooks` | Required |
| [ReportingWebhook](docs/api/reporting_webhook.html) | `load` | `GET /v1/reporting_webhooks/{webhook_id}` | Required |
| [ReportingWebhook](docs/api/reporting_webhook.html) | `remove` | `DELETE /v1/reporting_webhooks/{webhook_id}` | Required |
| [ReportingWebhook](docs/api/reporting_webhook.html) | `update` | `PUT /v1/reporting_webhooks/{webhook_id}` | Required |
| [Segment](docs/api/segment.html) | `create` | `POST /v1/segments` | Required |
| [Segment](docs/api/segment.html) | `list` | `GET /v1/segments` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /v1/segments/{segment_id}/membership` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /v1/segments/{segment_id}` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /v1/segments/{segment_id}/customer_count` | Required |
| [Segment](docs/api/segment.html) | `load` | `GET /v1/segments/{segment_id}/used_by` | Required |
| [Segment](docs/api/segment.html) | `remove` | `DELETE /v1/segments/{segment_id}` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/campaigns/{broadcast_id}/triggers` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/email` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/in_app` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/inbox_message` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/push` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/sms` | Required |
| [SendMessage](docs/api/send_message.html) | `create` | `POST /v1/send/whatsapp` | Required |
| [SenderIdentity](docs/api/sender_identity.html) | `list` | `GET /v1/sender_identities` | Required |
| [SenderIdentity](docs/api/sender_identity.html) | `list` | `GET /v1/sender_identities/{sender_id}/used_by` | Required |
| [SenderIdentity](docs/api/sender_identity.html) | `load` | `GET /v1/sender_identities/{sender_id}` | Required |
| [Snippet](docs/api/snippet.html) | `create` | `POST /v1/snippets` | Required |
| [Snippet](docs/api/snippet.html) | `list` | `GET /v1/snippets` | Required |
| [Snippet](docs/api/snippet.html) | `remove` | `DELETE /v1/snippets/{snippet_name}` | Required |
| [Snippet](docs/api/snippet.html) | `update` | `PUT /v1/snippets` | Required |
| [SubscriptionCenter](docs/api/subscription_center.html) | `list` | `GET /v1/subscription_channels` | Required |
| [SubscriptionCenter](docs/api/subscription_center.html) | `list` | `GET /v1/subscription_topics` | Required |
| [SubscriptionCenter](docs/api/subscription_center.html) | `load` | `GET /v1/subscription_center/{customer_id}/token` | Required |
| [Transactional](docs/api/transactional.html) | `list` | `GET /v1/transactional/{transactional_id}/messages` | Required |
| [Transactional](docs/api/transactional.html) | `list` | `GET /v1/transactional/{transactional_id}/metrics/links` | Required |
| [Transactional](docs/api/transactional.html) | `list` | `GET /v1/transactional/{transactional_id}/contents` | Required |
| [Transactional](docs/api/transactional.html) | `list` | `GET /v1/transactional` | Required |
| [Transactional](docs/api/transactional.html) | `load` | `GET /v1/transactional/{transactional_id}/metrics` | Required |
| [Transactional](docs/api/transactional.html) | `load` | `GET /v1/transactional/{transactional_id}/contents/{content_id}` | Required |
| [Transactional](docs/api/transactional.html) | `load` | `GET /v1/transactional/{transactional_id}/language/{language}` | Required |
| [Transactional](docs/api/transactional.html) | `load` | `GET /v1/transactional/{transactional_id}` | Required |
| [Transactional](docs/api/transactional.html) | `update` | `PUT /v1/transactional/{transactional_id}/content/{content_id}` | Required |
| [Transactional](docs/api/transactional.html) | `update` | `PUT /v1/transactional/{transactional_id}/language/{language}` | Required |
| [Workspace](docs/api/workspace.html) | `list` | `GET /v1/workspaces` | Required |

## Connect to the API

- The base URL for broadcasts, transactional messages, and data-retrieval APIs. These endpoints use bearer authorization, and require a [token that you generate in the UI](https://fly.customer.io/settings/api_credentials?keyType=app).: `https://api.customer.io`
- The base URL for broadcasts, transactional messages, and data-retrieval APIs (EU region). These endpoints use bearer authorization, and require a [token that you generate in the UI](https://fly.customer.io/settings/api_credentials?keyType=app).: `https://api-eu.customer.io`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

The App API uses a bearer authentication scheme. You can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).

Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request. Service-account tokens are intended for testing and one-off sends, for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it&#39;s workspace-scoped, easier to rotate, and has a smaller blast radius. Service-account tokens are server-side credentials. Treat them like any API key, keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.

API key passed as a Bearer token

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /v1/info/ip_addresses`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.customer.io/v1/info/ip_addresses'
```

Inspect the response using the [Info](docs/api/info.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `customerio-app_list`: List records for an entity. Supported entities: `activity`, `asset`, `automation`, `broadcast`, `collection`, `customer`, `design_studio`, `design_studio_email`, `export`, `info`, `message`, `newsletter`, `newsletter_metric`, `newsletter_variant`, `object`, `opt_out`, `reporting_webhook`, `segment`, `sender_identity`, `snippet`, `subscription_center`, `transactional`, `workspace`.
- `customerio-app_load`: Load one record for an entity. Supported entities: `asset`, `automation`, `broadcast`, `collection`, `customer`, `design_studio`, `design_studio_email`, `esp_suppression`, `export`, `import`, `live_notification`, `message`, `newsletter`, `newsletter_metric`, `newsletter_variant`, `object`, `reporting_webhook`, `segment`, `sender_identity`, `subscription_center`, `transactional`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

