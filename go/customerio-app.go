package voxgigcustomerioappsdk

import (
	"github.com/voxgig-sdk/customerio-app-sdk/go/core"
	"github.com/voxgig-sdk/customerio-app-sdk/go/entity"
	"github.com/voxgig-sdk/customerio-app-sdk/go/feature"
	_ "github.com/voxgig-sdk/customerio-app-sdk/go/utility"
)

// Type aliases preserve external API.
type CustomerioAppSDK = core.CustomerioAppSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CustomerioAppEntity = core.CustomerioAppEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CustomerioAppError = core.CustomerioAppError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActionEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewActionEntity(client, entopts)
	}
	core.NewActivityEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewActivityEntity(client, entopts)
	}
	core.NewAssetEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewAssetEntity(client, entopts)
	}
	core.NewAttributeEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewAttributeEntity(client, entopts)
	}
	core.NewAutomationEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewAutomationEntity(client, entopts)
	}
	core.NewBroadcastEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewBroadcastEntity(client, entopts)
	}
	core.NewCampaignEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewCampaignEntity(client, entopts)
	}
	core.NewCollectionEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewCollectionEntity(client, entopts)
	}
	core.NewContentEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewContentEntity(client, entopts)
	}
	core.NewCustomerEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewCustomerEntity(client, entopts)
	}
	core.NewDataIndexEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewDataIndexEntity(client, entopts)
	}
	core.NewDeliveryEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewDeliveryEntity(client, entopts)
	}
	core.NewDesignStudioEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewDesignStudioEntity(client, entopts)
	}
	core.NewDesignStudioEmailEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewDesignStudioEmailEntity(client, entopts)
	}
	core.NewEmailEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewEmailEntity(client, entopts)
	}
	core.NewEndEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewEndEntity(client, entopts)
	}
	core.NewEspSuppressionEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewEspSuppressionEntity(client, entopts)
	}
	core.NewExportEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewExportEntity(client, entopts)
	}
	core.NewImportEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewImportEntity(client, entopts)
	}
	core.NewInAppEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewInAppEntity(client, entopts)
	}
	core.NewInboxMessageEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewInboxMessageEntity(client, entopts)
	}
	core.NewInfoEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewInfoEntity(client, entopts)
	}
	core.NewIpAddressEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewIpAddressEntity(client, entopts)
	}
	core.NewLanguageEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewLanguageEntity(client, entopts)
	}
	core.NewLinkEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewLinkEntity(client, entopts)
	}
	core.NewLiveNotificationEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewLiveNotificationEntity(client, entopts)
	}
	core.NewMessageEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewMessageEntity(client, entopts)
	}
	core.NewNewsletterEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewNewsletterEntity(client, entopts)
	}
	core.NewNewsletterMetricEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewNewsletterMetricEntity(client, entopts)
	}
	core.NewNewsletterVariantEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewNewsletterVariantEntity(client, entopts)
	}
	core.NewObjectEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewObjectEntity(client, entopts)
	}
	core.NewObjectTypeEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewObjectTypeEntity(client, entopts)
	}
	core.NewOptOutEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewOptOutEntity(client, entopts)
	}
	core.NewPushEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewPushEntity(client, entopts)
	}
	core.NewRelationshipEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewRelationshipEntity(client, entopts)
	}
	core.NewReportingWebhookEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewReportingWebhookEntity(client, entopts)
	}
	core.NewSearchSuppressionEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSearchSuppressionEntity(client, entopts)
	}
	core.NewSegmentEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSegmentEntity(client, entopts)
	}
	core.NewSendMessageEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSendMessageEntity(client, entopts)
	}
	core.NewSenderIdentityEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSenderIdentityEntity(client, entopts)
	}
	core.NewSmsEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSmsEntity(client, entopts)
	}
	core.NewSnippetEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSnippetEntity(client, entopts)
	}
	core.NewStartEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewStartEntity(client, entopts)
	}
	core.NewSubscriptionCenterEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSubscriptionCenterEntity(client, entopts)
	}
	core.NewSubscriptionChannelEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSubscriptionChannelEntity(client, entopts)
	}
	core.NewSubscriptionTopicEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSubscriptionTopicEntity(client, entopts)
	}
	core.NewSuppressionEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewSuppressionEntity(client, entopts)
	}
	core.NewTestGroupEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewTestGroupEntity(client, entopts)
	}
	core.NewTransactionalEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewTransactionalEntity(client, entopts)
	}
	core.NewTriggerEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewTriggerEntity(client, entopts)
	}
	core.NewUpdateEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewUpdateEntity(client, entopts)
	}
	core.NewWhatsappEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewWhatsappEntity(client, entopts)
	}
	core.NewWorkspaceEntityFunc = func(client *core.CustomerioAppSDK, entopts map[string]any) core.CustomerioAppEntity {
		return entity.NewWorkspaceEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCustomerioAppSDK = core.NewCustomerioAppSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCustomerioAppSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CustomerioAppSDK  { return NewCustomerioAppSDK(nil) }
func Test() *CustomerioAppSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
