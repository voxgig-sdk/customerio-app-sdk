import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { TestGroup } from '../CustomerioAppTypes';
declare class TestGroupEntity extends CustomerioAppEntityBase<TestGroup> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: TestGroupEntity): TestGroupEntity;
}
export { TestGroupEntity };
