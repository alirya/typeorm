(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/not-undefined", "@dikac/t-function/assert/callback", "./throwable/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../boolean/not-undefined");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const not_undefined_2 = require("./throwable/not-undefined");
    function NotUndefined(entity, error = not_undefined_2.default) {
        callback_1.default(entity, not_undefined_1.default, error);
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map