"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class PushEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'push';
        this.name_ = 'push';
        this.Name = 'Push';
    }
    make() {
        return new PushEntity(this._client, this.entopts());
    }
}
exports.PushEntity = PushEntity;
//# sourceMappingURL=PushEntity.js.map