(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-undefined/boolean/not-undefined", "./string/id-required", "@dikac/t-validator/validatable/callback-function"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_undefined_1 = require("@dikac/t-undefined/boolean/not-undefined");
    const id_required_1 = require("./string/id-required");
    const callback_function_1 = require("@dikac/t-validator/validatable/callback-function");
    function NoId(id) {
        let callback = callback_function_1.default(id, (o) => not_undefined_1.default(o.id), id_required_1.default);
        return callback;
    }
    exports.default = NoId;
});
//# sourceMappingURL=not-undefined.js.map