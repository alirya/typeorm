(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Updated(valid, result, expectation) {
        if (valid) {
            return `updated result as expected`;
        }
        else {
            return `only  update ${result.raw.affectedRows} lest than expected ${expectation} update`;
        }
    }
    exports.default = Updated;
});
//# sourceMappingURL=updated.js.map