import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Newsletter, NewsletterLoadMatch, NewsletterListMatch, NewsletterCreateData, NewsletterRemoveMatch } from '../CustomerioAppTypes';
declare class NewsletterEntity extends CustomerioAppEntityBase<Newsletter> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: NewsletterEntity): NewsletterEntity;
    load(this: any, reqmatch?: NewsletterLoadMatch, ctrl?: Control): Promise<NewsletterEntity>;
    list(this: any, reqmatch?: NewsletterListMatch, ctrl?: Control): Promise<NewsletterEntity[]>;
    create(this: any, reqdata?: NewsletterCreateData, ctrl?: Control): Promise<NewsletterEntity>;
    remove(this: any, reqmatch?: NewsletterRemoveMatch, ctrl?: Control): Promise<NewsletterEntity>;
}
export { NewsletterEntity };
