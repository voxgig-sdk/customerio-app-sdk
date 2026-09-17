
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
  Email,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class EmailEntity extends CustomerioAppEntityBase<Email> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'email'
    this.name_ = 'email'
    this.Name = 'Email'
  }


  make(this: EmailEntity) {
    return new EmailEntity(this._client, this.entopts())
  }







}


export {
  EmailEntity
}
