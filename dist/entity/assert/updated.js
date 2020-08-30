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
    function Updated(result, expectation) {
        if (result.raw && isFinite(result.raw.affectedRows)) {
            return result.raw.affectedRows === expectation;
        }
        else {
            throw new Error('Update data not available');
        }
    }
    exports.default = Updated;
});
//# sourceMappingURL=updated.js.map