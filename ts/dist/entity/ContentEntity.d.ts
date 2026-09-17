import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Content } from '../CustomerioAppTypes';
declare class ContentEntity extends CustomerioAppEntityBase<Content> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ContentEntity): ContentEntity;
}
export { ContentEntity };
