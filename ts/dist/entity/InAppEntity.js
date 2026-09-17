"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InAppEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class InAppEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'in_app';
        this.name_ = 'in_app';
        this.Name = 'InApp';
    }
    make() {
        return new InAppEntity(this._client, this.entopts());
    }
}
exports.InAppEntity = InAppEntity;
//# sourceMappingURL=InAppEntity.js.map