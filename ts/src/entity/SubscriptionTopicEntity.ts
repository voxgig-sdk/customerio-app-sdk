
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
  SubscriptionTopic,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class SubscriptionTopicEntity extends CustomerioAppEntityBase<SubscriptionTopic> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'subscription_topic'
    this.name_ = 'subscription_topic'
    this.Name = 'SubscriptionTopic'
  }


  make(this: SubscriptionTopicEntity) {
    return new SubscriptionTopicEntity(this._client, this.entopts())
  }







}


export {
  SubscriptionTopicEntity
}
