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
    function IdRequired(object) {
        let entity = name_1.default(object.value);
        if (object.valid) {
            return `entity ${entity}.id is not "undefined"`;
        }
        else {
            return `entity ${entity}.id must not be "undefined" for current operation`;
        }
    }
    exports.default = IdRequired;
});
//# sourceMappingURL=id-required.js.map