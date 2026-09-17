
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
  Action,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class ActionEntity extends CustomerioAppEntityBase<Action> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'action'
    this.name_ = 'action'
    this.Name = 'Action'
  }


  make(this: ActionEntity) {
    return new ActionEntity(this._client, this.entopts())
  }







}


export {
  ActionEntity
}
