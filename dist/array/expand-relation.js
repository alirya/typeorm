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
    function ExpandRelation(relation) {
        let list = relation.split('.');
        let length = list.length;
        let adds = [];
        for (let i = 1; i <= length; i++) {
            adds.push(list.slice(0, i).join('.'));
        }
        return adds;
    }
    exports.default = ExpandRelation;
});
//# sourceMappingURL=expand-relation.js.map