import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Delivery } from '../CustomerioAppTypes';
declare class DeliveryEntity extends CustomerioAppEntityBase<Delivery> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: DeliveryEntity): DeliveryEntity;
}
export { DeliveryEntity };
