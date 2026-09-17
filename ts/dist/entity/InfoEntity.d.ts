import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Info, InfoListMatch } from '../CustomerioAppTypes';
declare class InfoEntity extends CustomerioAppEntityBase<Info> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: InfoEntity): InfoEntity;
    list(this: any, reqmatch?: InfoListMatch, ctrl?: Control): Promise<InfoEntity[]>;
}
export { InfoEntity };
