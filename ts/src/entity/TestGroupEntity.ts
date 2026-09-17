
import { inspect } from 'node:util'

import { CustomerioAppEntityBase } from '../CustomerioAppEntityBase'

import type {
  CustomerioAppSDK,
} from '../CustomerioAppSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  TestGroup,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class TestGroupEntity extends CustomerioAppEntityBase<TestGroup> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'test_group'
    this.name_ = 'test_group'
    this.Name = 'TestGroup'
  }


  make(this: TestGroupEntity) {
    return new TestGroupEntity(this._client, this.entopts())
  }







}


export {
  TestGroupEntity
}
