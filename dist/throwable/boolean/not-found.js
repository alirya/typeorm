(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "typeorm/error/EntityNotFoundError"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const EntityNotFoundError_1 = require("typeorm/error/EntityNotFoundError");
    function NotFound(value) {
        return value instanceof EntityNotFoundError_1.EntityNotFoundError;
    }
    exports.default = NotFound;
});
//# sourceMappingURL=not-found.js.map