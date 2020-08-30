(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value", "@dikac/t-string/affix-character"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./value");
    const affix_character_1 = require("@dikac/t-string/affix-character");
    class Like extends value_1.default {
        constructor(argument, column, value, padding) {
            if (padding) {
                value = affix_character_1.default(value, '%', padding);
            }
            super(argument, column, value);
        }
        get query() {
            return `${this.column} LIKE :${this.parameter}`;
        }
    }
    exports.default = Like;
});
//# sourceMappingURL=like.js.map