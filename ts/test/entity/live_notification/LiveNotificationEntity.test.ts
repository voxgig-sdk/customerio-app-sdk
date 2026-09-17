

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CustomerioAppSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('LiveNotificationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CUSTOMERIO_APP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CustomerioAppSDK.test()
    const ent = testsdk.LiveNotification()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'live_notification.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created_at","req":false,"short":"When the delivery was created (unix timestamp).","type":"`$INTEGER`","index$":0},{"active":true,"name":"id","req":false,"short":"The delivery ID.","type":"`$STRING`","index$":1},{"active":true,"name":"operation","req":false,"short":"The lifecycle operation the delivery carried.","type":"`$STRING`","index$":2},{"active":true,"name":"source","req":false,"short":"Where the operation originated—the API or the device.","type":"`$STRING`","index$":3},{"active":true,"name":"status","req":false,"short":"The delivery's status.","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"live_notification","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v1/live_notifications/end","json":"{\"operationId\":\"endLiveNotification\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attributes\":{\"additionalProperties\":true,\"description\":\"Static activity fields, for renderers that need them alongside the content state.\",\"type\":\"object\"},\"content_state\":{\"anyOf\":[{\"additionalProperties\":true,\"description\":\"Your own dynamic fields. On iOS, field names must match your `ContentState` type. For Android custom types, fields pass through to your app's renderer as-is. Date fields are epoch seconds.\",\"title\":\"Free-form (iOS or Android custom type)\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the multi-step tracker template. `notification_type`: `io.customer.livenotifications.segments`.\",\"properties\":{\"segmentsComplete\":{\"description\":\"How many segments are filled; the remainder render as incomplete. Values above segmentsTotal are capped at segmentsTotal.\",\"type\":\"integer\"},\"segmentsTotal\":{\"description\":\"The total number of segments in the progress bar. Values above 20 are capped at 20.\",\"maximum\":20,\"minimum\":1,\"type\":\"integer\"},\"status\":{\"description\":\"Primary status line, like `Out for delivery`.\",\"type\":\"string\"},\"substatus\":{\"description\":\"Secondary line under the status.\",\"type\":\"string\"},\"trailingText\":{\"description\":\"Short text on the Dynamic Island trailing edge, e.g. \\\\\\\"5 min\\\\\\\". Keep it brief; the trailing region is narrow.\",\"type\":\"string\"}},\"required\":[\"status\",\"segmentsTotal\",\"segmentsComplete\"],\"title\":\"Multi-step tracker\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the countdown timer template. `notification_type`: `io.customer.livenotifications.countdowntimer`.\",\"properties\":{\"endTime\":{\"description\":\"Countdown target, in whole seconds since 1970 UTC. A time in the future renders a live countdown; omit it to render no timer. The countdown does not clear itself when it reaches zero — it rests at \\\\\\\"0:00\\\\\\\" until you send an update with a finished title and no endTime.\",\"type\":\"integer\"},\"statusMessage\":{\"description\":\"Secondary line under the title.\",\"type\":\"string\"},\"title\":{\"description\":\"Primary status line.\",\"type\":\"string\"}},\"required\":[\"title\"],\"title\":\"Countdown timer\",\"type\":\"object\"}],\"description\":\"The final content state to show before the activity ends. Defaults to the last state you sent. The content state's shape depends on the activity's `notification_type`. For iOS or a free form Android activity, pick the free form variant. For other Android notification types, pick the matching variant below.\"},\"deep_link\":{\"description\":\"A link to open when the person taps the activity.\",\"type\":\"string\"},\"instance_id\":{\"description\":\"The activity's instance ID (ULID), returned when you started it.\",\"type\":\"string\"},\"push_payload\":{\"description\":\"The alert to accompany the end event. Optional whether Customer.io delivers directly through APNs or relays through Firebase Cloud Messaging (FCM). If you include an alert, provide both its `title` and `body`.\",\"properties\":{\"alert\":{\"properties\":{\"body\":{\"description\":\"The alert body.\",\"type\":\"string\"},\"sound\":{\"description\":\"The sound to play with the end event.\",\"type\":\"string\"},\"title\":{\"description\":\"The alert title.\",\"type\":\"string\"}},\"required\":[\"title\",\"body\"],\"type\":\"object\"}},\"type\":\"object\"}},\"required\":[\"instance_id\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"instance_id\":{\"description\":\"The activity's instance ID.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The end event was queued.\"},\"400\":{\"description\":\"The request was malformed, `instance_id` isn't a valid ULID, or a `push_payload.alert` was missing a `title` or `body`.\"},\"404\":{\"description\":\"Live notifications aren't enabled for this workspace.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/live_notifications/end","segments":[{"lit":"v1"},{"lit":"live_notifications"},{"lit":"end"}],"select":{"$action":"end"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /v1/live_notifications/start","json":"{\"operationId\":\"startLiveNotification\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"app_identifier\":{\"description\":\"The identifier of the app to start the activity on—a bundle ID on iOS or a package name on Android. This only matters when your workspace has multiple apps: set it to target a device belonging to that app, or omit it to target the workspace's default app. Workspaces without multiple apps ignore this field. If you provide a value that doesn't match an app in your workspace, the request fails with a `400`.\\n\",\"type\":\"string\"},\"attributes\":{\"anyOf\":[{\"additionalProperties\":true,\"description\":\"Your own static fields. On iOS, field names must match the `ActivityAttributes` type in your app. For Android custom types, fields pass through to your app's renderer as-is.\",\"title\":\"Free-form (iOS or Android custom type)\",\"type\":\"object\"},{\"description\":\"Static fields for a multi-step tracker template. `notification_type`: `io.customer.livenotifications.segments`.\",\"properties\":{\"header\":{\"description\":\"Top-row label\",\"type\":\"string\"}},\"required\":[\"header\"],\"title\":\"Multi-step tracker\",\"type\":\"object\"},{\"description\":\"Static fields for the countdown timer template. `notification_type`: `io.customer.livenotifications.countdowntimer`.\",\"properties\":{\"header\":{\"description\":\"Top-row label of the notification.\",\"type\":\"string\"}},\"required\":[\"header\"],\"title\":\"Countdown timer\",\"type\":\"object\"}],\"description\":\"Static fields used to create the activity—an order number, a flight's origin and destination, or the teams in a match. On iOS they can't change after start. On Android, include the static fields your renderer needs on update and end calls too, because the SDK renders from a merged payload. The shape depends on your `notification_type`: pick the free form variant for iOS or a free form Android activity, or the matching bundled-template variant below. Template fields are documented for [iOS](/integrations/sdk/ios/live-activities/reference/#built-in-templates) and [Android](/integrations/sdk/android/live-notifications/reference/#built-in-templates).\\n\",\"minProperties\":1},\"content_state\":{\"anyOf\":[{\"additionalProperties\":true,\"description\":\"Your own dynamic fields. On iOS, field names must match your `ContentState` type. For Android custom types, fields pass through to your app's renderer as-is. Date fields are epoch seconds.\",\"title\":\"Free-form (iOS or Android custom type)\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the multi-step tracker template. `notification_type`: `io.customer.livenotifications.segments`.\",\"properties\":{\"segmentsComplete\":{\"description\":\"How many segments are filled; the remainder render as incomplete. Values above segmentsTotal are capped at segmentsTotal.\",\"type\":\"integer\"},\"segmentsTotal\":{\"description\":\"The total number of segments in the progress bar. Values above 20 are capped at 20.\",\"maximum\":20,\"minimum\":1,\"type\":\"integer\"},\"status\":{\"description\":\"Primary status line, like `Out for delivery`.\",\"type\":\"string\"},\"substatus\":{\"description\":\"Secondary line under the status.\",\"type\":\"string\"},\"trailingText\":{\"description\":\"Short text on the Dynamic Island trailing edge, e.g. \\\\\\\"5 min\\\\\\\". Keep it brief; the trailing region is narrow.\",\"type\":\"string\"}},\"required\":[\"status\",\"segmentsTotal\",\"segmentsComplete\"],\"title\":\"Multi-step tracker\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the countdown timer template. `notification_type`: `io.customer.livenotifications.countdowntimer`.\",\"properties\":{\"endTime\":{\"description\":\"Countdown target, in whole seconds since 1970 UTC. A time in the future renders a live countdown; omit it to render no timer. The countdown does not clear itself when it reaches zero — it rests at \\\\\\\"0:00\\\\\\\" until you send an update with a finished title and no endTime.\",\"type\":\"integer\"},\"statusMessage\":{\"description\":\"Secondary line under the title.\",\"type\":\"string\"},\"title\":{\"description\":\"Primary status line.\",\"type\":\"string\"}},\"required\":[\"title\"],\"title\":\"Countdown timer\",\"type\":\"object\"}],\"description\":\"The initial dynamic content for the activity—the status, score, or ETA the device renders. Send the complete state on every call; partial updates aren't supported. The shape depends on your `notification_type`: pick the free form variant for iOS or a free form Android activity, or the matching bundled-template variant below. Date fields are epoch seconds.\\n\",\"minProperties\":1},\"deep_link\":{\"description\":\"A link to open when the person taps the activity.\",\"type\":\"string\"},\"device_id\":{\"description\":\"The device token identifying the device to start the activity on.\",\"type\":\"string\"},\"expiration\":{\"description\":\"A unix timestamp (in seconds) for when the activity should expire. Must be no more than 6 hours in the future—values outside the range between now and that 6-hour maximum are rejected with a `400`. If you omit it (or pass `0`), the activity expires 6 hours after it starts.\\n\",\"type\":\"integer\"},\"identifiers\":{\"description\":\"Identifies the profile you want to start the activity for. You must provide exactly one of `id`, `email`, `phone`, or `internal` (our internal identifier, `cio_` followed by an alphanumeric string). You cannot target anonymous profiles.\",\"properties\":{\"email\":{\"description\":\"The profile's email address.\",\"type\":\"string\"},\"id\":{\"description\":\"The profile's `id` attribute.\",\"type\":\"string\"},\"internal\":{\"description\":\"Our internal identifier for the profile, prefixed with `cio_`.\",\"type\":\"string\"},\"phone\":{\"description\":\"The profile's phone number.\",\"type\":\"string\"}},\"type\":\"object\"},\"notification_type\":{\"description\":\"The reverse-DNS identifier of the activity type, like `io.customer.livenotifications.segments`. Must match a type your app registered with the SDK.\",\"type\":\"string\"},\"platform\":{\"description\":\"The device platform.\",\"enum\":[\"ios\",\"android\"],\"type\":\"string\"},\"push_payload\":{\"description\":\"The alert shown when the activity starts. Required for iOS.\",\"properties\":{\"alert\":{\"properties\":{\"body\":{\"description\":\"The alert body.\",\"type\":\"string\"},\"sound\":{\"description\":\"The sound to play when the activity starts.\",\"type\":\"string\"},\"title\":{\"description\":\"The alert title.\",\"type\":\"string\"}},\"required\":[\"title\",\"body\"],\"type\":\"object\"}},\"type\":\"object\"}},\"required\":[\"identifiers\",\"notification_type\",\"attributes\",\"content_state\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"instance_id\":{\"description\":\"The unique identifier (ULID) for the new activity instance. Use it to update, end, or check the status of the activity.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The activity was queued. Returns the instance ID for the new activity.\"},\"400\":{\"description\":\"The request was malformed—a missing required field, an invalid platform, more or fewer than one identifier, or a missing iOS alert.\"},\"404\":{\"description\":\"Live notifications aren't enabled for this workspace.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/live_notifications/start","segments":[{"lit":"v1"},{"lit":"live_notifications"},{"lit":"start"}],"select":{"$action":"start"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{},"contract":{"id":"POST /v1/live_notifications/update","json":"{\"operationId\":\"updateLiveNotification\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attributes\":{\"additionalProperties\":true,\"description\":\"Static activity fields, for renderers that need them alongside the content state. On iOS, attributes can't change after start.\",\"type\":\"object\"},\"content_state\":{\"anyOf\":[{\"additionalProperties\":true,\"description\":\"Your own dynamic fields. On iOS, field names must match your `ContentState` type. For Android custom types, fields pass through to your app's renderer as-is. Date fields are epoch seconds.\",\"title\":\"Free-form (iOS or Android custom type)\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the multi-step tracker template. `notification_type`: `io.customer.livenotifications.segments`.\",\"properties\":{\"segmentsComplete\":{\"description\":\"How many segments are filled; the remainder render as incomplete. Values above segmentsTotal are capped at segmentsTotal.\",\"type\":\"integer\"},\"segmentsTotal\":{\"description\":\"The total number of segments in the progress bar. Values above 20 are capped at 20.\",\"maximum\":20,\"minimum\":1,\"type\":\"integer\"},\"status\":{\"description\":\"Primary status line, like `Out for delivery`.\",\"type\":\"string\"},\"substatus\":{\"description\":\"Secondary line under the status.\",\"type\":\"string\"},\"trailingText\":{\"description\":\"Short text on the Dynamic Island trailing edge, e.g. \\\\\\\"5 min\\\\\\\". Keep it brief; the trailing region is narrow.\",\"type\":\"string\"}},\"required\":[\"status\",\"segmentsTotal\",\"segmentsComplete\"],\"title\":\"Multi-step tracker\",\"type\":\"object\"},{\"description\":\"Dynamic fields for the countdown timer template. `notification_type`: `io.customer.livenotifications.countdowntimer`.\",\"properties\":{\"endTime\":{\"description\":\"Countdown target, in whole seconds since 1970 UTC. A time in the future renders a live countdown; omit it to render no timer. The countdown does not clear itself when it reaches zero — it rests at \\\\\\\"0:00\\\\\\\" until you send an update with a finished title and no endTime.\",\"type\":\"integer\"},\"statusMessage\":{\"description\":\"Secondary line under the title.\",\"type\":\"string\"},\"title\":{\"description\":\"Primary status line.\",\"type\":\"string\"}},\"required\":[\"title\"],\"title\":\"Countdown timer\",\"type\":\"object\"}],\"description\":\"The complete new content state for the activity. The content state's shape depends on the activity's `notification_type`. For iOS or a free form Android activity, pick the free form variant. For other Android notification types, pick the matching variant below. Date fields are epoch seconds.\",\"minProperties\":1},\"deep_link\":{\"description\":\"A link to open when the person taps the activity.\",\"type\":\"string\"},\"instance_id\":{\"description\":\"The activity's instance ID (ULID), returned when you started it.\",\"type\":\"string\"},\"push_payload\":{\"description\":\"The alert to accompany the update. Optional whether Customer.io delivers directly through APNs or relays through Firebase Cloud Messaging (FCM). If you include an alert, provide both its `title` and `body`.\",\"properties\":{\"alert\":{\"properties\":{\"body\":{\"description\":\"The alert body.\",\"type\":\"string\"},\"sound\":{\"description\":\"The sound to play with the update.\",\"type\":\"string\"},\"title\":{\"description\":\"The alert title.\",\"type\":\"string\"}},\"required\":[\"title\",\"body\"],\"type\":\"object\"}},\"type\":\"object\"}},\"required\":[\"instance_id\",\"content_state\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"instance_id\":{\"description\":\"The activity's instance ID.\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The update was queued.\"},\"400\":{\"description\":\"The request was malformed, `instance_id` isn't a valid ULID, or a `push_payload.alert` was missing a `title` or `body`.\"},\"404\":{\"description\":\"Live notifications aren't enabled for this workspace.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/live_notifications/update","segments":[{"lit":"v1"},{"lit":"live_notifications"},{"lit":"update"}],"select":{"$action":"update"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"instance_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/live_notifications/{instance_id}","json":"{\"operationId\":\"getLiveNotification\",\"parameters\":[{\"description\":\"The activity's instance ID (ULID), returned when you started it.\",\"in\":\"path\",\"name\":\"instance_id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"ended_at\":{\"description\":\"When the activity ended (unix timestamp).\",\"nullable\":true,\"type\":\"integer\"},\"expires_at\":{\"description\":\"When the activity expires (unix timestamp).\",\"nullable\":true,\"type\":\"integer\"},\"failure_reason\":{\"description\":\"Why the activity failed, when `state` is `failed`.\",\"nullable\":true,\"type\":\"string\"},\"instance_id\":{\"description\":\"The activity's instance ID.\",\"type\":\"string\"},\"last_delivery\":{\"description\":\"The most recent delivery for the activity.\",\"nullable\":true,\"properties\":{\"created_at\":{\"description\":\"When the delivery was created (unix timestamp).\",\"type\":\"integer\"},\"id\":{\"description\":\"The delivery ID.\",\"type\":\"string\"},\"operation\":{\"description\":\"The lifecycle operation the delivery carried.\",\"enum\":[\"start\",\"update\",\"end\"],\"type\":\"string\"},\"source\":{\"description\":\"Where the operation originated—the API or the device.\",\"type\":\"string\"},\"status\":{\"description\":\"The delivery's status.\",\"enum\":[\"queued\",\"sent\",\"failed\",\"undeliverable\"],\"type\":\"string\"}},\"type\":\"object\"},\"notification_type\":{\"description\":\"The activity's reverse-DNS type identifier.\",\"type\":\"string\"},\"platform\":{\"description\":\"The device platform—`ios` or `android`.\",\"type\":\"string\"},\"started_at\":{\"description\":\"When the activity started (unix timestamp).\",\"type\":\"integer\"},\"state\":{\"description\":\"The activity's lifecycle state.\",\"enum\":[\"active\",\"ended\",\"expired\",\"failed\"],\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"The activity's current status.\"},\"400\":{\"description\":\"`instance_id` isn't a valid ULID.\"},\"404\":{\"description\":\"The activity wasn't found—a recently started one may not be processed yet—or live notifications aren't enabled for this workspace.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/live_notifications/{instance_id}","rename":{"param":{"instance_id":"id"}},"segments":[{"lit":"v1"},{"lit":"live_notifications"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.last_delivery`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"live_notification","name__orig":"live_notification","Name":"LiveNotification","name_":"live_notification","name-":"live-notification","NAME":"LIVE_NOTIFICATION","index$":25}, {"active":true,"entity":"live_notification","key$":"BasicLiveNotificationFlow","kind":"basic","name":"BasicLiveNotificationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"live_notification_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"live_notification_ref01","srcdatavar":"live_notification_ref01_data","suffix":"_dt0"},"match":{"id":"live_notification01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-live_notification_ref01"}}],"index$":1}]}, 'LiveNotification')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const live_notification_ref01_ent = client.LiveNotification()
    let live_notification_ref01_data = setup.data.new.live_notification['live_notification_ref01']

    live_notification_ref01_data = (await live_notification_ref01_ent.create(live_notification_ref01_data)).data()
    assert(null != live_notification_ref01_data.id)


    // LOAD
    const live_notification_ref01_match_dt0: any = {}
    live_notification_ref01_match_dt0.id = live_notification_ref01_data.id
    const live_notification_ref01_data_dt0 = (await live_notification_ref01_ent.load(live_notification_ref01_match_dt0)).data()
    assert(live_notification_ref01_data_dt0.id === live_notification_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/live_notification/LiveNotificationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CustomerioAppSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['live_notification01','live_notification02','live_notification03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CUSTOMERIO_APP_TEST_LIVE_NOTIFICATION_ENTID': idmap,
    'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
    'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
    'CUSTOMERIO_APP_APIKEY': '',
  })

  idmap = env['CUSTOMERIO_APP_TEST_LIVE_NOTIFICATION_ENTID']

  const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CUSTOMERIO_APP_TEST_LIVE_NOTIFICATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CustomerioAppSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
