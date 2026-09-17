"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class AttributeEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'attribute';
        this.name_ = 'attribute';
        this.Name = 'Attribute';
    }
    make() {
        return new AttributeEntity(this._client, this.entopts());
    }
}
exports.AttributeEntity = AttributeEntity;
//# sourceMappingURL=AttributeEntity.js.map