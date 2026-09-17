import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { SenderIdentity, SenderIdentityLoadMatch, SenderIdentityListMatch } from '../CustomerioAppTypes';
declare class SenderIdentityEntity extends CustomerioAppEntityBase<SenderIdentity> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SenderIdentityEntity): SenderIdentityEntity;
    load(this: any, reqmatch?: SenderIdentityLoadMatch, ctrl?: Control): Promise<SenderIdentityEntity>;
    list(this: any, reqmatch?: SenderIdentityListMatch, ctrl?: Control): Promise<SenderIdentityEntity[]>;
}
export { SenderIdentityEntity };
