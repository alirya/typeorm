(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-array/validator/list-all", "@dikac/t-array/validatable/and", "@dikac/t-array/message/message/list/invalid", "../../validator/id", "@dikac/t-array/validator/value-partial", "@dikac/t-array/validator/array-standard", "@dikac/t-array/validatable/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_all_1 = require("@dikac/t-array/validator/list-all");
    const and_1 = require("@dikac/t-array/validatable/and");
    const invalid_1 = require("@dikac/t-array/message/message/list/invalid");
    const id_1 = require("../../validator/id");
    const value_partial_1 = require("@dikac/t-array/validator/value-partial");
    const array_standard_1 = require("@dikac/t-array/validator/array-standard");
    const and_2 = require("@dikac/t-array/validatable/and");
    function Ids() {
        return value_partial_1.default([
            array_standard_1.default(),
            list_all_1.default(id_1.default(), and_1.default, invalid_1.default)
        ], and_2.default, invalid_1.default);
    }
    exports.default = Ids;
});
//# sourceMappingURL=ids.js.map