import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Link } from '../CustomerioAppTypes';
declare class LinkEntity extends CustomerioAppEntityBase<Link> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: LinkEntity): LinkEntity;
}
export { LinkEntity };
