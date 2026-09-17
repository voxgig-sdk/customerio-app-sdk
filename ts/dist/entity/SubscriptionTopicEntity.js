"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionTopicEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class SubscriptionTopicEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'subscription_topic';
        this.name_ = 'subscription_topic';
        this.Name = 'SubscriptionTopic';
    }
    make() {
        return new SubscriptionTopicEntity(this._client, this.entopts());
    }
}
exports.SubscriptionTopicEntity = SubscriptionTopicEntity;
//# sourceMappingURL=SubscriptionTopicEntity.js.map