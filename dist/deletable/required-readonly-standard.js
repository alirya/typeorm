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
    class RequiredReadonlyStandard {
        constructor(entity) {
            this.entity = entity;
        }
        get deleted() {
            if (this.entity.deleted === undefined) {
                throw new Error('deleted is not provided');
            }
            return this.entity.deleted;
        }
    }
    exports.default = RequiredReadonlyStandard;
});
//# sourceMappingURL=required-readonly-standard.js.map