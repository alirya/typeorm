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
    function Order(query, column, value, nulls) {
        query.orderBy(`${column.column}`, value, nulls);
        return column;
    }
    exports.default = Order;
});
//# sourceMappingURL=order.js.map