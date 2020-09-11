(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    function MultipleEntityFound(entity, builder) {
        return `multiple entity "${name_1.default(entity)}" found in "${name_1.default(builder)}".`;
    }
    exports.default = MultipleEntityFound;
});
//# sourceMappingURL=multiple-entity-found.js.map