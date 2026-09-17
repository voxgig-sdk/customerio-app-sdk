"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InboxMessageEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class InboxMessageEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'inbox_message';
        this.name_ = 'inbox_message';
        this.Name = 'InboxMessage';
    }
    make() {
        return new InboxMessageEntity(this._client, this.entopts());
    }
}
exports.InboxMessageEntity = InboxMessageEntity;
//# sourceMappingURL=InboxMessageEntity.js.map