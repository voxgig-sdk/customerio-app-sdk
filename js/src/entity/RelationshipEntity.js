
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class RelationshipEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'relationship'
    this.name_ = 'relationship'
    this.Name = 'Relationship'
  }


  make() {
    return new RelationshipEntity(this._client, this.entopts())
  }







}


module.exports = {
  RelationshipEntity
}
