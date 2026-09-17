import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { SubscriptionChannel } from '../CustomerioAppTypes';
declare class SubscriptionChannelEntity extends CustomerioAppEntityBase<SubscriptionChannel> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SubscriptionChannelEntity): SubscriptionChannelEntity;
}
export { SubscriptionChannelEntity };
