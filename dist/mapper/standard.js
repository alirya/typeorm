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
    class Standard {
        constructor(table, query) {
            this.table = table;
            this.query = query;
            if (table.table !== query.alias) {
                throw new TypeError('column.name and query.alias does not match');
            }
        }
        call(handler) {
            const builder = handler(this.query, this.table);
            if (builder === this.query) {
                return this;
            }
            return new Standard(this.table, builder);
        }
        join(handler) {
            const builder = handler(this.query, this.table);
            return new Standard(builder[0], builder[1]);
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map