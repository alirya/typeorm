(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../throwable/not-found"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_found_1 = require("../../throwable/not-found");
    function Read(query) {
        return query.getOne().then((entity) => {
            if (entity) {
                return entity;
            }
            throw new not_found_1.default(`record ${query.alias} not found`, query.getParameters());
        });
    }
    exports.default = Read;
});
//# sourceMappingURL=read.js.map