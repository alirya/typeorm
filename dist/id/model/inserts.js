(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("../assert/undefined");
    /**
     * basic insert operation
     *
     */
    function Inserts(manager, entities, entity) {
        if (entities.length === 0) {
            return Promise.resolve([]);
        }
        // TODO IMPROVE THIS
        entities.forEach((v) => undefined_1.default(v));
        if (!entity) {
            for (let value of entities) {
                entity = value.constructor;
                break;
            }
        }
        return manager.getRepository(entity).insert(entities).then(() => entities);
    }
    exports.default = Inserts;
});
//# sourceMappingURL=inserts.js.map