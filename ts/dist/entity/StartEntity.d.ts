import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Start } from '../CustomerioAppTypes';
declare class StartEntity extends CustomerioAppEntityBase<Start> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: StartEntity): StartEntity;
}
export { StartEntity };
