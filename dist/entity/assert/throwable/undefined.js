(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/new", "../string/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const new_1 = require("@dikac/t-function/new");
    const undefined_1 = require("../string/undefined");
    function Undefined(entity, primaryKey, error = new_1.default(Error)) {
        return error(undefined_1.default(false, entity, primaryKey));
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map