(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-class/ensure/class", "@dikac/t-class/assert/throwable/class", "./standard"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const class_1 = require("@dikac/t-class/ensure/class");
    const class_2 = require("@dikac/t-class/assert/throwable/class");
    const standard_1 = require("./standard");
    /**
     * create {@see Table} from {@see Alias}
     */
    function Metadata(alias, aliased) {
        let constructor = class_1.default(alias.target, (value) => class_2.default(value, 'Alias.metadata'));
        return new standard_1.default(constructor, alias.name, aliased);
    }
    exports.default = Metadata;
});
//# sourceMappingURL=metadata.js.map