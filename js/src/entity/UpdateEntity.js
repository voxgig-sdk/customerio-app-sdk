
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class UpdateEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'update'
    this.name_ = 'update'
    this.Name = 'Update'
  }


  make() {
    return new UpdateEntity(this._client, this.entopts())
  }







}


module.exports = {
  UpdateEntity
}
