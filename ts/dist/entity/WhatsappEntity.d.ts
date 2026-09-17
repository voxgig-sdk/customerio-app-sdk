import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Whatsapp } from '../CustomerioAppTypes';
declare class WhatsappEntity extends CustomerioAppEntityBase<Whatsapp> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: WhatsappEntity): WhatsappEntity;
}
export { WhatsappEntity };
