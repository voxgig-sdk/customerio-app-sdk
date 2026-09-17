
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class LanguageEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'language'
    this.name_ = 'language'
    this.Name = 'Language'
  }


  make() {
    return new LanguageEntity(this._client, this.entopts())
  }







}


module.exports = {
  LanguageEntity
}
