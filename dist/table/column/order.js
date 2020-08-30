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
    class Order extends parameter_1.default {
        constructor(argument, column, value, nulls) {
            super(argument, column);
            this.value = value;
            this.nulls = nulls;
        }
    }
    exports.default = Order;
});
//# sourceMappingURL=order.js.map