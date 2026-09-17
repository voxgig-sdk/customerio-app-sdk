
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class PushEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'push'
    this.name_ = 'push'
    this.Name = 'Push'
  }


  make() {
    return new PushEntity(this._client, this.entopts())
  }







}


module.exports = {
  PushEntity
}
