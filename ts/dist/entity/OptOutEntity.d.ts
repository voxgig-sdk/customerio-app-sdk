import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { OptOut, OptOutListMatch, OptOutUpdateData } from '../CustomerioAppTypes';
declare class OptOutEntity extends CustomerioAppEntityBase<OptOut> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: OptOutEntity): OptOutEntity;
    list(this: any, reqmatch?: OptOutListMatch, ctrl?: Control): Promise<OptOutEntity[]>;
    update(this: any, reqdata?: OptOutUpdateData, ctrl?: Control): Promise<OptOutEntity>;
}
export { OptOutEntity };
