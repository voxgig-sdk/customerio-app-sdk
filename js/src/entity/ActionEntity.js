
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class ActionEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'action'
    this.name_ = 'action'
    this.Name = 'Action'
  }


  make() {
    return new ActionEntity(this._client, this.entopts())
  }







}


module.exports = {
  ActionEntity
}
