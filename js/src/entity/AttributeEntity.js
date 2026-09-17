
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class AttributeEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'attribute'
    this.name_ = 'attribute'
    this.Name = 'Attribute'
  }


  make() {
    return new AttributeEntity(this._client, this.entopts())
  }







}


module.exports = {
  AttributeEntity
}
