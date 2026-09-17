
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
  Delivery,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class DeliveryEntity extends CustomerioAppEntityBase<Delivery> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'delivery'
    this.name_ = 'delivery'
    this.Name = 'Delivery'
  }


  make(this: DeliveryEntity) {
    return new DeliveryEntity(this._client, this.entopts())
  }







}


export {
  DeliveryEntity
}
