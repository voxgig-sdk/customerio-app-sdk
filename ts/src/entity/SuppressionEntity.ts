
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
  Suppression,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class SuppressionEntity extends CustomerioAppEntityBase<Suppression> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'suppression'
    this.name_ = 'suppression'
    this.Name = 'Suppression'
  }


  make(this: SuppressionEntity) {
    return new SuppressionEntity(this._client, this.entopts())
  }







}


export {
  SuppressionEntity
}
