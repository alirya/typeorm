(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../entity/assert/string/not-undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("../../../entity/assert/string/not-undefined");
    function NotUndefined(valid, entity) {
        return not_undefined_1.default(valid, entity, 'id');
    }
    exports.default = NotUndefined;
});
//# sourceMappingURL=not-undefined.js.map