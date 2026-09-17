import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Automation, AutomationLoadMatch, AutomationListMatch, AutomationUpdateData } from '../CustomerioAppTypes';
declare class AutomationEntity extends CustomerioAppEntityBase<Automation> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: AutomationEntity): AutomationEntity;
    load(this: any, reqmatch?: AutomationLoadMatch, ctrl?: Control): Promise<AutomationEntity>;
    list(this: any, reqmatch?: AutomationListMatch, ctrl?: Control): Promise<AutomationEntity[]>;
    update(this: any, reqdata?: AutomationUpdateData, ctrl?: Control): Promise<AutomationEntity>;
}
export { AutomationEntity };
