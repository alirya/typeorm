(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../entity/assert/string/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../../../entity/assert/string/undefined");
    function Undefined(valid, entity) {
        return undefined_1.default(valid, entity, 'id');
    }
    exports.default = Undefined;
});
//# sourceMappingURL=undefined.js.map