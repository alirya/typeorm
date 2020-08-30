(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-undefined/assert/undefined"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const undefined_1 = require("@dikac/t-undefined/assert/undefined");
    /**
     * basic bulk insert operation
     *
     */
    function Inserts(connection, entities, primaryKey, entity) {
        if (entities.length === 0) {
            return Promise.resolve([]);
        }
        entities.forEach((entity) => undefined_1.default(entity[primaryKey]));
        if (!entity) {
            entity = entities[0].constructor;
        }
        return connection.getRepository(entity).save(entities);
    }
    exports.default = Inserts;
});
//# sourceMappingURL=inserts.js.map