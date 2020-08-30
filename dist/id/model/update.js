(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../database/update"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const update_1 = require("../../database/update");
    function Update(manager, entity, detaches = []) {
        return update_1.default(manager, entity, 'id', detaches);
    }
    exports.default = Update;
});
//# sourceMappingURL=update.js.map