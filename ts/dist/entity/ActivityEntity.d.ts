import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Activity, ActivityListMatch } from '../CustomerioAppTypes';
declare class ActivityEntity extends CustomerioAppEntityBase<Activity> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: ActivityEntity): ActivityEntity;
    list(this: any, reqmatch?: ActivityListMatch, ctrl?: Control): Promise<ActivityEntity[]>;
}
export { ActivityEntity };
