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
    var Mode;
    (function (Mode) {
        Mode["ASCENDING"] = "ASC";
        Mode["DESCENDING"] = "DESC";
    })(Mode || (Mode = {}));
    exports.default = Mode;
});
//# sourceMappingURL=mode.js.map