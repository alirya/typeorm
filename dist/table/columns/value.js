(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/map-key-callback", "../column/standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_key_callback_1 = require("@dikac/t-object/map-key-callback");
    const standard_1 = require("../column/standard");
    class Value {
        constructor(table, value) {
            this.table = table;
            this.value = value;
            this.key = [];
            /**
             * aliases
             */
            this.column = [];
            this.argument = map_key_callback_1.default(value, (key) => {
                let standard = new standard_1.default(table, key);
                this.key.push(key);
                this.column.push(standard.column);
                return standard.column;
            });
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map