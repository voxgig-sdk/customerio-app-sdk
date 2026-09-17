
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class SuppressionEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'suppression'
    this.name_ = 'suppression'
    this.Name = 'Suppression'
  }


  make() {
    return new SuppressionEntity(this._client, this.entopts())
  }







}


module.exports = {
  SuppressionEntity
}
