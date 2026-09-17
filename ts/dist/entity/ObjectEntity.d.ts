import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { ObjectType, ObjectLoadMatch, ObjectListMatch, ObjectCreateData } from '../CustomerioAppTypes';
declare class ObjectEntity extends CustomerioAppEntityBase<ObjectType> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ObjectEntity): ObjectEntity;
    load(this: any, reqmatch?: ObjectLoadMatch, ctrl?: Control): Promise<ObjectEntity>;
    list(this: any, reqmatch?: ObjectListMatch, ctrl?: Control): Promise<ObjectEntity[]>;
    create(this: any, reqdata?: ObjectCreateData, ctrl?: Control): Promise<ObjectEntity>;
}
export { ObjectEntity };
