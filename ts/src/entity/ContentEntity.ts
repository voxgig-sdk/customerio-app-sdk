
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
  Content,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class ContentEntity extends CustomerioAppEntityBase<Content> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'content'
    this.name_ = 'content'
    this.Name = 'Content'
  }


  make(this: ContentEntity) {
    return new ContentEntity(this._client, this.entopts())
  }







}


export {
  ContentEntity
}
