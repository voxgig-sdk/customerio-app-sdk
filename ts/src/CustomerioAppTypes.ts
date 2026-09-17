// Typed models for the CustomerioApp SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Action {
}

export interface Activity {
  customer_id?: string | null
  customer_identifiers: Record<string, any>
  data?: any
  delivery_id?: string
  delivery_type?: string
  id?: string
  name?: string
  timestamp?: number
  type?: string
  url?: string
}

export interface ActivityListMatch {
  customer_id?: string
  deleted?: boolean
  id_type?: string
  limit?: number
  name?: string
  start?: string
  type?: string
}

export interface Asset {
  created?: number
  id?: number
  name?: string
  parent_folder_id?: number | null
  path?: string
  size?: number
  updated?: number
}

export interface AssetLoadMatch {
  id: number
}

export interface AssetListMatch {
  direct_descendants_only?: boolean
  limit?: number
  page?: number
  parent_folder_id?: number

  // Selects a custom action instead of the plain list:
  //   'folder'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AssetCreateData {
  created?: number
  id?: number
  name?: string
  parent_folder_id?: number | null
  path?: string
  size?: number
  updated?: number

  // Selects a custom action instead of the plain create:
  //   'file' | 'folder'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AssetUpdateData {
  id: number
  created?: number
  name?: string
  parent_folder_id?: number | null
  path?: string
  size?: number
  updated?: number
}

export interface AssetRemoveMatch {
  id: number
}

export interface Attribute {
}

export interface Automation {
  action_id?: number
  actions?: any[]
  activated?: any[]
  broadcast_id?: string
  campaign_id?: string
  campaigns?: any[]
  content_id?: number
  converted?: any[]
  created?: number
  customer_id?: string | null
  customer_identifiers: Record<string, any>
  deduplicate_id?: string
  end?: string
  exited_early?: any[]
  failure_message?: string | null
  finished?: any[]
  forgotten?: boolean
  id?: string
  language_variants?: Record<string, any>
  link?: Record<string, any>
  message_template_id?: number
  messaged?: any[]
  metric?: Record<string, any>
  metrics?: Record<string, any>
  never_activated?: any[]
  newsletter_id?: string
  next?: string
  parent_action_id?: number
  recipient?: string
  res?: string
  series?: Record<string, any>
  start?: string
  started?: any[]
  subject?: string
  tracked_responses?: Record<string, any>
  trigger_event_id?: string
  type?: string
}

export interface AutomationLoadMatch {
  action_id?: number
  campaign_id: number
  end?: number
  period?: string
  res?: string
  start?: number
  step?: number
  type?: string
  tz?: string
  version?: string
  resolution?: string
  language?: string
}

export interface AutomationListMatch {
  action_id?: number
  actions?: any[]
  activated?: any[]
  broadcast_id?: string
  campaign_id?: string
  campaigns?: any[]
  content_id?: number
  converted?: any[]
  created?: number
  customer_id?: string | null
  customer_identifiers?: Record<string, any>
  deduplicate_id?: string
  end?: string
  exited_early?: any[]
  failure_message?: string | null
  finished?: any[]
  forgotten?: boolean
  id?: string
  language_variants?: Record<string, any>
  link?: Record<string, any>
  message_template_id?: number
  messaged?: any[]
  metric?: Record<string, any>
  metrics?: Record<string, any>
  never_activated?: any[]
  newsletter_id?: string
  next?: string
  parent_action_id?: number
  recipient?: string
  res?: string
  series?: Record<string, any>
  start?: string
  started?: any[]
  subject?: string
  tracked_responses?: Record<string, any>
  trigger_event_id?: string
  type?: string
}

export interface AutomationUpdateData {
  action_id: number
  campaign_id: number
  language?: string
  actions?: any[]
  activated?: any[]
  broadcast_id?: string
  campaigns?: any[]
  content_id?: number
  converted?: any[]
  created?: number
  customer_id?: string | null
  customer_identifiers?: Record<string, any>
  deduplicate_id?: string
  end?: string
  exited_early?: any[]
  failure_message?: string | null
  finished?: any[]
  forgotten?: boolean
  id?: string
  language_variants?: Record<string, any>
  link?: Record<string, any>
  message_template_id?: number
  messaged?: any[]
  metric?: Record<string, any>
  metrics?: Record<string, any>
  never_activated?: any[]
  newsletter_id?: string
  next?: string
  parent_action_id?: number
  recipient?: string
  res?: string
  series?: Record<string, any>
  start?: string
  started?: any[]
  subject?: string
  tracked_responses?: Record<string, any>
  trigger_event_id?: string
  type?: string
}

export interface Broadcast {
  actions?: any[]
  active?: boolean
  broadcast_id?: number
  created?: number
  created_at?: number
  deduplicate_id?: string
  errors?: any[]
  first_started?: number
  id?: number
  language_variants?: Record<string, any>
  link?: Record<string, any>
  metric?: Record<string, any>
  msg_template_ids?: any[]
  name?: string
  next?: number
  processed_at?: number
  state?: string
  tags?: any[]
  type?: string
  updated?: number
}

export interface BroadcastLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'metric'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BroadcastListMatch {
  actions?: any[]
  active?: boolean
  broadcast_id?: number
  created?: number
  created_at?: number
  deduplicate_id?: string
  errors?: any[]
  first_started?: number
  id?: number
  language_variants?: Record<string, any>
  link?: Record<string, any>
  metric?: Record<string, any>
  msg_template_ids?: any[]
  name?: string
  next?: number
  processed_at?: number
  state?: string
  tags?: any[]
  type?: string
  updated?: number

  // Selects a custom action instead of the plain list:
  //   'action' | 'message' | 'metric_link' | 'trigger'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BroadcastUpdateData {
  action_id: number
  id: number
  language?: string
  actions?: any[]
  active?: boolean
  broadcast_id?: number
  created?: number
  created_at?: number
  deduplicate_id?: string
  errors?: any[]
  first_started?: number
  language_variants?: Record<string, any>
  link?: Record<string, any>
  metric?: Record<string, any>
  msg_template_ids?: any[]
  name?: string
  next?: number
  processed_at?: number
  state?: string
  tags?: any[]
  type?: string
  updated?: number
}

export interface Campaign {
}

export interface Collection {
  bytes?: number
  created_at?: number
  id?: number
  name?: string
  rows?: number
  schema?: any[]
  updated_at?: number
}

export interface CollectionLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'content'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CollectionListMatch {
  bytes?: number
  created_at?: number
  id?: number
  name?: string
  rows?: number
  schema?: any[]
  updated_at?: number
}

export interface CollectionCreateData {
  bytes?: number
  created_at?: number
  id?: number
  name?: string
  rows?: number
  schema?: any[]
  updated_at?: number
}

export interface CollectionUpdateData {
  id: number
  bytes?: number
  created_at?: number
  name?: string
  rows?: number
  schema?: any[]
  updated_at?: number

  // Selects a custom action instead of the plain update:
  //   'content'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CollectionRemoveMatch {
  id: number
}

export interface Content {
}

export interface Customer {
  cio_id: string
  email: string | null
  filter: any
  id: string | null
  identifiers?: any[]
  ids?: any[]
  next?: string
}

export interface CustomerLoadMatch {
  id: string
  id_type?: string
  language?: string

  // Selects a custom action instead of the plain load:
  //   'attribute' | 'subscription_preference'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerListMatch {
  email: string

  // Selects a custom action instead of the plain list:
  //   'activity' | 'message' | 'relationship' | 'segment'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CustomerCreateData {
  limit?: number
  start?: string
  cio_id: string
  email: string | null
  filter: any
  id: string | null
  identifiers?: any[]
  ids?: any[]
  next?: string

  // Selects a custom action instead of the plain create:
  //   'attribute'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DataIndex {
}

export interface DataIndexCreateData {

  // Selects a custom action instead of the plain create:
  //   'attribute' | 'event'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Delivery {
}

export interface DesignStudio {
  content?: string
  created?: number
  id?: string
  name?: string
  parent_folder_id?: string | null
  tag?: string
  updated?: number
}

export interface DesignStudioLoadMatch {
  id: string
}

export interface DesignStudioListMatch {
  created_after?: number
  created_before?: number
  direct_descendants_only?: boolean
  limit?: number
  page?: number
  parent_folder_id?: string
  sort_by?: string
  sort_order?: string
  tag?: string
  updated_after?: number
  updated_before?: number

  // Selects a custom action instead of the plain list:
  //   'component' | 'folder'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DesignStudioCreateData {
  content?: string
  created?: number
  id?: string
  name?: string
  parent_folder_id?: string | null
  tag?: string
  updated?: number

  // Selects a custom action instead of the plain create:
  //   'component' | 'folder'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DesignStudioUpdateData {
  id: string
  content?: string
  created?: number
  name?: string
  parent_folder_id?: string | null
  tag?: string
  updated?: number
}

export interface DesignStudioRemoveMatch {
  id: string
}

export interface DesignStudioEmail {
  amp?: string
  available_languages?: any[]
  browser?: string
  category?: string
  check?: string
  client?: string
  client_ids?: any[]
  content?: Record<string, any>
  created?: number
  created_at?: number
  created_on_publish?: boolean
  credits_original?: number
  credits_remaining?: number
  dependencies?: any[]
  description?: string
  details?: string
  emails?: any[]
  envelope?: Record<string, any>
  expires_at?: number | null
  feedback?: boolean
  folders?: any[]
  has_unpublished_changes?: boolean
  html?: string
  id?: string
  is_linked?: boolean
  is_processed?: boolean
  is_template?: boolean
  language?: string
  language_group_id?: string
  lax_mode?: boolean
  meta?: Record<string, any>
  name?: string
  node?: Record<string, any>
  node_count?: number
  node_id?: string
  node_type?: string
  os?: string
  parent_folder_id?: string | null
  previews?: any[]
  replayed?: boolean
  run_id?: number
  sample_data?: Record<string, any>
  severity?: string
  state?: string
  summary?: string
  template_id?: number
  text?: string
  tier?: string
  title?: string
  total_previews_bounced?: number
  total_previews_cached?: number
  total_previews_ready?: number
  total_previews_requested?: number
  total_previews_succeeded?: number
  transformers?: Record<string, any>
  updated?: number
  updated_at?: number
  version?: Record<string, any>
  version_id?: string
}

export interface DesignStudioEmailLoadMatch {
  id: string
}

export interface DesignStudioEmailListMatch {
  created_after?: number
  created_before?: number
  direct_descendants_only?: boolean
  has_translation?: boolean
  is_linked?: boolean
  is_template?: boolean
  limit?: number
  page?: number
  parent_folder_id?: string
  sort_by?: string
  sort_order?: string
  updated_after?: number
  updated_before?: number
}

export interface DesignStudioEmailCreateData {
  amp?: string
  available_languages?: any[]
  browser?: string
  category?: string
  check?: string
  client?: string
  client_ids?: any[]
  content?: Record<string, any>
  created?: number
  created_at?: number
  created_on_publish?: boolean
  credits_original?: number
  credits_remaining?: number
  dependencies?: any[]
  description?: string
  details?: string
  emails?: any[]
  envelope?: Record<string, any>
  expires_at?: number | null
  feedback?: boolean
  folders?: any[]
  has_unpublished_changes?: boolean
  html?: string
  id?: string
  is_linked?: boolean
  is_processed?: boolean
  is_template?: boolean
  language?: string
  language_group_id?: string
  lax_mode?: boolean
  meta?: Record<string, any>
  name?: string
  node?: Record<string, any>
  node_count?: number
  node_id?: string
  node_type?: string
  os?: string
  parent_folder_id?: string | null
  previews?: any[]
  replayed?: boolean
  run_id?: number
  sample_data?: Record<string, any>
  severity?: string
  state?: string
  summary?: string
  template_id?: number
  text?: string
  tier?: string
  title?: string
  total_previews_bounced?: number
  total_previews_cached?: number
  total_previews_ready?: number
  total_previews_requested?: number
  total_previews_succeeded?: number
  transformers?: Record<string, any>
  updated?: number
  updated_at?: number
  version?: Record<string, any>
  version_id?: string

  // Selects a custom action instead of the plain create:
  //   'link' | 'preview' | 'publish' | 'restore'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DesignStudioEmailUpdateData {
  id: string
  amp?: string
  available_languages?: any[]
  browser?: string
  category?: string
  check?: string
  client?: string
  client_ids?: any[]
  content?: Record<string, any>
  created?: number
  created_at?: number
  created_on_publish?: boolean
  credits_original?: number
  credits_remaining?: number
  dependencies?: any[]
  description?: string
  details?: string
  emails?: any[]
  envelope?: Record<string, any>
  expires_at?: number | null
  feedback?: boolean
  folders?: any[]
  has_unpublished_changes?: boolean
  html?: string
  is_linked?: boolean
  is_processed?: boolean
  is_template?: boolean
  language?: string
  language_group_id?: string
  lax_mode?: boolean
  meta?: Record<string, any>
  name?: string
  node?: Record<string, any>
  node_count?: number
  node_id?: string
  node_type?: string
  os?: string
  parent_folder_id?: string | null
  previews?: any[]
  replayed?: boolean
  run_id?: number
  sample_data?: Record<string, any>
  severity?: string
  state?: string
  summary?: string
  template_id?: number
  text?: string
  tier?: string
  title?: string
  total_previews_bounced?: number
  total_previews_cached?: number
  total_previews_ready?: number
  total_previews_requested?: number
  total_previews_succeeded?: number
  transformers?: Record<string, any>
  updated?: number
  updated_at?: number
  version?: Record<string, any>
  version_id?: string
}

export interface DesignStudioEmailRemoveMatch {
  id: string
}

export interface Email {
}

export interface End {
}

export interface EspSuppression {
  category?: string
  id?: string
  next?: string
  suppressions?: any[]
}

export interface EspSuppressionLoadMatch {
  id: string
  domain?: string
  limit?: number
  offset?: number
}

export interface EspSuppressionCreateData {
  email_address: string
  suppression_type: string
  category?: string
  id?: string
  next?: string
  suppressions?: any[]
}

export interface EspSuppressionRemoveMatch {
  email_address: string
  suppression_type: string
}

export interface Export {
  created_at?: number
  deduplicate_id?: string
  description?: string
  downloads?: number
  failed?: boolean
  id?: number
  status?: string
  total?: number
  type?: string
  updated_at?: number
  user_email?: string
  user_id?: number
}

export interface ExportLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'download'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ExportListMatch {
  created_at?: number
  deduplicate_id?: string
  description?: string
  downloads?: number
  failed?: boolean
  id?: number
  status?: string
  total?: number
  type?: string
  updated_at?: number
  user_email?: string
  user_id?: number
}

export interface ExportCreateData {
  created_at?: number
  deduplicate_id?: string
  description?: string
  downloads?: number
  failed?: boolean
  id?: number
  status?: string
  total?: number
  type?: string
  updated_at?: number
  user_email?: string
  user_id?: number

  // Selects a custom action instead of the plain create:
  //   'customer' | 'delivery'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Import {
  created_at?: number
  data_to_process?: string
  description?: string
  error?: string
  id?: number
  identifier?: string
  import: any
  name?: string
  object_type_id?: string
  people_to_process?: string
  rows_imported?: number
  rows_to_import?: number
  state?: string
  type?: string
  updated_at?: number
}

export interface ImportLoadMatch {
  id: number
}

export interface ImportCreateData {
  created_at?: number
  data_to_process?: string
  description?: string
  error?: string
  id?: number
  identifier?: string
  import: any
  name?: string
  object_type_id?: string
  people_to_process?: string
  rows_imported?: number
  rows_to_import?: number
  state?: string
  type?: string
  updated_at?: number
}

export interface InApp {
}

export interface InboxMessage {
}

export interface Info {
}

export interface InfoListMatch {

  // Selects a custom action instead of the plain list:
  //   'ip_address'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface IpAddress {
}

export interface Language {
}

export interface Link {
}

export interface LiveNotification {
  created_at?: number
  id?: string
  operation?: string
  source?: string
  status?: string
}

export interface LiveNotificationLoadMatch {
  id: string
}

export interface LiveNotificationCreateData {
  created_at?: number
  id?: string
  operation?: string
  source?: string
  status?: string

  // Selects a custom action instead of the plain create:
  //   'end' | 'start' | 'update'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Message {
  action_id?: number
  broadcast_id?: string
  campaign_id?: string
  content_id?: number
  created?: number
  customer_id?: string | null
  customer_identifiers: Record<string, any>
  deduplicate_id?: string
  failure_message?: string | null
  forgotten?: boolean
  id?: string
  message_template_id?: number
  metrics?: Record<string, any>
  newsletter_id?: string
  parent_action_id?: number
  recipient?: string
  subject?: string
  tracked_responses?: Record<string, any>
  trigger_event_id?: string
  type?: string
}

export interface MessageLoadMatch {
  id: string
  get_tracked_response?: boolean

  // Selects a custom action instead of the plain load:
  //   'archived_message'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface MessageListMatch {
  action_id?: number
  campaign_id?: number
  draft?: boolean
  end_t?: number
  get_tracked_response?: boolean
  limit?: number
  metric?: string
  newsletter_id?: number
  start?: string
  start_t?: number
  type?: string
}

export interface Newsletter {
  content_ids?: any[]
  created?: number
  deduplicate_id?: string
  id?: number
  name?: string
  recipient_segment_ids?: any[]
  sent_at?: number
  subscription_topic_id?: number
  tags?: any[]
  type?: string
  updated?: number
}

export interface NewsletterLoadMatch {
  id: number
}

export interface NewsletterListMatch {
  limit?: number
  sort?: string
  start?: string
}

export interface NewsletterCreateData {
  content_ids?: any[]
  created?: number
  deduplicate_id?: string
  id?: number
  name?: string
  recipient_segment_ids?: any[]
  sent_at?: number
  subscription_topic_id?: number
  tags?: any[]
  type?: string
  updated?: number

  // Selects a custom action instead of the plain create:
  //   'schedule' | 'send'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NewsletterRemoveMatch {
  id: number
}

export interface NewsletterMetric {
  id?: string
  link?: Record<string, any>
  metric?: Record<string, any>
  series?: Record<string, any>
  type?: string
}

export interface NewsletterMetricLoadMatch {
  id: number
  period?: string
  step?: number
  type?: string
}

export interface NewsletterMetricListMatch {
  content_id?: number
  newsletter_id: number
  period?: string
  step?: number
  type?: string
  unique?: boolean

  // Selects a custom action instead of the plain list:
  //   'messages'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NewsletterVariant {
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content_ids?: any[]
  created?: number
  deduplicate_id?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  id?: number
  language?: string
  layout?: string
  name?: string
  newsletter_id?: number
  preheader_text?: string
  preprocessor?: string
  recipient?: string
  recipient_segment_ids?: any[]
  reply_to?: string
  reply_to_id?: number | null
  sent_at?: number
  subject?: string
  subscription_topic_id?: number
  tags?: any[]
  type?: string
  updated?: number
}

export interface NewsletterVariantLoadMatch {
  language?: string
  newsletter_id: number
  test_group_id?: string
  content_id?: number
}

export interface NewsletterVariantListMatch {
  id: number

  // Selects a custom action instead of the plain list:
  //   'contents' | 'test_groups'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NewsletterVariantCreateData {
  newsletter_id: number
  test_group_id: string
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content_ids?: any[]
  created?: number
  deduplicate_id?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  id?: number
  language?: string
  layout?: string
  name?: string
  preheader_text?: string
  preprocessor?: string
  recipient?: string
  recipient_segment_ids?: any[]
  reply_to?: string
  reply_to_id?: number | null
  sent_at?: number
  subject?: string
  subscription_topic_id?: number
  tags?: any[]
  type?: string
  updated?: number

  // Selects a custom action instead of the plain create:
  //   'language' | 'test_groups'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface NewsletterVariantUpdateData {
  language?: string
  newsletter_id: number
  test_group_id?: string
  content_id?: number
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content_ids?: any[]
  created?: number
  deduplicate_id?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  id?: number
  layout?: string
  name?: string
  preheader_text?: string
  preprocessor?: string
  recipient?: string
  recipient_segment_ids?: any[]
  reply_to?: string
  reply_to_id?: number | null
  sent_at?: number
  subject?: string
  subscription_topic_id?: number
  tags?: any[]
  type?: string
  updated?: number
}

export interface NewsletterVariantRemoveMatch {
  language: string
  newsletter_id: number
  test_group_id?: string
}

export interface ObjectType {
  attributes?: Record<string, any>
  enabled?: boolean
  filter: any
  icon?: string
  id?: string
  identifiers?: Record<string, any>
  ids?: any[]
  name?: string
  next?: string
  object_type_disabled?: boolean
  object_type_id?: string
  singular_name?: string
  singular_slug?: string
  slug?: string
  timestamps?: Record<string, any>
}

export interface ObjectLoadMatch {
  id: number
  object_id: string
  id_type?: string
}

export interface ObjectListMatch {
  attributes?: Record<string, any>
  enabled?: boolean
  filter?: any
  icon?: string
  id?: string
  identifiers?: Record<string, any>
  ids?: any[]
  name?: string
  next?: string
  object_type_disabled?: boolean
  object_type_id?: string
  singular_name?: string
  singular_slug?: string
  slug?: string
  timestamps?: Record<string, any>
}

export interface ObjectCreateData {
  limit?: number
  start?: string
  attributes?: Record<string, any>
  enabled?: boolean
  filter: any
  icon?: string
  id?: string
  identifiers?: Record<string, any>
  ids?: any[]
  name?: string
  next?: string
  object_type_disabled?: boolean
  object_type_id?: string
  singular_name?: string
  singular_slug?: string
  slug?: string
  timestamps?: Record<string, any>
}

export interface ObjectType {
}

export interface OptOut {
  channel?: string
  cio_id?: string
  customer_id?: string
  from?: string
  optouts: any[]
}

export interface OptOutListMatch {
  from?: string
  limit?: number
  start?: string
}

export interface OptOutUpdateData {
  customer_id: string
  id_type?: string
  channel?: string
  cio_id?: string
  from?: string
  optouts?: any[]
}

export interface Push {
}

export interface Relationship {
}

export interface ReportingWebhook {
  disabled?: boolean
  endpoint: string
  events: any[]
  full_resolution?: boolean
  id?: number
  name: string
  type?: string
  with_content?: boolean
}

export interface ReportingWebhookLoadMatch {
  id: number
}

export interface ReportingWebhookListMatch {
  disabled?: boolean
  endpoint?: string
  events?: any[]
  full_resolution?: boolean
  id?: number
  name?: string
  type?: string
  with_content?: boolean
}

export interface ReportingWebhookCreateData {
  disabled?: boolean
  endpoint: string
  events: any[]
  full_resolution?: boolean
  id?: number
  name: string
  type?: string
  with_content?: boolean
}

export interface ReportingWebhookUpdateData {
  id: number
  disabled?: boolean
  endpoint?: string
  events?: any[]
  full_resolution?: boolean
  name?: string
  type?: string
  with_content?: boolean
}

export interface ReportingWebhookRemoveMatch {
  id: number
}

export interface SearchSuppression {
}

export interface Segment {
  created_at?: number
  deduplicate_id?: string
  description?: string
  id?: number
  name?: string
  progress?: number | null
  segment: Record<string, any>
  state?: string
  tags?: any[] | null
  type?: string
  updated_at?: number
}

export interface SegmentLoadMatch {
  id: number

  // Selects a custom action instead of the plain load:
  //   'customer_count' | 'membership' | 'used_by'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SegmentListMatch {
  created_at?: number
  deduplicate_id?: string
  description?: string
  id?: number
  name?: string
  progress?: number | null
  segment?: Record<string, any>
  state?: string
  tags?: any[] | null
  type?: string
  updated_at?: number
}

export interface SegmentCreateData {
  created_at?: number
  deduplicate_id?: string
  description?: string
  id?: number
  name?: string
  progress?: number | null
  segment: Record<string, any>
  state?: string
  tags?: any[] | null
  type?: string
  updated_at?: number
}

export interface SegmentRemoveMatch {
  id: number
}

export interface SendMessage {
  attachments?: Record<string, any>
  auto_create?: boolean
  bcc?: string
  body?: string
  body_amp?: string
  body_plain?: string
  cc?: string
  custom_data?: Record<string, any>
  custom_device: any
  custom_payload?: Record<string, any>
  delivery_id?: string
  disable_css_preprocessing?: boolean
  disable_message_retention?: boolean
  fake_bcc?: boolean
  from?: string
  headers?: string
  id?: number
  identifiers?: any
  image_url?: string
  language?: string
  link?: string
  message?: string
  message_data?: Record<string, any>
  preheader?: string
  queue_draft?: boolean
  queued_at?: number
  reply_to?: string
  send_at?: number
  send_to_unsubscribed?: boolean
  sound?: string
  subject?: string
  title?: string
  to: string
  tracked?: boolean
  transactional_message_id?: string
}

export interface SendMessageCreateData {
  attachments?: Record<string, any>
  auto_create?: boolean
  bcc?: string
  body?: string
  body_amp?: string
  body_plain?: string
  cc?: string
  custom_data?: Record<string, any>
  custom_device: any
  custom_payload?: Record<string, any>
  delivery_id?: string
  disable_css_preprocessing?: boolean
  disable_message_retention?: boolean
  fake_bcc?: boolean
  from?: string
  headers?: string
  id?: number
  identifiers?: any
  image_url?: string
  language?: string
  link?: string
  message?: string
  message_data?: Record<string, any>
  preheader?: string
  queue_draft?: boolean
  queued_at?: number
  reply_to?: string
  send_at?: number
  send_to_unsubscribed?: boolean
  sound?: string
  subject?: string
  title?: string
  to: string
  tracked?: boolean
  transactional_message_id?: string
}

export interface SenderIdentity {
  address?: string
  auto_generated?: boolean
  deduplicate_id?: string
  email?: string
  hidden?: boolean
  id?: number
  name?: string
  phone?: string
  template_type?: string
}

export interface SenderIdentityLoadMatch {
  id: number
}

export interface SenderIdentityListMatch {
  hidden?: boolean
  limit?: number
  sort?: string
  start?: string

  // Selects a custom action instead of the plain list:
  //   'used_by'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Sms {
}

export interface Snippet {
  id?: string
  name: string
  updated_at?: number
  value: string
}

export interface SnippetListMatch {
  id?: string
  name?: string
  updated_at?: number
  value?: string
}

export interface SnippetCreateData {
  id?: string
  name: string
  updated_at?: number
  value: string
}

export interface SnippetUpdateData {
  id?: string
  name?: string
  updated_at?: number
  value?: string
}

export interface SnippetRemoveMatch {
  id: string
}

export interface Start {
}

export interface SubscriptionCenter {
  description?: string
  id?: number
  identifier?: string
  name?: string
  subscribed_by_default?: boolean
  type?: string
}

export interface SubscriptionCenterLoadMatch {
  id: string

  // Selects a custom action instead of the plain load:
  //   'token'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface SubscriptionCenterListMatch {
  description?: string
  id?: number
  identifier?: string
  name?: string
  subscribed_by_default?: boolean
  type?: string
}

export interface SubscriptionChannel {
}

export interface SubscriptionTopic {
}

export interface Suppression {
}

export interface TestGroup {
}

export interface Transactional {
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content?: any[]
  created?: number
  created_at?: number
  description?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  hide_message_body?: boolean
  id?: number
  language?: string
  link_tracking?: boolean
  name?: string
  open_tracking?: boolean
  preheader_text?: string
  preprocessor?: string
  queue_drafts?: boolean
  recipient?: string
  reply_to?: string
  reply_to_id?: number | null
  send_to_unsubscribed?: boolean
  subject?: string
  type?: string
  updated?: number
  updated_at?: number
}

export interface TransactionalLoadMatch {
  content_id?: number
  id: number
  language?: string

  // Selects a custom action instead of the plain load:
  //   'metric'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TransactionalListMatch {
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content?: any[]
  created?: number
  created_at?: number
  description?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  hide_message_body?: boolean
  id?: number
  language?: string
  link_tracking?: boolean
  name?: string
  open_tracking?: boolean
  preheader_text?: string
  preprocessor?: string
  queue_drafts?: boolean
  recipient?: string
  reply_to?: string
  reply_to_id?: number | null
  send_to_unsubscribed?: boolean
  subject?: string
  type?: string
  updated?: number
  updated_at?: number

  // Selects a custom action instead of the plain list:
  //   'content' | 'message' | 'metric_link'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface TransactionalUpdateData {
  content_id?: number
  id: number
  language?: string
  bcc?: string
  body?: string
  body_amp?: string
  cc?: string
  content?: any[]
  created?: number
  created_at?: number
  description?: string
  fake_bcc?: boolean
  from?: string
  from_id?: number
  headers?: string
  hide_message_body?: boolean
  link_tracking?: boolean
  name?: string
  open_tracking?: boolean
  preheader_text?: string
  preprocessor?: string
  queue_drafts?: boolean
  recipient?: string
  reply_to?: string
  reply_to_id?: number | null
  send_to_unsubscribed?: boolean
  subject?: string
  type?: string
  updated?: number
  updated_at?: number
}

export interface Trigger {
}

export interface Update {
}

export interface Whatsapp {
}

export interface Workspace {
  billable_messages_sent?: number
  id?: number
  messages_sent?: number
  name?: string
  object_types?: number
  objects?: number
  people?: number
}

export interface WorkspaceListMatch {
  billable_messages_sent?: number
  id?: number
  messages_sent?: number
  name?: string
  object_types?: number
  objects?: number
  people?: number
}

