import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Transactional, TransactionalLoadMatch, TransactionalListMatch, TransactionalUpdateData } from '../CustomerioAppTypes';
declare class TransactionalEntity extends CustomerioAppEntityBase<Transactional> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: TransactionalEntity): TransactionalEntity;
    load(this: any, reqmatch?: TransactionalLoadMatch, ctrl?: Control): Promise<TransactionalEntity>;
    list(this: any, reqmatch?: TransactionalListMatch, ctrl?: Control): Promise<TransactionalEntity[]>;
    update(this: any, reqdata?: TransactionalUpdateData, ctrl?: Control): Promise<TransactionalEntity>;
}
export { TransactionalEntity };
