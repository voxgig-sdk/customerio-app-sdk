"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class StartEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'start';
        this.name_ = 'start';
        this.Name = 'Start';
    }
    make() {
        return new StartEntity(this._client, this.entopts());
    }
}
exports.StartEntity = StartEntity;
//# sourceMappingURL=StartEntity.js.map