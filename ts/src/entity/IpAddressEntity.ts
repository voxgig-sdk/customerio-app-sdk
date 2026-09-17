
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
  IpAddress,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class IpAddressEntity extends CustomerioAppEntityBase<IpAddress> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'ip_address'
    this.name_ = 'ip_address'
    this.Name = 'IpAddress'
  }


  make(this: IpAddressEntity) {
    return new IpAddressEntity(this._client, this.entopts())
  }







}


export {
  IpAddressEntity
}
