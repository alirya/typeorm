(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../throwable/id-undefined", "../boolean/id"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const id_undefined_1 = require("../throwable/id-undefined");
    const id_1 = require("../boolean/id");
    function IdRequired(entity, message) {
        if (id_1.default(entity)) {
            return entity;
        }
        throw message ? new id_undefined_1.default(message) : new id_undefined_1.default();
    }
    exports.default = IdRequired;
});
//# sourceMappingURL=id-required.js.map