
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
  Link,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class LinkEntity extends CustomerioAppEntityBase<Link> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'link'
    this.name_ = 'link'
    this.Name = 'Link'
  }


  make(this: LinkEntity) {
    return new LinkEntity(this._client, this.entopts())
  }







}


export {
  LinkEntity
}
