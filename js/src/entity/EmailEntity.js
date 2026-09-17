
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class EmailEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'email'
    this.name_ = 'email'
    this.Name = 'Email'
  }


  make() {
    return new EmailEntity(this._client, this.entopts())
  }







}


module.exports = {
  EmailEntity
}
