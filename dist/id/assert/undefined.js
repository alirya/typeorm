(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/undefined", "@dikac/t-function/assert/callback", "./throwable/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../boolean/undefined");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const undefined_2 = require("./throwable/undefined");
    function Undefined(entity, error = undefined_2.default) {
        callback_1.default(entity, undefined_1.default, error);
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map