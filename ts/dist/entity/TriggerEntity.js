"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class TriggerEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'trigger';
        this.name_ = 'trigger';
        this.Name = 'Trigger';
    }
    make() {
        return new TriggerEntity(this._client, this.entopts());
    }
}
exports.TriggerEntity = TriggerEntity;
//# sourceMappingURL=TriggerEntity.js.map