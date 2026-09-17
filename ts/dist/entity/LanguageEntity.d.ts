import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Language } from '../CustomerioAppTypes';
declare class LanguageEntity extends CustomerioAppEntityBase<Language> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
}
export { LanguageEntity };
