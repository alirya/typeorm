(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../table/alias"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const alias_1 = require("../../table/alias");
    function Join(query, column, alias, mode = 'left', select = false) {
        if (mode === 'left') {
            if (select) {
                query.leftJoinAndSelect(column.column, alias);
            }
            else {
                query.leftJoin(column.column, alias);
            }
        }
        else {
            if (select) {
                query.innerJoinAndSelect(column.column, alias);
            }
            else {
                query.innerJoin(column.column, alias);
            }
        }
        return alias_1.default(query, alias);
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map