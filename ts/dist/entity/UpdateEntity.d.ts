import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Update } from '../CustomerioAppTypes';
declare class UpdateEntity extends CustomerioAppEntityBase<Update> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: UpdateEntity): UpdateEntity;
}
export { UpdateEntity };
