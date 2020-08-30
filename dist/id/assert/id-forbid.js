(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/id", "../throwable/id-defined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const id_1 = require("../boolean/id");
    const id_defined_1 = require("../throwable/id-defined");
    function IdForbid(entity, message = null) {
        if (!id_1.default(entity)) {
            return entity;
        }
        throw message ? new id_defined_1.default(message) : new id_defined_1.default();
    }
    exports.default = IdForbid;
});
//# sourceMappingURL=id-forbid.js.map