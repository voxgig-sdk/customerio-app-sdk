
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class SubscriptionChannelEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'subscription_channel'
    this.name_ = 'subscription_channel'
    this.Name = 'SubscriptionChannel'
  }


  make() {
    return new SubscriptionChannelEntity(this._client, this.entopts())
  }







}


module.exports = {
  SubscriptionChannelEntity
}
