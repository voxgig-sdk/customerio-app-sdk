import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { ReportingWebhook, ReportingWebhookLoadMatch, ReportingWebhookListMatch, ReportingWebhookCreateData, ReportingWebhookUpdateData, ReportingWebhookRemoveMatch } from '../CustomerioAppTypes';
declare class ReportingWebhookEntity extends CustomerioAppEntityBase<ReportingWebhook> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ReportingWebhookEntity): ReportingWebhookEntity;
    load(this: any, reqmatch?: ReportingWebhookLoadMatch, ctrl?: Control): Promise<ReportingWebhookEntity>;
    list(this: any, reqmatch?: ReportingWebhookListMatch, ctrl?: Control): Promise<ReportingWebhookEntity[]>;
    create(this: any, reqdata?: ReportingWebhookCreateData, ctrl?: Control): Promise<ReportingWebhookEntity>;
    update(this: any, reqdata?: ReportingWebhookUpdateData, ctrl?: Control): Promise<ReportingWebhookEntity>;
    remove(this: any, reqmatch?: ReportingWebhookRemoveMatch, ctrl?: Control): Promise<ReportingWebhookEntity>;
}
export { ReportingWebhookEntity };
