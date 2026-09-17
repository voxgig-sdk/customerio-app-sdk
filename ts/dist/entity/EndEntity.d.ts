import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { End } from '../CustomerioAppTypes';
declare class EndEntity extends CustomerioAppEntityBase<End> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: EndEntity): EndEntity;
}
export { EndEntity };
