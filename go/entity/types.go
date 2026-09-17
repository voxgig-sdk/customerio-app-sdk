// Typed models for the CustomerioApp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/customerio-app-sdk/go/core"
)

// Action is the typed data model for the action entity.
type Action struct {
}

// Activity is the typed data model for the activity entity.
type Activity struct {
	CustomerId *any `json:"customer_id,omitempty"`
	CustomerIdentifiers map[string]any `json:"customer_identifiers"`
	Data *any `json:"data,omitempty"`
	DeliveryId *string `json:"delivery_id,omitempty"`
	DeliveryType *string `json:"delivery_type,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Timestamp *int `json:"timestamp,omitempty"`
	Type *string `json:"type,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ActivityListMatch is the typed request payload for Activity.ListTyped.
type ActivityListMatch struct {
	CustomerId *string `json:"customer_id,omitempty"`
	Deleted *bool `json:"deleted,omitempty"`
	IdType *string `json:"id_type,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
	Start *string `json:"start,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Asset is the typed data model for the asset entity.
type Asset struct {
	Created *int `json:"created,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Size *int `json:"size,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// AssetLoadMatch is the typed request payload for Asset.LoadTyped.
type AssetLoadMatch struct {
	Id int `json:"id"`
}

// AssetListMatch is the typed request payload for Asset.ListTyped.
type AssetListMatch struct {
	DirectDescendantsOnly *bool `json:"direct_descendants_only,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	ParentFolderId *int `json:"parent_folder_id,omitempty"`
}

// AssetCreateData is the typed request payload for Asset.CreateTyped.
type AssetCreateData struct {
	Created *int `json:"created,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Size *int `json:"size,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// AssetUpdateData is the typed request payload for Asset.UpdateTyped.
type AssetUpdateData struct {
	Id int `json:"id"`
	Created *int `json:"created,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Path *string `json:"path,omitempty"`
	Size *int `json:"size,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// AssetRemoveMatch is the typed request payload for Asset.RemoveTyped.
type AssetRemoveMatch struct {
	Id int `json:"id"`
}

// Attribute is the typed data model for the attribute entity.
type Attribute struct {
}

// Automation is the typed data model for the automation entity.
type Automation struct {
	ActionId *int `json:"action_id,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	Activated *[]any `json:"activated,omitempty"`
	BroadcastId *string `json:"broadcast_id,omitempty"`
	CampaignId *string `json:"campaign_id,omitempty"`
	Campaigns *[]any `json:"campaigns,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
	Converted *[]any `json:"converted,omitempty"`
	Created *int `json:"created,omitempty"`
	CustomerId *any `json:"customer_id,omitempty"`
	CustomerIdentifiers map[string]any `json:"customer_identifiers"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	End *string `json:"end,omitempty"`
	ExitedEarly *[]any `json:"exited_early,omitempty"`
	FailureMessage *any `json:"failure_message,omitempty"`
	Finished *[]any `json:"finished,omitempty"`
	Forgotten *bool `json:"forgotten,omitempty"`
	Id *string `json:"id,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MessageTemplateId *int `json:"message_template_id,omitempty"`
	Messaged *[]any `json:"messaged,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	NeverActivated *[]any `json:"never_activated,omitempty"`
	NewsletterId *string `json:"newsletter_id,omitempty"`
	Next *string `json:"next,omitempty"`
	ParentActionId *int `json:"parent_action_id,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	Res *string `json:"res,omitempty"`
	Series *map[string]any `json:"series,omitempty"`
	Start *string `json:"start,omitempty"`
	Started *[]any `json:"started,omitempty"`
	Subject *string `json:"subject,omitempty"`
	TrackedResponses *map[string]any `json:"tracked_responses,omitempty"`
	TriggerEventId *string `json:"trigger_event_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AutomationLoadMatch is the typed request payload for Automation.LoadTyped.
type AutomationLoadMatch struct {
	ActionId *int `json:"action_id,omitempty"`
	CampaignId int `json:"campaign_id"`
	End *int `json:"end,omitempty"`
	Period *string `json:"period,omitempty"`
	Res *string `json:"res,omitempty"`
	Start *int `json:"start,omitempty"`
	Step *int `json:"step,omitempty"`
	Type *string `json:"type,omitempty"`
	Tz *string `json:"tz,omitempty"`
	Version *string `json:"version,omitempty"`
	Resolution *string `json:"resolution,omitempty"`
	Language *string `json:"language,omitempty"`
}

// AutomationListMatch is the typed request payload for Automation.ListTyped.
type AutomationListMatch struct {
	ActionId *int `json:"action_id,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	Activated *[]any `json:"activated,omitempty"`
	BroadcastId *string `json:"broadcast_id,omitempty"`
	CampaignId *string `json:"campaign_id,omitempty"`
	Campaigns *[]any `json:"campaigns,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
	Converted *[]any `json:"converted,omitempty"`
	Created *int `json:"created,omitempty"`
	CustomerId *any `json:"customer_id,omitempty"`
	CustomerIdentifiers *map[string]any `json:"customer_identifiers,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	End *string `json:"end,omitempty"`
	ExitedEarly *[]any `json:"exited_early,omitempty"`
	FailureMessage *any `json:"failure_message,omitempty"`
	Finished *[]any `json:"finished,omitempty"`
	Forgotten *bool `json:"forgotten,omitempty"`
	Id *string `json:"id,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MessageTemplateId *int `json:"message_template_id,omitempty"`
	Messaged *[]any `json:"messaged,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	NeverActivated *[]any `json:"never_activated,omitempty"`
	NewsletterId *string `json:"newsletter_id,omitempty"`
	Next *string `json:"next,omitempty"`
	ParentActionId *int `json:"parent_action_id,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	Res *string `json:"res,omitempty"`
	Series *map[string]any `json:"series,omitempty"`
	Start *string `json:"start,omitempty"`
	Started *[]any `json:"started,omitempty"`
	Subject *string `json:"subject,omitempty"`
	TrackedResponses *map[string]any `json:"tracked_responses,omitempty"`
	TriggerEventId *string `json:"trigger_event_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AutomationUpdateData is the typed request payload for Automation.UpdateTyped.
type AutomationUpdateData struct {
	ActionId int `json:"action_id"`
	CampaignId int `json:"campaign_id"`
	Language *string `json:"language,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	Activated *[]any `json:"activated,omitempty"`
	BroadcastId *string `json:"broadcast_id,omitempty"`
	Campaigns *[]any `json:"campaigns,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
	Converted *[]any `json:"converted,omitempty"`
	Created *int `json:"created,omitempty"`
	CustomerId *any `json:"customer_id,omitempty"`
	CustomerIdentifiers *map[string]any `json:"customer_identifiers,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	End *string `json:"end,omitempty"`
	ExitedEarly *[]any `json:"exited_early,omitempty"`
	FailureMessage *any `json:"failure_message,omitempty"`
	Finished *[]any `json:"finished,omitempty"`
	Forgotten *bool `json:"forgotten,omitempty"`
	Id *string `json:"id,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	MessageTemplateId *int `json:"message_template_id,omitempty"`
	Messaged *[]any `json:"messaged,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	NeverActivated *[]any `json:"never_activated,omitempty"`
	NewsletterId *string `json:"newsletter_id,omitempty"`
	Next *string `json:"next,omitempty"`
	ParentActionId *int `json:"parent_action_id,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	Res *string `json:"res,omitempty"`
	Series *map[string]any `json:"series,omitempty"`
	Start *string `json:"start,omitempty"`
	Started *[]any `json:"started,omitempty"`
	Subject *string `json:"subject,omitempty"`
	TrackedResponses *map[string]any `json:"tracked_responses,omitempty"`
	TriggerEventId *string `json:"trigger_event_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Broadcast is the typed data model for the broadcast entity.
type Broadcast struct {
	Actions *[]any `json:"actions,omitempty"`
	Active *bool `json:"active,omitempty"`
	BroadcastId *int `json:"broadcast_id,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	FirstStarted *int `json:"first_started,omitempty"`
	Id *int `json:"id,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	MsgTemplateIds *[]any `json:"msg_template_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *int `json:"next,omitempty"`
	ProcessedAt *int `json:"processed_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// BroadcastLoadMatch is the typed request payload for Broadcast.LoadTyped.
type BroadcastLoadMatch struct {
	Id int `json:"id"`
}

// BroadcastListMatch is the typed request payload for Broadcast.ListTyped.
type BroadcastListMatch struct {
	Actions *[]any `json:"actions,omitempty"`
	Active *bool `json:"active,omitempty"`
	BroadcastId *int `json:"broadcast_id,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	FirstStarted *int `json:"first_started,omitempty"`
	Id *int `json:"id,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	MsgTemplateIds *[]any `json:"msg_template_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *int `json:"next,omitempty"`
	ProcessedAt *int `json:"processed_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// BroadcastUpdateData is the typed request payload for Broadcast.UpdateTyped.
type BroadcastUpdateData struct {
	ActionId int `json:"action_id"`
	Id int `json:"id"`
	Language *string `json:"language,omitempty"`
	Actions *[]any `json:"actions,omitempty"`
	Active *bool `json:"active,omitempty"`
	BroadcastId *int `json:"broadcast_id,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Errors *[]any `json:"errors,omitempty"`
	FirstStarted *int `json:"first_started,omitempty"`
	LanguageVariants *map[string]any `json:"language_variants,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	MsgTemplateIds *[]any `json:"msg_template_ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *int `json:"next,omitempty"`
	ProcessedAt *int `json:"processed_at,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// Campaign is the typed data model for the campaign entity.
type Campaign struct {
}

// Collection is the typed data model for the collection entity.
type Collection struct {
	Bytes *int `json:"bytes,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rows *int `json:"rows,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CollectionLoadMatch is the typed request payload for Collection.LoadTyped.
type CollectionLoadMatch struct {
	Id int `json:"id"`
}

// CollectionListMatch is the typed request payload for Collection.ListTyped.
type CollectionListMatch struct {
	Bytes *int `json:"bytes,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rows *int `json:"rows,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CollectionCreateData is the typed request payload for Collection.CreateTyped.
type CollectionCreateData struct {
	Bytes *int `json:"bytes,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rows *int `json:"rows,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CollectionUpdateData is the typed request payload for Collection.UpdateTyped.
type CollectionUpdateData struct {
	Id int `json:"id"`
	Bytes *int `json:"bytes,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Rows *int `json:"rows,omitempty"`
	Schema *[]any `json:"schema,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// CollectionRemoveMatch is the typed request payload for Collection.RemoveTyped.
type CollectionRemoveMatch struct {
	Id int `json:"id"`
}

// Content is the typed data model for the content entity.
type Content struct {
}

// Customer is the typed data model for the customer entity.
type Customer struct {
	CioId string `json:"cio_id"`
	Email any `json:"email"`
	Filter any `json:"filter"`
	Id any `json:"id"`
	Identifiers *[]any `json:"identifiers,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Next *string `json:"next,omitempty"`
}

// CustomerLoadMatch is the typed request payload for Customer.LoadTyped.
type CustomerLoadMatch struct {
	Id string `json:"id"`
	IdType *string `json:"id_type,omitempty"`
	Language *string `json:"language,omitempty"`
}

// CustomerListMatch is the typed request payload for Customer.ListTyped.
type CustomerListMatch struct {
	Email string `json:"email"`
}

// CustomerCreateData is the typed request payload for Customer.CreateTyped.
type CustomerCreateData struct {
	Limit *int `json:"limit,omitempty"`
	Start *string `json:"start,omitempty"`
	CioId string `json:"cio_id"`
	Email any `json:"email"`
	Filter any `json:"filter"`
	Id any `json:"id"`
	Identifiers *[]any `json:"identifiers,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Next *string `json:"next,omitempty"`
}

// DataIndex is the typed data model for the data_index entity.
type DataIndex struct {
}

// DataIndexCreateData is the typed request payload for DataIndex.CreateTyped.
type DataIndexCreateData struct {
}

// Delivery is the typed data model for the delivery entity.
type Delivery struct {
}

// DesignStudio is the typed data model for the design_studio entity.
type DesignStudio struct {
	Content *string `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// DesignStudioLoadMatch is the typed request payload for DesignStudio.LoadTyped.
type DesignStudioLoadMatch struct {
	Id string `json:"id"`
}

// DesignStudioListMatch is the typed request payload for DesignStudio.ListTyped.
type DesignStudioListMatch struct {
	CreatedAfter *int `json:"created_after,omitempty"`
	CreatedBefore *int `json:"created_before,omitempty"`
	DirectDescendantsOnly *bool `json:"direct_descendants_only,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	ParentFolderId *string `json:"parent_folder_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	Tag *string `json:"tag,omitempty"`
	UpdatedAfter *int `json:"updated_after,omitempty"`
	UpdatedBefore *int `json:"updated_before,omitempty"`
}

// DesignStudioCreateData is the typed request payload for DesignStudio.CreateTyped.
type DesignStudioCreateData struct {
	Content *string `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// DesignStudioUpdateData is the typed request payload for DesignStudio.UpdateTyped.
type DesignStudioUpdateData struct {
	Id string `json:"id"`
	Content *string `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	Name *string `json:"name,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Tag *string `json:"tag,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// DesignStudioRemoveMatch is the typed request payload for DesignStudio.RemoveTyped.
type DesignStudioRemoveMatch struct {
	Id string `json:"id"`
}

// DesignStudioEmail is the typed data model for the design_studio_email entity.
type DesignStudioEmail struct {
	Amp *string `json:"amp,omitempty"`
	AvailableLanguages *[]any `json:"available_languages,omitempty"`
	Browser *string `json:"browser,omitempty"`
	Category *string `json:"category,omitempty"`
	Check *string `json:"check,omitempty"`
	Client *string `json:"client,omitempty"`
	ClientIds *[]any `json:"client_ids,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedOnPublish *bool `json:"created_on_publish,omitempty"`
	CreditsOriginal *int `json:"credits_original,omitempty"`
	CreditsRemaining *int `json:"credits_remaining,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Description *string `json:"description,omitempty"`
	Details *string `json:"details,omitempty"`
	Emails *[]any `json:"emails,omitempty"`
	Envelope *map[string]any `json:"envelope,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Feedback *bool `json:"feedback,omitempty"`
	Folders *[]any `json:"folders,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	Html *string `json:"html,omitempty"`
	Id *string `json:"id,omitempty"`
	IsLinked *bool `json:"is_linked,omitempty"`
	IsProcessed *bool `json:"is_processed,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguageGroupId *string `json:"language_group_id,omitempty"`
	LaxMode *bool `json:"lax_mode,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Node *map[string]any `json:"node,omitempty"`
	NodeCount *int `json:"node_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NodeType *string `json:"node_type,omitempty"`
	Os *string `json:"os,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Previews *[]any `json:"previews,omitempty"`
	Replayed *bool `json:"replayed,omitempty"`
	RunId *int `json:"run_id,omitempty"`
	SampleData *map[string]any `json:"sample_data,omitempty"`
	Severity *string `json:"severity,omitempty"`
	State *string `json:"state,omitempty"`
	Summary *string `json:"summary,omitempty"`
	TemplateId *int `json:"template_id,omitempty"`
	Text *string `json:"text,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalPreviewsBounced *int `json:"total_previews_bounced,omitempty"`
	TotalPreviewsCached *int `json:"total_previews_cached,omitempty"`
	TotalPreviewsReady *int `json:"total_previews_ready,omitempty"`
	TotalPreviewsRequested *int `json:"total_previews_requested,omitempty"`
	TotalPreviewsSucceeded *int `json:"total_previews_succeeded,omitempty"`
	Transformers *map[string]any `json:"transformers,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// DesignStudioEmailLoadMatch is the typed request payload for DesignStudioEmail.LoadTyped.
type DesignStudioEmailLoadMatch struct {
	Id string `json:"id"`
}

// DesignStudioEmailListMatch is the typed request payload for DesignStudioEmail.ListTyped.
type DesignStudioEmailListMatch struct {
	CreatedAfter *int `json:"created_after,omitempty"`
	CreatedBefore *int `json:"created_before,omitempty"`
	DirectDescendantsOnly *bool `json:"direct_descendants_only,omitempty"`
	HasTranslation *bool `json:"has_translation,omitempty"`
	IsLinked *bool `json:"is_linked,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Page *int `json:"page,omitempty"`
	ParentFolderId *string `json:"parent_folder_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortOrder *string `json:"sort_order,omitempty"`
	UpdatedAfter *int `json:"updated_after,omitempty"`
	UpdatedBefore *int `json:"updated_before,omitempty"`
}

// DesignStudioEmailCreateData is the typed request payload for DesignStudioEmail.CreateTyped.
type DesignStudioEmailCreateData struct {
	Amp *string `json:"amp,omitempty"`
	AvailableLanguages *[]any `json:"available_languages,omitempty"`
	Browser *string `json:"browser,omitempty"`
	Category *string `json:"category,omitempty"`
	Check *string `json:"check,omitempty"`
	Client *string `json:"client,omitempty"`
	ClientIds *[]any `json:"client_ids,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedOnPublish *bool `json:"created_on_publish,omitempty"`
	CreditsOriginal *int `json:"credits_original,omitempty"`
	CreditsRemaining *int `json:"credits_remaining,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Description *string `json:"description,omitempty"`
	Details *string `json:"details,omitempty"`
	Emails *[]any `json:"emails,omitempty"`
	Envelope *map[string]any `json:"envelope,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Feedback *bool `json:"feedback,omitempty"`
	Folders *[]any `json:"folders,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	Html *string `json:"html,omitempty"`
	Id *string `json:"id,omitempty"`
	IsLinked *bool `json:"is_linked,omitempty"`
	IsProcessed *bool `json:"is_processed,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguageGroupId *string `json:"language_group_id,omitempty"`
	LaxMode *bool `json:"lax_mode,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Node *map[string]any `json:"node,omitempty"`
	NodeCount *int `json:"node_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NodeType *string `json:"node_type,omitempty"`
	Os *string `json:"os,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Previews *[]any `json:"previews,omitempty"`
	Replayed *bool `json:"replayed,omitempty"`
	RunId *int `json:"run_id,omitempty"`
	SampleData *map[string]any `json:"sample_data,omitempty"`
	Severity *string `json:"severity,omitempty"`
	State *string `json:"state,omitempty"`
	Summary *string `json:"summary,omitempty"`
	TemplateId *int `json:"template_id,omitempty"`
	Text *string `json:"text,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalPreviewsBounced *int `json:"total_previews_bounced,omitempty"`
	TotalPreviewsCached *int `json:"total_previews_cached,omitempty"`
	TotalPreviewsReady *int `json:"total_previews_ready,omitempty"`
	TotalPreviewsRequested *int `json:"total_previews_requested,omitempty"`
	TotalPreviewsSucceeded *int `json:"total_previews_succeeded,omitempty"`
	Transformers *map[string]any `json:"transformers,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// DesignStudioEmailUpdateData is the typed request payload for DesignStudioEmail.UpdateTyped.
type DesignStudioEmailUpdateData struct {
	Id string `json:"id"`
	Amp *string `json:"amp,omitempty"`
	AvailableLanguages *[]any `json:"available_languages,omitempty"`
	Browser *string `json:"browser,omitempty"`
	Category *string `json:"category,omitempty"`
	Check *string `json:"check,omitempty"`
	Client *string `json:"client,omitempty"`
	ClientIds *[]any `json:"client_ids,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	CreatedOnPublish *bool `json:"created_on_publish,omitempty"`
	CreditsOriginal *int `json:"credits_original,omitempty"`
	CreditsRemaining *int `json:"credits_remaining,omitempty"`
	Dependencies *[]any `json:"dependencies,omitempty"`
	Description *string `json:"description,omitempty"`
	Details *string `json:"details,omitempty"`
	Emails *[]any `json:"emails,omitempty"`
	Envelope *map[string]any `json:"envelope,omitempty"`
	ExpiresAt *any `json:"expires_at,omitempty"`
	Feedback *bool `json:"feedback,omitempty"`
	Folders *[]any `json:"folders,omitempty"`
	HasUnpublishedChanges *bool `json:"has_unpublished_changes,omitempty"`
	Html *string `json:"html,omitempty"`
	IsLinked *bool `json:"is_linked,omitempty"`
	IsProcessed *bool `json:"is_processed,omitempty"`
	IsTemplate *bool `json:"is_template,omitempty"`
	Language *string `json:"language,omitempty"`
	LanguageGroupId *string `json:"language_group_id,omitempty"`
	LaxMode *bool `json:"lax_mode,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Name *string `json:"name,omitempty"`
	Node *map[string]any `json:"node,omitempty"`
	NodeCount *int `json:"node_count,omitempty"`
	NodeId *string `json:"node_id,omitempty"`
	NodeType *string `json:"node_type,omitempty"`
	Os *string `json:"os,omitempty"`
	ParentFolderId *any `json:"parent_folder_id,omitempty"`
	Previews *[]any `json:"previews,omitempty"`
	Replayed *bool `json:"replayed,omitempty"`
	RunId *int `json:"run_id,omitempty"`
	SampleData *map[string]any `json:"sample_data,omitempty"`
	Severity *string `json:"severity,omitempty"`
	State *string `json:"state,omitempty"`
	Summary *string `json:"summary,omitempty"`
	TemplateId *int `json:"template_id,omitempty"`
	Text *string `json:"text,omitempty"`
	Tier *string `json:"tier,omitempty"`
	Title *string `json:"title,omitempty"`
	TotalPreviewsBounced *int `json:"total_previews_bounced,omitempty"`
	TotalPreviewsCached *int `json:"total_previews_cached,omitempty"`
	TotalPreviewsReady *int `json:"total_previews_ready,omitempty"`
	TotalPreviewsRequested *int `json:"total_previews_requested,omitempty"`
	TotalPreviewsSucceeded *int `json:"total_previews_succeeded,omitempty"`
	Transformers *map[string]any `json:"transformers,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Version *map[string]any `json:"version,omitempty"`
	VersionId *string `json:"version_id,omitempty"`
}

// DesignStudioEmailRemoveMatch is the typed request payload for DesignStudioEmail.RemoveTyped.
type DesignStudioEmailRemoveMatch struct {
	Id string `json:"id"`
}

// Email is the typed data model for the email entity.
type Email struct {
}

// End is the typed data model for the end entity.
type End struct {
}

// EspSuppression is the typed data model for the esp_suppression entity.
type EspSuppression struct {
	Category *string `json:"category,omitempty"`
	Id *string `json:"id,omitempty"`
	Next *string `json:"next,omitempty"`
	Suppressions *[]any `json:"suppressions,omitempty"`
}

// EspSuppressionLoadMatch is the typed request payload for EspSuppression.LoadTyped.
type EspSuppressionLoadMatch struct {
	Id string `json:"id"`
	Domain *string `json:"domain,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Offset *int `json:"offset,omitempty"`
}

// EspSuppressionCreateData is the typed request payload for EspSuppression.CreateTyped.
type EspSuppressionCreateData struct {
	EmailAddress string `json:"email_address"`
	SuppressionType string `json:"suppression_type"`
	Category *string `json:"category,omitempty"`
	Id *string `json:"id,omitempty"`
	Next *string `json:"next,omitempty"`
	Suppressions *[]any `json:"suppressions,omitempty"`
}

// EspSuppressionRemoveMatch is the typed request payload for EspSuppression.RemoveTyped.
type EspSuppressionRemoveMatch struct {
	EmailAddress string `json:"email_address"`
	SuppressionType string `json:"suppression_type"`
}

// Export is the typed data model for the export entity.
type Export struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	Failed *bool `json:"failed,omitempty"`
	Id *int `json:"id,omitempty"`
	Status *string `json:"status,omitempty"`
	Total *int `json:"total,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ExportLoadMatch is the typed request payload for Export.LoadTyped.
type ExportLoadMatch struct {
	Id int `json:"id"`
}

// ExportListMatch is the typed request payload for Export.ListTyped.
type ExportListMatch struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	Failed *bool `json:"failed,omitempty"`
	Id *int `json:"id,omitempty"`
	Status *string `json:"status,omitempty"`
	Total *int `json:"total,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// ExportCreateData is the typed request payload for Export.CreateTyped.
type ExportCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	Failed *bool `json:"failed,omitempty"`
	Id *int `json:"id,omitempty"`
	Status *string `json:"status,omitempty"`
	Total *int `json:"total,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	UserEmail *string `json:"user_email,omitempty"`
	UserId *int `json:"user_id,omitempty"`
}

// Import is the typed data model for the import entity.
type Import struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DataToProcess *string `json:"data_to_process,omitempty"`
	Description *string `json:"description,omitempty"`
	Error *string `json:"error,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Import any `json:"import"`
	Name *string `json:"name,omitempty"`
	ObjectTypeId *string `json:"object_type_id,omitempty"`
	PeopleToProcess *string `json:"people_to_process,omitempty"`
	RowsImported *int `json:"rows_imported,omitempty"`
	RowsToImport *int `json:"rows_to_import,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// ImportLoadMatch is the typed request payload for Import.LoadTyped.
type ImportLoadMatch struct {
	Id int `json:"id"`
}

// ImportCreateData is the typed request payload for Import.CreateTyped.
type ImportCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DataToProcess *string `json:"data_to_process,omitempty"`
	Description *string `json:"description,omitempty"`
	Error *string `json:"error,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Import any `json:"import"`
	Name *string `json:"name,omitempty"`
	ObjectTypeId *string `json:"object_type_id,omitempty"`
	PeopleToProcess *string `json:"people_to_process,omitempty"`
	RowsImported *int `json:"rows_imported,omitempty"`
	RowsToImport *int `json:"rows_to_import,omitempty"`
	State *string `json:"state,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// InApp is the typed data model for the in_app entity.
type InApp struct {
}

// InboxMessage is the typed data model for the inbox_message entity.
type InboxMessage struct {
}

// Info is the typed data model for the info entity.
type Info struct {
}

// InfoListMatch is the typed request payload for Info.ListTyped.
type InfoListMatch struct {
}

// IpAddress is the typed data model for the ip_address entity.
type IpAddress struct {
}

// Language is the typed data model for the language entity.
type Language struct {
}

// Link is the typed data model for the link entity.
type Link struct {
}

// LiveNotification is the typed data model for the live_notification entity.
type LiveNotification struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Operation *string `json:"operation,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
}

// LiveNotificationLoadMatch is the typed request payload for LiveNotification.LoadTyped.
type LiveNotificationLoadMatch struct {
	Id string `json:"id"`
}

// LiveNotificationCreateData is the typed request payload for LiveNotification.CreateTyped.
type LiveNotificationCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	Operation *string `json:"operation,omitempty"`
	Source *string `json:"source,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Message is the typed data model for the message entity.
type Message struct {
	ActionId *int `json:"action_id,omitempty"`
	BroadcastId *string `json:"broadcast_id,omitempty"`
	CampaignId *string `json:"campaign_id,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
	Created *int `json:"created,omitempty"`
	CustomerId *any `json:"customer_id,omitempty"`
	CustomerIdentifiers map[string]any `json:"customer_identifiers"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	FailureMessage *any `json:"failure_message,omitempty"`
	Forgotten *bool `json:"forgotten,omitempty"`
	Id *string `json:"id,omitempty"`
	MessageTemplateId *int `json:"message_template_id,omitempty"`
	Metrics *map[string]any `json:"metrics,omitempty"`
	NewsletterId *string `json:"newsletter_id,omitempty"`
	ParentActionId *int `json:"parent_action_id,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	Subject *string `json:"subject,omitempty"`
	TrackedResponses *map[string]any `json:"tracked_responses,omitempty"`
	TriggerEventId *string `json:"trigger_event_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// MessageLoadMatch is the typed request payload for Message.LoadTyped.
type MessageLoadMatch struct {
	Id string `json:"id"`
	GetTrackedResponse *bool `json:"get_tracked_response,omitempty"`
}

// MessageListMatch is the typed request payload for Message.ListTyped.
type MessageListMatch struct {
	ActionId *int `json:"action_id,omitempty"`
	CampaignId *int `json:"campaign_id,omitempty"`
	Draft *bool `json:"draft,omitempty"`
	EndT *int `json:"end_t,omitempty"`
	GetTrackedResponse *bool `json:"get_tracked_response,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Metric *string `json:"metric,omitempty"`
	NewsletterId *int `json:"newsletter_id,omitempty"`
	Start *string `json:"start,omitempty"`
	StartT *int `json:"start_t,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Newsletter is the typed data model for the newsletter entity.
type Newsletter struct {
	ContentIds *[]any `json:"content_ids,omitempty"`
	Created *int `json:"created,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	RecipientSegmentIds *[]any `json:"recipient_segment_ids,omitempty"`
	SentAt *int `json:"sent_at,omitempty"`
	SubscriptionTopicId *int `json:"subscription_topic_id,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// NewsletterLoadMatch is the typed request payload for Newsletter.LoadTyped.
type NewsletterLoadMatch struct {
	Id int `json:"id"`
}

// NewsletterListMatch is the typed request payload for Newsletter.ListTyped.
type NewsletterListMatch struct {
	Limit *int `json:"limit,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Start *string `json:"start,omitempty"`
}

// NewsletterCreateData is the typed request payload for Newsletter.CreateTyped.
type NewsletterCreateData struct {
	ContentIds *[]any `json:"content_ids,omitempty"`
	Created *int `json:"created,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	RecipientSegmentIds *[]any `json:"recipient_segment_ids,omitempty"`
	SentAt *int `json:"sent_at,omitempty"`
	SubscriptionTopicId *int `json:"subscription_topic_id,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// NewsletterRemoveMatch is the typed request payload for Newsletter.RemoveTyped.
type NewsletterRemoveMatch struct {
	Id int `json:"id"`
}

// NewsletterMetric is the typed data model for the newsletter_metric entity.
type NewsletterMetric struct {
	Id *string `json:"id,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	Metric *map[string]any `json:"metric,omitempty"`
	Series *map[string]any `json:"series,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NewsletterMetricLoadMatch is the typed request payload for NewsletterMetric.LoadTyped.
type NewsletterMetricLoadMatch struct {
	Id int `json:"id"`
	Period *string `json:"period,omitempty"`
	Step *int `json:"step,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NewsletterMetricListMatch is the typed request payload for NewsletterMetric.ListTyped.
type NewsletterMetricListMatch struct {
	ContentId *int `json:"content_id,omitempty"`
	NewsletterId int `json:"newsletter_id"`
	Period *string `json:"period,omitempty"`
	Step *int `json:"step,omitempty"`
	Type *string `json:"type,omitempty"`
	Unique *bool `json:"unique,omitempty"`
}

// NewsletterVariant is the typed data model for the newsletter_variant entity.
type NewsletterVariant struct {
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	ContentIds *[]any `json:"content_ids,omitempty"`
	Created *int `json:"created,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id *int `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	Layout *string `json:"layout,omitempty"`
	Name *string `json:"name,omitempty"`
	NewsletterId *int `json:"newsletter_id,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	RecipientSegmentIds *[]any `json:"recipient_segment_ids,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SentAt *int `json:"sent_at,omitempty"`
	Subject *string `json:"subject,omitempty"`
	SubscriptionTopicId *int `json:"subscription_topic_id,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// NewsletterVariantLoadMatch is the typed request payload for NewsletterVariant.LoadTyped.
type NewsletterVariantLoadMatch struct {
	Language *string `json:"language,omitempty"`
	NewsletterId int `json:"newsletter_id"`
	TestGroupId *string `json:"test_group_id,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
}

// NewsletterVariantListMatch is the typed request payload for NewsletterVariant.ListTyped.
type NewsletterVariantListMatch struct {
	Id int `json:"id"`
}

// NewsletterVariantCreateData is the typed request payload for NewsletterVariant.CreateTyped.
type NewsletterVariantCreateData struct {
	NewsletterId int `json:"newsletter_id"`
	TestGroupId string `json:"test_group_id"`
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	ContentIds *[]any `json:"content_ids,omitempty"`
	Created *int `json:"created,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id *int `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	Layout *string `json:"layout,omitempty"`
	Name *string `json:"name,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	RecipientSegmentIds *[]any `json:"recipient_segment_ids,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SentAt *int `json:"sent_at,omitempty"`
	Subject *string `json:"subject,omitempty"`
	SubscriptionTopicId *int `json:"subscription_topic_id,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// NewsletterVariantUpdateData is the typed request payload for NewsletterVariant.UpdateTyped.
type NewsletterVariantUpdateData struct {
	Language *string `json:"language,omitempty"`
	NewsletterId int `json:"newsletter_id"`
	TestGroupId *string `json:"test_group_id,omitempty"`
	ContentId *int `json:"content_id,omitempty"`
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	ContentIds *[]any `json:"content_ids,omitempty"`
	Created *int `json:"created,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id *int `json:"id,omitempty"`
	Layout *string `json:"layout,omitempty"`
	Name *string `json:"name,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	RecipientSegmentIds *[]any `json:"recipient_segment_ids,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SentAt *int `json:"sent_at,omitempty"`
	Subject *string `json:"subject,omitempty"`
	SubscriptionTopicId *int `json:"subscription_topic_id,omitempty"`
	Tags *[]any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
}

// NewsletterVariantRemoveMatch is the typed request payload for NewsletterVariant.RemoveTyped.
type NewsletterVariantRemoveMatch struct {
	Language string `json:"language"`
	NewsletterId int `json:"newsletter_id"`
	TestGroupId *string `json:"test_group_id,omitempty"`
}

// Object is the typed data model for the object entity.
type Object struct {
	Attributes *map[string]any `json:"attributes,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Filter any `json:"filter"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifiers *map[string]any `json:"identifiers,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *string `json:"next,omitempty"`
	ObjectTypeDisabled *bool `json:"object_type_disabled,omitempty"`
	ObjectTypeId *string `json:"object_type_id,omitempty"`
	SingularName *string `json:"singular_name,omitempty"`
	SingularSlug *string `json:"singular_slug,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Timestamps *map[string]any `json:"timestamps,omitempty"`
}

// ObjectLoadMatch is the typed request payload for Object.LoadTyped.
type ObjectLoadMatch struct {
	Id int `json:"id"`
	ObjectId string `json:"object_id"`
	IdType *string `json:"id_type,omitempty"`
}

// ObjectListMatch is the typed request payload for Object.ListTyped.
type ObjectListMatch struct {
	Attributes *map[string]any `json:"attributes,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Filter *any `json:"filter,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifiers *map[string]any `json:"identifiers,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *string `json:"next,omitempty"`
	ObjectTypeDisabled *bool `json:"object_type_disabled,omitempty"`
	ObjectTypeId *string `json:"object_type_id,omitempty"`
	SingularName *string `json:"singular_name,omitempty"`
	SingularSlug *string `json:"singular_slug,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Timestamps *map[string]any `json:"timestamps,omitempty"`
}

// ObjectCreateData is the typed request payload for Object.CreateTyped.
type ObjectCreateData struct {
	Limit *int `json:"limit,omitempty"`
	Start *string `json:"start,omitempty"`
	Attributes *map[string]any `json:"attributes,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Filter any `json:"filter"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	Identifiers *map[string]any `json:"identifiers,omitempty"`
	Ids *[]any `json:"ids,omitempty"`
	Name *string `json:"name,omitempty"`
	Next *string `json:"next,omitempty"`
	ObjectTypeDisabled *bool `json:"object_type_disabled,omitempty"`
	ObjectTypeId *string `json:"object_type_id,omitempty"`
	SingularName *string `json:"singular_name,omitempty"`
	SingularSlug *string `json:"singular_slug,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Timestamps *map[string]any `json:"timestamps,omitempty"`
}

// ObjectType is the typed data model for the object_type entity.
type ObjectType struct {
}

// OptOut is the typed data model for the opt_out entity.
type OptOut struct {
	Channel *string `json:"channel,omitempty"`
	CioId *string `json:"cio_id,omitempty"`
	CustomerId *string `json:"customer_id,omitempty"`
	From *string `json:"from,omitempty"`
	Optouts []any `json:"optouts"`
}

// OptOutListMatch is the typed request payload for OptOut.ListTyped.
type OptOutListMatch struct {
	From *string `json:"from,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Start *string `json:"start,omitempty"`
}

// OptOutUpdateData is the typed request payload for OptOut.UpdateTyped.
type OptOutUpdateData struct {
	CustomerId string `json:"customer_id"`
	IdType *string `json:"id_type,omitempty"`
	Channel *string `json:"channel,omitempty"`
	CioId *string `json:"cio_id,omitempty"`
	From *string `json:"from,omitempty"`
	Optouts *[]any `json:"optouts,omitempty"`
}

// Push is the typed data model for the push entity.
type Push struct {
}

// Relationship is the typed data model for the relationship entity.
type Relationship struct {
}

// ReportingWebhook is the typed data model for the reporting_webhook entity.
type ReportingWebhook struct {
	Disabled *bool `json:"disabled,omitempty"`
	Endpoint string `json:"endpoint"`
	Events []any `json:"events"`
	FullResolution *bool `json:"full_resolution,omitempty"`
	Id *int `json:"id,omitempty"`
	Name string `json:"name"`
	Type *string `json:"type,omitempty"`
	WithContent *bool `json:"with_content,omitempty"`
}

// ReportingWebhookLoadMatch is the typed request payload for ReportingWebhook.LoadTyped.
type ReportingWebhookLoadMatch struct {
	Id int `json:"id"`
}

// ReportingWebhookListMatch is the typed request payload for ReportingWebhook.ListTyped.
type ReportingWebhookListMatch struct {
	Disabled *bool `json:"disabled,omitempty"`
	Endpoint *string `json:"endpoint,omitempty"`
	Events *[]any `json:"events,omitempty"`
	FullResolution *bool `json:"full_resolution,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	WithContent *bool `json:"with_content,omitempty"`
}

// ReportingWebhookCreateData is the typed request payload for ReportingWebhook.CreateTyped.
type ReportingWebhookCreateData struct {
	Disabled *bool `json:"disabled,omitempty"`
	Endpoint string `json:"endpoint"`
	Events []any `json:"events"`
	FullResolution *bool `json:"full_resolution,omitempty"`
	Id *int `json:"id,omitempty"`
	Name string `json:"name"`
	Type *string `json:"type,omitempty"`
	WithContent *bool `json:"with_content,omitempty"`
}

// ReportingWebhookUpdateData is the typed request payload for ReportingWebhook.UpdateTyped.
type ReportingWebhookUpdateData struct {
	Id int `json:"id"`
	Disabled *bool `json:"disabled,omitempty"`
	Endpoint *string `json:"endpoint,omitempty"`
	Events *[]any `json:"events,omitempty"`
	FullResolution *bool `json:"full_resolution,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
	WithContent *bool `json:"with_content,omitempty"`
}

// ReportingWebhookRemoveMatch is the typed request payload for ReportingWebhook.RemoveTyped.
type ReportingWebhookRemoveMatch struct {
	Id int `json:"id"`
}

// SearchSuppression is the typed data model for the search_suppression entity.
type SearchSuppression struct {
}

// Segment is the typed data model for the segment entity.
type Segment struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Progress *any `json:"progress,omitempty"`
	Segment map[string]any `json:"segment"`
	State *string `json:"state,omitempty"`
	Tags *any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// SegmentLoadMatch is the typed request payload for Segment.LoadTyped.
type SegmentLoadMatch struct {
	Id int `json:"id"`
}

// SegmentListMatch is the typed request payload for Segment.ListTyped.
type SegmentListMatch struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Progress *any `json:"progress,omitempty"`
	Segment *map[string]any `json:"segment,omitempty"`
	State *string `json:"state,omitempty"`
	Tags *any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// SegmentCreateData is the typed request payload for Segment.CreateTyped.
type SegmentCreateData struct {
	CreatedAt *int `json:"created_at,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Progress *any `json:"progress,omitempty"`
	Segment map[string]any `json:"segment"`
	State *string `json:"state,omitempty"`
	Tags *any `json:"tags,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// SegmentRemoveMatch is the typed request payload for Segment.RemoveTyped.
type SegmentRemoveMatch struct {
	Id int `json:"id"`
}

// SendMessage is the typed data model for the send_message entity.
type SendMessage struct {
	Attachments *map[string]any `json:"attachments,omitempty"`
	AutoCreate *bool `json:"auto_create,omitempty"`
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	BodyPlain *string `json:"body_plain,omitempty"`
	Cc *string `json:"cc,omitempty"`
	CustomData *map[string]any `json:"custom_data,omitempty"`
	CustomDevice any `json:"custom_device"`
	CustomPayload *map[string]any `json:"custom_payload,omitempty"`
	DeliveryId *string `json:"delivery_id,omitempty"`
	DisableCssPreprocessing *bool `json:"disable_css_preprocessing,omitempty"`
	DisableMessageRetention *bool `json:"disable_message_retention,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifiers *any `json:"identifiers,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Language *string `json:"language,omitempty"`
	Link *string `json:"link,omitempty"`
	Message *string `json:"message,omitempty"`
	MessageData *map[string]any `json:"message_data,omitempty"`
	Preheader *string `json:"preheader,omitempty"`
	QueueDraft *bool `json:"queue_draft,omitempty"`
	QueuedAt *int `json:"queued_at,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	SendAt *int `json:"send_at,omitempty"`
	SendToUnsubscribed *bool `json:"send_to_unsubscribed,omitempty"`
	Sound *string `json:"sound,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Title *string `json:"title,omitempty"`
	To string `json:"to"`
	Tracked *bool `json:"tracked,omitempty"`
	TransactionalMessageId *string `json:"transactional_message_id,omitempty"`
}

// SendMessageCreateData is the typed request payload for SendMessage.CreateTyped.
type SendMessageCreateData struct {
	Attachments *map[string]any `json:"attachments,omitempty"`
	AutoCreate *bool `json:"auto_create,omitempty"`
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	BodyPlain *string `json:"body_plain,omitempty"`
	Cc *string `json:"cc,omitempty"`
	CustomData *map[string]any `json:"custom_data,omitempty"`
	CustomDevice any `json:"custom_device"`
	CustomPayload *map[string]any `json:"custom_payload,omitempty"`
	DeliveryId *string `json:"delivery_id,omitempty"`
	DisableCssPreprocessing *bool `json:"disable_css_preprocessing,omitempty"`
	DisableMessageRetention *bool `json:"disable_message_retention,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	Headers *string `json:"headers,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifiers *any `json:"identifiers,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Language *string `json:"language,omitempty"`
	Link *string `json:"link,omitempty"`
	Message *string `json:"message,omitempty"`
	MessageData *map[string]any `json:"message_data,omitempty"`
	Preheader *string `json:"preheader,omitempty"`
	QueueDraft *bool `json:"queue_draft,omitempty"`
	QueuedAt *int `json:"queued_at,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	SendAt *int `json:"send_at,omitempty"`
	SendToUnsubscribed *bool `json:"send_to_unsubscribed,omitempty"`
	Sound *string `json:"sound,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Title *string `json:"title,omitempty"`
	To string `json:"to"`
	Tracked *bool `json:"tracked,omitempty"`
	TransactionalMessageId *string `json:"transactional_message_id,omitempty"`
}

// SenderIdentity is the typed data model for the sender_identity entity.
type SenderIdentity struct {
	Address *string `json:"address,omitempty"`
	AutoGenerated *bool `json:"auto_generated,omitempty"`
	DeduplicateId *string `json:"deduplicate_id,omitempty"`
	Email *string `json:"email,omitempty"`
	Hidden *bool `json:"hidden,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	TemplateType *string `json:"template_type,omitempty"`
}

// SenderIdentityLoadMatch is the typed request payload for SenderIdentity.LoadTyped.
type SenderIdentityLoadMatch struct {
	Id int `json:"id"`
}

// SenderIdentityListMatch is the typed request payload for SenderIdentity.ListTyped.
type SenderIdentityListMatch struct {
	Hidden *bool `json:"hidden,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Sort *string `json:"sort,omitempty"`
	Start *string `json:"start,omitempty"`
}

// Sms is the typed data model for the sms entity.
type Sms struct {
}

// Snippet is the typed data model for the snippet entity.
type Snippet struct {
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Value string `json:"value"`
}

// SnippetListMatch is the typed request payload for Snippet.ListTyped.
type SnippetListMatch struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SnippetCreateData is the typed request payload for Snippet.CreateTyped.
type SnippetCreateData struct {
	Id *string `json:"id,omitempty"`
	Name string `json:"name"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Value string `json:"value"`
}

// SnippetUpdateData is the typed request payload for Snippet.UpdateTyped.
type SnippetUpdateData struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
}

// SnippetRemoveMatch is the typed request payload for Snippet.RemoveTyped.
type SnippetRemoveMatch struct {
	Id string `json:"id"`
}

// Start is the typed data model for the start entity.
type Start struct {
}

// SubscriptionCenter is the typed data model for the subscription_center entity.
type SubscriptionCenter struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	SubscribedByDefault *bool `json:"subscribed_by_default,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SubscriptionCenterLoadMatch is the typed request payload for SubscriptionCenter.LoadTyped.
type SubscriptionCenterLoadMatch struct {
	Id string `json:"id"`
}

// SubscriptionCenterListMatch is the typed request payload for SubscriptionCenter.ListTyped.
type SubscriptionCenterListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Name *string `json:"name,omitempty"`
	SubscribedByDefault *bool `json:"subscribed_by_default,omitempty"`
	Type *string `json:"type,omitempty"`
}

// SubscriptionChannel is the typed data model for the subscription_channel entity.
type SubscriptionChannel struct {
}

// SubscriptionTopic is the typed data model for the subscription_topic entity.
type SubscriptionTopic struct {
}

// Suppression is the typed data model for the suppression entity.
type Suppression struct {
}

// TestGroup is the typed data model for the test_group entity.
type TestGroup struct {
}

// Transactional is the typed data model for the transactional entity.
type Transactional struct {
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	Content *[]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	HideMessageBody *bool `json:"hide_message_body,omitempty"`
	Id *int `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LinkTracking *bool `json:"link_tracking,omitempty"`
	Name *string `json:"name,omitempty"`
	OpenTracking *bool `json:"open_tracking,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	QueueDrafts *bool `json:"queue_drafts,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SendToUnsubscribed *bool `json:"send_to_unsubscribed,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TransactionalLoadMatch is the typed request payload for Transactional.LoadTyped.
type TransactionalLoadMatch struct {
	ContentId *int `json:"content_id,omitempty"`
	Id int `json:"id"`
	Language *string `json:"language,omitempty"`
}

// TransactionalListMatch is the typed request payload for Transactional.ListTyped.
type TransactionalListMatch struct {
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	Content *[]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	HideMessageBody *bool `json:"hide_message_body,omitempty"`
	Id *int `json:"id,omitempty"`
	Language *string `json:"language,omitempty"`
	LinkTracking *bool `json:"link_tracking,omitempty"`
	Name *string `json:"name,omitempty"`
	OpenTracking *bool `json:"open_tracking,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	QueueDrafts *bool `json:"queue_drafts,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SendToUnsubscribed *bool `json:"send_to_unsubscribed,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// TransactionalUpdateData is the typed request payload for Transactional.UpdateTyped.
type TransactionalUpdateData struct {
	ContentId *int `json:"content_id,omitempty"`
	Id int `json:"id"`
	Language *string `json:"language,omitempty"`
	Bcc *string `json:"bcc,omitempty"`
	Body *string `json:"body,omitempty"`
	BodyAmp *string `json:"body_amp,omitempty"`
	Cc *string `json:"cc,omitempty"`
	Content *[]any `json:"content,omitempty"`
	Created *int `json:"created,omitempty"`
	CreatedAt *int `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FakeBcc *bool `json:"fake_bcc,omitempty"`
	From *string `json:"from,omitempty"`
	FromId *int `json:"from_id,omitempty"`
	Headers *string `json:"headers,omitempty"`
	HideMessageBody *bool `json:"hide_message_body,omitempty"`
	LinkTracking *bool `json:"link_tracking,omitempty"`
	Name *string `json:"name,omitempty"`
	OpenTracking *bool `json:"open_tracking,omitempty"`
	PreheaderText *string `json:"preheader_text,omitempty"`
	Preprocessor *string `json:"preprocessor,omitempty"`
	QueueDrafts *bool `json:"queue_drafts,omitempty"`
	Recipient *string `json:"recipient,omitempty"`
	ReplyTo *string `json:"reply_to,omitempty"`
	ReplyToId *any `json:"reply_to_id,omitempty"`
	SendToUnsubscribed *bool `json:"send_to_unsubscribed,omitempty"`
	Subject *string `json:"subject,omitempty"`
	Type *string `json:"type,omitempty"`
	Updated *int `json:"updated,omitempty"`
	UpdatedAt *int `json:"updated_at,omitempty"`
}

// Trigger is the typed data model for the trigger entity.
type Trigger struct {
}

// Update is the typed data model for the update entity.
type Update struct {
}

// Whatsapp is the typed data model for the whatsapp entity.
type Whatsapp struct {
}

// Workspace is the typed data model for the workspace entity.
type Workspace struct {
	BillableMessagesSent *int `json:"billable_messages_sent,omitempty"`
	Id *int `json:"id,omitempty"`
	MessagesSent *int `json:"messages_sent,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectTypes *int `json:"object_types,omitempty"`
	Objects *int `json:"objects,omitempty"`
	People *int `json:"people,omitempty"`
}

// WorkspaceListMatch is the typed request payload for Workspace.ListTyped.
type WorkspaceListMatch struct {
	BillableMessagesSent *int `json:"billable_messages_sent,omitempty"`
	Id *int `json:"id,omitempty"`
	MessagesSent *int `json:"messages_sent,omitempty"`
	Name *string `json:"name,omitempty"`
	ObjectTypes *int `json:"object_types,omitempty"`
	Objects *int `json:"objects,omitempty"`
	People *int `json:"people,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
