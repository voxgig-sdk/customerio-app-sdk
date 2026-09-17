import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Relationship } from '../CustomerioAppTypes';
declare class RelationshipEntity extends CustomerioAppEntityBase<Relationship> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: RelationshipEntity): RelationshipEntity;
}
export { RelationshipEntity };
