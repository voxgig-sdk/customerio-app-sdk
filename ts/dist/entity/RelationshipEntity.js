"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class RelationshipEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'relationship';
        this.name_ = 'relationship';
        this.Name = 'Relationship';
    }
    make() {
        return new RelationshipEntity(this._client, this.entopts());
    }
}
exports.RelationshipEntity = RelationshipEntity;
//# sourceMappingURL=RelationshipEntity.js.map