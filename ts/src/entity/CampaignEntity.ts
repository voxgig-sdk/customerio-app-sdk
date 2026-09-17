
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
  Campaign,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class CampaignEntity extends CustomerioAppEntityBase<Campaign> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'campaign'
    this.name_ = 'campaign'
    this.Name = 'Campaign'
  }


  make(this: CampaignEntity) {
    return new CampaignEntity(this._client, this.entopts())
  }







}


export {
  CampaignEntity
}
