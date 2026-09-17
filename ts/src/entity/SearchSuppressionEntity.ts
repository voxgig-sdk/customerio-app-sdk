
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
  SearchSuppression,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class SearchSuppressionEntity extends CustomerioAppEntityBase<SearchSuppression> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'search_suppression'
    this.name_ = 'search_suppression'
    this.Name = 'SearchSuppression'
  }


  make(this: SearchSuppressionEntity) {
    return new SearchSuppressionEntity(this._client, this.entopts())
  }







}


export {
  SearchSuppressionEntity
}
