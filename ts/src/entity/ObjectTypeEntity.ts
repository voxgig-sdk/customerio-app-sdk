
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
  ObjectType,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class ObjectTypeEntity extends CustomerioAppEntityBase<ObjectType> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'object_type'
    this.name_ = 'object_type'
    this.Name = 'ObjectType'
  }


  make(this: ObjectTypeEntity) {
    return new ObjectTypeEntity(this._client, this.entopts())
  }







}


export {
  ObjectTypeEntity
}
