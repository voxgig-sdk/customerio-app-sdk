import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Action } from '../CustomerioAppTypes';
declare class ActionEntity extends CustomerioAppEntityBase<Action> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ActionEntity): ActionEntity;
}
export { ActionEntity };
