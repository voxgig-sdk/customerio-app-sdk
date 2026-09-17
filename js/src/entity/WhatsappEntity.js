
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class WhatsappEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'whatsapp'
    this.name_ = 'whatsapp'
    this.Name = 'Whatsapp'
  }


  make() {
    return new WhatsappEntity(this._client, this.entopts())
  }







}


module.exports = {
  WhatsappEntity
}
