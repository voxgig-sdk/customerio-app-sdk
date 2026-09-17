
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
  Trigger,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class TriggerEntity extends CustomerioAppEntityBase<Trigger> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'trigger'
    this.name_ = 'trigger'
    this.Name = 'Trigger'
  }


  make(this: TriggerEntity) {
    return new TriggerEntity(this._client, this.entopts())
  }







}


export {
  TriggerEntity
}
