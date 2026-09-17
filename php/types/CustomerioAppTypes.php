<?php
declare(strict_types=1);

// Typed models for the CustomerioApp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Action entity data model. */
class Action
{
}

/** Activity entity data model. */
class Activity
{
    public mixed $customer_id = null;
    public array $customer_identifiers;
    public mixed $data = null;
    public ?string $delivery_id = null;
    public ?string $delivery_type = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $timestamp = null;
    public ?string $type = null;
    public ?string $url = null;
}

/** Request payload for Activity#list. */
class ActivityListMatch
{
    public ?string $customer_id = null;
    public ?bool $deleted = null;
    public ?string $id_type = null;
    public ?int $limit = null;
    public ?string $name = null;
    public ?string $start = null;
    public ?string $type = null;
}

/** Asset entity data model. */
class Asset
{
    public ?int $created = null;
    public ?int $id = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $path = null;
    public ?int $size = null;
    public ?int $updated = null;
}

/** Request payload for Asset#load. */
class AssetLoadMatch
{
    public int $id;
}

/** Request payload for Asset#list. */
class AssetListMatch
{
    public ?bool $direct_descendants_only = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?int $parent_folder_id = null;
}

/** Request payload for Asset#create. */
class AssetCreateData
{
    public ?int $created = null;
    public ?int $id = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $path = null;
    public ?int $size = null;
    public ?int $updated = null;
}

/** Request payload for Asset#update. */
class AssetUpdateData
{
    public int $id;
    public ?int $created = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $path = null;
    public ?int $size = null;
    public ?int $updated = null;
}

/** Request payload for Asset#remove. */
class AssetRemoveMatch
{
    public int $id;
}

/** Attribute entity data model. */
class Attribute
{
}

/** Automation entity data model. */
class Automation
{
    public ?int $action_id = null;
    public ?array $actions = null;
    public ?array $activated = null;
    public ?string $broadcast_id = null;
    public ?string $campaign_id = null;
    public ?array $campaigns = null;
    public ?int $content_id = null;
    public ?array $converted = null;
    public ?int $created = null;
    public mixed $customer_id = null;
    public array $customer_identifiers;
    public ?string $deduplicate_id = null;
    public ?string $end = null;
    public ?array $exited_early = null;
    public mixed $failure_message = null;
    public ?array $finished = null;
    public ?bool $forgotten = null;
    public ?string $id = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?int $message_template_id = null;
    public ?array $messaged = null;
    public ?array $metric = null;
    public ?array $metrics = null;
    public ?array $never_activated = null;
    public ?string $newsletter_id = null;
    public ?string $next = null;
    public ?int $parent_action_id = null;
    public ?string $recipient = null;
    public ?string $res = null;
    public ?array $series = null;
    public ?string $start = null;
    public ?array $started = null;
    public ?string $subject = null;
    public ?array $tracked_responses = null;
    public ?string $trigger_event_id = null;
    public ?string $type = null;
}

/** Request payload for Automation#load. */
class AutomationLoadMatch
{
    public ?int $action_id = null;
    public int $campaign_id;
    public ?int $end = null;
    public ?string $period = null;
    public ?string $res = null;
    public ?int $start = null;
    public ?int $step = null;
    public ?string $type = null;
    public ?string $tz = null;
    public ?string $version = null;
    public ?string $resolution = null;
    public ?string $language = null;
}

/** Request payload for Automation#list. */
class AutomationListMatch
{
    public ?int $action_id = null;
    public ?array $actions = null;
    public ?array $activated = null;
    public ?string $broadcast_id = null;
    public ?string $campaign_id = null;
    public ?array $campaigns = null;
    public ?int $content_id = null;
    public ?array $converted = null;
    public ?int $created = null;
    public mixed $customer_id = null;
    public ?array $customer_identifiers = null;
    public ?string $deduplicate_id = null;
    public ?string $end = null;
    public ?array $exited_early = null;
    public mixed $failure_message = null;
    public ?array $finished = null;
    public ?bool $forgotten = null;
    public ?string $id = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?int $message_template_id = null;
    public ?array $messaged = null;
    public ?array $metric = null;
    public ?array $metrics = null;
    public ?array $never_activated = null;
    public ?string $newsletter_id = null;
    public ?string $next = null;
    public ?int $parent_action_id = null;
    public ?string $recipient = null;
    public ?string $res = null;
    public ?array $series = null;
    public ?string $start = null;
    public ?array $started = null;
    public ?string $subject = null;
    public ?array $tracked_responses = null;
    public ?string $trigger_event_id = null;
    public ?string $type = null;
}

/** Request payload for Automation#update. */
class AutomationUpdateData
{
    public int $action_id;
    public int $campaign_id;
    public ?string $language = null;
    public ?array $actions = null;
    public ?array $activated = null;
    public ?string $broadcast_id = null;
    public ?array $campaigns = null;
    public ?int $content_id = null;
    public ?array $converted = null;
    public ?int $created = null;
    public mixed $customer_id = null;
    public ?array $customer_identifiers = null;
    public ?string $deduplicate_id = null;
    public ?string $end = null;
    public ?array $exited_early = null;
    public mixed $failure_message = null;
    public ?array $finished = null;
    public ?bool $forgotten = null;
    public ?string $id = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?int $message_template_id = null;
    public ?array $messaged = null;
    public ?array $metric = null;
    public ?array $metrics = null;
    public ?array $never_activated = null;
    public ?string $newsletter_id = null;
    public ?string $next = null;
    public ?int $parent_action_id = null;
    public ?string $recipient = null;
    public ?string $res = null;
    public ?array $series = null;
    public ?string $start = null;
    public ?array $started = null;
    public ?string $subject = null;
    public ?array $tracked_responses = null;
    public ?string $trigger_event_id = null;
    public ?string $type = null;
}

/** Broadcast entity data model. */
class Broadcast
{
    public ?array $actions = null;
    public ?bool $active = null;
    public ?int $broadcast_id = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?array $errors = null;
    public ?int $first_started = null;
    public ?int $id = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?array $metric = null;
    public ?array $msg_template_ids = null;
    public ?string $name = null;
    public ?int $next = null;
    public ?int $processed_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for Broadcast#load. */
class BroadcastLoadMatch
{
    public int $id;
}

/** Request payload for Broadcast#list. */
class BroadcastListMatch
{
    public ?array $actions = null;
    public ?bool $active = null;
    public ?int $broadcast_id = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?array $errors = null;
    public ?int $first_started = null;
    public ?int $id = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?array $metric = null;
    public ?array $msg_template_ids = null;
    public ?string $name = null;
    public ?int $next = null;
    public ?int $processed_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for Broadcast#update. */
class BroadcastUpdateData
{
    public int $action_id;
    public int $id;
    public ?string $language = null;
    public ?array $actions = null;
    public ?bool $active = null;
    public ?int $broadcast_id = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?array $errors = null;
    public ?int $first_started = null;
    public ?array $language_variants = null;
    public ?array $link = null;
    public ?array $metric = null;
    public ?array $msg_template_ids = null;
    public ?string $name = null;
    public ?int $next = null;
    public ?int $processed_at = null;
    public ?string $state = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Campaign entity data model. */
class Campaign
{
}

/** Collection entity data model. */
class Collection
{
    public ?int $bytes = null;
    public ?int $created_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $rows = null;
    public ?array $schema = null;
    public ?int $updated_at = null;
}

/** Request payload for Collection#load. */
class CollectionLoadMatch
{
    public int $id;
}

/** Request payload for Collection#list. */
class CollectionListMatch
{
    public ?int $bytes = null;
    public ?int $created_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $rows = null;
    public ?array $schema = null;
    public ?int $updated_at = null;
}

/** Request payload for Collection#create. */
class CollectionCreateData
{
    public ?int $bytes = null;
    public ?int $created_at = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $rows = null;
    public ?array $schema = null;
    public ?int $updated_at = null;
}

/** Request payload for Collection#update. */
class CollectionUpdateData
{
    public int $id;
    public ?int $bytes = null;
    public ?int $created_at = null;
    public ?string $name = null;
    public ?int $rows = null;
    public ?array $schema = null;
    public ?int $updated_at = null;
}

/** Request payload for Collection#remove. */
class CollectionRemoveMatch
{
    public int $id;
}

/** Content entity data model. */
class Content
{
}

/** Customer entity data model. */
class Customer
{
    public string $cio_id;
    public mixed $email;
    public mixed $filter;
    public mixed $id;
    public ?array $identifiers = null;
    public ?array $ids = null;
    public ?string $next = null;
}

/** Request payload for Customer#load. */
class CustomerLoadMatch
{
    public string $id;
    public ?string $id_type = null;
    public ?string $language = null;
}

/** Request payload for Customer#list. */
class CustomerListMatch
{
    public string $email;
}

/** Request payload for Customer#create. */
class CustomerCreateData
{
    public ?int $limit = null;
    public ?string $start = null;
    public string $cio_id;
    public mixed $email;
    public mixed $filter;
    public mixed $id;
    public ?array $identifiers = null;
    public ?array $ids = null;
    public ?string $next = null;
}

/** DataIndex entity data model. */
class DataIndex
{
}

/** Request payload for DataIndex#create. */
class DataIndexCreateData
{
}

/** Delivery entity data model. */
class Delivery
{
}

/** DesignStudio entity data model. */
class DesignStudio
{
    public ?string $content = null;
    public ?int $created = null;
    public ?string $id = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $tag = null;
    public ?int $updated = null;
}

/** Request payload for DesignStudio#load. */
class DesignStudioLoadMatch
{
    public string $id;
}

/** Request payload for DesignStudio#list. */
class DesignStudioListMatch
{
    public ?int $created_after = null;
    public ?int $created_before = null;
    public ?bool $direct_descendants_only = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $parent_folder_id = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?string $tag = null;
    public ?int $updated_after = null;
    public ?int $updated_before = null;
}

/** Request payload for DesignStudio#create. */
class DesignStudioCreateData
{
    public ?string $content = null;
    public ?int $created = null;
    public ?string $id = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $tag = null;
    public ?int $updated = null;
}

/** Request payload for DesignStudio#update. */
class DesignStudioUpdateData
{
    public string $id;
    public ?string $content = null;
    public ?int $created = null;
    public ?string $name = null;
    public mixed $parent_folder_id = null;
    public ?string $tag = null;
    public ?int $updated = null;
}

/** Request payload for DesignStudio#remove. */
class DesignStudioRemoveMatch
{
    public string $id;
}

/** DesignStudioEmail entity data model. */
class DesignStudioEmail
{
    public ?string $amp = null;
    public ?array $available_languages = null;
    public ?string $browser = null;
    public ?string $category = null;
    public ?string $check = null;
    public ?string $client = null;
    public ?array $client_ids = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?bool $created_on_publish = null;
    public ?int $credits_original = null;
    public ?int $credits_remaining = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $details = null;
    public ?array $emails = null;
    public ?array $envelope = null;
    public mixed $expires_at = null;
    public ?bool $feedback = null;
    public ?array $folders = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $html = null;
    public ?string $id = null;
    public ?bool $is_linked = null;
    public ?bool $is_processed = null;
    public ?bool $is_template = null;
    public ?string $language = null;
    public ?string $language_group_id = null;
    public ?bool $lax_mode = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?array $node = null;
    public ?int $node_count = null;
    public ?string $node_id = null;
    public ?string $node_type = null;
    public ?string $os = null;
    public mixed $parent_folder_id = null;
    public ?array $previews = null;
    public ?bool $replayed = null;
    public ?int $run_id = null;
    public ?array $sample_data = null;
    public ?string $severity = null;
    public ?string $state = null;
    public ?string $summary = null;
    public ?int $template_id = null;
    public ?string $text = null;
    public ?string $tier = null;
    public ?string $title = null;
    public ?int $total_previews_bounced = null;
    public ?int $total_previews_cached = null;
    public ?int $total_previews_ready = null;
    public ?int $total_previews_requested = null;
    public ?int $total_previews_succeeded = null;
    public ?array $transformers = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
    public ?array $version = null;
    public ?string $version_id = null;
}

/** Request payload for DesignStudioEmail#load. */
class DesignStudioEmailLoadMatch
{
    public string $id;
}

/** Request payload for DesignStudioEmail#list. */
class DesignStudioEmailListMatch
{
    public ?int $created_after = null;
    public ?int $created_before = null;
    public ?bool $direct_descendants_only = null;
    public ?bool $has_translation = null;
    public ?bool $is_linked = null;
    public ?bool $is_template = null;
    public ?int $limit = null;
    public ?int $page = null;
    public ?string $parent_folder_id = null;
    public ?string $sort_by = null;
    public ?string $sort_order = null;
    public ?int $updated_after = null;
    public ?int $updated_before = null;
}

/** Request payload for DesignStudioEmail#create. */
class DesignStudioEmailCreateData
{
    public ?string $amp = null;
    public ?array $available_languages = null;
    public ?string $browser = null;
    public ?string $category = null;
    public ?string $check = null;
    public ?string $client = null;
    public ?array $client_ids = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?bool $created_on_publish = null;
    public ?int $credits_original = null;
    public ?int $credits_remaining = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $details = null;
    public ?array $emails = null;
    public ?array $envelope = null;
    public mixed $expires_at = null;
    public ?bool $feedback = null;
    public ?array $folders = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $html = null;
    public ?string $id = null;
    public ?bool $is_linked = null;
    public ?bool $is_processed = null;
    public ?bool $is_template = null;
    public ?string $language = null;
    public ?string $language_group_id = null;
    public ?bool $lax_mode = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?array $node = null;
    public ?int $node_count = null;
    public ?string $node_id = null;
    public ?string $node_type = null;
    public ?string $os = null;
    public mixed $parent_folder_id = null;
    public ?array $previews = null;
    public ?bool $replayed = null;
    public ?int $run_id = null;
    public ?array $sample_data = null;
    public ?string $severity = null;
    public ?string $state = null;
    public ?string $summary = null;
    public ?int $template_id = null;
    public ?string $text = null;
    public ?string $tier = null;
    public ?string $title = null;
    public ?int $total_previews_bounced = null;
    public ?int $total_previews_cached = null;
    public ?int $total_previews_ready = null;
    public ?int $total_previews_requested = null;
    public ?int $total_previews_succeeded = null;
    public ?array $transformers = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
    public ?array $version = null;
    public ?string $version_id = null;
}

/** Request payload for DesignStudioEmail#update. */
class DesignStudioEmailUpdateData
{
    public string $id;
    public ?string $amp = null;
    public ?array $available_languages = null;
    public ?string $browser = null;
    public ?string $category = null;
    public ?string $check = null;
    public ?string $client = null;
    public ?array $client_ids = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?bool $created_on_publish = null;
    public ?int $credits_original = null;
    public ?int $credits_remaining = null;
    public ?array $dependencies = null;
    public ?string $description = null;
    public ?string $details = null;
    public ?array $emails = null;
    public ?array $envelope = null;
    public mixed $expires_at = null;
    public ?bool $feedback = null;
    public ?array $folders = null;
    public ?bool $has_unpublished_changes = null;
    public ?string $html = null;
    public ?bool $is_linked = null;
    public ?bool $is_processed = null;
    public ?bool $is_template = null;
    public ?string $language = null;
    public ?string $language_group_id = null;
    public ?bool $lax_mode = null;
    public ?array $meta = null;
    public ?string $name = null;
    public ?array $node = null;
    public ?int $node_count = null;
    public ?string $node_id = null;
    public ?string $node_type = null;
    public ?string $os = null;
    public mixed $parent_folder_id = null;
    public ?array $previews = null;
    public ?bool $replayed = null;
    public ?int $run_id = null;
    public ?array $sample_data = null;
    public ?string $severity = null;
    public ?string $state = null;
    public ?string $summary = null;
    public ?int $template_id = null;
    public ?string $text = null;
    public ?string $tier = null;
    public ?string $title = null;
    public ?int $total_previews_bounced = null;
    public ?int $total_previews_cached = null;
    public ?int $total_previews_ready = null;
    public ?int $total_previews_requested = null;
    public ?int $total_previews_succeeded = null;
    public ?array $transformers = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
    public ?array $version = null;
    public ?string $version_id = null;
}

/** Request payload for DesignStudioEmail#remove. */
class DesignStudioEmailRemoveMatch
{
    public string $id;
}

/** Email entity data model. */
class Email
{
}

/** End entity data model. */
class End
{
}

/** EspSuppression entity data model. */
class EspSuppression
{
    public ?string $category = null;
    public ?string $id = null;
    public ?string $next = null;
    public ?array $suppressions = null;
}

/** Request payload for EspSuppression#load. */
class EspSuppressionLoadMatch
{
    public string $id;
    public ?string $domain = null;
    public ?int $limit = null;
    public ?int $offset = null;
}

/** Request payload for EspSuppression#create. */
class EspSuppressionCreateData
{
    public string $email_address;
    public string $suppression_type;
    public ?string $category = null;
    public ?string $id = null;
    public ?string $next = null;
    public ?array $suppressions = null;
}

/** Request payload for EspSuppression#remove. */
class EspSuppressionRemoveMatch
{
    public string $email_address;
    public string $suppression_type;
}

/** Export entity data model. */
class Export
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $downloads = null;
    public ?bool $failed = null;
    public ?int $id = null;
    public ?string $status = null;
    public ?int $total = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $user_email = null;
    public ?int $user_id = null;
}

/** Request payload for Export#load. */
class ExportLoadMatch
{
    public int $id;
}

/** Request payload for Export#list. */
class ExportListMatch
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $downloads = null;
    public ?bool $failed = null;
    public ?int $id = null;
    public ?string $status = null;
    public ?int $total = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $user_email = null;
    public ?int $user_id = null;
}

/** Request payload for Export#create. */
class ExportCreateData
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $downloads = null;
    public ?bool $failed = null;
    public ?int $id = null;
    public ?string $status = null;
    public ?int $total = null;
    public ?string $type = null;
    public ?int $updated_at = null;
    public ?string $user_email = null;
    public ?int $user_id = null;
}

/** Import entity data model. */
class Import
{
    public ?int $created_at = null;
    public ?string $data_to_process = null;
    public ?string $description = null;
    public ?string $error = null;
    public ?int $id = null;
    public ?string $identifier = null;
    public mixed $import;
    public ?string $name = null;
    public ?string $object_type_id = null;
    public ?string $people_to_process = null;
    public ?int $rows_imported = null;
    public ?int $rows_to_import = null;
    public ?string $state = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Import#load. */
class ImportLoadMatch
{
    public int $id;
}

/** Request payload for Import#create. */
class ImportCreateData
{
    public ?int $created_at = null;
    public ?string $data_to_process = null;
    public ?string $description = null;
    public ?string $error = null;
    public ?int $id = null;
    public ?string $identifier = null;
    public mixed $import;
    public ?string $name = null;
    public ?string $object_type_id = null;
    public ?string $people_to_process = null;
    public ?int $rows_imported = null;
    public ?int $rows_to_import = null;
    public ?string $state = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** InApp entity data model. */
class InApp
{
}

/** InboxMessage entity data model. */
class InboxMessage
{
}

/** Info entity data model. */
class Info
{
}

/** Request payload for Info#list. */
class InfoListMatch
{
}

/** IpAddress entity data model. */
class IpAddress
{
}

/** Language entity data model. */
class Language
{
}

/** Link entity data model. */
class Link
{
}

/** LiveNotification entity data model. */
class LiveNotification
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $operation = null;
    public ?string $source = null;
    public ?string $status = null;
}

/** Request payload for LiveNotification#load. */
class LiveNotificationLoadMatch
{
    public string $id;
}

/** Request payload for LiveNotification#create. */
class LiveNotificationCreateData
{
    public ?int $created_at = null;
    public ?string $id = null;
    public ?string $operation = null;
    public ?string $source = null;
    public ?string $status = null;
}

/** Message entity data model. */
class Message
{
    public ?int $action_id = null;
    public ?string $broadcast_id = null;
    public ?string $campaign_id = null;
    public ?int $content_id = null;
    public ?int $created = null;
    public mixed $customer_id = null;
    public array $customer_identifiers;
    public ?string $deduplicate_id = null;
    public mixed $failure_message = null;
    public ?bool $forgotten = null;
    public ?string $id = null;
    public ?int $message_template_id = null;
    public ?array $metrics = null;
    public ?string $newsletter_id = null;
    public ?int $parent_action_id = null;
    public ?string $recipient = null;
    public ?string $subject = null;
    public ?array $tracked_responses = null;
    public ?string $trigger_event_id = null;
    public ?string $type = null;
}

/** Request payload for Message#load. */
class MessageLoadMatch
{
    public string $id;
    public ?bool $get_tracked_response = null;
}

/** Request payload for Message#list. */
class MessageListMatch
{
    public ?int $action_id = null;
    public ?int $campaign_id = null;
    public ?bool $draft = null;
    public ?int $end_t = null;
    public ?bool $get_tracked_response = null;
    public ?int $limit = null;
    public ?string $metric = null;
    public ?int $newsletter_id = null;
    public ?string $start = null;
    public ?int $start_t = null;
    public ?string $type = null;
}

/** Newsletter entity data model. */
class Newsletter
{
    public ?array $content_ids = null;
    public ?int $created = null;
    public ?string $deduplicate_id = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $recipient_segment_ids = null;
    public ?int $sent_at = null;
    public ?int $subscription_topic_id = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for Newsletter#load. */
class NewsletterLoadMatch
{
    public int $id;
}

/** Request payload for Newsletter#list. */
class NewsletterListMatch
{
    public ?int $limit = null;
    public ?string $sort = null;
    public ?string $start = null;
}

/** Request payload for Newsletter#create. */
class NewsletterCreateData
{
    public ?array $content_ids = null;
    public ?int $created = null;
    public ?string $deduplicate_id = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?array $recipient_segment_ids = null;
    public ?int $sent_at = null;
    public ?int $subscription_topic_id = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for Newsletter#remove. */
class NewsletterRemoveMatch
{
    public int $id;
}

/** NewsletterMetric entity data model. */
class NewsletterMetric
{
    public ?string $id = null;
    public ?array $link = null;
    public ?array $metric = null;
    public ?array $series = null;
    public ?string $type = null;
}

/** Request payload for NewsletterMetric#load. */
class NewsletterMetricLoadMatch
{
    public int $id;
    public ?string $period = null;
    public ?int $step = null;
    public ?string $type = null;
}

/** Request payload for NewsletterMetric#list. */
class NewsletterMetricListMatch
{
    public ?int $content_id = null;
    public int $newsletter_id;
    public ?string $period = null;
    public ?int $step = null;
    public ?string $type = null;
    public ?bool $unique = null;
}

/** NewsletterVariant entity data model. */
class NewsletterVariant
{
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content_ids = null;
    public ?int $created = null;
    public ?string $deduplicate_id = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?int $id = null;
    public ?string $language = null;
    public ?string $layout = null;
    public ?string $name = null;
    public ?int $newsletter_id = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?string $recipient = null;
    public ?array $recipient_segment_ids = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?int $sent_at = null;
    public ?string $subject = null;
    public ?int $subscription_topic_id = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for NewsletterVariant#load. */
class NewsletterVariantLoadMatch
{
    public ?string $language = null;
    public int $newsletter_id;
    public ?string $test_group_id = null;
    public ?int $content_id = null;
}

/** Request payload for NewsletterVariant#list. */
class NewsletterVariantListMatch
{
    public int $id;
}

/** Request payload for NewsletterVariant#create. */
class NewsletterVariantCreateData
{
    public int $newsletter_id;
    public string $test_group_id;
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content_ids = null;
    public ?int $created = null;
    public ?string $deduplicate_id = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?int $id = null;
    public ?string $language = null;
    public ?string $layout = null;
    public ?string $name = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?string $recipient = null;
    public ?array $recipient_segment_ids = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?int $sent_at = null;
    public ?string $subject = null;
    public ?int $subscription_topic_id = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for NewsletterVariant#update. */
class NewsletterVariantUpdateData
{
    public ?string $language = null;
    public int $newsletter_id;
    public ?string $test_group_id = null;
    public ?int $content_id = null;
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content_ids = null;
    public ?int $created = null;
    public ?string $deduplicate_id = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?int $id = null;
    public ?string $layout = null;
    public ?string $name = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?string $recipient = null;
    public ?array $recipient_segment_ids = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?int $sent_at = null;
    public ?string $subject = null;
    public ?int $subscription_topic_id = null;
    public ?array $tags = null;
    public ?string $type = null;
    public ?int $updated = null;
}

/** Request payload for NewsletterVariant#remove. */
class NewsletterVariantRemoveMatch
{
    public string $language;
    public int $newsletter_id;
    public ?string $test_group_id = null;
}

/** Object entity data model. */
class ObjectType
{
    public ?array $attributes = null;
    public ?bool $enabled = null;
    public mixed $filter;
    public ?string $icon = null;
    public ?string $id = null;
    public ?array $identifiers = null;
    public ?array $ids = null;
    public ?string $name = null;
    public ?string $next = null;
    public ?bool $object_type_disabled = null;
    public ?string $object_type_id = null;
    public ?string $singular_name = null;
    public ?string $singular_slug = null;
    public ?string $slug = null;
    public ?array $timestamps = null;
}

/** Request payload for Object#load. */
class ObjectLoadMatch
{
    public int $id;
    public string $object_id;
    public ?string $id_type = null;
}

/** Request payload for Object#list. */
class ObjectListMatch
{
    public ?array $attributes = null;
    public ?bool $enabled = null;
    public mixed $filter = null;
    public ?string $icon = null;
    public ?string $id = null;
    public ?array $identifiers = null;
    public ?array $ids = null;
    public ?string $name = null;
    public ?string $next = null;
    public ?bool $object_type_disabled = null;
    public ?string $object_type_id = null;
    public ?string $singular_name = null;
    public ?string $singular_slug = null;
    public ?string $slug = null;
    public ?array $timestamps = null;
}

/** Request payload for Object#create. */
class ObjectCreateData
{
    public ?int $limit = null;
    public ?string $start = null;
    public ?array $attributes = null;
    public ?bool $enabled = null;
    public mixed $filter;
    public ?string $icon = null;
    public ?string $id = null;
    public ?array $identifiers = null;
    public ?array $ids = null;
    public ?string $name = null;
    public ?string $next = null;
    public ?bool $object_type_disabled = null;
    public ?string $object_type_id = null;
    public ?string $singular_name = null;
    public ?string $singular_slug = null;
    public ?string $slug = null;
    public ?array $timestamps = null;
}

/** ObjectType entity data model. */
class ObjectType
{
}

/** OptOut entity data model. */
class OptOut
{
    public ?string $channel = null;
    public ?string $cio_id = null;
    public ?string $customer_id = null;
    public ?string $from = null;
    public array $optouts;
}

/** Request payload for OptOut#list. */
class OptOutListMatch
{
    public ?string $from = null;
    public ?int $limit = null;
    public ?string $start = null;
}

/** Request payload for OptOut#update. */
class OptOutUpdateData
{
    public string $customer_id;
    public ?string $id_type = null;
    public ?string $channel = null;
    public ?string $cio_id = null;
    public ?string $from = null;
    public ?array $optouts = null;
}

/** Push entity data model. */
class Push
{
}

/** Relationship entity data model. */
class Relationship
{
}

/** ReportingWebhook entity data model. */
class ReportingWebhook
{
    public ?bool $disabled = null;
    public string $endpoint;
    public array $events;
    public ?bool $full_resolution = null;
    public ?int $id = null;
    public string $name;
    public ?string $type = null;
    public ?bool $with_content = null;
}

/** Request payload for ReportingWebhook#load. */
class ReportingWebhookLoadMatch
{
    public int $id;
}

/** Request payload for ReportingWebhook#list. */
class ReportingWebhookListMatch
{
    public ?bool $disabled = null;
    public ?string $endpoint = null;
    public ?array $events = null;
    public ?bool $full_resolution = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?bool $with_content = null;
}

/** Request payload for ReportingWebhook#create. */
class ReportingWebhookCreateData
{
    public ?bool $disabled = null;
    public string $endpoint;
    public array $events;
    public ?bool $full_resolution = null;
    public ?int $id = null;
    public string $name;
    public ?string $type = null;
    public ?bool $with_content = null;
}

/** Request payload for ReportingWebhook#update. */
class ReportingWebhookUpdateData
{
    public int $id;
    public ?bool $disabled = null;
    public ?string $endpoint = null;
    public ?array $events = null;
    public ?bool $full_resolution = null;
    public ?string $name = null;
    public ?string $type = null;
    public ?bool $with_content = null;
}

/** Request payload for ReportingWebhook#remove. */
class ReportingWebhookRemoveMatch
{
    public int $id;
}

/** SearchSuppression entity data model. */
class SearchSuppression
{
}

/** Segment entity data model. */
class Segment
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $name = null;
    public mixed $progress = null;
    public array $segment;
    public ?string $state = null;
    public mixed $tags = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Segment#load. */
class SegmentLoadMatch
{
    public int $id;
}

/** Request payload for Segment#list. */
class SegmentListMatch
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $name = null;
    public mixed $progress = null;
    public ?array $segment = null;
    public ?string $state = null;
    public mixed $tags = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Segment#create. */
class SegmentCreateData
{
    public ?int $created_at = null;
    public ?string $deduplicate_id = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $name = null;
    public mixed $progress = null;
    public array $segment;
    public ?string $state = null;
    public mixed $tags = null;
    public ?string $type = null;
    public ?int $updated_at = null;
}

/** Request payload for Segment#remove. */
class SegmentRemoveMatch
{
    public int $id;
}

/** SendMessage entity data model. */
class SendMessage
{
    public ?array $attachments = null;
    public ?bool $auto_create = null;
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $body_plain = null;
    public ?string $cc = null;
    public ?array $custom_data = null;
    public mixed $custom_device;
    public ?array $custom_payload = null;
    public ?string $delivery_id = null;
    public ?bool $disable_css_preprocessing = null;
    public ?bool $disable_message_retention = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?string $headers = null;
    public ?int $id = null;
    public mixed $identifiers = null;
    public ?string $image_url = null;
    public ?string $language = null;
    public ?string $link = null;
    public ?string $message = null;
    public ?array $message_data = null;
    public ?string $preheader = null;
    public ?bool $queue_draft = null;
    public ?int $queued_at = null;
    public ?string $reply_to = null;
    public ?int $send_at = null;
    public ?bool $send_to_unsubscribed = null;
    public ?string $sound = null;
    public ?string $subject = null;
    public ?string $title = null;
    public string $to;
    public ?bool $tracked = null;
    public ?string $transactional_message_id = null;
}

/** Request payload for SendMessage#create. */
class SendMessageCreateData
{
    public ?array $attachments = null;
    public ?bool $auto_create = null;
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $body_plain = null;
    public ?string $cc = null;
    public ?array $custom_data = null;
    public mixed $custom_device;
    public ?array $custom_payload = null;
    public ?string $delivery_id = null;
    public ?bool $disable_css_preprocessing = null;
    public ?bool $disable_message_retention = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?string $headers = null;
    public ?int $id = null;
    public mixed $identifiers = null;
    public ?string $image_url = null;
    public ?string $language = null;
    public ?string $link = null;
    public ?string $message = null;
    public ?array $message_data = null;
    public ?string $preheader = null;
    public ?bool $queue_draft = null;
    public ?int $queued_at = null;
    public ?string $reply_to = null;
    public ?int $send_at = null;
    public ?bool $send_to_unsubscribed = null;
    public ?string $sound = null;
    public ?string $subject = null;
    public ?string $title = null;
    public string $to;
    public ?bool $tracked = null;
    public ?string $transactional_message_id = null;
}

/** SenderIdentity entity data model. */
class SenderIdentity
{
    public ?string $address = null;
    public ?bool $auto_generated = null;
    public ?string $deduplicate_id = null;
    public ?string $email = null;
    public ?bool $hidden = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $template_type = null;
}

/** Request payload for SenderIdentity#load. */
class SenderIdentityLoadMatch
{
    public int $id;
}

/** Request payload for SenderIdentity#list. */
class SenderIdentityListMatch
{
    public ?bool $hidden = null;
    public ?int $limit = null;
    public ?string $sort = null;
    public ?string $start = null;
}

/** Sms entity data model. */
class Sms
{
}

/** Snippet entity data model. */
class Snippet
{
    public ?string $id = null;
    public string $name;
    public ?int $updated_at = null;
    public string $value;
}

/** Request payload for Snippet#list. */
class SnippetListMatch
{
    public ?string $id = null;
    public ?string $name = null;
    public ?int $updated_at = null;
    public ?string $value = null;
}

/** Request payload for Snippet#create. */
class SnippetCreateData
{
    public ?string $id = null;
    public string $name;
    public ?int $updated_at = null;
    public string $value;
}

/** Request payload for Snippet#update. */
class SnippetUpdateData
{
    public ?string $id = null;
    public ?string $name = null;
    public ?int $updated_at = null;
    public ?string $value = null;
}

/** Request payload for Snippet#remove. */
class SnippetRemoveMatch
{
    public string $id;
}

/** Start entity data model. */
class Start
{
}

/** SubscriptionCenter entity data model. */
class SubscriptionCenter
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?bool $subscribed_by_default = null;
    public ?string $type = null;
}

/** Request payload for SubscriptionCenter#load. */
class SubscriptionCenterLoadMatch
{
    public string $id;
}

/** Request payload for SubscriptionCenter#list. */
class SubscriptionCenterListMatch
{
    public ?string $description = null;
    public ?int $id = null;
    public ?string $identifier = null;
    public ?string $name = null;
    public ?bool $subscribed_by_default = null;
    public ?string $type = null;
}

/** SubscriptionChannel entity data model. */
class SubscriptionChannel
{
}

/** SubscriptionTopic entity data model. */
class SubscriptionTopic
{
}

/** Suppression entity data model. */
class Suppression
{
}

/** TestGroup entity data model. */
class TestGroup
{
}

/** Transactional entity data model. */
class Transactional
{
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?bool $hide_message_body = null;
    public ?int $id = null;
    public ?string $language = null;
    public ?bool $link_tracking = null;
    public ?string $name = null;
    public ?bool $open_tracking = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?bool $queue_drafts = null;
    public ?string $recipient = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?bool $send_to_unsubscribed = null;
    public ?string $subject = null;
    public ?string $type = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
}

/** Request payload for Transactional#load. */
class TransactionalLoadMatch
{
    public ?int $content_id = null;
    public int $id;
    public ?string $language = null;
}

/** Request payload for Transactional#list. */
class TransactionalListMatch
{
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?bool $hide_message_body = null;
    public ?int $id = null;
    public ?string $language = null;
    public ?bool $link_tracking = null;
    public ?string $name = null;
    public ?bool $open_tracking = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?bool $queue_drafts = null;
    public ?string $recipient = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?bool $send_to_unsubscribed = null;
    public ?string $subject = null;
    public ?string $type = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
}

/** Request payload for Transactional#update. */
class TransactionalUpdateData
{
    public ?int $content_id = null;
    public int $id;
    public ?string $language = null;
    public ?string $bcc = null;
    public ?string $body = null;
    public ?string $body_amp = null;
    public ?string $cc = null;
    public ?array $content = null;
    public ?int $created = null;
    public ?int $created_at = null;
    public ?string $description = null;
    public ?bool $fake_bcc = null;
    public ?string $from = null;
    public ?int $from_id = null;
    public ?string $headers = null;
    public ?bool $hide_message_body = null;
    public ?bool $link_tracking = null;
    public ?string $name = null;
    public ?bool $open_tracking = null;
    public ?string $preheader_text = null;
    public ?string $preprocessor = null;
    public ?bool $queue_drafts = null;
    public ?string $recipient = null;
    public ?string $reply_to = null;
    public mixed $reply_to_id = null;
    public ?bool $send_to_unsubscribed = null;
    public ?string $subject = null;
    public ?string $type = null;
    public ?int $updated = null;
    public ?int $updated_at = null;
}

/** Trigger entity data model. */
class Trigger
{
}

/** Update entity data model. */
class Update
{
}

/** Whatsapp entity data model. */
class Whatsapp
{
}

/** Workspace entity data model. */
class Workspace
{
    public ?int $billable_messages_sent = null;
    public ?int $id = null;
    public ?int $messages_sent = null;
    public ?string $name = null;
    public ?int $object_types = null;
    public ?int $objects = null;
    public ?int $people = null;
}

/** Request payload for Workspace#list. */
class WorkspaceListMatch
{
    public ?int $billable_messages_sent = null;
    public ?int $id = null;
    public ?int $messages_sent = null;
    public ?string $name = null;
    public ?int $object_types = null;
    public ?int $objects = null;
    public ?int $people = null;
}

