import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { InApp } from '../CustomerioAppTypes';
declare class InAppEntity extends CustomerioAppEntityBase<InApp> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: InAppEntity): InAppEntity;
}
export { InAppEntity };
