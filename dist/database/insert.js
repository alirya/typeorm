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
     * basic insert operation
     *
     * @param manager
     * @param entity
     * @constructor
     */
    function Insert(manager, entity) {
        return manager.getRepository(entity.constructor).insert(entity).then(() => entity);
    }
    exports.default = Insert;
});
//# sourceMappingURL=insert.js.map