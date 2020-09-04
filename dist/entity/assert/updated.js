(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/assert/callback", "../boolean/updated", "./throwable/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-function/assert/callback");
    const updated_1 = require("../boolean/updated");
    const undefined_1 = require("./throwable/undefined");
    function Updated(result, expectation, error = undefined_1.default) {
        callback_1.default(result, updated_1.default, error, expectation);
    }
    exports.default = Updated;
});
//# sourceMappingURL=updated.js.map