
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
  End,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class EndEntity extends CustomerioAppEntityBase<End> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'end'
    this.name_ = 'end'
    this.Name = 'End'
  }


  make(this: EndEntity) {
    return new EndEntity(this._client, this.entopts())
  }







}


export {
  EndEntity
}
