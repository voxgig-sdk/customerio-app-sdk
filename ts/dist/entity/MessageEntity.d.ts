import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase';
import type { CustomerioAppSDK } from '../CustomerioAppSDK';
import type { Control } from '../types';
import type { Message, MessageLoadMatch, MessageListMatch } from '../CustomerioAppTypes';
declare class MessageEntity extends CustomerioAppEntityBase<Message> {
    constructor(client: CustomerioAppSDK, entopts: any);
    make(this: MessageEntity): MessageEntity;
    load(this: any, reqmatch?: MessageLoadMatch, ctrl?: Control): Promise<MessageEntity>;
    list(this: any, reqmatch?: MessageListMatch, ctrl?: Control): Promise<MessageEntity[]>;
}
export { MessageEntity };
