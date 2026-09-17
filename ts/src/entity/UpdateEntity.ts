
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
  Update,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class UpdateEntity extends CustomerioAppEntityBase<Update> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'update'
    this.name_ = 'update'
    this.Name = 'Update'
  }


  make(this: UpdateEntity) {
    return new UpdateEntity(this._client, this.entopts())
  }







}


export {
  UpdateEntity
}
