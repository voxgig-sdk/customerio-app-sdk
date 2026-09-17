
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class CampaignEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'campaign'
    this.name_ = 'campaign'
    this.Name = 'Campaign'
  }


  make() {
    return new CampaignEntity(this._client, this.entopts())
  }







}


module.exports = {
  CampaignEntity
}
