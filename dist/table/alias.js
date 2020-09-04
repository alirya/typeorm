(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./metadata", "./string/entity-not-found"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const metadata_1 = require("./metadata");
    const entity_not_found_1 = require("./string/entity-not-found");
    function Alias(builder, entity, alias) {
        for (let metadata of builder.expressionMap.aliases) {
            if (metadata.target === entity && metadata.name === alias) {
                return metadata_1.default(metadata, builder.expressionMap.aliasNamePrefixingEnabled);
            }
        }
        throw new Error(entity_not_found_1.default(false, entity, builder, alias));
    }
    exports.default = Alias;
});
//# sourceMappingURL=alias.js.map