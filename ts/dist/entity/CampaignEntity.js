"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class CampaignEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'campaign';
        this.name_ = 'campaign';
        this.Name = 'Campaign';
    }
    make() {
        return new CampaignEntity(this._client, this.entopts());
    }
}
exports.CampaignEntity = CampaignEntity;
//# sourceMappingURL=CampaignEntity.js.map