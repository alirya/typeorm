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
    class IdDefined extends Error {
        constructor(message = 'Id is defined') {
            super(message);
        }
    }
    exports.default = IdDefined;
});
//# sourceMappingURL=id-defined.js.map