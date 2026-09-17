import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Trigger } from '../CustomerioAppTypes';
declare class TriggerEntity extends CustomerioAppEntityBase<Trigger> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: TriggerEntity): TriggerEntity;
}
export { TriggerEntity };
