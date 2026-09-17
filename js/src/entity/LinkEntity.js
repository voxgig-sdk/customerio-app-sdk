
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class LinkEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'link'
    this.name_ = 'link'
    this.Name = 'Link'
  }


  make() {
    return new LinkEntity(this._client, this.entopts())
  }







}


module.exports = {
  LinkEntity
}
