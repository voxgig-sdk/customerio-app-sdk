"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class WhatsappEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'whatsapp';
        this.name_ = 'whatsapp';
        this.Name = 'Whatsapp';
    }
    make() {
        return new WhatsappEntity(this._client, this.entopts());
    }
}
exports.WhatsappEntity = WhatsappEntity;
//# sourceMappingURL=WhatsappEntity.js.map