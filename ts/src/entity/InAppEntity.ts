
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
  InApp,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class InAppEntity extends CustomerioAppEntityBase<InApp> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'in_app'
    this.name_ = 'in_app'
    this.Name = 'InApp'
  }


  make(this: InAppEntity) {
    return new InAppEntity(this._client, this.entopts())
  }







}


export {
  InAppEntity
}
