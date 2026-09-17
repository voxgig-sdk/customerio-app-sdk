
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
  SubscriptionChannel,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class SubscriptionChannelEntity extends CustomerioAppEntityBase<SubscriptionChannel> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'subscription_channel'
    this.name_ = 'subscription_channel'
    this.Name = 'SubscriptionChannel'
  }


  make(this: SubscriptionChannelEntity) {
    return new SubscriptionChannelEntity(this._client, this.entopts())
  }







}


export {
  SubscriptionChannelEntity
}
