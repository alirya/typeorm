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
    class Duplicate extends Error {
        constructor(message, value) {
            super(message);
            this.value = value;
            this.code = 409;
        }
    }
    exports.default = Duplicate;
});
//# sourceMappingURL=duplicate.js.map