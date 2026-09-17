
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
  Push,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class PushEntity extends CustomerioAppEntityBase<Push> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'push'
    this.name_ = 'push'
    this.Name = 'Push'
  }


  make(this: PushEntity) {
    return new PushEntity(this._client, this.entopts())
  }







}


export {
  PushEntity
}
