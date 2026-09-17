import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { DesignStudioEmail, DesignStudioEmailLoadMatch, DesignStudioEmailListMatch, DesignStudioEmailCreateData, DesignStudioEmailUpdateData, DesignStudioEmailRemoveMatch } from '../CustomerioAppTypes';
declare class DesignStudioEmailEntity extends CustomerioAppEntityBase<DesignStudioEmail> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: DesignStudioEmailEntity): DesignStudioEmailEntity;
    load(this: any, reqmatch?: DesignStudioEmailLoadMatch, ctrl?: Control): Promise<DesignStudioEmailEntity>;
    list(this: any, reqmatch?: DesignStudioEmailListMatch, ctrl?: Control): Promise<DesignStudioEmailEntity[]>;
    create(this: any, reqdata?: DesignStudioEmailCreateData, ctrl?: Control): Promise<DesignStudioEmailEntity>;
    update(this: any, reqdata?: DesignStudioEmailUpdateData, ctrl?: Control): Promise<DesignStudioEmailEntity>;
    remove(this: any, reqmatch?: DesignStudioEmailRemoveMatch, ctrl?: Control): Promise<DesignStudioEmailEntity>;
}
export { DesignStudioEmailEntity };
