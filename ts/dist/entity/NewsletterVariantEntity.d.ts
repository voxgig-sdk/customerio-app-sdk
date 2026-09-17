import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { NewsletterVariant, NewsletterVariantLoadMatch, NewsletterVariantListMatch, NewsletterVariantCreateData, NewsletterVariantUpdateData, NewsletterVariantRemoveMatch } from '../CustomerioAppTypes';
declare class NewsletterVariantEntity extends CustomerioAppEntityBase<NewsletterVariant> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: NewsletterVariantEntity): NewsletterVariantEntity;
    load(this: any, reqmatch?: NewsletterVariantLoadMatch, ctrl?: Control): Promise<NewsletterVariantEntity>;
    list(this: any, reqmatch?: NewsletterVariantListMatch, ctrl?: Control): Promise<NewsletterVariantEntity[]>;
    create(this: any, reqdata?: NewsletterVariantCreateData, ctrl?: Control): Promise<NewsletterVariantEntity>;
    update(this: any, reqdata?: NewsletterVariantUpdateData, ctrl?: Control): Promise<NewsletterVariantEntity>;
    remove(this: any, reqmatch?: NewsletterVariantRemoveMatch, ctrl?: Control): Promise<NewsletterVariantEntity>;
}
export { NewsletterVariantEntity };
