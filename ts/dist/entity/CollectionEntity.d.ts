import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Collection, CollectionLoadMatch, CollectionListMatch, CollectionCreateData, CollectionUpdateData, CollectionRemoveMatch } from '../CustomerioAppTypes';
declare class CollectionEntity extends CustomerioAppEntityBase<Collection> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: CollectionEntity): CollectionEntity;
    load(this: any, reqmatch?: CollectionLoadMatch, ctrl?: Control): Promise<CollectionEntity>;
    list(this: any, reqmatch?: CollectionListMatch, ctrl?: Control): Promise<CollectionEntity[]>;
    create(this: any, reqdata?: CollectionCreateData, ctrl?: Control): Promise<CollectionEntity>;
    update(this: any, reqdata?: CollectionUpdateData, ctrl?: Control): Promise<CollectionEntity>;
    remove(this: any, reqmatch?: CollectionRemoveMatch, ctrl?: Control): Promise<CollectionEntity>;
}
export { CollectionEntity };
