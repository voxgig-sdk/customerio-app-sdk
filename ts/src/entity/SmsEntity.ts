
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
  Sms,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class SmsEntity extends CustomerioAppEntityBase<Sms> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'sms'
    this.name_ = 'sms'
    this.Name = 'Sms'
  }


  make(this: SmsEntity) {
    return new SmsEntity(this._client, this.entopts())
  }







}


export {
  SmsEntity
}
