"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class EndEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'end';
        this.name_ = 'end';
        this.Name = 'End';
    }
    make() {
        return new EndEntity(this._client, this.entopts());
    }
}
exports.EndEntity = EndEntity;
//# sourceMappingURL=EndEntity.js.map