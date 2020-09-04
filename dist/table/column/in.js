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
    function In(query, column) {
        query.andWhere(`${column.column} IN (:...${column.parameter})`, column.argument);
        return column;
    }
    exports.default = In;
});
//# sourceMappingURL=in.js.map