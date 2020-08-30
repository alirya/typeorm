(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/ensure/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("@dikac/t-number/ensure/number");
    class RequiredReadonlyStandard {
        constructor(entity) {
            this.entity = entity;
        }
        get id() {
            return number_1.default(this.entity.id, () => new Error('id is not provided'));
        }
    }
    exports.default = RequiredReadonlyStandard;
});
//# sourceMappingURL=required-readonly-standard.js.map