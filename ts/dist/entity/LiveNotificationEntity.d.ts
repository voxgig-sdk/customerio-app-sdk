import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { LiveNotification, LiveNotificationLoadMatch, LiveNotificationCreateData } from '../CustomerioAppTypes';
declare class LiveNotificationEntity extends CustomerioAppEntityBase<LiveNotification> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: LiveNotificationEntity): LiveNotificationEntity;
    load(this: any, reqmatch?: LiveNotificationLoadMatch, ctrl?: Control): Promise<LiveNotificationEntity>;
    create(this: any, reqdata?: LiveNotificationCreateData, ctrl?: Control): Promise<LiveNotificationEntity>;
}
export { LiveNotificationEntity };
