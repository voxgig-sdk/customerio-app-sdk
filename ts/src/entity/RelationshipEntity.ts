
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
  Relationship,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class RelationshipEntity extends CustomerioAppEntityBase<Relationship> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'relationship'
    this.name_ = 'relationship'
    this.Name = 'Relationship'
  }


  make(this: RelationshipEntity) {
    return new RelationshipEntity(this._client, this.entopts())
  }







}


export {
  RelationshipEntity
}
