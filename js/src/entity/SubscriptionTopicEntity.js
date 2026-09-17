
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class SubscriptionTopicEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'subscription_topic'
    this.name_ = 'subscription_topic'
    this.Name = 'SubscriptionTopic'
  }


  make() {
    return new SubscriptionTopicEntity(this._client, this.entopts())
  }







}


module.exports = {
  SubscriptionTopicEntity
}
