"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpAddressEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class IpAddressEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'ip_address';
        this.name_ = 'ip_address';
        this.Name = 'IpAddress';
    }
    make() {
        return new IpAddressEntity(this._client, this.entopts());
    }
}
exports.IpAddressEntity = IpAddressEntity;
//# sourceMappingURL=IpAddressEntity.js.map