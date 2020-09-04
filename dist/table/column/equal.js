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
    function Equal(query, column, value) {
        if (column.argument === undefined) {
            let argument = new value_1.default(column.table, column.key, value, column.parameter);
            Equal(query, argument);
            return column;
        }
        else {
            query.andWhere(`${column.column} = :${column.parameter}`, column.argument);
        }
        return column;
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map