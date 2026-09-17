"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class LanguageEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'language';
        this.name_ = 'language';
        this.Name = 'Language';
    }
    make() {
        return new LanguageEntity(this._client, this.entopts());
    }
}
exports.LanguageEntity = LanguageEntity;
//# sourceMappingURL=LanguageEntity.js.map