package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActionEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewActivityEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewAssetEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewAttributeEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewAutomationEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewBroadcastEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewCampaignEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewCollectionEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewContentEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewCustomerEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewDataIndexEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewDeliveryEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewDesignStudioEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewDesignStudioEmailEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewEmailEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewEndEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewEspSuppressionEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewExportEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewImportEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewInAppEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewInboxMessageEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewInfoEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewIpAddressEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewLanguageEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewLinkEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewLiveNotificationEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewMessageEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewNewsletterEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewNewsletterMetricEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewNewsletterVariantEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewObjectEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewObjectTypeEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewOptOutEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewPushEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewRelationshipEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewReportingWebhookEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSearchSuppressionEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSegmentEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSendMessageEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSenderIdentityEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSmsEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSnippetEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewStartEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSubscriptionCenterEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSubscriptionChannelEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSubscriptionTopicEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewSuppressionEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewTestGroupEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewTransactionalEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewTriggerEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewUpdateEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewWhatsappEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

var NewWorkspaceEntityFunc func(client *CustomerioAppSDK, entopts map[string]any) CustomerioAppEntity

