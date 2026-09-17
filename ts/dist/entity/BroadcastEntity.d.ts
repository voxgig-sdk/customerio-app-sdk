import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Broadcast, BroadcastLoadMatch, BroadcastListMatch, BroadcastUpdateData } from '../CustomerioAppTypes';
declare class BroadcastEntity extends CustomerioAppEntityBase<Broadcast> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: BroadcastEntity): BroadcastEntity;
    load(this: any, reqmatch?: BroadcastLoadMatch, ctrl?: Control): Promise<BroadcastEntity>;
    list(this: any, reqmatch?: BroadcastListMatch, ctrl?: Control): Promise<BroadcastEntity[]>;
    update(this: any, reqdata?: BroadcastUpdateData, ctrl?: Control): Promise<BroadcastEntity>;
}
export { BroadcastEntity };
