import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { EspSuppression, EspSuppressionLoadMatch, EspSuppressionCreateData, EspSuppressionRemoveMatch } from '../CustomerioAppTypes';
declare class EspSuppressionEntity extends CustomerioAppEntityBase<EspSuppression> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: EspSuppressionEntity): EspSuppressionEntity;
    load(this: any, reqmatch?: EspSuppressionLoadMatch, ctrl?: Control): Promise<EspSuppressionEntity>;
    create(this: any, reqdata?: EspSuppressionCreateData, ctrl?: Control): Promise<EspSuppressionEntity>;
    remove(this: any, reqmatch?: EspSuppressionRemoveMatch, ctrl?: Control): Promise<EspSuppressionEntity>;
}
export { EspSuppressionEntity };
