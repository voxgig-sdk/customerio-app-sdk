"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionChannelEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class SubscriptionChannelEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'subscription_channel';
        this.name_ = 'subscription_channel';
        this.Name = 'SubscriptionChannel';
    }
    make() {
        return new SubscriptionChannelEntity(this._client, this.entopts());
    }
}
exports.SubscriptionChannelEntity = SubscriptionChannelEntity;
//# sourceMappingURL=SubscriptionChannelEntity.js.map