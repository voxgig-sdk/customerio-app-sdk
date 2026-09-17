
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class InAppEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'in_app'
    this.name_ = 'in_app'
    this.Name = 'InApp'
  }


  make() {
    return new InAppEntity(this._client, this.entopts())
  }







}


module.exports = {
  InAppEntity
}
