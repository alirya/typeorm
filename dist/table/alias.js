(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./metadata", "./string/alias-not-found"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const metadata_1 = require("./metadata");
    const alias_not_found_1 = require("./string/alias-not-found");
    function Alias(builder, alias, entity) {
        for (let metadata of builder.expressionMap.aliases) {
            if (metadata.name !== alias) {
                continue;
            }
            if (entity) {
                if (metadata.target !== entity) {
                    continue;
                }
            }
            return metadata_1.default(metadata, builder.expressionMap.aliasNamePrefixingEnabled);
        }
        throw new Error(alias_not_found_1.default(false, builder, alias, entity));
    }
    exports.default = Alias;
});
//# sourceMappingURL=alias.js.map