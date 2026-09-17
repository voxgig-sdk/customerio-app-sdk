
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class StartEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'start'
    this.name_ = 'start'
    this.Name = 'Start'
  }


  make() {
    return new StartEntity(this._client, this.entopts())
  }







}


module.exports = {
  StartEntity
}
