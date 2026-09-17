import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Attribute } from '../CustomerioAppTypes';
declare class AttributeEntity extends CustomerioAppEntityBase<Attribute> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: AttributeEntity): AttributeEntity;
}
export { AttributeEntity };
