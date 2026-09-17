
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class EndEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'end'
    this.name_ = 'end'
    this.Name = 'End'
  }


  make() {
    return new EndEntity(this._client, this.entopts())
  }







}


module.exports = {
  EndEntity
}
