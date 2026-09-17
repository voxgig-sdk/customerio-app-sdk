import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { SubscriptionCenter, SubscriptionCenterLoadMatch, SubscriptionCenterListMatch } from '../CustomerioAppTypes';
declare class SubscriptionCenterEntity extends CustomerioAppEntityBase<SubscriptionCenter> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SubscriptionCenterEntity): SubscriptionCenterEntity;
    load(this: any, reqmatch?: SubscriptionCenterLoadMatch, ctrl?: Control): Promise<SubscriptionCenterEntity>;
    list(this: any, reqmatch?: SubscriptionCenterListMatch, ctrl?: Control): Promise<SubscriptionCenterEntity[]>;
}
export { SubscriptionCenterEntity };
