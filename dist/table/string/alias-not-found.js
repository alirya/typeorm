(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_1 = require("@dikac/t-string/message/sentences");
    function AliasNotFound(valid, builder, alias, entity) {
        let sentence = new sentences_1.default(valid);
        sentence.subject.push('alias', alias);
        if (entity) {
            sentence.subject.push('entity', name_1.default(entity));
        }
        sentence.predicate.valid = [];
        sentence.predicate.valid = ['not'];
        sentence.object.push('found in', name_1.default(builder));
        return sentence.message;
    }
    exports.default = AliasNotFound;
});
//# sourceMappingURL=alias-not-found.js.map