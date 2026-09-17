import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Sms } from '../CustomerioAppTypes';
declare class SmsEntity extends CustomerioAppEntityBase<Sms> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SmsEntity): SmsEntity;
}
export { SmsEntity };
