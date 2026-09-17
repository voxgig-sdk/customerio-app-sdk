import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Customer, CustomerLoadMatch, CustomerListMatch, CustomerCreateData } from '../CustomerioAppTypes';
declare class CustomerEntity extends CustomerioAppEntityBase<Customer> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: CustomerEntity): CustomerEntity;
    load(this: any, reqmatch?: CustomerLoadMatch, ctrl?: Control): Promise<CustomerEntity>;
    list(this: any, reqmatch?: CustomerListMatch, ctrl?: Control): Promise<CustomerEntity[]>;
    create(this: any, reqdata?: CustomerCreateData, ctrl?: Control): Promise<CustomerEntity>;
}
export { CustomerEntity };
