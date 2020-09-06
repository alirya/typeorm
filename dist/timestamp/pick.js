(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/pick"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const pick_1 = require("@dikac/t-object/pick");
    function Pick(object) {
        return pick_1.default(object, 'updated', 'created');
    }
    exports.default = Pick;
});
//# sourceMappingURL=pick.js.map