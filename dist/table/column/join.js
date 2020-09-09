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
    function Join(query, column, join, mode = 'left', select = false) {
        if (mode === 'left') {
            if (select) {
                query.leftJoinAndSelect(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
            }
            else {
                query.leftJoin(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
            }
        }
        else {
            if (select) {
                query.innerJoinAndSelect(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
            }
            else {
                query.innerJoin(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
            }
        }
        return join;
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map