"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class SmsEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'sms';
        this.name_ = 'sms';
        this.Name = 'Sms';
    }
    make() {
        return new SmsEntity(this._client, this.entopts());
    }
}
exports.SmsEntity = SmsEntity;
//# sourceMappingURL=SmsEntity.js.map