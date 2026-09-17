import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Asset, AssetLoadMatch, AssetListMatch, AssetCreateData, AssetUpdateData, AssetRemoveMatch } from '../CustomerioAppTypes';
declare class AssetEntity extends CustomerioAppEntityBase<Asset> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: AssetEntity): AssetEntity;
    load(this: any, reqmatch?: AssetLoadMatch, ctrl?: Control): Promise<AssetEntity>;
    list(this: any, reqmatch?: AssetListMatch, ctrl?: Control): Promise<AssetEntity[]>;
    create(this: any, reqdata?: AssetCreateData, ctrl?: Control): Promise<AssetEntity>;
    update(this: any, reqdata?: AssetUpdateData, ctrl?: Control): Promise<AssetEntity>;
    remove(this: any, reqmatch?: AssetRemoveMatch, ctrl?: Control): Promise<AssetEntity>;
}
export { AssetEntity };
