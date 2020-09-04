(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    function NotUndefined(valid, entity, primaryKey) {
        if (valid) {
            return `entity ${name_1.default(entity)}.${primaryKey.toString()} is not "undefined"`;
        }
        else {
            return `entity ${name_1.default(entity)}.${primaryKey.toString()} must not be "undefined" for current operation`;
        }
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map