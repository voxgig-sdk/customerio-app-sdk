
const { inspect } = require('node:util')

const { CustomerioAppEntityBase } = require('../CustomerioAppEntityBase')


// TODO: needs Entity superclass
class TestGroupEntity extends CustomerioAppEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'test_group'
    this.name_ = 'test_group'
    this.Name = 'TestGroup'
  }


  make() {
    return new TestGroupEntity(this._client, this.entopts())
  }







}


module.exports = {
  TestGroupEntity
}
