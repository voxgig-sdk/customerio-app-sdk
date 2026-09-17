
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class InboxMessageEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'inbox_message'
    this.name_ = 'inbox_message'
    this.Name = 'InboxMessage'
  }


  make() {
    return new InboxMessageEntity(this._client, this.entopts())
  }







}


module.exports = {
  InboxMessageEntity
}
