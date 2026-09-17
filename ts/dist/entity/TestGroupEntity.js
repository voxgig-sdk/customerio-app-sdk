"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGroupEntity = void 0;
const CustomerioAppEntityBase_1 = require("../CustomerioAppEntityBase");
// TODO: needs Entity superclass
class TestGroupEntity extends CustomerioAppEntityBase_1.CustomerioAppEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'test_group';
        this.name_ = 'test_group';
        this.Name = 'TestGroup';
    }
    make() {
        return new TestGroupEntity(this._client, this.entopts());
    }
}
exports.TestGroupEntity = TestGroupEntity;
//# sourceMappingURL=TestGroupEntity.js.map