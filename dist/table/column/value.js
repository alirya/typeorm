(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./parameter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const parameter_1 = require("./parameter");
    class Value extends parameter_1.default {
        constructor(argument, column, value) {
            super(argument, column);
            this.value = value;
            this.argument = { [this.parameter]: value };
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map