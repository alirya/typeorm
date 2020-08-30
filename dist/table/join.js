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
    class Join {
        constructor(main, key, relation, name) {
            this.main = main;
            this.key = key;
            this.relation = relation;
            this.table = main.table;
            this.entity = main.entity;
            if (name === undefined) {
                this.table += key;
            }
            else {
                this.table += name;
            }
            this.table += relation.table;
        }
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map