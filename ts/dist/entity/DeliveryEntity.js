"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class DeliveryEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'delivery';
        this.name_ = 'delivery';
        this.Name = 'Delivery';
    }
    make() {
        return new DeliveryEntity(this._client, this.entopts());
    }
}
exports.DeliveryEntity = DeliveryEntity;
//# sourceMappingURL=DeliveryEntity.js.map