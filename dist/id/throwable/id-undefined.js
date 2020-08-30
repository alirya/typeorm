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
    class IdUndefined extends Error {
        constructor(message = 'Id is not defined') {
            super(message);
        }
    }
    exports.default = IdUndefined;
});
//# sourceMappingURL=id-undefined.js.map