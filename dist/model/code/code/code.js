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
    var Code;
    (function (Code) {
        Code[Code["SUCCESS"] = 200] = "SUCCESS";
        Code[Code["ARGUMENT"] = 422] = "ARGUMENT";
        Code[Code["NOT_FOUND"] = 404] = "NOT_FOUND";
        Code[Code["INTEGRITY"] = 422] = "INTEGRITY";
    })(Code || (Code = {}));
    exports.default = Code;
});
//# sourceMappingURL=code.js.map