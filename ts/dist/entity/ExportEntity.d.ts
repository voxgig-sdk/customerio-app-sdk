import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Export, ExportLoadMatch, ExportListMatch, ExportCreateData } from '../CustomerioAppTypes';
declare class ExportEntity extends CustomerioAppEntityBase<Export> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ExportEntity): ExportEntity;
    load(this: any, reqmatch?: ExportLoadMatch, ctrl?: Control): Promise<ExportEntity>;
    list(this: any, reqmatch?: ExportListMatch, ctrl?: Control): Promise<ExportEntity[]>;
    create(this: any, reqdata?: ExportCreateData, ctrl?: Control): Promise<ExportEntity>;
}
export { ExportEntity };
