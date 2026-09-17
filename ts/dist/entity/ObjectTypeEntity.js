"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTypeEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class ObjectTypeEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'object_type';
        this.name_ = 'object_type';
        this.Name = 'ObjectType';
    }
    make() {
        return new ObjectTypeEntity(this._client, this.entopts());
    }
}
exports.ObjectTypeEntity = ObjectTypeEntity;
//# sourceMappingURL=ObjectTypeEntity.js.map