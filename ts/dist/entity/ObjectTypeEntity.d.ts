import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { ObjectType } from '../CustomerioAppTypes';
declare class ObjectTypeEntity extends CustomerioAppEntityBase<ObjectType> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ObjectTypeEntity): ObjectTypeEntity;
}
export { ObjectTypeEntity };
