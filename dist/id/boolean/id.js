(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/object", "@dikac/t-number/boolean/number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("@dikac/t-object/boolean/object");
    const number_1 = require("@dikac/t-number/boolean/number");
    function Id(value) {
        if (!object_1.default(value)) {
            return false;
        }
        // @ts-ignore
        if (!number_1.default(value.id)) {
            return false;
        }
        // @ts-ignore
        if (!isFinite(value.id)) {
            return false;
        }
        return true;
    }
    exports.default = Id;
});
//# sourceMappingURL=id.js.map