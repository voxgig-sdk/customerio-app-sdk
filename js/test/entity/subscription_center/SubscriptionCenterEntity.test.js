
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { CustomerioAppSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('SubscriptionCenterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CUSTOMERIO_APP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CustomerioAppSDK.test()
    const ent = testsdk.SubscriptionCenter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"short":"A description of the channel.","type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"short":"The system-generated ID for the subscription channel.","type":"`$INTEGER`","index$":1},{"active":true,"name":"identifier","req":false,"short":"The key associated with the subscription topic.","type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"The display name of the subscription channel.","type":"`$STRING`","index$":3},{"active":true,"name":"subscribed_by_default","req":false,"short":"If false, a person is opted-out by default.","type":"`$BOOLEAN`","index$":4},{"active":true,"name":"type","req":false,"short":"The type of delivery channel.","type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"subscription_center","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /v1/subscription_channels","json":"{\"operationId\":\"getChannels\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"channels\":{\"items\":{\"properties\":{\"description\":{\"description\":\"A description of the channel.\",\"example\":\"Email messages\",\"type\":\"string\"},\"id\":{\"description\":\"The system-generated ID for the subscription channel.\",\"example\":1,\"type\":\"integer\"},\"name\":{\"description\":\"The display name of the subscription channel.\",\"example\":\"Email\",\"type\":\"string\"},\"subscribed_by_default\":{\"description\":\"If false, a person is opted-out by default. If true, a person is opted-in by default.\",\"example\":true,\"type\":\"boolean\"},\"type\":{\"description\":\"The type of delivery channel.\",\"enum\":[\"email\",\"twilio\",\"urban_airship\",\"slack\",\"push\",\"in_app\",\"line\",\"inbox\",\"whatsapp\"],\"example\":\"email\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `channels`.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/subscription_channels","segments":[{"lit":"v1"},{"lit":"subscription_channels"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.channels`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /v1/subscription_topics","json":"{\"operationId\":\"getTopics\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"topics\":{\"items\":{\"properties\":{\"description\":{\"description\":\"A description of the topic that you provided when you created the topic in the UI.\",\"example\":\"For people who want updates on product releases.\",\"type\":\"string\"},\"id\":{\"description\":\"The system-generated id for the subscription topic. Also located on the subscription center landing page. These increment up by 1, starting with 1.\",\"example\":4,\"type\":\"integer\"},\"identifier\":{\"description\":\"The key associated with the subscription topic. The format is `topic_<id>`.\",\"example\":\"topic_4\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the subscription topic.\",\"example\":\"Product Updates\",\"type\":\"string\"},\"subscribed_by_default\":{\"description\":\"If false, a person is opted-out by default. If true, a person is opted-in by default.\",\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Returns an array of `topics`.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/subscription_topics","segments":[{"lit":"v1"},{"lit":"subscription_topics"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.topics`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"person@example.com","kind":"param","name":"id","orig":"customer_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /v1/subscription_center/{customer_id}/token","json":"{\"operationId\":\"getSubscriptionCenterToken\",\"parameters\":[{\"description\":\"The identifier for a person in your workspace—the same value you'd use as an `id` or `email` to identify a person in Customer.io.\",\"in\":\"path\",\"name\":\"customer_id\",\"required\":true,\"schema\":{\"example\":\"person@example.com\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"token\":{\"description\":\"A signed token representing the person's subscription center session. The token expires after 24 hours.\\n\\nIf you want to use a custom link tracking domain, you can point your customers to `https://<your-tracking-domain>/u/i/<your-token>/<language-code (optional)>`.\\n\",\"type\":\"string\"},\"url\":{\"description\":\"A full URL to the person's standalone subscription center page. You can use this URL directly as a link.\",\"example\":\"https://track.customer.io/u/i/<your-token>/\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Returns a signed `token` and a subscription center `url` for the person.\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"detail\":{\"example\":\"bad request\",\"type\":\"string\"},\"status\":{\"example\":\"400\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"The `customer_id` is invalid or does not match a known person in your workspace.\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/subscription_center/{customer_id}/token","rename":{"param":{"customer_id":"id"}},"segments":[{"lit":"v1"},{"lit":"subscription_center"},{"var":"id"},{"lit":"token"}],"select":{"$action":"token","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"subscription_center","name__orig":"subscription_center","Name":"SubscriptionCenter","name_":"subscription_center","name-":"subscription-center","NAME":"SUBSCRIPTION_CENTER","index$":43}, {"active":true,"entity":"subscription_center","key$":"BasicSubscriptionCenterFlow","kind":"basic","name":"BasicSubscriptionCenterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"subscription_center_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"subscription_center_ref01","srcdatavar":"subscription_center_ref01_data","suffix":"_dt0"},"match":{"id":"subscription_center01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-subscription_center_ref01"}}],"index$":1}]}, 'SubscriptionCenter')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let subscription_center_ref01_data = Object.values(setup.data.existing.subscription_center)[0]

    // LIST
    const subscription_center_ref01_ent = client.SubscriptionCenter()
    const subscription_center_ref01_match = {}

    const subscription_center_ref01_list = (await subscription_center_ref01_ent.list(subscription_center_ref01_match)).map((e) => e.data())


    // LOAD
    const subscription_center_ref01_match_dt0 = {}
    subscription_center_ref01_match_dt0.id = subscription_center_ref01_data.id
    const subscription_center_ref01_data_dt0 = (await subscription_center_ref01_ent.load(subscription_center_ref01_match_dt0)).data()
    assert(subscription_center_ref01_data_dt0.id === subscription_center_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/subscription_center/SubscriptionCenterTestData.json')

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
    ['subscription_center01','subscription_center02','subscription_center03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CUSTOMERIO_APP_TEST_SUBSCRIPTION_CENTER_ENTID': idmap,
    'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
    'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
    'CUSTOMERIO_APP_APIKEY': '',
  })

  idmap = env['CUSTOMERIO_APP_TEST_SUBSCRIPTION_CENTER_ENTID']

  const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CUSTOMERIO_APP_TEST_SUBSCRIPTION_CENTER_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
