"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSuppressionEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class SearchSuppressionEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'search_suppression';
        this.name_ = 'search_suppression';
        this.Name = 'SearchSuppression';
    }
    make() {
        return new SearchSuppressionEntity(this._client, this.entopts());
    }
}
exports.SearchSuppressionEntity = SearchSuppressionEntity;
//# sourceMappingURL=SearchSuppressionEntity.js.map