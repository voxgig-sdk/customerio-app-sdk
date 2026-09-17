import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { DataIndex, DataIndexCreateData } from '../CustomerioAppTypes';
declare class DataIndexEntity extends CustomerioAppEntityBase<DataIndex> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: DataIndexEntity): DataIndexEntity;
    create(this: any, reqdata?: DataIndexCreateData, ctrl?: Control): Promise<DataIndexEntity>;
}
export { DataIndexEntity };
