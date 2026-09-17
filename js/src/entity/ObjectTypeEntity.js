
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class ObjectTypeEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'object_type'
    this.name_ = 'object_type'
    this.Name = 'ObjectType'
  }


  make() {
    return new ObjectTypeEntity(this._client, this.entopts())
  }







}


module.exports = {
  ObjectTypeEntity
}
