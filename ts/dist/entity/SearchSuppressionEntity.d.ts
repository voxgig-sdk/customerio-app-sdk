import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { SearchSuppression } from '../CustomerioAppTypes';
declare class SearchSuppressionEntity extends CustomerioAppEntityBase<SearchSuppression> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SearchSuppressionEntity): SearchSuppressionEntity;
}
export { SearchSuppressionEntity };
