"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class EmailEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'email';
        this.name_ = 'email';
        this.Name = 'Email';
    }
    make() {
        return new EmailEntity(this._client, this.entopts());
    }
}
exports.EmailEntity = EmailEntity;
//# sourceMappingURL=EmailEntity.js.map