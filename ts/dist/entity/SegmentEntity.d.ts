import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Segment, SegmentLoadMatch, SegmentListMatch, SegmentCreateData, SegmentRemoveMatch } from '../CustomerioAppTypes';
declare class SegmentEntity extends CustomerioAppEntityBase<Segment> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    load(this: any, reqmatch?: SegmentLoadMatch, ctrl?: Control): Promise<SegmentEntity>;
    list(this: any, reqmatch?: SegmentListMatch, ctrl?: Control): Promise<SegmentEntity[]>;
    create(this: any, reqdata?: SegmentCreateData, ctrl?: Control): Promise<SegmentEntity>;
    remove(this: any, reqmatch?: SegmentRemoveMatch, ctrl?: Control): Promise<SegmentEntity>;
}
export { SegmentEntity };
