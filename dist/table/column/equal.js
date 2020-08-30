(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./value");
    class Equal extends value_1.default {
        constructor(argument, column, value) {
            super(argument, column, value);
        }
        get query() {
            return `${this.column} = :${this.parameter}`;
        }
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map