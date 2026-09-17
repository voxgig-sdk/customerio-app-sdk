// CustomerioApp Ts SDK

import { ActionEntity } from './entity/ActionEntity'
import { ActivityEntity } from './entity/ActivityEntity'
import { AssetEntity } from './entity/AssetEntity'
import { AttributeEntity } from './entity/AttributeEntity'
import { AutomationEntity } from './entity/AutomationEntity'
import { BroadcastEntity } from './entity/BroadcastEntity'
import { CampaignEntity } from './entity/CampaignEntity'
import { CollectionEntity } from './entity/CollectionEntity'
import { ContentEntity } from './entity/ContentEntity'
import { CustomerEntity } from './entity/CustomerEntity'
import { DataIndexEntity } from './entity/DataIndexEntity'
import { DeliveryEntity } from './entity/DeliveryEntity'
import { DesignStudioEntity } from './entity/DesignStudioEntity'
import { DesignStudioEmailEntity } from './entity/DesignStudioEmailEntity'
import { EmailEntity } from './entity/EmailEntity'
import { EndEntity } from './entity/EndEntity'
import { EspSuppressionEntity } from './entity/EspSuppressionEntity'
import { ExportEntity } from './entity/ExportEntity'
import { ImportEntity } from './entity/ImportEntity'
import { InAppEntity } from './entity/InAppEntity'
import { InboxMessageEntity } from './entity/InboxMessageEntity'
import { InfoEntity } from './entity/InfoEntity'
import { IpAddressEntity } from './entity/IpAddressEntity'
import { LanguageEntity } from './entity/LanguageEntity'
import { LinkEntity } from './entity/LinkEntity'
import { LiveNotificationEntity } from './entity/LiveNotificationEntity'
import { MessageEntity } from './entity/MessageEntity'
import { NewsletterEntity } from './entity/NewsletterEntity'
import { NewsletterMetricEntity } from './entity/NewsletterMetricEntity'
import { NewsletterVariantEntity } from './entity/NewsletterVariantEntity'
import { ObjectEntity } from './entity/ObjectEntity'
import { ObjectTypeEntity } from './entity/ObjectTypeEntity'
import { OptOutEntity } from './entity/OptOutEntity'
import { PushEntity } from './entity/PushEntity'
import { RelationshipEntity } from './entity/RelationshipEntity'
import { ReportingWebhookEntity } from './entity/ReportingWebhookEntity'
import { SearchSuppressionEntity } from './entity/SearchSuppressionEntity'
import { SegmentEntity } from './entity/SegmentEntity'
import { SendMessageEntity } from './entity/SendMessageEntity'
import { SenderIdentityEntity } from './entity/SenderIdentityEntity'
import { SmsEntity } from './entity/SmsEntity'
import { SnippetEntity } from './entity/SnippetEntity'
import { StartEntity } from './entity/StartEntity'
import { SubscriptionCenterEntity } from './entity/SubscriptionCenterEntity'
import { SubscriptionChannelEntity } from './entity/SubscriptionChannelEntity'
import { SubscriptionTopicEntity } from './entity/SubscriptionTopicEntity'
import { SuppressionEntity } from './entity/SuppressionEntity'
import { TestGroupEntity } from './entity/TestGroupEntity'
import { TransactionalEntity } from './entity/TransactionalEntity'
import { TriggerEntity } from './entity/TriggerEntity'
import { UpdateEntity } from './entity/UpdateEntity'
import { WhatsappEntity } from './entity/WhatsappEntity'
import { WorkspaceEntity } from './entity/WorkspaceEntity'

export type * from './CustomerioAppTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CustomerioAppEntityBase } from './CustomerioAppEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class CustomerioAppSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CustomerioAppSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CustomerioAppSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CustomerioAppSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts?: Record<string, any>) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.Activity().list()` / `client.Activity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Activity(entopts?: Record<string, any>) {
    const self = this
    return new ActivityEntity(self, entopts)
  }


  // Entity access: `client.Asset().list()` / `client.Asset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Asset(entopts?: Record<string, any>) {
    const self = this
    return new AssetEntity(self, entopts)
  }


  // Entity access: `client.Attribute().list()` / `client.Attribute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Attribute(entopts?: Record<string, any>) {
    const self = this
    return new AttributeEntity(self, entopts)
  }


  // Entity access: `client.Automation().list()` / `client.Automation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Automation(entopts?: Record<string, any>) {
    const self = this
    return new AutomationEntity(self, entopts)
  }


  // Entity access: `client.Broadcast().list()` / `client.Broadcast().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Broadcast(entopts?: Record<string, any>) {
    const self = this
    return new BroadcastEntity(self, entopts)
  }


  // Entity access: `client.Campaign().list()` / `client.Campaign().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Campaign(entopts?: Record<string, any>) {
    const self = this
    return new CampaignEntity(self, entopts)
  }


  // Entity access: `client.Collection().list()` / `client.Collection().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Collection(entopts?: Record<string, any>) {
    const self = this
    return new CollectionEntity(self, entopts)
  }


  // Entity access: `client.Content().list()` / `client.Content().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Content(entopts?: Record<string, any>) {
    const self = this
    return new ContentEntity(self, entopts)
  }


  // Entity access: `client.Customer().list()` / `client.Customer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Customer(entopts?: Record<string, any>) {
    const self = this
    return new CustomerEntity(self, entopts)
  }


  // Entity access: `client.DataIndex().list()` / `client.DataIndex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DataIndex(entopts?: Record<string, any>) {
    const self = this
    return new DataIndexEntity(self, entopts)
  }


  // Entity access: `client.Delivery().list()` / `client.Delivery().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Delivery(entopts?: Record<string, any>) {
    const self = this
    return new DeliveryEntity(self, entopts)
  }


  // Entity access: `client.DesignStudio().list()` / `client.DesignStudio().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DesignStudio(entopts?: Record<string, any>) {
    const self = this
    return new DesignStudioEntity(self, entopts)
  }


  // Entity access: `client.DesignStudioEmail().list()` / `client.DesignStudioEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DesignStudioEmail(entopts?: Record<string, any>) {
    const self = this
    return new DesignStudioEmailEntity(self, entopts)
  }


  // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Email(entopts?: Record<string, any>) {
    const self = this
    return new EmailEntity(self, entopts)
  }


  // Entity access: `client.End().list()` / `client.End().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  End(entopts?: Record<string, any>) {
    const self = this
    return new EndEntity(self, entopts)
  }


  // Entity access: `client.EspSuppression().list()` / `client.EspSuppression().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EspSuppression(entopts?: Record<string, any>) {
    const self = this
    return new EspSuppressionEntity(self, entopts)
  }


  // Entity access: `client.Export().list()` / `client.Export().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Export(entopts?: Record<string, any>) {
    const self = this
    return new ExportEntity(self, entopts)
  }


  // Entity access: `client.Import().list()` / `client.Import().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Import(entopts?: Record<string, any>) {
    const self = this
    return new ImportEntity(self, entopts)
  }


  // Entity access: `client.InApp().list()` / `client.InApp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InApp(entopts?: Record<string, any>) {
    const self = this
    return new InAppEntity(self, entopts)
  }


  // Entity access: `client.InboxMessage().list()` / `client.InboxMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  InboxMessage(entopts?: Record<string, any>) {
    const self = this
    return new InboxMessageEntity(self, entopts)
  }


  // Entity access: `client.Info().list()` / `client.Info().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Info(entopts?: Record<string, any>) {
    const self = this
    return new InfoEntity(self, entopts)
  }


  // Entity access: `client.IpAddress().list()` / `client.IpAddress().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IpAddress(entopts?: Record<string, any>) {
    const self = this
    return new IpAddressEntity(self, entopts)
  }


  // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Language(entopts?: Record<string, any>) {
    const self = this
    return new LanguageEntity(self, entopts)
  }


  // Entity access: `client.Link().list()` / `client.Link().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Link(entopts?: Record<string, any>) {
    const self = this
    return new LinkEntity(self, entopts)
  }


  // Entity access: `client.LiveNotification().list()` / `client.LiveNotification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LiveNotification(entopts?: Record<string, any>) {
    const self = this
    return new LiveNotificationEntity(self, entopts)
  }


  // Entity access: `client.Message().list()` / `client.Message().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Message(entopts?: Record<string, any>) {
    const self = this
    return new MessageEntity(self, entopts)
  }


  // Entity access: `client.Newsletter().list()` / `client.Newsletter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Newsletter(entopts?: Record<string, any>) {
    const self = this
    return new NewsletterEntity(self, entopts)
  }


  // Entity access: `client.NewsletterMetric().list()` / `client.NewsletterMetric().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NewsletterMetric(entopts?: Record<string, any>) {
    const self = this
    return new NewsletterMetricEntity(self, entopts)
  }


  // Entity access: `client.NewsletterVariant().list()` / `client.NewsletterVariant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NewsletterVariant(entopts?: Record<string, any>) {
    const self = this
    return new NewsletterVariantEntity(self, entopts)
  }


  // Entity access: `client.Object().list()` / `client.Object().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Object(entopts?: Record<string, any>) {
    const self = this
    return new ObjectEntity(self, entopts)
  }


  // Entity access: `client.ObjectType().list()` / `client.ObjectType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ObjectType(entopts?: Record<string, any>) {
    const self = this
    return new ObjectTypeEntity(self, entopts)
  }


  // Entity access: `client.OptOut().list()` / `client.OptOut().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OptOut(entopts?: Record<string, any>) {
    const self = this
    return new OptOutEntity(self, entopts)
  }


  // Entity access: `client.Push().list()` / `client.Push().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Push(entopts?: Record<string, any>) {
    const self = this
    return new PushEntity(self, entopts)
  }


  // Entity access: `client.Relationship().list()` / `client.Relationship().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Relationship(entopts?: Record<string, any>) {
    const self = this
    return new RelationshipEntity(self, entopts)
  }


  // Entity access: `client.ReportingWebhook().list()` / `client.ReportingWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReportingWebhook(entopts?: Record<string, any>) {
    const self = this
    return new ReportingWebhookEntity(self, entopts)
  }


  // Entity access: `client.SearchSuppression().list()` / `client.SearchSuppression().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SearchSuppression(entopts?: Record<string, any>) {
    const self = this
    return new SearchSuppressionEntity(self, entopts)
  }


  // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Segment(entopts?: Record<string, any>) {
    const self = this
    return new SegmentEntity(self, entopts)
  }


  // Entity access: `client.SendMessage().list()` / `client.SendMessage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SendMessage(entopts?: Record<string, any>) {
    const self = this
    return new SendMessageEntity(self, entopts)
  }


  // Entity access: `client.SenderIdentity().list()` / `client.SenderIdentity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SenderIdentity(entopts?: Record<string, any>) {
    const self = this
    return new SenderIdentityEntity(self, entopts)
  }


  // Entity access: `client.Sms().list()` / `client.Sms().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Sms(entopts?: Record<string, any>) {
    const self = this
    return new SmsEntity(self, entopts)
  }


  // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Snippet(entopts?: Record<string, any>) {
    const self = this
    return new SnippetEntity(self, entopts)
  }


  // Entity access: `client.Start().list()` / `client.Start().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Start(entopts?: Record<string, any>) {
    const self = this
    return new StartEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionCenter().list()` / `client.SubscriptionCenter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionCenter(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionCenterEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionChannel().list()` / `client.SubscriptionChannel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionChannel(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionChannelEntity(self, entopts)
  }


  // Entity access: `client.SubscriptionTopic().list()` / `client.SubscriptionTopic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubscriptionTopic(entopts?: Record<string, any>) {
    const self = this
    return new SubscriptionTopicEntity(self, entopts)
  }


  // Entity access: `client.Suppression().list()` / `client.Suppression().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Suppression(entopts?: Record<string, any>) {
    const self = this
    return new SuppressionEntity(self, entopts)
  }


  // Entity access: `client.TestGroup().list()` / `client.TestGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TestGroup(entopts?: Record<string, any>) {
    const self = this
    return new TestGroupEntity(self, entopts)
  }


  // Entity access: `client.Transactional().list()` / `client.Transactional().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Transactional(entopts?: Record<string, any>) {
    const self = this
    return new TransactionalEntity(self, entopts)
  }


  // Entity access: `client.Trigger().list()` / `client.Trigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Trigger(entopts?: Record<string, any>) {
    const self = this
    return new TriggerEntity(self, entopts)
  }


  // Entity access: `client.Update().list()` / `client.Update().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Update(entopts?: Record<string, any>) {
    const self = this
    return new UpdateEntity(self, entopts)
  }


  // Entity access: `client.Whatsapp().list()` / `client.Whatsapp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Whatsapp(entopts?: Record<string, any>) {
    const self = this
    return new WhatsappEntity(self, entopts)
  }


  // Entity access: `client.Workspace().list()` / `client.Workspace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workspace(entopts?: Record<string, any>) {
    const self = this
    return new WorkspaceEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CustomerioAppSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CustomerioAppSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'CustomerioApp' }
  }

  toString() {
    return 'CustomerioApp ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CustomerioAppSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  CustomerioAppEntityBase,

  CustomerioAppSDK,
  SDK,
}


