(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-undefined/boolean/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("@dikac/t-undefined/boolean/undefined");
    /**
     * check if id is undefined
     * @param value
     */
    function Undefined(value) {
        return undefined_1.default(value.id);
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map