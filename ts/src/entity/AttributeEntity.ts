
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
  Attribute,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class AttributeEntity extends CustomerioAppEntityBase<Attribute> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'attribute'
    this.name_ = 'attribute'
    this.Name = 'Attribute'
  }


  make(this: AttributeEntity) {
    return new AttributeEntity(this._client, this.entopts())
  }







}


export {
  AttributeEntity
}
