(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/validator/object-standard", "@dikac/t-array/validator/value-partial", "@dikac/t-array/validatable/and", "@dikac/t-array/message/message/list/invalid", "@dikac/t-enum/validator/enum-standard", "../mode"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_standard_1 = require("@dikac/t-object/validator/object-standard");
    const value_partial_1 = require("@dikac/t-array/validator/value-partial");
    const and_1 = require("@dikac/t-array/validatable/and");
    const invalid_1 = require("@dikac/t-array/message/message/list/invalid");
    const enum_standard_1 = require("@dikac/t-enum/validator/enum-standard");
    const mode_1 = require("../mode");
    function Mode() {
        let validator = [
            object_standard_1.default(),
            enum_standard_1.default(mode_1.default)
        ];
        return value_partial_1.default(validator, and_1.default, invalid_1.default);
    }
    exports.default = Mode;
});
//# sourceMappingURL=mode.js.map