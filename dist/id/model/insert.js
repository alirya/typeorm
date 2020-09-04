(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/undefined", "../../entity/insert"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../validatable/undefined");
    const insert_1 = require("../../entity/insert");
    /**
     * basic id insert operation
     *
     * @param manager
     * @param entity
     * @constructor
     */
    function Insert(manager, entity) {
        let validatable = undefined_1.default(entity);
        if (!validatable.valid) {
            throw new Error(validatable.message);
        }
        return insert_1.default(manager, entity);
    }
    exports.default = Insert;
});
//# sourceMappingURL=insert.js.map