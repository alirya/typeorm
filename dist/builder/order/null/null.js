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
    var Null;
    (function (Null) {
        Null["FIRST"] = "NULLS FIRST";
        Null["LAST"] = "NULLS LAST";
    })(Null || (Null = {}));
    exports.default = Null;
});
//# sourceMappingURL=null.js.map