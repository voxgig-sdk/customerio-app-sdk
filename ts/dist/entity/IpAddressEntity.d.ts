import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { IpAddress } from '../CustomerioAppTypes';
declare class IpAddressEntity extends CustomerioAppEntityBase<IpAddress> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: IpAddressEntity): IpAddressEntity;
}
export { IpAddressEntity };
