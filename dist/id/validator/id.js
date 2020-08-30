(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/validator/number-standard", "@dikac/t-number/validator/positive-standard", "@dikac/t-array/validator/value-partial", "@dikac/t-array/validatable/and", "@dikac/t-array/message/message/list/invalid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_standard_1 = require("@dikac/t-number/validator/number-standard");
    const positive_standard_1 = require("@dikac/t-number/validator/positive-standard");
    const value_partial_1 = require("@dikac/t-array/validator/value-partial");
    const and_1 = require("@dikac/t-array/validatable/and");
    const invalid_1 = require("@dikac/t-array/message/message/list/invalid");
    function Id(messages) {
        let validator = [
            number_standard_1.default(),
            positive_standard_1.default()
        ];
        return value_partial_1.default(validator, and_1.default, invalid_1.default);
    }
    exports.default = Id;
});
//# sourceMappingURL=id.js.map