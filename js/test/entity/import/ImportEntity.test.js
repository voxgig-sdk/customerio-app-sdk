
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


describe('ImportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CUSTOMERIO_APP_TEST_LIVE=TRUE.
  afterEach(liveDelay('CUSTOMERIO_APP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CustomerioAppSDK.test()
    const ent = testsdk.Import()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"unix timestamp","name":"created_at","readOnly":true,"req":false,"short":"The date time when the referenced ID was created.","type":"`$INTEGER`","index$":0},{"active":true,"name":"data_to_process","req":false,"short":"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows.","type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"short":"A helpful description that can help you find and recognize your import operation.","type":"`$STRING`","index$":2},{"active":true,"name":"error","req":false,"short":"If your import fails, this helps you understand why.","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"short":"This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).","type":"`$INTEGER`","index$":4},{"active":true,"name":"identifier","req":false,"short":"The type of identifier you used to identify people in your CSV.","type":"`$STRING`","index$":5},{"active":true,"name":"import","req":true,"type":"`$ANY`","union":{"branches":4,"count":1,"depth":0},"index$":6},{"active":true,"name":"name","req":false,"short":"A friendly name for your import.","type":"`$STRING`","index$":7},{"active":true,"name":"object_type_id","req":false,"short":"The object type an object belongs to—like \"Companies\" or \"Accounts\".","type":"`$STRING`","index$":8},{"active":true,"name":"people_to_process","req":false,"short":"Returned for people and event imports, even if you imported using the field `data_to_process`.","type":"`$STRING`","index$":9},{"active":true,"name":"rows_imported","req":false,"short":"The number of rows we imported from the CSV.","type":"`$INTEGER`","index$":10},{"active":true,"name":"rows_to_import","req":false,"short":"The total number of importable rows we found in the CSV.","type":"`$INTEGER`","index$":11},{"active":true,"name":"state","req":false,"short":"The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed.","type":"`$STRING`","index$":12},{"active":true,"name":"type","req":false,"short":"The type of import.","type":"`$STRING`","index$":13},{"active":true,"format":"unix timestamp","name":"updated_at","readOnly":true,"req":false,"short":"The date time when the referenced ID was last updated.","type":"`$INTEGER`","index$":14}],"id":{"field":"id","name":"id"},"name":"import","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v1/imports","json":"{\"operationId\":\"import\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"import\":{\"oneOf\":[{\"description\":\"Contains your import parameters.\",\"properties\":{\"data_file_url\":{\"description\":\"The URL or path to the CSV file you want to import.\",\"type\":\"string\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"identifier\":{\"description\":\"The type of identifier you want to use to identify people in your sheet—`id` or `email`. At least one column in the CSV must contain an identifier.\",\"enum\":[\"id\",\"email\"],\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"people\"],\"type\":\"string\"}},\"required\":[\"data_file_url\",\"name\",\"type\",\"identifier\"],\"title\":\"people\",\"type\":\"object\"},{\"description\":\"Contains your import parameters.\",\"properties\":{\"data_file_url\":{\"description\":\"The URL or path to the CSV file you want to import.\",\"type\":\"string\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"identifier\":{\"description\":\"The type of identifier you want to use to identify people in your sheet—`id` or `email`. At least one column in the CSV must contain an identifier.\",\"enum\":[\"id\",\"email\"],\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"event\"],\"type\":\"string\"}},\"required\":[\"data_file_url\",\"name\",\"type\",\"identifier\"],\"title\":\"event\",\"type\":\"object\"},{\"description\":\"Contains your import parameters.\",\"properties\":{\"data_file_url\":{\"description\":\"The URL or path to the CSV file you want to import.\",\"type\":\"string\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"identifier\":{\"description\":\"The type of identifier used to identify the person in each relationship—`id`, `email`, or `cio_id`.\",\"enum\":[\"id\",\"email\",\"cio_id\"],\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"relationship\"],\"type\":\"string\"}},\"required\":[\"data_file_url\",\"name\",\"type\",\"identifier\"],\"title\":\"relationship\",\"type\":\"object\"},{\"description\":\"Contains your import parameters.\",\"properties\":{\"data_file_url\":{\"description\":\"The URL or path to the CSV file you want to import.\",\"type\":\"string\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"object_type_id\":{\"description\":\"The object type an object belongs to—like \\\"Companies\\\" or \\\"Accounts\\\". Object type IDs are string-formatted integers that begin at `1` and increment for each new type.\",\"example\":\"1\",\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"object\"],\"type\":\"string\"}},\"required\":[\"data_file_url\",\"name\",\"type\",\"object_type_id\"],\"title\":\"object\",\"type\":\"object\"}]}},\"required\":[\"import\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"import\":{\"description\":\"Represents an import operation.\",\"example\":{\"created_at\":1706081641,\"data_to_process\":\"all\",\"description\":\"importing accounts\",\"error\":\"possible error - The specified Object Type does not exist.\",\"id\":30,\"name\":\"account-object-import\",\"object_type_id\":1,\"people_to_process\":\"all\",\"rows_imported\":3,\"rows_to_import\":3,\"state\":\"imported\",\"type\":\"object\",\"updated_at\":1706081645},\"properties\":{\"created_at\":{\"description\":\"The date time when the referenced ID was created.\",\"example\":1552341937,\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"error\":{\"description\":\"If your import fails, this helps you understand why.\",\"type\":\"string\"},\"id\":{\"description\":\"This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).\",\"type\":\"integer\"},\"identifier\":{\"description\":\"The type of identifier you used to identify people in your CSV. Not applicable for object imports.\",\"enum\":[\"id\",\"email\"],\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"object_type_id\":{\"description\":\"The object type an object belongs to—like \\\"Companies\\\" or \\\"Accounts\\\". Only applies to object imports.\",\"example\":\"1\",\"type\":\"string\"},\"people_to_process\":{\"description\":\"Returned for people and event imports, even if you imported using the field `data_to_process`. This field will be deprecated soon.\\n\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"rows_imported\":{\"description\":\"The number of rows we imported from the CSV.\",\"type\":\"integer\"},\"rows_to_import\":{\"description\":\"The total number of importable rows we found in the CSV.\",\"type\":\"integer\"},\"state\":{\"description\":\"The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed.\",\"enum\":[\"preprocessing\",\"preprocessed\",\"validating\",\"validated\",\"importing\",\"imported\",\"failed\",\"canceled\"],\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"people\",\"event\",\"object\",\"relationship\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The date time when the referenced ID was last updated.\",\"example\":1552341937,\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"}},\"type\":\"object\"}},\"required\":[\"import\"],\"type\":\"object\"}}},\"description\":\"Returns an import payload.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/imports","segments":[{"lit":"v1"},{"lit":"imports"}],"select":{},"transform":{"req":{"import":"`reqdata`"},"res":"`body.import`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"import_id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /v1/imports/{import_id}","json":"{\"operationId\":\"getImport\",\"parameters\":[{\"description\":\"The `id` of the import you want to lookup. This value is [returned from an import](/integrations/api/app/tag/imports/import/) that was accepted and queued for processing.\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"import\":{\"allOf\":[{\"description\":\"Represents an import operation.\",\"example\":{\"created_at\":1706081641,\"data_to_process\":\"all\",\"description\":\"importing accounts\",\"error\":\"possible error - The specified Object Type does not exist.\",\"id\":30,\"name\":\"account-object-import\",\"object_type_id\":1,\"people_to_process\":\"all\",\"rows_imported\":3,\"rows_to_import\":3,\"state\":\"imported\",\"type\":\"object\",\"updated_at\":1706081645},\"type\":\"object\"}],\"properties\":{\"created_at\":{\"description\":\"The date time when the referenced ID was created.\",\"example\":1552341937,\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"data_to_process\":{\"description\":\"Controls whether your import adds and updates all rows, adds only new rows, or updates only existing rows. Defaults to `all`. Event imports support only `all` and `only_existing`. Formerly called `people_to_process`.\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"description\":{\"description\":\"A helpful description that can help you find and recognize your import operation.\",\"type\":\"string\"},\"error\":{\"description\":\"If your import fails, this helps you understand why.\",\"type\":\"string\"},\"error_download_url\":{\"description\":\"URL to download errors for the import via [the *Download an export* endpoint](/integrations/api/app/tag/exports/downloadExport/). Only present when there are errors.\",\"example\":\"https://api.customer.io/v1/exports/2/download\",\"type\":\"string\"},\"error_export_id\":{\"description\":\"ID of the export containing errors for the import, which can retrieved via [the *Get an export* endpoint](/integrations/api/app/tag/exports/getExport/). Only present when there are errors.\",\"example\":2,\"type\":\"integer\"},\"id\":{\"description\":\"This is the `import_id` you'll use if you want to [lookup your import operation](/integrations/api/app/tag/imports/getImport/).\",\"type\":\"integer\"},\"identifier\":{\"description\":\"The type of identifier you used to identify people in your CSV. Not applicable for object imports.\",\"enum\":[\"id\",\"email\"],\"type\":\"string\"},\"name\":{\"description\":\"A friendly name for your import. This helps you identify your import.\",\"type\":\"string\"},\"object_type_id\":{\"description\":\"The object type an object belongs to—like \\\"Companies\\\" or \\\"Accounts\\\". Only applies to object imports.\",\"example\":\"1\",\"type\":\"string\"},\"people_to_process\":{\"description\":\"Returned for people and event imports, even if you imported using the field `data_to_process`. This field will be deprecated soon.\\n\",\"enum\":[\"all\",\"only_new\",\"only_existing\"],\"type\":\"string\"},\"rows_imported\":{\"description\":\"The number of rows we imported from the CSV.\",\"type\":\"integer\"},\"rows_to_import\":{\"description\":\"The total number of importable rows we found in the CSV.\",\"type\":\"integer\"},\"state\":{\"description\":\"The state of the import—whether your import is being processed, fully completed (`imported`), or if it failed.\",\"enum\":[\"preprocessing\",\"preprocessed\",\"validating\",\"validated\",\"importing\",\"imported\",\"failed\",\"canceled\"],\"type\":\"string\"},\"type\":{\"description\":\"The type of import.\",\"enum\":[\"people\",\"event\",\"object\",\"relationship\"],\"type\":\"string\"},\"updated_at\":{\"description\":\"The date time when the referenced ID was last updated.\",\"example\":1552341937,\"format\":\"unix timestamp\",\"readOnly\":true,\"type\":\"integer\"},\"warning_download_url\":{\"description\":\"URL to download warnings for the import via [the *Download an export* endpoint](/integrations/api/app/tag/exports/downloadExport/). Only present when there are warnings.\",\"example\":\"https://api.customer.io/v1/exports/1/download\",\"type\":\"string\"},\"warning_export_id\":{\"description\":\"ID of the export containing warnings for the import, which can retrieved via [the *Get an export* endpoint](/integrations/api/app/tag/exports/getExport/). Only present when there are warnings.\",\"example\":1,\"type\":\"integer\"}}}},\"required\":[\"import\"],\"type\":\"object\"}}},\"description\":\"Returns an import payload.\"},\"429\":{\"content\":{\"application/json\":{\"example\":{\"errors\":[{\"detail\":\"rate limited to 10 requests per 1s (reference a1b2c3)\",\"status\":\"429\"}]},\"schema\":{\"description\":\"An array/list of failures where each entry is a separate failure reason.\",\"properties\":{\"errors\":{\"description\":\"One entry for each reason the request failed.\",\"items\":{\"properties\":{\"code\":{\"description\":\"A stable identifier for the failure, on the errors that carry one. Use this rather than the text in `detail` if you need to identify the error programmatically.\",\"example\":\"invalid_credentials\",\"type\":\"string\"},\"detail\":{\"description\":\"What went wrong, in plain text. Most messages end with a support reference you can use if you need to contact support.\",\"example\":\"bad request (reference a1b2c3)\",\"type\":\"string\"},\"meta\":{\"additionalProperties\":true,\"description\":\"Extra context (if available).\",\"type\":\"object\"},\"source\":{\"description\":\"The part of the request that the error refers to.\",\"properties\":{\"pointer\":{\"description\":\"A JSON pointer to the part of the request body that the error refers to.\",\"example\":\"/data/attributes/email\",\"type\":\"string\"}},\"type\":\"object\"},\"status\":{\"description\":\"The HTTP status code as a string.\",\"example\":\"400\",\"type\":\"string\"}},\"required\":[\"detail\",\"status\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"errors\"],\"type\":\"object\"}}},\"description\":\"Your request is over the 10-per-second limit. `Retry-After` tells you how many seconds you must wait before you send the next request.\",\"headers\":{\"Retry-After\":{\"description\":\"How many seconds you must wait before you send another request. This header is present when you are rate limited by a per-second limit. If you hit a daily quota, this header is not set.\",\"schema\":{\"example\":1,\"minimum\":1,\"type\":\"integer\"}}}}},\"security\":[{\"Bearer-Auth\":[]}],\"securitySchemes\":{\"Bearer-Auth\":{\"description\":\"The App API uses a bearer authentication scheme.\\n\\nYou can generate a bearer token, known as an **App API Key**, with a defined scope in [your account settings](https://fly.customer.io/settings/api_credentials?keyType=app). [Learn more about bearer authorization in Customer.io](/accounts/settings/managing-credentials).\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"ServiceAccount-Auth\":{\"bearerFormat\":\"sa_live_\",\"description\":\"Transactional send endpoints (`/v1/send/email`, `/v1/send/push`, `/v1/send/sms`, `/v1/send/whatsapp`, `/v1/send/in_app`, `/v1/send/inbox_message`) also accept a service-account bearer token, prefixed with `sa_live_`. Service-account tokens work across workspaces, so you must pass the target workspace as the `X-Workspace-Id` header on each request.\\n\\nService-account tokens are intended for testing and one-off sends—for example, using the Customer.io CLI with an AI agent like Claude to verify that a transactional message renders correctly before wiring it into your production backend. **For the production integration that triggers the message from your application, use an App API Key instead**: it's workspace-scoped, easier to rotate, and has a smaller blast radius.\\n\\nService-account tokens are server-side credentials. Treat them like any API key—keep them in environment variables or a secret manager, and never embed them in client-side code, mobile apps, or other untrusted contexts.\\n\",\"scheme\":\"bearer\",\"type\":\"http\"},\"bearerAuth\":{\"description\":\"API key passed as a Bearer token\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/v1/imports/{import_id}","rename":{"param":{"import_id":"id"}},"segments":[{"lit":"v1"},{"lit":"imports"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.import`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"import","name__orig":"import","Name":"Import","name_":"import","name-":"import","NAME":"IMPORT","index$":18}, {"active":true,"entity":"import","key$":"BasicImportFlow","kind":"basic","name":"BasicImportFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"import_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"import_ref01","srcdatavar":"import_ref01_data","suffix":"_dt0"},"match":{"id":"import01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-import_ref01"}}],"index$":1}]}, 'Import')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const import_ref01_ent = client.Import()
    let import_ref01_data = setup.data.new.import['import_ref01']

    import_ref01_data = (await import_ref01_ent.create(import_ref01_data)).data()
    assert(null != import_ref01_data.id)


    // LOAD
    const import_ref01_match_dt0 = {}
    import_ref01_match_dt0.id = import_ref01_data.id
    const import_ref01_data_dt0 = (await import_ref01_ent.load(import_ref01_match_dt0)).data()
    assert(import_ref01_data_dt0.id === import_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/import/ImportTestData.json')

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
    ['import01','import02','import03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CUSTOMERIO_APP_TEST_IMPORT_ENTID': idmap,
    'CUSTOMERIO_APP_TEST_LIVE': 'FALSE',
    'CUSTOMERIO_APP_TEST_EXPLAIN': 'FALSE',
    'CUSTOMERIO_APP_APIKEY': '',
  })

  idmap = env['CUSTOMERIO_APP_TEST_IMPORT_ENTID']

  const live = 'TRUE' === env.CUSTOMERIO_APP_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CUSTOMERIO_APP_TEST_IMPORT_ENTID']
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
  
