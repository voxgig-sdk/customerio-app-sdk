import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Suppression } from '../CustomerioAppTypes';
declare class SuppressionEntity extends CustomerioAppEntityBase<Suppression> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SuppressionEntity): SuppressionEntity;
}
export { SuppressionEntity };
