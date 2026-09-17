
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class ContentEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'content'
    this.name_ = 'content'
    this.Name = 'Content'
  }


  make() {
    return new ContentEntity(this._client, this.entopts())
  }







}


module.exports = {
  ContentEntity
}
