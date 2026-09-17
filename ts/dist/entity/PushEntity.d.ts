import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Push } from '../CustomerioAppTypes';
declare class PushEntity extends CustomerioAppEntityBase<Push> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: PushEntity): PushEntity;
}
export { PushEntity };
