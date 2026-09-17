
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
  Whatsapp,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class WhatsappEntity extends CustomerioAppEntityBase<Whatsapp> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'whatsapp'
    this.name_ = 'whatsapp'
    this.Name = 'Whatsapp'
  }


  make(this: WhatsappEntity) {
    return new WhatsappEntity(this._client, this.entopts())
  }







}


export {
  WhatsappEntity
}
