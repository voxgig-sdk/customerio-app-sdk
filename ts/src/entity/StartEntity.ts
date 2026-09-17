
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
  Start,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class StartEntity extends CustomerioAppEntityBase<Start> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'start'
    this.name_ = 'start'
    this.Name = 'Start'
  }


  make(this: StartEntity) {
    return new StartEntity(this._client, this.entopts())
  }







}


export {
  StartEntity
}
