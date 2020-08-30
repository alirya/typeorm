(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/no-id", "../../database/insert"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const no_id_1 = require("../validatable/no-id");
    const insert_1 = require("../../database/insert");
    /**
     * basic id insert operation
     *
     * @param manager
     * @param entity
     * @constructor
     */
    function Insert(manager, entity) {
        let validatable = no_id_1.default(entity);
        if (!validatable.valid) {
            throw new Error(validatable.message);
        }
        return insert_1.default(manager, entity);
    }
    exports.default = Insert;
});
//# sourceMappingURL=insert.js.map