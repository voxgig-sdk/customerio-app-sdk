"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuppressionEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class SuppressionEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'suppression';
        this.name_ = 'suppression';
        this.Name = 'Suppression';
    }
    make() {
        return new SuppressionEntity(this._client, this.entopts());
    }
}
exports.SuppressionEntity = SuppressionEntity;
//# sourceMappingURL=SuppressionEntity.js.map