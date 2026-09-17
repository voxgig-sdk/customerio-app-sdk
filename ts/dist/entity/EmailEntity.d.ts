import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Email } from '../CustomerioAppTypes';
declare class EmailEntity extends CustomerioAppEntityBase<Email> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
}
export { EmailEntity };
