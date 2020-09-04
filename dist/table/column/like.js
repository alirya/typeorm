(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/affix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const affix_character_1 = require("@dikac/t-string/affix-character");
    function Like(query, column, padding) {
        let value = column.value;
        if (padding) {
            value = affix_character_1.default(value, '%', padding);
        }
        query.andWhere(`${column.column} LIKE :${column.parameter}`, { [column.parameter]: value });
        return column;
    }
    exports.default = Like;
});
//# sourceMappingURL=like.js.map