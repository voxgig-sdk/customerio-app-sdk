import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { SubscriptionTopic } from '../CustomerioAppTypes';
declare class SubscriptionTopicEntity extends CustomerioAppEntityBase<SubscriptionTopic> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SubscriptionTopicEntity): SubscriptionTopicEntity;
}
export { SubscriptionTopicEntity };
