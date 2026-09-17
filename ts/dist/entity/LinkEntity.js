"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class LinkEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'link';
        this.name_ = 'link';
        this.Name = 'Link';
    }
    make() {
        return new LinkEntity(this._client, this.entopts());
    }
}
exports.LinkEntity = LinkEntity;
//# sourceMappingURL=LinkEntity.js.map