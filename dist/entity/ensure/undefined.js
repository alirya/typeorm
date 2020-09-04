(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/undefined", "../assert/throwable/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../assert/undefined");
    const undefined_2 = require("../assert/throwable/undefined");
    function Undefined(entity, key, error = undefined_2.default) {
        undefined_1.default(entity, key, error);
        return entity;
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map