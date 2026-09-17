

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


describe('DataIndexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CUSTOMERIO_APP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CustomerioAppSDK.test()
    const ent = testsdk.DataIndex()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CUSTOMERIO_APP_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'data_index.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"data_index","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v1/data_index/attributes","json":"{\"operationId\":\"updateAttributeMetadata\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"attributes\":{\"description\":\"Array of attribute updates\",\"items\":{\"properties\":{\"description\":{\"description\":\"The purpose of the attribute. This helps our AI tools understand your data.\",\"example\":\"The last time the user clicked something on our app after logging in.\",\"maxLength\":255,\"type\":\"string\"},\"name\":{\"description\":\"The name of the attribute to update\",\"example\":\"last_active\",\"type\":\"string\"},\"privacy_level\":{\"description\":\"Available on Premium plans. This indicates whether an attribute is sensitive or not.\\n\\n0 means NOT sensitive.\\n\\n1 means sensitive.\\n\",\"enum\":[0,1],\"example\":0,\"type\":\"integer\"}},\"required\":[\"name\"],\"type\":\"object\"},\"maxItems\":100,\"minItems\":1,\"type\":\"array\"}},\"required\":[\"attributes\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"204\":{\"description\":\"Attributes updated successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"detail\":{\"description\":\"The reason for failure.\",\"enum\":[\"Invalid request format\"],\"type\":\"string\"},\"status\":{\"description\":\"The response code.\",\"enum\":[400],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Invalid request format\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"empty_attributes\":{\"summary\":\"Empty attributes array\",\"value\":{\"errors\":[{\"detail\":\"At least one attribute is required\",\"source\":{\"pointer\":\"/data/attributes/attributes\"},\"status\":\"422\"}]}},\"privacy_level_not_enabled\":{\"summary\":\"Privacy level feature not enabled\",\"value\":{\"errors\":[{\"detail\":\"Privacy level updates are not available. Please contact support to enable this feature.\",\"source\":{\"pointer\":\"/data/attributes/attributes[0].privacy_level\"},\"status\":\"422\"}]}},\"too_many_attributes\":{\"summary\":\"Too many attributes\",\"value\":{\"errors\":[{\"detail\":\"Can not update more than 100 attributes at once\",\"source\":{\"pointer\":\"/data/attributes/attributes\"},\"status\":\"422\"}]}}},\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"detail\":{\"description\":\"The reason for the response.\",\"enum\":[\"Empty attributes array\",\"Too many attributes\",\"Privacy level feature not enabled\"],\"type\":\"string\"},\"source\":{\"properties\":{\"pointer\":{\"description\":\"The path to the attribute that caused the error. 0 is the first attribute, 1 is the second, and so on.\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The response code.\",\"enum\":[422],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Validation error\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/data_index/attributes","segments":[{"lit":"v1"},{"lit":"data_index"},{"lit":"attributes"}],"select":{"$action":"attribute"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /v1/data_index/events","json":"{\"operationId\":\"updateEventMetadata\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"events\":{\"description\":\"Array of event updates\",\"items\":{\"properties\":{\"description\":{\"description\":\"The meaning of the event\",\"example\":\"User successfully completed a purchase\",\"maxLength\":255,\"type\":\"string\"},\"name\":{\"description\":\"The name of the event\",\"example\":\"purchase_completed\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"maxItems\":100,\"minItems\":1,\"type\":\"array\"}},\"required\":[\"events\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"204\":{\"description\":\"Events updated successfully\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"detail\":{\"description\":\"The reason for the response.\",\"enum\":[\"Invalid request format\"],\"type\":\"string\"},\"status\":{\"description\":\"The response code.\",\"enum\":[400],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Invalid request format\"},\"422\":{\"content\":{\"application/json\":{\"examples\":{\"empty_events\":{\"summary\":\"Empty events array\",\"value\":{\"errors\":[{\"detail\":\"At least one event is required\",\"source\":{\"pointer\":\"/data/attributes/events\"},\"status\":\"422\"}]}},\"too_many_events\":{\"summary\":\"Too many events\",\"value\":{\"errors\":[{\"detail\":\"Can not update more than 100 events at once\",\"source\":{\"pointer\":\"/data/attributes/events\"},\"status\":\"422\"}]}}},\"schema\":{\"properties\":{\"errors\":{\"items\":{\"properties\":{\"detail\":{\"description\":\"The reason for the response.\",\"enum\":[\"Empty events array\",\"Too many events\"],\"type\":\"string\"},\"source\":{\"properties\":{\"pointer\":{\"description\":\"The path to the event that caused the error.\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"enum\":[422],\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Validation error\"},\"500\":{\"description\":\"Internal server error\"}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/data_index/events","segments":[{"lit":"v1"},{"lit":"data_index"},{"lit":"events"}],"select":{"$action":"event"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"data_index","name__orig":"data_index","Name":"DataIndex","name_":"data_index","name-":"data-index","NAME":"DATA_INDEX","index$":10}, {"active":true,"entity":"data_index","key$":"BasicDataIndexFlow","kind":"basic","name":"BasicDataIndexFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"data_index_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'DataIndex')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const data_index_ref01_ent = client.DataIndex()
    let data_index_ref01_data = setup.data.new.data_index['data_index_ref01']

    data_index_ref01_data = (await data_index_ref01_ent.create(data_index_ref01_data)).data()
    assert(null != data_index_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/data_index/DataIndexTestData.json')

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
    ['data_index01','data_index02','data_index03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CUSTOMERIO_APP_TEST_DATA_INDEX_ENTID': idmap,
    'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
    'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
    'CUSTOMERIO_APP_APIKEY': '',
  })

  idmap = env['CUSTOMERIO_APP_TEST_DATA_INDEX_ENTID']

  const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CUSTOMERIO_APP_TEST_DATA_INDEX_ENTID']
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
  
