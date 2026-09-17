"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class ActionEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'action';
        this.name_ = 'action';
        this.Name = 'Action';
    }
    make() {
        return new ActionEntity(this._client, this.entopts());
    }
}
exports.ActionEntity = ActionEntity;
//# sourceMappingURL=ActionEntity.js.map