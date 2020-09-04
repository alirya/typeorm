(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/ensure/string"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const string_1 = require("@dikac/t-string/ensure/string");
    class RequiredReadonlyNumber {
        constructor(entity) {
            this.entity = entity;
        }
        get id() {
            return string_1.default(this.entity.id, () => new Error('id is not provided'));
        }
    }
    exports.default = RequiredReadonlyNumber;
});
//# sourceMappingURL=required-readonly-string.js.map