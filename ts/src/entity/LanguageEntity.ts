
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
  Language,
} from '../CustomerioAppTypes'

// TODO: needs Entity superclass
class LanguageEntity extends CustomerioAppEntityBase<Language> {

  constructor(client: CustomerioAppSDK, entopts: any) {
    super(client, entopts)
    this.name = 'language'
    this.name_ = 'language'
    this.Name = 'Language'
  }


  make(this: LanguageEntity) {
    return new LanguageEntity(this._client, this.entopts())
  }







}


export {
  LanguageEntity
}
