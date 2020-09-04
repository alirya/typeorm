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
    /**
     * basic {@see Table} implementation
     */
    class Standard {
        constructor(entity, alias = entity.name, aliased = true) {
            this.entity = entity;
            this.alias = alias;
            this.aliased = aliased;
        }
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map