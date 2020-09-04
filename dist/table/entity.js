(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./metadata", "./string/multiple-entity-found", "./string/entity-not-found"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const metadata_1 = require("./metadata");
    const multiple_entity_found_1 = require("./string/multiple-entity-found");
    const entity_not_found_1 = require("./string/entity-not-found");
    function Entity(builder, entity) {
        const aliases = builder.expressionMap.aliases.filter((metadata) => metadata.target === entity);
        if (aliases.length === 1) {
            return metadata_1.default(aliases[0], builder.expressionMap.aliasNamePrefixingEnabled);
        }
        else if (aliases.length === 0) {
            throw new Error(entity_not_found_1.default(false, entity, builder));
        }
        else {
            throw new Error(multiple_entity_found_1.default(entity, builder));
        }
    }
    exports.default = Entity;
});
//# sourceMappingURL=entity.js.map