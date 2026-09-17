"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class UpdateEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'update';
        this.name_ = 'update';
        this.Name = 'Update';
    }
    make() {
        return new UpdateEntity(this._client, this.entopts());
    }
}
exports.UpdateEntity = UpdateEntity;
//# sourceMappingURL=UpdateEntity.js.map