(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./mysql"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const mysql_1 = require("./mysql");
    function InvalidRelation(value) {
        if (mysql_1.default(value)) {
            return value.errno === 1452;
        }
        return false;
    }
    exports.default = InvalidRelation;
});
//# sourceMappingURL=invalid-relation.js.map