
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
  InboxMessage,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class InboxMessageEntity extends CustomerioAppEntityBase<InboxMessage> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'inbox_message'
    this.name_ = 'inbox_message'
    this.Name = 'InboxMessage'
  }


  make(this: InboxMessageEntity) {
    return new InboxMessageEntity(this._client, this.entopts())
  }







}


export {
  InboxMessageEntity
}
