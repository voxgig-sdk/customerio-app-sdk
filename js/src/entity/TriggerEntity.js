
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class TriggerEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'trigger'
    this.name_ = 'trigger'
    this.Name = 'Trigger'
  }


  make() {
    return new TriggerEntity(this._client, this.entopts())
  }







}


module.exports = {
  TriggerEntity
}
