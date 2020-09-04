(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/object", "@dikac/t-string/boolean/string", "@dikac/t-number/boolean/number", "@dikac/t-array/boolean/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const object_1 = require("@dikac/t-object/boolean/object");
    const string_1 = require("@dikac/t-string/boolean/string");
    const number_1 = require("@dikac/t-number/boolean/number");
    const array_1 = require("@dikac/t-array/boolean/array");
    function Mysql(value) {
        if (!object_1.default(value)) {
            return false;
        }
        if (!string_1.default(value.name)) {
            return false;
        }
        if (!string_1.default(value.message)) {
            return false;
        }
        if (!string_1.default(value.code)) {
            return false;
        }
        if (!string_1.default(value.sqlMessage)) {
            return false;
        }
        if (!string_1.default(value.sqlState)) {
            return false;
        }
        if (!string_1.default(value.sql)) {
            return false;
        }
        if (!string_1.default(value.query)) {
            return false;
        }
        if (!number_1.default(value.index)) {
            return false;
        }
        if (!number_1.default(value.errno)) {
            return false;
        }
        if (!array_1.default(value.parameters)) {
            return false;
        }
        return true;
    }
    exports.default = Mysql;
});
//# sourceMappingURL=mysql.js.map