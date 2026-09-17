
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class IpAddressEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'ip_address'
    this.name_ = 'ip_address'
    this.Name = 'IpAddress'
  }


  make() {
    return new IpAddressEntity(this._client, this.entopts())
  }







}


module.exports = {
  IpAddressEntity
}
