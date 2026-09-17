// Typed models for the CustomerioApp SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Action
 */

/**
 * @typedef {Object} Activity
 * @property {string|null} [customer_id]
 * @property {Object} customer_identifiers
 * @property {*} [data]
 * @property {string} [delivery_id]
 * @property {string} [delivery_type]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [timestamp]
 * @property {string} [type]
 * @property {string} [url]
 */

/**
 * @typedef {Object} ActivityListMatch
 * @property {string} [customer_id]
 * @property {boolean} [deleted]
 * @property {string} [id_type]
 * @property {number} [limit]
 * @property {string} [name]
 * @property {string} [start]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Asset
 * @property {number} [created]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number|null} [parent_folder_id]
 * @property {string} [path]
 * @property {number} [size]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} AssetLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} AssetListMatch
 * @property {boolean} [direct_descendants_only]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {number} [parent_folder_id]
 */

/**
 * @typedef {Object} AssetCreateData
 * @property {number} [created]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number|null} [parent_folder_id]
 * @property {string} [path]
 * @property {number} [size]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} AssetUpdateData
 * @property {number} id
 * @property {number} [created]
 * @property {string} [name]
 * @property {number|null} [parent_folder_id]
 * @property {string} [path]
 * @property {number} [size]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} AssetRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Attribute
 */

/**
 * @typedef {Object} Automation
 * @property {number} [action_id]
 * @property {Array} [actions]
 * @property {Array} [activated]
 * @property {string} [broadcast_id]
 * @property {string} [campaign_id]
 * @property {Array} [campaigns]
 * @property {number} [content_id]
 * @property {Array} [converted]
 * @property {number} [created]
 * @property {string|null} [customer_id]
 * @property {Object} customer_identifiers
 * @property {string} [deduplicate_id]
 * @property {string} [end]
 * @property {Array} [exited_early]
 * @property {string|null} [failure_message]
 * @property {Array} [finished]
 * @property {boolean} [forgotten]
 * @property {string} [id]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {number} [message_template_id]
 * @property {Array} [messaged]
 * @property {Object} [metric]
 * @property {Object} [metrics]
 * @property {Array} [never_activated]
 * @property {string} [newsletter_id]
 * @property {string} [next]
 * @property {number} [parent_action_id]
 * @property {string} [recipient]
 * @property {string} [res]
 * @property {Object} [series]
 * @property {string} [start]
 * @property {Array} [started]
 * @property {string} [subject]
 * @property {Object} [tracked_responses]
 * @property {string} [trigger_event_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AutomationLoadMatch
 * @property {number} [action_id]
 * @property {number} campaign_id
 * @property {number} [end]
 * @property {string} [period]
 * @property {string} [res]
 * @property {number} [start]
 * @property {number} [step]
 * @property {string} [type]
 * @property {string} [tz]
 * @property {string} [version]
 * @property {string} [resolution]
 * @property {string} [language]
 */

/**
 * @typedef {Object} AutomationListMatch
 * @property {number} [action_id]
 * @property {Array} [actions]
 * @property {Array} [activated]
 * @property {string} [broadcast_id]
 * @property {string} [campaign_id]
 * @property {Array} [campaigns]
 * @property {number} [content_id]
 * @property {Array} [converted]
 * @property {number} [created]
 * @property {string|null} [customer_id]
 * @property {Object} [customer_identifiers]
 * @property {string} [deduplicate_id]
 * @property {string} [end]
 * @property {Array} [exited_early]
 * @property {string|null} [failure_message]
 * @property {Array} [finished]
 * @property {boolean} [forgotten]
 * @property {string} [id]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {number} [message_template_id]
 * @property {Array} [messaged]
 * @property {Object} [metric]
 * @property {Object} [metrics]
 * @property {Array} [never_activated]
 * @property {string} [newsletter_id]
 * @property {string} [next]
 * @property {number} [parent_action_id]
 * @property {string} [recipient]
 * @property {string} [res]
 * @property {Object} [series]
 * @property {string} [start]
 * @property {Array} [started]
 * @property {string} [subject]
 * @property {Object} [tracked_responses]
 * @property {string} [trigger_event_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AutomationUpdateData
 * @property {number} action_id
 * @property {number} campaign_id
 * @property {string} [language]
 * @property {Array} [actions]
 * @property {Array} [activated]
 * @property {string} [broadcast_id]
 * @property {Array} [campaigns]
 * @property {number} [content_id]
 * @property {Array} [converted]
 * @property {number} [created]
 * @property {string|null} [customer_id]
 * @property {Object} [customer_identifiers]
 * @property {string} [deduplicate_id]
 * @property {string} [end]
 * @property {Array} [exited_early]
 * @property {string|null} [failure_message]
 * @property {Array} [finished]
 * @property {boolean} [forgotten]
 * @property {string} [id]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {number} [message_template_id]
 * @property {Array} [messaged]
 * @property {Object} [metric]
 * @property {Object} [metrics]
 * @property {Array} [never_activated]
 * @property {string} [newsletter_id]
 * @property {string} [next]
 * @property {number} [parent_action_id]
 * @property {string} [recipient]
 * @property {string} [res]
 * @property {Object} [series]
 * @property {string} [start]
 * @property {Array} [started]
 * @property {string} [subject]
 * @property {Object} [tracked_responses]
 * @property {string} [trigger_event_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Broadcast
 * @property {Array} [actions]
 * @property {boolean} [active]
 * @property {number} [broadcast_id]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {Array} [errors]
 * @property {number} [first_started]
 * @property {number} [id]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {Object} [metric]
 * @property {Array} [msg_template_ids]
 * @property {string} [name]
 * @property {number} [next]
 * @property {number} [processed_at]
 * @property {string} [state]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} BroadcastLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} BroadcastListMatch
 * @property {Array} [actions]
 * @property {boolean} [active]
 * @property {number} [broadcast_id]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {Array} [errors]
 * @property {number} [first_started]
 * @property {number} [id]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {Object} [metric]
 * @property {Array} [msg_template_ids]
 * @property {string} [name]
 * @property {number} [next]
 * @property {number} [processed_at]
 * @property {string} [state]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} BroadcastUpdateData
 * @property {number} action_id
 * @property {number} id
 * @property {string} [language]
 * @property {Array} [actions]
 * @property {boolean} [active]
 * @property {number} [broadcast_id]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {Array} [errors]
 * @property {number} [first_started]
 * @property {Object} [language_variants]
 * @property {Object} [link]
 * @property {Object} [metric]
 * @property {Array} [msg_template_ids]
 * @property {string} [name]
 * @property {number} [next]
 * @property {number} [processed_at]
 * @property {string} [state]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} Campaign
 */

/**
 * @typedef {Object} Collection
 * @property {number} [bytes]
 * @property {number} [created_at]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [rows]
 * @property {Array} [schema]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CollectionLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} CollectionListMatch
 * @property {number} [bytes]
 * @property {number} [created_at]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [rows]
 * @property {Array} [schema]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CollectionCreateData
 * @property {number} [bytes]
 * @property {number} [created_at]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number} [rows]
 * @property {Array} [schema]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CollectionUpdateData
 * @property {number} id
 * @property {number} [bytes]
 * @property {number} [created_at]
 * @property {string} [name]
 * @property {number} [rows]
 * @property {Array} [schema]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} CollectionRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} Content
 */

/**
 * @typedef {Object} Customer
 * @property {string} cio_id
 * @property {string|null} email
 * @property {*} filter
 * @property {string|null} id
 * @property {Array} [identifiers]
 * @property {Array} [ids]
 * @property {string} [next]
 */

/**
 * @typedef {Object} CustomerLoadMatch
 * @property {string} id
 * @property {string} [id_type]
 * @property {string} [language]
 */

/**
 * @typedef {Object} CustomerListMatch
 * @property {string} email
 */

/**
 * @typedef {Object} CustomerCreateData
 * @property {number} [limit]
 * @property {string} [start]
 * @property {string} cio_id
 * @property {string|null} email
 * @property {*} filter
 * @property {string|null} id
 * @property {Array} [identifiers]
 * @property {Array} [ids]
 * @property {string} [next]
 */

/**
 * @typedef {Object} DataIndex
 */

/**
 * @typedef {Object} DataIndexCreateData
 */

/**
 * @typedef {Object} Delivery
 */

/**
 * @typedef {Object} DesignStudio
 * @property {string} [content]
 * @property {number} [created]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string|null} [parent_folder_id]
 * @property {string} [tag]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} DesignStudioLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DesignStudioListMatch
 * @property {number} [created_after]
 * @property {number} [created_before]
 * @property {boolean} [direct_descendants_only]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {string} [parent_folder_id]
 * @property {string} [sort_by]
 * @property {string} [sort_order]
 * @property {string} [tag]
 * @property {number} [updated_after]
 * @property {number} [updated_before]
 */

/**
 * @typedef {Object} DesignStudioCreateData
 * @property {string} [content]
 * @property {number} [created]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string|null} [parent_folder_id]
 * @property {string} [tag]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} DesignStudioUpdateData
 * @property {string} id
 * @property {string} [content]
 * @property {number} [created]
 * @property {string} [name]
 * @property {string|null} [parent_folder_id]
 * @property {string} [tag]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} DesignStudioRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DesignStudioEmail
 * @property {string} [amp]
 * @property {Array} [available_languages]
 * @property {string} [browser]
 * @property {string} [category]
 * @property {string} [check]
 * @property {string} [client]
 * @property {Array} [client_ids]
 * @property {Object} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {boolean} [created_on_publish]
 * @property {number} [credits_original]
 * @property {number} [credits_remaining]
 * @property {Array} [dependencies]
 * @property {string} [description]
 * @property {string} [details]
 * @property {Array} [emails]
 * @property {Object} [envelope]
 * @property {number|null} [expires_at]
 * @property {boolean} [feedback]
 * @property {Array} [folders]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [html]
 * @property {string} [id]
 * @property {boolean} [is_linked]
 * @property {boolean} [is_processed]
 * @property {boolean} [is_template]
 * @property {string} [language]
 * @property {string} [language_group_id]
 * @property {boolean} [lax_mode]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {Object} [node]
 * @property {number} [node_count]
 * @property {string} [node_id]
 * @property {string} [node_type]
 * @property {string} [os]
 * @property {string|null} [parent_folder_id]
 * @property {Array} [previews]
 * @property {boolean} [replayed]
 * @property {number} [run_id]
 * @property {Object} [sample_data]
 * @property {string} [severity]
 * @property {string} [state]
 * @property {string} [summary]
 * @property {number} [template_id]
 * @property {string} [text]
 * @property {string} [tier]
 * @property {string} [title]
 * @property {number} [total_previews_bounced]
 * @property {number} [total_previews_cached]
 * @property {number} [total_previews_ready]
 * @property {number} [total_previews_requested]
 * @property {number} [total_previews_succeeded]
 * @property {Object} [transformers]
 * @property {number} [updated]
 * @property {number} [updated_at]
 * @property {Object} [version]
 * @property {string} [version_id]
 */

/**
 * @typedef {Object} DesignStudioEmailLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DesignStudioEmailListMatch
 * @property {number} [created_after]
 * @property {number} [created_before]
 * @property {boolean} [direct_descendants_only]
 * @property {boolean} [has_translation]
 * @property {boolean} [is_linked]
 * @property {boolean} [is_template]
 * @property {number} [limit]
 * @property {number} [page]
 * @property {string} [parent_folder_id]
 * @property {string} [sort_by]
 * @property {string} [sort_order]
 * @property {number} [updated_after]
 * @property {number} [updated_before]
 */

/**
 * @typedef {Object} DesignStudioEmailCreateData
 * @property {string} [amp]
 * @property {Array} [available_languages]
 * @property {string} [browser]
 * @property {string} [category]
 * @property {string} [check]
 * @property {string} [client]
 * @property {Array} [client_ids]
 * @property {Object} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {boolean} [created_on_publish]
 * @property {number} [credits_original]
 * @property {number} [credits_remaining]
 * @property {Array} [dependencies]
 * @property {string} [description]
 * @property {string} [details]
 * @property {Array} [emails]
 * @property {Object} [envelope]
 * @property {number|null} [expires_at]
 * @property {boolean} [feedback]
 * @property {Array} [folders]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [html]
 * @property {string} [id]
 * @property {boolean} [is_linked]
 * @property {boolean} [is_processed]
 * @property {boolean} [is_template]
 * @property {string} [language]
 * @property {string} [language_group_id]
 * @property {boolean} [lax_mode]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {Object} [node]
 * @property {number} [node_count]
 * @property {string} [node_id]
 * @property {string} [node_type]
 * @property {string} [os]
 * @property {string|null} [parent_folder_id]
 * @property {Array} [previews]
 * @property {boolean} [replayed]
 * @property {number} [run_id]
 * @property {Object} [sample_data]
 * @property {string} [severity]
 * @property {string} [state]
 * @property {string} [summary]
 * @property {number} [template_id]
 * @property {string} [text]
 * @property {string} [tier]
 * @property {string} [title]
 * @property {number} [total_previews_bounced]
 * @property {number} [total_previews_cached]
 * @property {number} [total_previews_ready]
 * @property {number} [total_previews_requested]
 * @property {number} [total_previews_succeeded]
 * @property {Object} [transformers]
 * @property {number} [updated]
 * @property {number} [updated_at]
 * @property {Object} [version]
 * @property {string} [version_id]
 */

/**
 * @typedef {Object} DesignStudioEmailUpdateData
 * @property {string} id
 * @property {string} [amp]
 * @property {Array} [available_languages]
 * @property {string} [browser]
 * @property {string} [category]
 * @property {string} [check]
 * @property {string} [client]
 * @property {Array} [client_ids]
 * @property {Object} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {boolean} [created_on_publish]
 * @property {number} [credits_original]
 * @property {number} [credits_remaining]
 * @property {Array} [dependencies]
 * @property {string} [description]
 * @property {string} [details]
 * @property {Array} [emails]
 * @property {Object} [envelope]
 * @property {number|null} [expires_at]
 * @property {boolean} [feedback]
 * @property {Array} [folders]
 * @property {boolean} [has_unpublished_changes]
 * @property {string} [html]
 * @property {boolean} [is_linked]
 * @property {boolean} [is_processed]
 * @property {boolean} [is_template]
 * @property {string} [language]
 * @property {string} [language_group_id]
 * @property {boolean} [lax_mode]
 * @property {Object} [meta]
 * @property {string} [name]
 * @property {Object} [node]
 * @property {number} [node_count]
 * @property {string} [node_id]
 * @property {string} [node_type]
 * @property {string} [os]
 * @property {string|null} [parent_folder_id]
 * @property {Array} [previews]
 * @property {boolean} [replayed]
 * @property {number} [run_id]
 * @property {Object} [sample_data]
 * @property {string} [severity]
 * @property {string} [state]
 * @property {string} [summary]
 * @property {number} [template_id]
 * @property {string} [text]
 * @property {string} [tier]
 * @property {string} [title]
 * @property {number} [total_previews_bounced]
 * @property {number} [total_previews_cached]
 * @property {number} [total_previews_ready]
 * @property {number} [total_previews_requested]
 * @property {number} [total_previews_succeeded]
 * @property {Object} [transformers]
 * @property {number} [updated]
 * @property {number} [updated_at]
 * @property {Object} [version]
 * @property {string} [version_id]
 */

/**
 * @typedef {Object} DesignStudioEmailRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Email
 */

/**
 * @typedef {Object} End
 */

/**
 * @typedef {Object} EspSuppression
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [next]
 * @property {Array} [suppressions]
 */

/**
 * @typedef {Object} EspSuppressionLoadMatch
 * @property {string} id
 * @property {string} [domain]
 * @property {number} [limit]
 * @property {number} [offset]
 */

/**
 * @typedef {Object} EspSuppressionCreateData
 * @property {string} email_address
 * @property {string} suppression_type
 * @property {string} [category]
 * @property {string} [id]
 * @property {string} [next]
 * @property {Array} [suppressions]
 */

/**
 * @typedef {Object} EspSuppressionRemoveMatch
 * @property {string} email_address
 * @property {string} suppression_type
 */

/**
 * @typedef {Object} Export
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [downloads]
 * @property {boolean} [failed]
 * @property {number} [id]
 * @property {string} [status]
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [user_email]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} ExportLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ExportListMatch
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [downloads]
 * @property {boolean} [failed]
 * @property {number} [id]
 * @property {string} [status]
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [user_email]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} ExportCreateData
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [downloads]
 * @property {boolean} [failed]
 * @property {number} [id]
 * @property {string} [status]
 * @property {number} [total]
 * @property {string} [type]
 * @property {number} [updated_at]
 * @property {string} [user_email]
 * @property {number} [user_id]
 */

/**
 * @typedef {Object} Import
 * @property {number} [created_at]
 * @property {string} [data_to_process]
 * @property {string} [description]
 * @property {string} [error]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {*} import
 * @property {string} [name]
 * @property {string} [object_type_id]
 * @property {string} [people_to_process]
 * @property {number} [rows_imported]
 * @property {number} [rows_to_import]
 * @property {string} [state]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} ImportLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ImportCreateData
 * @property {number} [created_at]
 * @property {string} [data_to_process]
 * @property {string} [description]
 * @property {string} [error]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {*} import
 * @property {string} [name]
 * @property {string} [object_type_id]
 * @property {string} [people_to_process]
 * @property {number} [rows_imported]
 * @property {number} [rows_to_import]
 * @property {string} [state]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} InApp
 */

/**
 * @typedef {Object} InboxMessage
 */

/**
 * @typedef {Object} Info
 */

/**
 * @typedef {Object} InfoListMatch
 */

/**
 * @typedef {Object} IpAddress
 */

/**
 * @typedef {Object} Language
 */

/**
 * @typedef {Object} Link
 */

/**
 * @typedef {Object} LiveNotification
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [operation]
 * @property {string} [source]
 * @property {string} [status]
 */

/**
 * @typedef {Object} LiveNotificationLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LiveNotificationCreateData
 * @property {number} [created_at]
 * @property {string} [id]
 * @property {string} [operation]
 * @property {string} [source]
 * @property {string} [status]
 */

/**
 * @typedef {Object} Message
 * @property {number} [action_id]
 * @property {string} [broadcast_id]
 * @property {string} [campaign_id]
 * @property {number} [content_id]
 * @property {number} [created]
 * @property {string|null} [customer_id]
 * @property {Object} customer_identifiers
 * @property {string} [deduplicate_id]
 * @property {string|null} [failure_message]
 * @property {boolean} [forgotten]
 * @property {string} [id]
 * @property {number} [message_template_id]
 * @property {Object} [metrics]
 * @property {string} [newsletter_id]
 * @property {number} [parent_action_id]
 * @property {string} [recipient]
 * @property {string} [subject]
 * @property {Object} [tracked_responses]
 * @property {string} [trigger_event_id]
 * @property {string} [type]
 */

/**
 * @typedef {Object} MessageLoadMatch
 * @property {string} id
 * @property {boolean} [get_tracked_response]
 */

/**
 * @typedef {Object} MessageListMatch
 * @property {number} [action_id]
 * @property {number} [campaign_id]
 * @property {boolean} [draft]
 * @property {number} [end_t]
 * @property {boolean} [get_tracked_response]
 * @property {number} [limit]
 * @property {string} [metric]
 * @property {number} [newsletter_id]
 * @property {string} [start]
 * @property {number} [start_t]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Newsletter
 * @property {Array} [content_ids]
 * @property {number} [created]
 * @property {string} [deduplicate_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {Array} [recipient_segment_ids]
 * @property {number} [sent_at]
 * @property {number} [subscription_topic_id]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} NewsletterLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} NewsletterListMatch
 * @property {number} [limit]
 * @property {string} [sort]
 * @property {string} [start]
 */

/**
 * @typedef {Object} NewsletterCreateData
 * @property {Array} [content_ids]
 * @property {number} [created]
 * @property {string} [deduplicate_id]
 * @property {number} [id]
 * @property {string} [name]
 * @property {Array} [recipient_segment_ids]
 * @property {number} [sent_at]
 * @property {number} [subscription_topic_id]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} NewsletterRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} NewsletterMetric
 * @property {string} [id]
 * @property {Object} [link]
 * @property {Object} [metric]
 * @property {Object} [series]
 * @property {string} [type]
 */

/**
 * @typedef {Object} NewsletterMetricLoadMatch
 * @property {number} id
 * @property {string} [period]
 * @property {number} [step]
 * @property {string} [type]
 */

/**
 * @typedef {Object} NewsletterMetricListMatch
 * @property {number} [content_id]
 * @property {number} newsletter_id
 * @property {string} [period]
 * @property {number} [step]
 * @property {string} [type]
 * @property {boolean} [unique]
 */

/**
 * @typedef {Object} NewsletterVariant
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content_ids]
 * @property {number} [created]
 * @property {string} [deduplicate_id]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {number} [id]
 * @property {string} [language]
 * @property {string} [layout]
 * @property {string} [name]
 * @property {number} [newsletter_id]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {string} [recipient]
 * @property {Array} [recipient_segment_ids]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {number} [sent_at]
 * @property {string} [subject]
 * @property {number} [subscription_topic_id]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} NewsletterVariantLoadMatch
 * @property {string} [language]
 * @property {number} newsletter_id
 * @property {string} [test_group_id]
 * @property {number} [content_id]
 */

/**
 * @typedef {Object} NewsletterVariantListMatch
 * @property {number} id
 */

/**
 * @typedef {Object} NewsletterVariantCreateData
 * @property {number} newsletter_id
 * @property {string} test_group_id
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content_ids]
 * @property {number} [created]
 * @property {string} [deduplicate_id]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {number} [id]
 * @property {string} [language]
 * @property {string} [layout]
 * @property {string} [name]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {string} [recipient]
 * @property {Array} [recipient_segment_ids]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {number} [sent_at]
 * @property {string} [subject]
 * @property {number} [subscription_topic_id]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} NewsletterVariantUpdateData
 * @property {string} [language]
 * @property {number} newsletter_id
 * @property {string} [test_group_id]
 * @property {number} [content_id]
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content_ids]
 * @property {number} [created]
 * @property {string} [deduplicate_id]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {number} [id]
 * @property {string} [layout]
 * @property {string} [name]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {string} [recipient]
 * @property {Array} [recipient_segment_ids]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {number} [sent_at]
 * @property {string} [subject]
 * @property {number} [subscription_topic_id]
 * @property {Array} [tags]
 * @property {string} [type]
 * @property {number} [updated]
 */

/**
 * @typedef {Object} NewsletterVariantRemoveMatch
 * @property {string} language
 * @property {number} newsletter_id
 * @property {string} [test_group_id]
 */

/**
 * @typedef {Object} Object
 * @property {Object} [attributes]
 * @property {boolean} [enabled]
 * @property {*} filter
 * @property {string} [icon]
 * @property {string} [id]
 * @property {Object} [identifiers]
 * @property {Array} [ids]
 * @property {string} [name]
 * @property {string} [next]
 * @property {boolean} [object_type_disabled]
 * @property {string} [object_type_id]
 * @property {string} [singular_name]
 * @property {string} [singular_slug]
 * @property {string} [slug]
 * @property {Object} [timestamps]
 */

/**
 * @typedef {Object} ObjectLoadMatch
 * @property {number} id
 * @property {string} object_id
 * @property {string} [id_type]
 */

/**
 * @typedef {Object} ObjectListMatch
 * @property {Object} [attributes]
 * @property {boolean} [enabled]
 * @property {*} [filter]
 * @property {string} [icon]
 * @property {string} [id]
 * @property {Object} [identifiers]
 * @property {Array} [ids]
 * @property {string} [name]
 * @property {string} [next]
 * @property {boolean} [object_type_disabled]
 * @property {string} [object_type_id]
 * @property {string} [singular_name]
 * @property {string} [singular_slug]
 * @property {string} [slug]
 * @property {Object} [timestamps]
 */

/**
 * @typedef {Object} ObjectCreateData
 * @property {number} [limit]
 * @property {string} [start]
 * @property {Object} [attributes]
 * @property {boolean} [enabled]
 * @property {*} filter
 * @property {string} [icon]
 * @property {string} [id]
 * @property {Object} [identifiers]
 * @property {Array} [ids]
 * @property {string} [name]
 * @property {string} [next]
 * @property {boolean} [object_type_disabled]
 * @property {string} [object_type_id]
 * @property {string} [singular_name]
 * @property {string} [singular_slug]
 * @property {string} [slug]
 * @property {Object} [timestamps]
 */

/**
 * @typedef {Object} ObjectType
 */

/**
 * @typedef {Object} OptOut
 * @property {string} [channel]
 * @property {string} [cio_id]
 * @property {string} [customer_id]
 * @property {string} [from]
 * @property {Array} optouts
 */

/**
 * @typedef {Object} OptOutListMatch
 * @property {string} [from]
 * @property {number} [limit]
 * @property {string} [start]
 */

/**
 * @typedef {Object} OptOutUpdateData
 * @property {string} customer_id
 * @property {string} [id_type]
 * @property {string} [channel]
 * @property {string} [cio_id]
 * @property {string} [from]
 * @property {Array} [optouts]
 */

/**
 * @typedef {Object} Push
 */

/**
 * @typedef {Object} Relationship
 */

/**
 * @typedef {Object} ReportingWebhook
 * @property {boolean} [disabled]
 * @property {string} endpoint
 * @property {Array} events
 * @property {boolean} [full_resolution]
 * @property {number} [id]
 * @property {string} name
 * @property {string} [type]
 * @property {boolean} [with_content]
 */

/**
 * @typedef {Object} ReportingWebhookLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} ReportingWebhookListMatch
 * @property {boolean} [disabled]
 * @property {string} [endpoint]
 * @property {Array} [events]
 * @property {boolean} [full_resolution]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [type]
 * @property {boolean} [with_content]
 */

/**
 * @typedef {Object} ReportingWebhookCreateData
 * @property {boolean} [disabled]
 * @property {string} endpoint
 * @property {Array} events
 * @property {boolean} [full_resolution]
 * @property {number} [id]
 * @property {string} name
 * @property {string} [type]
 * @property {boolean} [with_content]
 */

/**
 * @typedef {Object} ReportingWebhookUpdateData
 * @property {number} id
 * @property {boolean} [disabled]
 * @property {string} [endpoint]
 * @property {Array} [events]
 * @property {boolean} [full_resolution]
 * @property {string} [name]
 * @property {string} [type]
 * @property {boolean} [with_content]
 */

/**
 * @typedef {Object} ReportingWebhookRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} SearchSuppression
 */

/**
 * @typedef {Object} Segment
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number|null} [progress]
 * @property {Object} segment
 * @property {string} [state]
 * @property {Array|null} [tags]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} SegmentLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} SegmentListMatch
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number|null} [progress]
 * @property {Object} [segment]
 * @property {string} [state]
 * @property {Array|null} [tags]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} SegmentCreateData
 * @property {number} [created_at]
 * @property {string} [deduplicate_id]
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} [name]
 * @property {number|null} [progress]
 * @property {Object} segment
 * @property {string} [state]
 * @property {Array|null} [tags]
 * @property {string} [type]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} SegmentRemoveMatch
 * @property {number} id
 */

/**
 * @typedef {Object} SendMessage
 * @property {Object} [attachments]
 * @property {boolean} [auto_create]
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [body_plain]
 * @property {string} [cc]
 * @property {Object} [custom_data]
 * @property {*} custom_device
 * @property {Object} [custom_payload]
 * @property {string} [delivery_id]
 * @property {boolean} [disable_css_preprocessing]
 * @property {boolean} [disable_message_retention]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {string} [headers]
 * @property {number} [id]
 * @property {*} [identifiers]
 * @property {string} [image_url]
 * @property {string} [language]
 * @property {string} [link]
 * @property {string} [message]
 * @property {Object} [message_data]
 * @property {string} [preheader]
 * @property {boolean} [queue_draft]
 * @property {number} [queued_at]
 * @property {string} [reply_to]
 * @property {number} [send_at]
 * @property {boolean} [send_to_unsubscribed]
 * @property {string} [sound]
 * @property {string} [subject]
 * @property {string} [title]
 * @property {string} to
 * @property {boolean} [tracked]
 * @property {string} [transactional_message_id]
 */

/**
 * @typedef {Object} SendMessageCreateData
 * @property {Object} [attachments]
 * @property {boolean} [auto_create]
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [body_plain]
 * @property {string} [cc]
 * @property {Object} [custom_data]
 * @property {*} custom_device
 * @property {Object} [custom_payload]
 * @property {string} [delivery_id]
 * @property {boolean} [disable_css_preprocessing]
 * @property {boolean} [disable_message_retention]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {string} [headers]
 * @property {number} [id]
 * @property {*} [identifiers]
 * @property {string} [image_url]
 * @property {string} [language]
 * @property {string} [link]
 * @property {string} [message]
 * @property {Object} [message_data]
 * @property {string} [preheader]
 * @property {boolean} [queue_draft]
 * @property {number} [queued_at]
 * @property {string} [reply_to]
 * @property {number} [send_at]
 * @property {boolean} [send_to_unsubscribed]
 * @property {string} [sound]
 * @property {string} [subject]
 * @property {string} [title]
 * @property {string} to
 * @property {boolean} [tracked]
 * @property {string} [transactional_message_id]
 */

/**
 * @typedef {Object} SenderIdentity
 * @property {string} [address]
 * @property {boolean} [auto_generated]
 * @property {string} [deduplicate_id]
 * @property {string} [email]
 * @property {boolean} [hidden]
 * @property {number} [id]
 * @property {string} [name]
 * @property {string} [phone]
 * @property {string} [template_type]
 */

/**
 * @typedef {Object} SenderIdentityLoadMatch
 * @property {number} id
 */

/**
 * @typedef {Object} SenderIdentityListMatch
 * @property {boolean} [hidden]
 * @property {number} [limit]
 * @property {string} [sort]
 * @property {string} [start]
 */

/**
 * @typedef {Object} Sms
 */

/**
 * @typedef {Object} Snippet
 * @property {string} [id]
 * @property {string} name
 * @property {number} [updated_at]
 * @property {string} value
 */

/**
 * @typedef {Object} SnippetListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [updated_at]
 * @property {string} [value]
 */

/**
 * @typedef {Object} SnippetCreateData
 * @property {string} [id]
 * @property {string} name
 * @property {number} [updated_at]
 * @property {string} value
 */

/**
 * @typedef {Object} SnippetUpdateData
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [updated_at]
 * @property {string} [value]
 */

/**
 * @typedef {Object} SnippetRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Start
 */

/**
 * @typedef {Object} SubscriptionCenter
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [subscribed_by_default]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SubscriptionCenterLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SubscriptionCenterListMatch
 * @property {string} [description]
 * @property {number} [id]
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [subscribed_by_default]
 * @property {string} [type]
 */

/**
 * @typedef {Object} SubscriptionChannel
 */

/**
 * @typedef {Object} SubscriptionTopic
 */

/**
 * @typedef {Object} Suppression
 */

/**
 * @typedef {Object} TestGroup
 */

/**
 * @typedef {Object} Transactional
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {boolean} [hide_message_body]
 * @property {number} [id]
 * @property {string} [language]
 * @property {boolean} [link_tracking]
 * @property {string} [name]
 * @property {boolean} [open_tracking]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {boolean} [queue_drafts]
 * @property {string} [recipient]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {boolean} [send_to_unsubscribed]
 * @property {string} [subject]
 * @property {string} [type]
 * @property {number} [updated]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TransactionalLoadMatch
 * @property {number} [content_id]
 * @property {number} id
 * @property {string} [language]
 */

/**
 * @typedef {Object} TransactionalListMatch
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {boolean} [hide_message_body]
 * @property {number} [id]
 * @property {string} [language]
 * @property {boolean} [link_tracking]
 * @property {string} [name]
 * @property {boolean} [open_tracking]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {boolean} [queue_drafts]
 * @property {string} [recipient]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {boolean} [send_to_unsubscribed]
 * @property {string} [subject]
 * @property {string} [type]
 * @property {number} [updated]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} TransactionalUpdateData
 * @property {number} [content_id]
 * @property {number} id
 * @property {string} [language]
 * @property {string} [bcc]
 * @property {string} [body]
 * @property {string} [body_amp]
 * @property {string} [cc]
 * @property {Array} [content]
 * @property {number} [created]
 * @property {number} [created_at]
 * @property {string} [description]
 * @property {boolean} [fake_bcc]
 * @property {string} [from]
 * @property {number} [from_id]
 * @property {string} [headers]
 * @property {boolean} [hide_message_body]
 * @property {boolean} [link_tracking]
 * @property {string} [name]
 * @property {boolean} [open_tracking]
 * @property {string} [preheader_text]
 * @property {string} [preprocessor]
 * @property {boolean} [queue_drafts]
 * @property {string} [recipient]
 * @property {string} [reply_to]
 * @property {number|null} [reply_to_id]
 * @property {boolean} [send_to_unsubscribed]
 * @property {string} [subject]
 * @property {string} [type]
 * @property {number} [updated]
 * @property {number} [updated_at]
 */

/**
 * @typedef {Object} Trigger
 */

/**
 * @typedef {Object} Update
 */

/**
 * @typedef {Object} Whatsapp
 */

/**
 * @typedef {Object} Workspace
 * @property {number} [billable_messages_sent]
 * @property {number} [id]
 * @property {number} [messages_sent]
 * @property {string} [name]
 * @property {number} [object_types]
 * @property {number} [objects]
 * @property {number} [people]
 */

/**
 * @typedef {Object} WorkspaceListMatch
 * @property {number} [billable_messages_sent]
 * @property {number} [id]
 * @property {number} [messages_sent]
 * @property {string} [name]
 * @property {number} [object_types]
 * @property {number} [objects]
 * @property {number} [people]
 */

