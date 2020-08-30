(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const standard_1 = require("./standard");
    class Parameter extends standard_1.default {
        constructor(table, key) {
            super(table, key);
            this.parameter = `${table.table}${key}`;
        }
    }
    exports.default = Parameter;
});
//# sourceMappingURL=parameter.js.map