
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class SmsEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'sms'
    this.name_ = 'sms'
    this.Name = 'Sms'
  }


  make() {
    return new SmsEntity(this._client, this.entopts())
  }







}


module.exports = {
  SmsEntity
}
