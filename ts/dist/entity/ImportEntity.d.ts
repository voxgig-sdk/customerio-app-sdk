import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Import, ImportLoadMatch, ImportCreateData } from '../CustomerioAppTypes';
declare class ImportEntity extends CustomerioAppEntityBase<Import> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ImportEntity): ImportEntity;
    load(this: any, reqmatch?: ImportLoadMatch, ctrl?: Control): Promise<ImportEntity>;
    create(this: any, reqdata?: ImportCreateData, ctrl?: Control): Promise<ImportEntity>;
}
export { ImportEntity };
