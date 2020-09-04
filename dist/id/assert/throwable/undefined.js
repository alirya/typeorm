(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/undefined", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../string/undefined");
    const new_1 = require("@dikac/t-function/new");
    function NotUndefined(entity, error = new_1.default(Error)) {
        return error(undefined_1.default(false, entity));
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=undefined.js.map