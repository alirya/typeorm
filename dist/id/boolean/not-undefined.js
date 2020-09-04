(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-undefined/boolean/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("@dikac/t-undefined/boolean/not-undefined");
    /**
     * check if id is set
     * @param value
     */
    function NotUndefined(value) {
        return not_undefined_1.default(value.id);
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map