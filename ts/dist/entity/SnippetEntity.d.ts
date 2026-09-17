import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Snippet, SnippetListMatch, SnippetCreateData, SnippetUpdateData, SnippetRemoveMatch } from '../CustomerioAppTypes';
declare class SnippetEntity extends CustomerioAppEntityBase<Snippet> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SnippetEntity): SnippetEntity;
    list(this: any, reqmatch?: SnippetListMatch, ctrl?: Control): Promise<SnippetEntity[]>;
    create(this: any, reqdata?: SnippetCreateData, ctrl?: Control): Promise<SnippetEntity>;
    update(this: any, reqdata?: SnippetUpdateData, ctrl?: Control): Promise<SnippetEntity>;
    remove(this: any, reqmatch?: SnippetRemoveMatch, ctrl?: Control): Promise<SnippetEntity>;
}
export { SnippetEntity };
