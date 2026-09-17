import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Campaign } from '../CustomerioAppTypes';
declare class CampaignEntity extends CustomerioAppEntityBase<Campaign> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: CampaignEntity): CampaignEntity;
}
export { CampaignEntity };
