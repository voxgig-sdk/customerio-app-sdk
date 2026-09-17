# CustomerioApp SDK

from customerioapp_sdk.utility.voxgig_struct import voxgig_struct as vs
from customerioapp_sdk.core.utility_type import CustomerioAppUtility
from customerioapp_sdk.core.spec import CustomerioAppSpec
from customerioapp_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from customerioapp_sdk.utility import register

# Load features
from customerioapp_sdk.feature.base_feature import CustomerioAppBaseFeature
from customerioapp_sdk.features import _has_feature, _make_feature


class CustomerioAppSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = CustomerioAppUtility()
        self._utility = utility

        from customerioapp_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return CustomerioAppUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = CustomerioAppSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "CustomerioAppSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("CustomerioAppSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Action(self, data=None) -> "ActionEntity":
        """Entity factory: client.Action().list() / client.Action().load({"id": ...})."""
        from customerioapp_sdk.entity.action_entity import ActionEntity
        return ActionEntity(self, data)


    def Activity(self, data=None) -> "ActivityEntity":
        """Entity factory: client.Activity().list() / client.Activity().load({"id": ...})."""
        from customerioapp_sdk.entity.activity_entity import ActivityEntity
        return ActivityEntity(self, data)


    def Asset(self, data=None) -> "AssetEntity":
        """Entity factory: client.Asset().list() / client.Asset().load({"id": ...})."""
        from customerioapp_sdk.entity.asset_entity import AssetEntity
        return AssetEntity(self, data)


    def Attribute(self, data=None) -> "AttributeEntity":
        """Entity factory: client.Attribute().list() / client.Attribute().load({"id": ...})."""
        from customerioapp_sdk.entity.attribute_entity import AttributeEntity
        return AttributeEntity(self, data)


    def Automation(self, data=None) -> "AutomationEntity":
        """Entity factory: client.Automation().list() / client.Automation().load({"id": ...})."""
        from customerioapp_sdk.entity.automation_entity import AutomationEntity
        return AutomationEntity(self, data)


    def Broadcast(self, data=None) -> "BroadcastEntity":
        """Entity factory: client.Broadcast().list() / client.Broadcast().load({"id": ...})."""
        from customerioapp_sdk.entity.broadcast_entity import BroadcastEntity
        return BroadcastEntity(self, data)


    def Campaign(self, data=None) -> "CampaignEntity":
        """Entity factory: client.Campaign().list() / client.Campaign().load({"id": ...})."""
        from customerioapp_sdk.entity.campaign_entity import CampaignEntity
        return CampaignEntity(self, data)


    def Collection(self, data=None) -> "CollectionEntity":
        """Entity factory: client.Collection().list() / client.Collection().load({"id": ...})."""
        from customerioapp_sdk.entity.collection_entity import CollectionEntity
        return CollectionEntity(self, data)


    def Content(self, data=None) -> "ContentEntity":
        """Entity factory: client.Content().list() / client.Content().load({"id": ...})."""
        from customerioapp_sdk.entity.content_entity import ContentEntity
        return ContentEntity(self, data)


    def Customer(self, data=None) -> "CustomerEntity":
        """Entity factory: client.Customer().list() / client.Customer().load({"id": ...})."""
        from customerioapp_sdk.entity.customer_entity import CustomerEntity
        return CustomerEntity(self, data)


    def DataIndex(self, data=None) -> "DataIndexEntity":
        """Entity factory: client.DataIndex().list() / client.DataIndex().load({"id": ...})."""
        from customerioapp_sdk.entity.data_index_entity import DataIndexEntity
        return DataIndexEntity(self, data)


    def Delivery(self, data=None) -> "DeliveryEntity":
        """Entity factory: client.Delivery().list() / client.Delivery().load({"id": ...})."""
        from customerioapp_sdk.entity.delivery_entity import DeliveryEntity
        return DeliveryEntity(self, data)


    def DesignStudio(self, data=None) -> "DesignStudioEntity":
        """Entity factory: client.DesignStudio().list() / client.DesignStudio().load({"id": ...})."""
        from customerioapp_sdk.entity.design_studio_entity import DesignStudioEntity
        return DesignStudioEntity(self, data)


    def DesignStudioEmail(self, data=None) -> "DesignStudioEmailEntity":
        """Entity factory: client.DesignStudioEmail().list() / client.DesignStudioEmail().load({"id": ...})."""
        from customerioapp_sdk.entity.design_studio_email_entity import DesignStudioEmailEntity
        return DesignStudioEmailEntity(self, data)


    def Email(self, data=None) -> "EmailEntity":
        """Entity factory: client.Email().list() / client.Email().load({"id": ...})."""
        from customerioapp_sdk.entity.email_entity import EmailEntity
        return EmailEntity(self, data)


    def End(self, data=None) -> "EndEntity":
        """Entity factory: client.End().list() / client.End().load({"id": ...})."""
        from customerioapp_sdk.entity.end_entity import EndEntity
        return EndEntity(self, data)


    def EspSuppression(self, data=None) -> "EspSuppressionEntity":
        """Entity factory: client.EspSuppression().list() / client.EspSuppression().load({"id": ...})."""
        from customerioapp_sdk.entity.esp_suppression_entity import EspSuppressionEntity
        return EspSuppressionEntity(self, data)


    def Export(self, data=None) -> "ExportEntity":
        """Entity factory: client.Export().list() / client.Export().load({"id": ...})."""
        from customerioapp_sdk.entity.export_entity import ExportEntity
        return ExportEntity(self, data)


    def Import(self, data=None) -> "ImportEntity":
        """Entity factory: client.Import().list() / client.Import().load({"id": ...})."""
        from customerioapp_sdk.entity.import_entity import ImportEntity
        return ImportEntity(self, data)


    def InApp(self, data=None) -> "InAppEntity":
        """Entity factory: client.InApp().list() / client.InApp().load({"id": ...})."""
        from customerioapp_sdk.entity.in_app_entity import InAppEntity
        return InAppEntity(self, data)


    def InboxMessage(self, data=None) -> "InboxMessageEntity":
        """Entity factory: client.InboxMessage().list() / client.InboxMessage().load({"id": ...})."""
        from customerioapp_sdk.entity.inbox_message_entity import InboxMessageEntity
        return InboxMessageEntity(self, data)


    def Info(self, data=None) -> "InfoEntity":
        """Entity factory: client.Info().list() / client.Info().load({"id": ...})."""
        from customerioapp_sdk.entity.info_entity import InfoEntity
        return InfoEntity(self, data)


    def IpAddress(self, data=None) -> "IpAddressEntity":
        """Entity factory: client.IpAddress().list() / client.IpAddress().load({"id": ...})."""
        from customerioapp_sdk.entity.ip_address_entity import IpAddressEntity
        return IpAddressEntity(self, data)


    def Language(self, data=None) -> "LanguageEntity":
        """Entity factory: client.Language().list() / client.Language().load({"id": ...})."""
        from customerioapp_sdk.entity.language_entity import LanguageEntity
        return LanguageEntity(self, data)


    def Link(self, data=None) -> "LinkEntity":
        """Entity factory: client.Link().list() / client.Link().load({"id": ...})."""
        from customerioapp_sdk.entity.link_entity import LinkEntity
        return LinkEntity(self, data)


    def LiveNotification(self, data=None) -> "LiveNotificationEntity":
        """Entity factory: client.LiveNotification().list() / client.LiveNotification().load({"id": ...})."""
        from customerioapp_sdk.entity.live_notification_entity import LiveNotificationEntity
        return LiveNotificationEntity(self, data)


    def Message(self, data=None) -> "MessageEntity":
        """Entity factory: client.Message().list() / client.Message().load({"id": ...})."""
        from customerioapp_sdk.entity.message_entity import MessageEntity
        return MessageEntity(self, data)


    def Newsletter(self, data=None) -> "NewsletterEntity":
        """Entity factory: client.Newsletter().list() / client.Newsletter().load({"id": ...})."""
        from customerioapp_sdk.entity.newsletter_entity import NewsletterEntity
        return NewsletterEntity(self, data)


    def NewsletterMetric(self, data=None) -> "NewsletterMetricEntity":
        """Entity factory: client.NewsletterMetric().list() / client.NewsletterMetric().load({"id": ...})."""
        from customerioapp_sdk.entity.newsletter_metric_entity import NewsletterMetricEntity
        return NewsletterMetricEntity(self, data)


    def NewsletterVariant(self, data=None) -> "NewsletterVariantEntity":
        """Entity factory: client.NewsletterVariant().list() / client.NewsletterVariant().load({"id": ...})."""
        from customerioapp_sdk.entity.newsletter_variant_entity import NewsletterVariantEntity
        return NewsletterVariantEntity(self, data)


    def Object(self, data=None) -> "ObjectEntity":
        """Entity factory: client.Object().list() / client.Object().load({"id": ...})."""
        from customerioapp_sdk.entity.object_entity import ObjectEntity
        return ObjectEntity(self, data)


    def ObjectType(self, data=None) -> "ObjectTypeEntity":
        """Entity factory: client.ObjectType().list() / client.ObjectType().load({"id": ...})."""
        from customerioapp_sdk.entity.object_type_entity import ObjectTypeEntity
        return ObjectTypeEntity(self, data)


    def OptOut(self, data=None) -> "OptOutEntity":
        """Entity factory: client.OptOut().list() / client.OptOut().load({"id": ...})."""
        from customerioapp_sdk.entity.opt_out_entity import OptOutEntity
        return OptOutEntity(self, data)


    def Push(self, data=None) -> "PushEntity":
        """Entity factory: client.Push().list() / client.Push().load({"id": ...})."""
        from customerioapp_sdk.entity.push_entity import PushEntity
        return PushEntity(self, data)


    def Relationship(self, data=None) -> "RelationshipEntity":
        """Entity factory: client.Relationship().list() / client.Relationship().load({"id": ...})."""
        from customerioapp_sdk.entity.relationship_entity import RelationshipEntity
        return RelationshipEntity(self, data)


    def ReportingWebhook(self, data=None) -> "ReportingWebhookEntity":
        """Entity factory: client.ReportingWebhook().list() / client.ReportingWebhook().load({"id": ...})."""
        from customerioapp_sdk.entity.reporting_webhook_entity import ReportingWebhookEntity
        return ReportingWebhookEntity(self, data)


    def SearchSuppression(self, data=None) -> "SearchSuppressionEntity":
        """Entity factory: client.SearchSuppression().list() / client.SearchSuppression().load({"id": ...})."""
        from customerioapp_sdk.entity.search_suppression_entity import SearchSuppressionEntity
        return SearchSuppressionEntity(self, data)


    def Segment(self, data=None) -> "SegmentEntity":
        """Entity factory: client.Segment().list() / client.Segment().load({"id": ...})."""
        from customerioapp_sdk.entity.segment_entity import SegmentEntity
        return SegmentEntity(self, data)


    def SendMessage(self, data=None) -> "SendMessageEntity":
        """Entity factory: client.SendMessage().list() / client.SendMessage().load({"id": ...})."""
        from customerioapp_sdk.entity.send_message_entity import SendMessageEntity
        return SendMessageEntity(self, data)


    def SenderIdentity(self, data=None) -> "SenderIdentityEntity":
        """Entity factory: client.SenderIdentity().list() / client.SenderIdentity().load({"id": ...})."""
        from customerioapp_sdk.entity.sender_identity_entity import SenderIdentityEntity
        return SenderIdentityEntity(self, data)


    def Sms(self, data=None) -> "SmsEntity":
        """Entity factory: client.Sms().list() / client.Sms().load({"id": ...})."""
        from customerioapp_sdk.entity.sms_entity import SmsEntity
        return SmsEntity(self, data)


    def Snippet(self, data=None) -> "SnippetEntity":
        """Entity factory: client.Snippet().list() / client.Snippet().load({"id": ...})."""
        from customerioapp_sdk.entity.snippet_entity import SnippetEntity
        return SnippetEntity(self, data)


    def Start(self, data=None) -> "StartEntity":
        """Entity factory: client.Start().list() / client.Start().load({"id": ...})."""
        from customerioapp_sdk.entity.start_entity import StartEntity
        return StartEntity(self, data)


    def SubscriptionCenter(self, data=None) -> "SubscriptionCenterEntity":
        """Entity factory: client.SubscriptionCenter().list() / client.SubscriptionCenter().load({"id": ...})."""
        from customerioapp_sdk.entity.subscription_center_entity import SubscriptionCenterEntity
        return SubscriptionCenterEntity(self, data)


    def SubscriptionChannel(self, data=None) -> "SubscriptionChannelEntity":
        """Entity factory: client.SubscriptionChannel().list() / client.SubscriptionChannel().load({"id": ...})."""
        from customerioapp_sdk.entity.subscription_channel_entity import SubscriptionChannelEntity
        return SubscriptionChannelEntity(self, data)


    def SubscriptionTopic(self, data=None) -> "SubscriptionTopicEntity":
        """Entity factory: client.SubscriptionTopic().list() / client.SubscriptionTopic().load({"id": ...})."""
        from customerioapp_sdk.entity.subscription_topic_entity import SubscriptionTopicEntity
        return SubscriptionTopicEntity(self, data)


    def Suppression(self, data=None) -> "SuppressionEntity":
        """Entity factory: client.Suppression().list() / client.Suppression().load({"id": ...})."""
        from customerioapp_sdk.entity.suppression_entity import SuppressionEntity
        return SuppressionEntity(self, data)


    def TestGroup(self, data=None) -> "TestGroupEntity":
        """Entity factory: client.TestGroup().list() / client.TestGroup().load({"id": ...})."""
        from customerioapp_sdk.entity.test_group_entity import TestGroupEntity
        return TestGroupEntity(self, data)


    def Transactional(self, data=None) -> "TransactionalEntity":
        """Entity factory: client.Transactional().list() / client.Transactional().load({"id": ...})."""
        from customerioapp_sdk.entity.transactional_entity import TransactionalEntity
        return TransactionalEntity(self, data)


    def Trigger(self, data=None) -> "TriggerEntity":
        """Entity factory: client.Trigger().list() / client.Trigger().load({"id": ...})."""
        from customerioapp_sdk.entity.trigger_entity import TriggerEntity
        return TriggerEntity(self, data)


    def Update(self, data=None) -> "UpdateEntity":
        """Entity factory: client.Update().list() / client.Update().load({"id": ...})."""
        from customerioapp_sdk.entity.update_entity import UpdateEntity
        return UpdateEntity(self, data)


    def Whatsapp(self, data=None) -> "WhatsappEntity":
        """Entity factory: client.Whatsapp().list() / client.Whatsapp().load({"id": ...})."""
        from customerioapp_sdk.entity.whatsapp_entity import WhatsappEntity
        return WhatsappEntity(self, data)


    def Workspace(self, data=None) -> "WorkspaceEntity":
        """Entity factory: client.Workspace().list() / client.Workspace().load({"id": ...})."""
        from customerioapp_sdk.entity.workspace_entity import WorkspaceEntity
        return WorkspaceEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "CustomerioAppSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from customerioapp_sdk.entity.action_entity import ActionEntity
    from customerioapp_sdk.entity.activity_entity import ActivityEntity
    from customerioapp_sdk.entity.asset_entity import AssetEntity
    from customerioapp_sdk.entity.attribute_entity import AttributeEntity
    from customerioapp_sdk.entity.automation_entity import AutomationEntity
    from customerioapp_sdk.entity.broadcast_entity import BroadcastEntity
    from customerioapp_sdk.entity.campaign_entity import CampaignEntity
    from customerioapp_sdk.entity.collection_entity import CollectionEntity
    from customerioapp_sdk.entity.content_entity import ContentEntity
    from customerioapp_sdk.entity.customer_entity import CustomerEntity
    from customerioapp_sdk.entity.data_index_entity import DataIndexEntity
    from customerioapp_sdk.entity.delivery_entity import DeliveryEntity
    from customerioapp_sdk.entity.design_studio_entity import DesignStudioEntity
    from customerioapp_sdk.entity.design_studio_email_entity import DesignStudioEmailEntity
    from customerioapp_sdk.entity.email_entity import EmailEntity
    from customerioapp_sdk.entity.end_entity import EndEntity
    from customerioapp_sdk.entity.esp_suppression_entity import EspSuppressionEntity
    from customerioapp_sdk.entity.export_entity import ExportEntity
    from customerioapp_sdk.entity.import_entity import ImportEntity
    from customerioapp_sdk.entity.in_app_entity import InAppEntity
    from customerioapp_sdk.entity.inbox_message_entity import InboxMessageEntity
    from customerioapp_sdk.entity.info_entity import InfoEntity
    from customerioapp_sdk.entity.ip_address_entity import IpAddressEntity
    from customerioapp_sdk.entity.language_entity import LanguageEntity
    from customerioapp_sdk.entity.link_entity import LinkEntity
    from customerioapp_sdk.entity.live_notification_entity import LiveNotificationEntity
    from customerioapp_sdk.entity.message_entity import MessageEntity
    from customerioapp_sdk.entity.newsletter_entity import NewsletterEntity
    from customerioapp_sdk.entity.newsletter_metric_entity import NewsletterMetricEntity
    from customerioapp_sdk.entity.newsletter_variant_entity import NewsletterVariantEntity
    from customerioapp_sdk.entity.object_entity import ObjectEntity
    from customerioapp_sdk.entity.object_type_entity import ObjectTypeEntity
    from customerioapp_sdk.entity.opt_out_entity import OptOutEntity
    from customerioapp_sdk.entity.push_entity import PushEntity
    from customerioapp_sdk.entity.relationship_entity import RelationshipEntity
    from customerioapp_sdk.entity.reporting_webhook_entity import ReportingWebhookEntity
    from customerioapp_sdk.entity.search_suppression_entity import SearchSuppressionEntity
    from customerioapp_sdk.entity.segment_entity import SegmentEntity
    from customerioapp_sdk.entity.send_message_entity import SendMessageEntity
    from customerioapp_sdk.entity.sender_identity_entity import SenderIdentityEntity
    from customerioapp_sdk.entity.sms_entity import SmsEntity
    from customerioapp_sdk.entity.snippet_entity import SnippetEntity
    from customerioapp_sdk.entity.start_entity import StartEntity
    from customerioapp_sdk.entity.subscription_center_entity import SubscriptionCenterEntity
    from customerioapp_sdk.entity.subscription_channel_entity import SubscriptionChannelEntity
    from customerioapp_sdk.entity.subscription_topic_entity import SubscriptionTopicEntity
    from customerioapp_sdk.entity.suppression_entity import SuppressionEntity
    from customerioapp_sdk.entity.test_group_entity import TestGroupEntity
    from customerioapp_sdk.entity.transactional_entity import TransactionalEntity
    from customerioapp_sdk.entity.trigger_entity import TriggerEntity
    from customerioapp_sdk.entity.update_entity import UpdateEntity
    from customerioapp_sdk.entity.whatsapp_entity import WhatsappEntity
    from customerioapp_sdk.entity.workspace_entity import WorkspaceEntity
