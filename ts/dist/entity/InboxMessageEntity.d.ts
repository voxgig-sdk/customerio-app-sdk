import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { InboxMessage } from '../CustomerioAppTypes';
declare class InboxMessageEntity extends CustomerioAppEntityBase<InboxMessage> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: InboxMessageEntity): InboxMessageEntity;
}
export { InboxMessageEntity };
