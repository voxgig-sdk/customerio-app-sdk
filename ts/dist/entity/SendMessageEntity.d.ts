import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { SendMessage, SendMessageCreateData } from '../CustomerioAppTypes';
declare class SendMessageEntity extends CustomerioAppEntityBase<SendMessage> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: SendMessageEntity): SendMessageEntity;
    create(this: any, reqdata?: SendMessageCreateData, ctrl?: Control): Promise<SendMessageEntity>;
}
export { SendMessageEntity };
