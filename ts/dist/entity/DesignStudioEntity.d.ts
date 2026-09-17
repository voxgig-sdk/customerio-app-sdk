import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { DesignStudio, DesignStudioLoadMatch, DesignStudioListMatch, DesignStudioCreateData, DesignStudioUpdateData, DesignStudioRemoveMatch } from '../CustomerioAppTypes';
declare class DesignStudioEntity extends CustomerioAppEntityBase<DesignStudio> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: DesignStudioEntity): DesignStudioEntity;
    load(this: any, reqmatch?: DesignStudioLoadMatch, ctrl?: Control): Promise<DesignStudioEntity>;
    list(this: any, reqmatch?: DesignStudioListMatch, ctrl?: Control): Promise<DesignStudioEntity[]>;
    create(this: any, reqdata?: DesignStudioCreateData, ctrl?: Control): Promise<DesignStudioEntity>;
    update(this: any, reqdata?: DesignStudioUpdateData, ctrl?: Control): Promise<DesignStudioEntity>;
    remove(this: any, reqmatch?: DesignStudioRemoveMatch, ctrl?: Control): Promise<DesignStudioEntity>;
}
export { DesignStudioEntity };
