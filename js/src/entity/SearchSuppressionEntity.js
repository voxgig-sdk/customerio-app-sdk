
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class SearchSuppressionEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'search_suppression'
    this.name_ = 'search_suppression'
    this.Name = 'SearchSuppression'
  }


  make() {
    return new SearchSuppressionEntity(this._client, this.entopts())
  }







}


module.exports = {
  SearchSuppressionEntity
}
