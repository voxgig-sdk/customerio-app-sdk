# Typed models for the CustomerioApp SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Action(TypedDict):
    pass


class ActivityRequired(TypedDict):
    customer_identifiers: dict


class Activity(ActivityRequired, total=False):
    customer_id: str | None
    data: Any
    delivery_id: str
    delivery_type: str
    id: str
    name: str
    timestamp: int
    type: str
    url: str


class ActivityListMatch(TypedDict, total=False):
    customer_id: str
    deleted: bool
    id_type: str
    limit: int
    name: str
    start: str
    type: str


class Asset(TypedDict, total=False):
    created: int
    id: int
    name: str
    parent_folder_id: int | None
    path: str
    size: int
    updated: int


class AssetLoadMatch(TypedDict):
    id: int


class AssetListMatch(TypedDict, total=False):
    direct_descendants_only: bool
    limit: int
    page: int
    parent_folder_id: int


class AssetCreateData(TypedDict, total=False):
    created: int
    id: int
    name: str
    parent_folder_id: int | None
    path: str
    size: int
    updated: int


class AssetUpdateDataRequired(TypedDict):
    id: int


class AssetUpdateData(AssetUpdateDataRequired, total=False):
    created: int
    name: str
    parent_folder_id: int | None
    path: str
    size: int
    updated: int


class AssetRemoveMatch(TypedDict):
    id: int


class Attribute(TypedDict):
    pass


class AutomationRequired(TypedDict):
    customer_identifiers: dict


class Automation(AutomationRequired, total=False):
    action_id: int
    actions: list
    activated: list
    broadcast_id: str
    campaign_id: str
    campaigns: list
    content_id: int
    converted: list
    created: int
    customer_id: str | None
    deduplicate_id: str
    end: str
    exited_early: list
    failure_message: str | None
    finished: list
    forgotten: bool
    id: str
    language_variants: dict
    link: dict
    message_template_id: int
    messaged: list
    metric: dict
    metrics: dict
    never_activated: list
    newsletter_id: str
    next: str
    parent_action_id: int
    recipient: str
    res: str
    series: dict
    start: str
    started: list
    subject: str
    tracked_responses: dict
    trigger_event_id: str
    type: str


class AutomationLoadMatchRequired(TypedDict):
    campaign_id: int


class AutomationLoadMatch(AutomationLoadMatchRequired, total=False):
    action_id: int
    end: int
    period: str
    res: str
    start: int
    step: int
    type: str
    tz: str
    version: str
    resolution: str
    language: str


class AutomationListMatch(TypedDict, total=False):
    action_id: int
    actions: list
    activated: list
    broadcast_id: str
    campaign_id: str
    campaigns: list
    content_id: int
    converted: list
    created: int
    customer_id: str | None
    customer_identifiers: dict
    deduplicate_id: str
    end: str
    exited_early: list
    failure_message: str | None
    finished: list
    forgotten: bool
    id: str
    language_variants: dict
    link: dict
    message_template_id: int
    messaged: list
    metric: dict
    metrics: dict
    never_activated: list
    newsletter_id: str
    next: str
    parent_action_id: int
    recipient: str
    res: str
    series: dict
    start: str
    started: list
    subject: str
    tracked_responses: dict
    trigger_event_id: str
    type: str


class AutomationUpdateDataRequired(TypedDict):
    action_id: int
    campaign_id: int


class AutomationUpdateData(AutomationUpdateDataRequired, total=False):
    language: str
    actions: list
    activated: list
    broadcast_id: str
    campaigns: list
    content_id: int
    converted: list
    created: int
    customer_id: str | None
    customer_identifiers: dict
    deduplicate_id: str
    end: str
    exited_early: list
    failure_message: str | None
    finished: list
    forgotten: bool
    id: str
    language_variants: dict
    link: dict
    message_template_id: int
    messaged: list
    metric: dict
    metrics: dict
    never_activated: list
    newsletter_id: str
    next: str
    parent_action_id: int
    recipient: str
    res: str
    series: dict
    start: str
    started: list
    subject: str
    tracked_responses: dict
    trigger_event_id: str
    type: str


class Broadcast(TypedDict, total=False):
    actions: list
    active: bool
    broadcast_id: int
    created: int
    created_at: int
    deduplicate_id: str
    errors: list
    first_started: int
    id: int
    language_variants: dict
    link: dict
    metric: dict
    msg_template_ids: list
    name: str
    next: int
    processed_at: int
    state: str
    tags: list
    type: str
    updated: int


class BroadcastLoadMatch(TypedDict):
    id: int


class BroadcastListMatch(TypedDict, total=False):
    actions: list
    active: bool
    broadcast_id: int
    created: int
    created_at: int
    deduplicate_id: str
    errors: list
    first_started: int
    id: int
    language_variants: dict
    link: dict
    metric: dict
    msg_template_ids: list
    name: str
    next: int
    processed_at: int
    state: str
    tags: list
    type: str
    updated: int


class BroadcastUpdateDataRequired(TypedDict):
    action_id: int
    id: int


class BroadcastUpdateData(BroadcastUpdateDataRequired, total=False):
    language: str
    actions: list
    active: bool
    broadcast_id: int
    created: int
    created_at: int
    deduplicate_id: str
    errors: list
    first_started: int
    language_variants: dict
    link: dict
    metric: dict
    msg_template_ids: list
    name: str
    next: int
    processed_at: int
    state: str
    tags: list
    type: str
    updated: int


class Campaign(TypedDict):
    pass


class Collection(TypedDict, total=False):
    bytes: int
    created_at: int
    id: int
    name: str
    rows: int
    schema: list
    updated_at: int


class CollectionLoadMatch(TypedDict):
    id: int


class CollectionListMatch(TypedDict, total=False):
    bytes: int
    created_at: int
    id: int
    name: str
    rows: int
    schema: list
    updated_at: int


class CollectionCreateData(TypedDict, total=False):
    bytes: int
    created_at: int
    id: int
    name: str
    rows: int
    schema: list
    updated_at: int


class CollectionUpdateDataRequired(TypedDict):
    id: int


class CollectionUpdateData(CollectionUpdateDataRequired, total=False):
    bytes: int
    created_at: int
    name: str
    rows: int
    schema: list
    updated_at: int


class CollectionRemoveMatch(TypedDict):
    id: int


class Content(TypedDict):
    pass


class CustomerRequired(TypedDict):
    cio_id: str
    email: str | None
    filter: Any
    id: str | None


class Customer(CustomerRequired, total=False):
    identifiers: list
    ids: list
    next: str


class CustomerLoadMatchRequired(TypedDict):
    id: str


class CustomerLoadMatch(CustomerLoadMatchRequired, total=False):
    id_type: str
    language: str


class CustomerListMatch(TypedDict):
    email: str


class CustomerCreateDataRequired(TypedDict):
    cio_id: str
    email: str | None
    filter: Any
    id: str | None


class CustomerCreateData(CustomerCreateDataRequired, total=False):
    limit: int
    start: str
    identifiers: list
    ids: list
    next: str


class DataIndex(TypedDict):
    pass


class DataIndexCreateData(TypedDict):
    pass


class Delivery(TypedDict):
    pass


class DesignStudio(TypedDict, total=False):
    content: str
    created: int
    id: str
    name: str
    parent_folder_id: str | None
    tag: str
    updated: int


class DesignStudioLoadMatch(TypedDict):
    id: str


class DesignStudioListMatch(TypedDict, total=False):
    created_after: int
    created_before: int
    direct_descendants_only: bool
    limit: int
    page: int
    parent_folder_id: str
    sort_by: str
    sort_order: str
    tag: str
    updated_after: int
    updated_before: int


class DesignStudioCreateData(TypedDict, total=False):
    content: str
    created: int
    id: str
    name: str
    parent_folder_id: str | None
    tag: str
    updated: int


class DesignStudioUpdateDataRequired(TypedDict):
    id: str


class DesignStudioUpdateData(DesignStudioUpdateDataRequired, total=False):
    content: str
    created: int
    name: str
    parent_folder_id: str | None
    tag: str
    updated: int


class DesignStudioRemoveMatch(TypedDict):
    id: str


class DesignStudioEmail(TypedDict, total=False):
    amp: str
    available_languages: list
    browser: str
    category: str
    check: str
    client: str
    client_ids: list
    content: dict
    created: int
    created_at: int
    created_on_publish: bool
    credits_original: int
    credits_remaining: int
    dependencies: list
    description: str
    details: str
    emails: list
    envelope: dict
    expires_at: int | None
    feedback: bool
    folders: list
    has_unpublished_changes: bool
    html: str
    id: str
    is_linked: bool
    is_processed: bool
    is_template: bool
    language: str
    language_group_id: str
    lax_mode: bool
    meta: dict
    name: str
    node: dict
    node_count: int
    node_id: str
    node_type: str
    os: str
    parent_folder_id: str | None
    previews: list
    replayed: bool
    run_id: int
    sample_data: dict
    severity: str
    state: str
    summary: str
    template_id: int
    text: str
    tier: str
    title: str
    total_previews_bounced: int
    total_previews_cached: int
    total_previews_ready: int
    total_previews_requested: int
    total_previews_succeeded: int
    transformers: dict
    updated: int
    updated_at: int
    version: dict
    version_id: str


class DesignStudioEmailLoadMatch(TypedDict):
    id: str


class DesignStudioEmailListMatch(TypedDict, total=False):
    created_after: int
    created_before: int
    direct_descendants_only: bool
    has_translation: bool
    is_linked: bool
    is_template: bool
    limit: int
    page: int
    parent_folder_id: str
    sort_by: str
    sort_order: str
    updated_after: int
    updated_before: int


class DesignStudioEmailCreateData(TypedDict, total=False):
    amp: str
    available_languages: list
    browser: str
    category: str
    check: str
    client: str
    client_ids: list
    content: dict
    created: int
    created_at: int
    created_on_publish: bool
    credits_original: int
    credits_remaining: int
    dependencies: list
    description: str
    details: str
    emails: list
    envelope: dict
    expires_at: int | None
    feedback: bool
    folders: list
    has_unpublished_changes: bool
    html: str
    id: str
    is_linked: bool
    is_processed: bool
    is_template: bool
    language: str
    language_group_id: str
    lax_mode: bool
    meta: dict
    name: str
    node: dict
    node_count: int
    node_id: str
    node_type: str
    os: str
    parent_folder_id: str | None
    previews: list
    replayed: bool
    run_id: int
    sample_data: dict
    severity: str
    state: str
    summary: str
    template_id: int
    text: str
    tier: str
    title: str
    total_previews_bounced: int
    total_previews_cached: int
    total_previews_ready: int
    total_previews_requested: int
    total_previews_succeeded: int
    transformers: dict
    updated: int
    updated_at: int
    version: dict
    version_id: str


class DesignStudioEmailUpdateDataRequired(TypedDict):
    id: str


class DesignStudioEmailUpdateData(DesignStudioEmailUpdateDataRequired, total=False):
    amp: str
    available_languages: list
    browser: str
    category: str
    check: str
    client: str
    client_ids: list
    content: dict
    created: int
    created_at: int
    created_on_publish: bool
    credits_original: int
    credits_remaining: int
    dependencies: list
    description: str
    details: str
    emails: list
    envelope: dict
    expires_at: int | None
    feedback: bool
    folders: list
    has_unpublished_changes: bool
    html: str
    is_linked: bool
    is_processed: bool
    is_template: bool
    language: str
    language_group_id: str
    lax_mode: bool
    meta: dict
    name: str
    node: dict
    node_count: int
    node_id: str
    node_type: str
    os: str
    parent_folder_id: str | None
    previews: list
    replayed: bool
    run_id: int
    sample_data: dict
    severity: str
    state: str
    summary: str
    template_id: int
    text: str
    tier: str
    title: str
    total_previews_bounced: int
    total_previews_cached: int
    total_previews_ready: int
    total_previews_requested: int
    total_previews_succeeded: int
    transformers: dict
    updated: int
    updated_at: int
    version: dict
    version_id: str


class DesignStudioEmailRemoveMatch(TypedDict):
    id: str


class Email(TypedDict):
    pass


class End(TypedDict):
    pass


class EspSuppression(TypedDict, total=False):
    category: str
    id: str
    next: str
    suppressions: list


class EspSuppressionLoadMatchRequired(TypedDict):
    id: str


class EspSuppressionLoadMatch(EspSuppressionLoadMatchRequired, total=False):
    domain: str
    limit: int
    offset: int


class EspSuppressionCreateDataRequired(TypedDict):
    email_address: str
    suppression_type: str


class EspSuppressionCreateData(EspSuppressionCreateDataRequired, total=False):
    category: str
    id: str
    next: str
    suppressions: list


class EspSuppressionRemoveMatch(TypedDict):
    email_address: str
    suppression_type: str


class Export(TypedDict, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    downloads: int
    failed: bool
    id: int
    status: str
    total: int
    type: str
    updated_at: int
    user_email: str
    user_id: int


class ExportLoadMatch(TypedDict):
    id: int


class ExportListMatch(TypedDict, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    downloads: int
    failed: bool
    id: int
    status: str
    total: int
    type: str
    updated_at: int
    user_email: str
    user_id: int


class ExportCreateData(TypedDict, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    downloads: int
    failed: bool
    id: int
    status: str
    total: int
    type: str
    updated_at: int
    user_email: str
    user_id: int


class Import(TypedDict, total=False):
    created_at: int
    data_to_process: str
    description: str
    error: str
    id: int
    identifier: str
    name: str
    object_type_id: str
    people_to_process: str
    rows_imported: int
    rows_to_import: int
    state: str
    type: str
    updated_at: int


class ImportLoadMatch(TypedDict):
    id: int


class ImportCreateData(TypedDict, total=False):
    created_at: int
    data_to_process: str
    description: str
    error: str
    id: int
    identifier: str
    name: str
    object_type_id: str
    people_to_process: str
    rows_imported: int
    rows_to_import: int
    state: str
    type: str
    updated_at: int


class InApp(TypedDict):
    pass


class InboxMessage(TypedDict):
    pass


class Info(TypedDict):
    pass


class InfoListMatch(TypedDict):
    pass


class IpAddress(TypedDict):
    pass


class Language(TypedDict):
    pass


class Link(TypedDict):
    pass


class LiveNotification(TypedDict, total=False):
    created_at: int
    id: str
    operation: str
    source: str
    status: str


class LiveNotificationLoadMatch(TypedDict):
    id: str


class LiveNotificationCreateData(TypedDict, total=False):
    created_at: int
    id: str
    operation: str
    source: str
    status: str


class MessageRequired(TypedDict):
    customer_identifiers: dict


class Message(MessageRequired, total=False):
    action_id: int
    broadcast_id: str
    campaign_id: str
    content_id: int
    created: int
    customer_id: str | None
    deduplicate_id: str
    failure_message: str | None
    forgotten: bool
    id: str
    message_template_id: int
    metrics: dict
    newsletter_id: str
    parent_action_id: int
    recipient: str
    subject: str
    tracked_responses: dict
    trigger_event_id: str
    type: str


class MessageLoadMatchRequired(TypedDict):
    id: str


class MessageLoadMatch(MessageLoadMatchRequired, total=False):
    get_tracked_response: bool


class MessageListMatch(TypedDict, total=False):
    action_id: int
    campaign_id: int
    draft: bool
    end_t: int
    get_tracked_response: bool
    limit: int
    metric: str
    newsletter_id: int
    start: str
    start_t: int
    type: str


class Newsletter(TypedDict, total=False):
    content_ids: list
    created: int
    deduplicate_id: str
    id: int
    name: str
    recipient_segment_ids: list
    sent_at: int
    subscription_topic_id: int
    tags: list
    type: str
    updated: int


class NewsletterLoadMatch(TypedDict):
    id: int


class NewsletterListMatch(TypedDict, total=False):
    limit: int
    sort: str
    start: str


class NewsletterCreateData(TypedDict, total=False):
    content_ids: list
    created: int
    deduplicate_id: str
    id: int
    name: str
    recipient_segment_ids: list
    sent_at: int
    subscription_topic_id: int
    tags: list
    type: str
    updated: int


class NewsletterRemoveMatch(TypedDict):
    id: int


class NewsletterMetric(TypedDict, total=False):
    id: str
    link: dict
    metric: dict
    series: dict
    type: str


class NewsletterMetricLoadMatchRequired(TypedDict):
    id: int


class NewsletterMetricLoadMatch(NewsletterMetricLoadMatchRequired, total=False):
    period: str
    step: int
    type: str


class NewsletterMetricListMatchRequired(TypedDict):
    newsletter_id: int


class NewsletterMetricListMatch(NewsletterMetricListMatchRequired, total=False):
    content_id: int
    period: str
    step: int
    type: str
    unique: bool


class NewsletterVariant(TypedDict, total=False):
    bcc: str
    body: str
    body_amp: str
    cc: str
    content_ids: list
    created: int
    deduplicate_id: str
    fake_bcc: bool
    from_id: int
    headers: str
    id: int
    language: str
    layout: str
    name: str
    newsletter_id: int
    preheader_text: str
    preprocessor: str
    recipient: str
    recipient_segment_ids: list
    reply_to: str
    reply_to_id: int | None
    sent_at: int
    subject: str
    subscription_topic_id: int
    tags: list
    type: str
    updated: int


class NewsletterVariantLoadMatchRequired(TypedDict):
    newsletter_id: int


class NewsletterVariantLoadMatch(NewsletterVariantLoadMatchRequired, total=False):
    language: str
    test_group_id: str
    content_id: int


class NewsletterVariantListMatch(TypedDict):
    id: int


class NewsletterVariantCreateDataRequired(TypedDict):
    newsletter_id: int
    test_group_id: str


class NewsletterVariantCreateData(NewsletterVariantCreateDataRequired, total=False):
    bcc: str
    body: str
    body_amp: str
    cc: str
    content_ids: list
    created: int
    deduplicate_id: str
    fake_bcc: bool
    from_id: int
    headers: str
    id: int
    language: str
    layout: str
    name: str
    preheader_text: str
    preprocessor: str
    recipient: str
    recipient_segment_ids: list
    reply_to: str
    reply_to_id: int | None
    sent_at: int
    subject: str
    subscription_topic_id: int
    tags: list
    type: str
    updated: int


class NewsletterVariantUpdateDataRequired(TypedDict):
    newsletter_id: int


class NewsletterVariantUpdateData(NewsletterVariantUpdateDataRequired, total=False):
    language: str
    test_group_id: str
    content_id: int
    bcc: str
    body: str
    body_amp: str
    cc: str
    content_ids: list
    created: int
    deduplicate_id: str
    fake_bcc: bool
    from_id: int
    headers: str
    id: int
    layout: str
    name: str
    preheader_text: str
    preprocessor: str
    recipient: str
    recipient_segment_ids: list
    reply_to: str
    reply_to_id: int | None
    sent_at: int
    subject: str
    subscription_topic_id: int
    tags: list
    type: str
    updated: int


class NewsletterVariantRemoveMatchRequired(TypedDict):
    language: str
    newsletter_id: int


class NewsletterVariantRemoveMatch(NewsletterVariantRemoveMatchRequired, total=False):
    test_group_id: str


class ObjectRequired(TypedDict):
    filter: Any


class Object(ObjectRequired, total=False):
    attributes: dict
    enabled: bool
    icon: str
    id: str
    identifiers: dict
    ids: list
    name: str
    next: str
    object_type_disabled: bool
    object_type_id: str
    singular_name: str
    singular_slug: str
    slug: str
    timestamps: dict


class ObjectLoadMatchRequired(TypedDict):
    id: int
    object_id: str


class ObjectLoadMatch(ObjectLoadMatchRequired, total=False):
    id_type: str


class ObjectListMatch(TypedDict, total=False):
    attributes: dict
    enabled: bool
    filter: Any
    icon: str
    id: str
    identifiers: dict
    ids: list
    name: str
    next: str
    object_type_disabled: bool
    object_type_id: str
    singular_name: str
    singular_slug: str
    slug: str
    timestamps: dict


class ObjectCreateDataRequired(TypedDict):
    filter: Any


class ObjectCreateData(ObjectCreateDataRequired, total=False):
    limit: int
    start: str
    attributes: dict
    enabled: bool
    icon: str
    id: str
    identifiers: dict
    ids: list
    name: str
    next: str
    object_type_disabled: bool
    object_type_id: str
    singular_name: str
    singular_slug: str
    slug: str
    timestamps: dict


class ObjectType(TypedDict):
    pass


class OptOutRequired(TypedDict):
    optouts: list


class OptOut(OptOutRequired, total=False):
    channel: str
    cio_id: str
    customer_id: str


class OptOutListMatch(TypedDict, total=False):
    limit: int
    start: str


class OptOutUpdateDataRequired(TypedDict):
    customer_id: str


class OptOutUpdateData(OptOutUpdateDataRequired, total=False):
    id_type: str
    channel: str
    cio_id: str
    optouts: list


class Push(TypedDict):
    pass


class Relationship(TypedDict):
    pass


class ReportingWebhookRequired(TypedDict):
    endpoint: str
    events: list
    name: str


class ReportingWebhook(ReportingWebhookRequired, total=False):
    disabled: bool
    full_resolution: bool
    id: int
    type: str
    with_content: bool


class ReportingWebhookLoadMatch(TypedDict):
    id: int


class ReportingWebhookListMatch(TypedDict, total=False):
    disabled: bool
    endpoint: str
    events: list
    full_resolution: bool
    id: int
    name: str
    type: str
    with_content: bool


class ReportingWebhookCreateDataRequired(TypedDict):
    endpoint: str
    events: list
    name: str


class ReportingWebhookCreateData(ReportingWebhookCreateDataRequired, total=False):
    disabled: bool
    full_resolution: bool
    id: int
    type: str
    with_content: bool


class ReportingWebhookUpdateDataRequired(TypedDict):
    id: int


class ReportingWebhookUpdateData(ReportingWebhookUpdateDataRequired, total=False):
    disabled: bool
    endpoint: str
    events: list
    full_resolution: bool
    name: str
    type: str
    with_content: bool


class ReportingWebhookRemoveMatch(TypedDict):
    id: int


class SearchSuppression(TypedDict):
    pass


class SegmentRequired(TypedDict):
    segment: dict


class Segment(SegmentRequired, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    id: int
    name: str
    progress: int | None
    state: str
    tags: list | None
    type: str
    updated_at: int


class SegmentLoadMatch(TypedDict):
    id: int


class SegmentListMatch(TypedDict, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    id: int
    name: str
    progress: int | None
    segment: dict
    state: str
    tags: list | None
    type: str
    updated_at: int


class SegmentCreateDataRequired(TypedDict):
    segment: dict


class SegmentCreateData(SegmentCreateDataRequired, total=False):
    created_at: int
    deduplicate_id: str
    description: str
    id: int
    name: str
    progress: int | None
    state: str
    tags: list | None
    type: str
    updated_at: int


class SegmentRemoveMatch(TypedDict):
    id: int


class SendMessageRequired(TypedDict):
    custom_device: Any
    to: str


class SendMessage(SendMessageRequired, total=False):
    attachments: dict
    auto_create: bool
    bcc: str
    body: str
    body_amp: str
    body_plain: str
    cc: str
    custom_data: dict
    custom_payload: dict
    delivery_id: str
    disable_css_preprocessing: bool
    disable_message_retention: bool
    fake_bcc: bool
    headers: str
    id: int
    identifiers: Any
    image_url: str
    language: str
    link: str
    message: str
    message_data: dict
    preheader: str
    queue_draft: bool
    queued_at: int
    reply_to: str
    send_at: int
    send_to_unsubscribed: bool
    sound: str
    subject: str
    title: str
    tracked: bool
    transactional_message_id: str


class SendMessageCreateDataRequired(TypedDict):
    custom_device: Any
    to: str


class SendMessageCreateData(SendMessageCreateDataRequired, total=False):
    attachments: dict
    auto_create: bool
    bcc: str
    body: str
    body_amp: str
    body_plain: str
    cc: str
    custom_data: dict
    custom_payload: dict
    delivery_id: str
    disable_css_preprocessing: bool
    disable_message_retention: bool
    fake_bcc: bool
    headers: str
    id: int
    identifiers: Any
    image_url: str
    language: str
    link: str
    message: str
    message_data: dict
    preheader: str
    queue_draft: bool
    queued_at: int
    reply_to: str
    send_at: int
    send_to_unsubscribed: bool
    sound: str
    subject: str
    title: str
    tracked: bool
    transactional_message_id: str


class SenderIdentity(TypedDict, total=False):
    address: str
    auto_generated: bool
    deduplicate_id: str
    email: str
    hidden: bool
    id: int
    name: str
    phone: str
    template_type: str


class SenderIdentityLoadMatch(TypedDict):
    id: int


class SenderIdentityListMatch(TypedDict, total=False):
    hidden: bool
    limit: int
    sort: str
    start: str


class Sms(TypedDict):
    pass


class SnippetRequired(TypedDict):
    name: str
    value: str


class Snippet(SnippetRequired, total=False):
    id: str
    updated_at: int


class SnippetListMatch(TypedDict, total=False):
    id: str
    name: str
    updated_at: int
    value: str


class SnippetCreateDataRequired(TypedDict):
    name: str
    value: str


class SnippetCreateData(SnippetCreateDataRequired, total=False):
    id: str
    updated_at: int


class SnippetUpdateData(TypedDict, total=False):
    id: str
    name: str
    updated_at: int
    value: str


class SnippetRemoveMatch(TypedDict):
    id: str


class Start(TypedDict):
    pass


class SubscriptionCenter(TypedDict, total=False):
    description: str
    id: int
    identifier: str
    name: str
    subscribed_by_default: bool
    type: str


class SubscriptionCenterLoadMatch(TypedDict):
    id: str


class SubscriptionCenterListMatch(TypedDict, total=False):
    description: str
    id: int
    identifier: str
    name: str
    subscribed_by_default: bool
    type: str


class SubscriptionChannel(TypedDict):
    pass


class SubscriptionTopic(TypedDict):
    pass


class Suppression(TypedDict):
    pass


class TestGroup(TypedDict):
    pass


class Transactional(TypedDict, total=False):
    bcc: str
    body: str
    body_amp: str
    cc: str
    content: list
    created: int
    created_at: int
    description: str
    fake_bcc: bool
    from_id: int
    headers: str
    hide_message_body: bool
    id: int
    language: str
    link_tracking: bool
    name: str
    open_tracking: bool
    preheader_text: str
    preprocessor: str
    queue_drafts: bool
    recipient: str
    reply_to: str
    reply_to_id: int | None
    send_to_unsubscribed: bool
    subject: str
    type: str
    updated: int
    updated_at: int


class TransactionalLoadMatchRequired(TypedDict):
    id: int


class TransactionalLoadMatch(TransactionalLoadMatchRequired, total=False):
    content_id: int
    language: str


class TransactionalListMatch(TypedDict, total=False):
    bcc: str
    body: str
    body_amp: str
    cc: str
    content: list
    created: int
    created_at: int
    description: str
    fake_bcc: bool
    from_id: int
    headers: str
    hide_message_body: bool
    id: int
    language: str
    link_tracking: bool
    name: str
    open_tracking: bool
    preheader_text: str
    preprocessor: str
    queue_drafts: bool
    recipient: str
    reply_to: str
    reply_to_id: int | None
    send_to_unsubscribed: bool
    subject: str
    type: str
    updated: int
    updated_at: int


class TransactionalUpdateDataRequired(TypedDict):
    id: int


class TransactionalUpdateData(TransactionalUpdateDataRequired, total=False):
    content_id: int
    language: str
    bcc: str
    body: str
    body_amp: str
    cc: str
    content: list
    created: int
    created_at: int
    description: str
    fake_bcc: bool
    from_id: int
    headers: str
    hide_message_body: bool
    link_tracking: bool
    name: str
    open_tracking: bool
    preheader_text: str
    preprocessor: str
    queue_drafts: bool
    recipient: str
    reply_to: str
    reply_to_id: int | None
    send_to_unsubscribed: bool
    subject: str
    type: str
    updated: int
    updated_at: int


class Trigger(TypedDict):
    pass


class Update(TypedDict):
    pass


class Whatsapp(TypedDict):
    pass


class Workspace(TypedDict, total=False):
    billable_messages_sent: int
    id: int
    messages_sent: int
    name: str
    object_types: int
    objects: int
    people: int


class WorkspaceListMatch(TypedDict, total=False):
    billable_messages_sent: int
    id: int
    messages_sent: int
    name: str
    object_types: int
    objects: int
    people: int
