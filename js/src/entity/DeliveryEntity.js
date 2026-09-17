
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class DeliveryEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'delivery'
    this.name_ = 'delivery'
    this.Name = 'Delivery'
  }


  make() {
    return new DeliveryEntity(this._client, this.entopts())
  }







}


module.exports = {
  DeliveryEntity
}
