(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/not-undefined", "../assert/throwable/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../assert/not-undefined");
    const not_undefined_2 = require("../assert/throwable/not-undefined");
    function NotUndefined(entity, key, error = not_undefined_2.default) {
        not_undefined_1.default(entity, key, error);
        return entity;
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map