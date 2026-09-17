import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Workspace, WorkspaceListMatch } from '../CustomerioAppTypes';
declare class WorkspaceEntity extends CustomerioAppEntityBase<Workspace> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: WorkspaceEntity): WorkspaceEntity;
    list(this: any, reqmatch?: WorkspaceListMatch, ctrl?: Control): Promise<WorkspaceEntity[]>;
}
export { WorkspaceEntity };
