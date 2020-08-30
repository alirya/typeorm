(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-undefined/boolean/undefined", "./string/id-undefined", "@dikac/t-validator/validatable/callback", "../../model/code/code/code"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("@dikac/t-undefined/boolean/undefined");
    const id_undefined_1 = require("./string/id-undefined");
    const callback_1 = require("@dikac/t-validator/validatable/callback");
    const code_1 = require("../../model/code/code/code");
    function NoId(id) {
        let callback = callback_1.default(id, (o) => undefined_1.default(o.id), id_undefined_1.default);
        callback.code = code_1.default.ARGUMENT;
        return callback;
    }
    exports.default = NoId;
});
//# sourceMappingURL=no-id.js.map