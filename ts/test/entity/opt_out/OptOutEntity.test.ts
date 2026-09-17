

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


describe('OptOutEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CUSTOMERIO_APP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CustomerioAppSDK.test()
    const ent = testsdk.OptOut()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE
    for (const op of ['list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'opt_out.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"channel","req":false,"short":"The channel that the person is opted out of.","type":"`$STRING`","index$":0},{"active":true,"name":"cio_id","req":false,"short":"A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.","type":"`$STRING`","index$":1},{"active":true,"name":"customer_id","req":false,"short":"The person's ID.","type":"`$STRING`","index$":2},{"active":true,"name":"from","req":false,"short":"The sender that the person is opted out of.","type":"`$STRING`","index$":3},{"active":true,"name":"optouts","op":{"list":{"req":false,"type":"`$ARRAY`"}},"req":true,"short":"The senders and channels you want to opt the person out of, or back in to.","type":"`$ARRAY`","index$":4}],"name":"opt_out","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"+15551234567","kind":"query","name":"from","orig":"from","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":100,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"MTox","kind":"query","name":"start","orig":"start","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /v1/optouts","json":"{\"operationId\":\"getOptouts\",\"parameters\":[{\"description\":\"Filter for a specific sender on any channel. For SMS, this is a sender phone number (E.164), an alphanumeric sender ID, or a messaging-service SID; for WhatsApp, it's the sender phone number.\",\"in\":\"query\",\"name\":\"from\",\"required\":false,\"schema\":{\"example\":\"+15551234567\",\"type\":\"string\"}},{\"description\":\"A pagination cursor—a base64-encoded value returned in the `next` property of the previous page. Omit this parameter to return the first page; pass the previous page's `next` value to return the following page.\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"example\":\"MTox\",\"type\":\"string\"}},{\"description\":\"The maximum number of results you want to retrieve per page.\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"default\":100,\"maximum\":1000,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"next\":\"MTox\",\"optouts\":[{\"cio_id\":\"cio_03000001\",\"customer_id\":\"abc123\",\"optouts\":[{\"channel\":\"sms\",\"from\":\"+15551234567\"},{\"channel\":\"whatsapp\",\"from\":\"+15559876543\"}]}]},\"schema\":{\"properties\":{\"next\":{\"description\":\"The `start` value for the next page of results. Absent or empty when there are no more results.\",\"type\":\"string\"},\"optouts\":{\"description\":\"A list of people and their opt-outs. Each object represents a person and the senders/channels they've opted out of.\",\"items\":{\"properties\":{\"cio_id\":{\"description\":\"A unique identifier set by Customer.io, used to reference a person if you want to update their identifiers.\",\"example\":\"a3000001\",\"type\":\"string\"},\"customer_id\":{\"description\":\"The person's ID.\",\"example\":\"abc123\",\"type\":\"string\"},\"optouts\":{\"description\":\"The senders and channels that the person is opted out of. An entry's presence means the person is opted out of that sender on that channel.\",\"items\":{\"properties\":{\"channel\":{\"description\":\"The channel that the person is opted out of.\",\"enum\":[\"sms\",\"whatsapp\"],\"example\":\"sms\",\"type\":\"string\"},\"from\":{\"description\":\"The sender that the person is opted out of. For SMS, this is a sender phone number (E.164), an alphanumeric sender ID, or a messaging-service SID; for WhatsApp, it's the sender phone number.\",\"example\":\"+15551234567\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of opt-out records, one per person.\"},\"401\":{\"description\":\"Unauthorized request. Make sure that you provided the right credentials.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/optouts","segments":[{"lit":"v1"},{"lit":"optouts"}],"select":{"exist":["from","limit","start"]},"transform":{"req":"`reqdata`","res":"`body.optouts`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":12345,"kind":"param","name":"customer_id","orig":"customer_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"id_type","orig":"id_type","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/customers/{customer_id}/optouts","json":"{\"operationId\":\"getPersonOptouts\",\"parameters\":[{\"description\":\"The ID of the customer you want to perform an operation against.\",\"in\":\"path\",\"name\":\"customer_id\",\"required\":true,\"schema\":{\"example\":12345,\"type\":\"string\"}},{\"description\":\"The type of `customer_id` you want to use to reference a person. If you don't provide this parameter, we assume that the `customer_id` in your request is a person's `id`. You can use `email` and `phone` only if they're enabled as identifiers in your [workspace settings](/accounts/workspaces/overview/#migrate-workspace); otherwise the request returns `400`. Reference `phone` values in [E.164 format](https://en.wikipedia.org/wiki/E.164), like `+14155552671`, and URL-encode the leading `+` as `%2B`.\",\"in\":\"query\",\"name\":\"id_type\",\"required\":false,\"schema\":{\"enum\":[\"id\",\"email\",\"phone\",\"cio_id\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"optouts\":[{\"channel\":\"sms\",\"from\":\"+15551234567\"},{\"channel\":\"whatsapp\",\"from\":\"+15559876543\"}]},\"schema\":{\"properties\":{\"optouts\":{\"description\":\"The senders and channels that the person is opted out of. An entry's presence means the person is opted out of that sender on that channel.\",\"items\":{\"properties\":{\"channel\":{\"description\":\"The channel that the person is opted out of.\",\"enum\":[\"sms\",\"whatsapp\"],\"example\":\"sms\",\"type\":\"string\"},\"from\":{\"description\":\"The sender that the person is opted out of. For SMS, this is a sender phone number (E.164), an alphanumeric sender ID, or a messaging-service SID; for WhatsApp, it's the sender phone number.\",\"example\":\"+15551234567\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns the person's opt-outs across channels.\"},\"404\":{\"description\":\"The `customer_id` does not exist.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/customers/{customer_id}/optouts","segments":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"optouts"}],"select":{"exist":["customer_id","id_type"]},"transform":{"req":"`reqdata`","res":"`body.optouts`"},"index$":1}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":12345,"kind":"param","name":"customer_id","orig":"customer_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"id_type","orig":"id_type","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /v1/customers/{customer_id}/optouts","json":"{\"operationId\":\"updatePersonOptouts\",\"parameters\":[{\"description\":\"The ID of the customer you want to perform an operation against.\",\"in\":\"path\",\"name\":\"customer_id\",\"required\":true,\"schema\":{\"example\":12345,\"type\":\"string\"}},{\"description\":\"The type of `customer_id` you want to use to reference a person. If you don't provide this parameter, we assume that the `customer_id` in your request is a person's `id`. You can use `email` and `phone` only if they're enabled as identifiers in your [workspace settings](/accounts/workspaces/overview/#migrate-workspace); otherwise the request returns `400`. Reference `phone` values in [E.164 format](https://en.wikipedia.org/wiki/E.164), like `+14155552671`, and URL-encode the leading `+` as `%2B`.\",\"in\":\"query\",\"name\":\"id_type\",\"required\":false,\"schema\":{\"enum\":[\"id\",\"email\",\"phone\",\"cio_id\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"optouts\":[{\"channel\":\"sms\",\"from\":\"+15551234567\",\"optout\":true}]},\"schema\":{\"properties\":{\"optouts\":{\"description\":\"The senders and channels you want to opt the person out of, or back in to. Provide one entry per sender/channel.\",\"items\":{\"properties\":{\"channel\":{\"default\":\"sms\",\"description\":\"The channel for the opt-out. Defaults to `sms`.\",\"enum\":[\"sms\",\"whatsapp\"],\"example\":\"sms\",\"type\":\"string\"},\"from\":{\"description\":\"The sender you want to opt the person out of, or back in to. For SMS, this is a sender phone number (E.164), an alphanumeric sender ID, or a messaging-service SID; for WhatsApp, it's the sender phone number.\",\"example\":\"+15551234567\",\"type\":\"string\"},\"optout\":{\"description\":\"Set to `true` to opt the person out of the sender, or `false` to opt them back in.\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"from\",\"optout\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"optouts\"],\"type\":\"object\"}}}},\"responses\":{\"204\":{\"description\":\"A successful request produces an empty response.\"},\"400\":{\"description\":\"The request is malformed—for example, it references an unknown `channel`.\"},\"404\":{\"description\":\"The `customer_id` does not exist.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/v1/customers/{customer_id}/optouts","segments":[{"lit":"v1"},{"lit":"customers"},{"var":"customer_id"},{"lit":"optouts"}],"select":{"exist":["customer_id","id_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["customer"]]},"key$":"opt_out","name__orig":"opt_out","Name":"OptOut","name_":"opt_out","name-":"opt-out","NAME":"OPT_OUT","index$":32}, {"active":true,"entity":"opt_out","key$":"BasicOptOutFlow","kind":"basic","name":"BasicOptOutFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"customer_id":"customer01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"opt_out_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"opt_out_ref01","srcdatavar":"opt_out_ref01_data","suffix":"_up0","textfield":"channel"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-opt_out_ref01"}}],"valid":[],"index$":1}]}, 'OptOut')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let opt_out_ref01_data = Object.values(setup.data.existing.opt_out)[0] as any

    // LIST
    const opt_out_ref01_ent = client.OptOut()
    const opt_out_ref01_match: any = {}
    opt_out_ref01_match['customer_id'] = setup.idmap['customer01']

    const opt_out_ref01_list = (await opt_out_ref01_ent.list(opt_out_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const opt_out_ref01_data_up0: any = {}

    const opt_out_ref01_markdef_up0 = { name: 'channel', value: 'Mark01-opt_out_ref01_' + setup.now }
    ;(opt_out_ref01_data_up0 as any)[opt_out_ref01_markdef_up0.name] = opt_out_ref01_markdef_up0.value

    const opt_out_ref01_resdata_up0 = (await opt_out_ref01_ent.update(opt_out_ref01_data_up0)).data()
    assert(null != opt_out_ref01_resdata_up0)

    assert((opt_out_ref01_resdata_up0 as any)[opt_out_ref01_markdef_up0.name] === opt_out_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/opt_out/OptOutTestData.json')

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
    ['opt_out01','opt_out02','opt_out03','customer01','customer02','customer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CUSTOMERIO_APP_TEST_OPT_OUT_ENTID': idmap,
    'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
    'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
    'CUSTOMERIO_APP_APIKEY': '',
  })

  idmap = env['CUSTOMERIO_APP_TEST_OPT_OUT_ENTID']

  const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CUSTOMERIO_APP_TEST_OPT_OUT_ENTID']
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
  
