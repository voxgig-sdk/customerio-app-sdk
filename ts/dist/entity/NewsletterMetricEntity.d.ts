import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { NewsletterMetric, NewsletterMetricLoadMatch, NewsletterMetricListMatch } from '../CustomerioAppTypes';
declare class NewsletterMetricEntity extends CustomerioAppEntityBase<NewsletterMetric> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: NewsletterMetricEntity): NewsletterMetricEntity;
    load(this: any, reqmatch?: NewsletterMetricLoadMatch, ctrl?: Control): Promise<NewsletterMetricEntity>;
    list(this: any, reqmatch?: NewsletterMetricListMatch, ctrl?: Control): Promise<NewsletterMetricEntity[]>;
}
export { NewsletterMetricEntity };
