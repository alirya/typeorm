(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-number/ensure/positive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const positive_1 = require("@dikac/t-number/ensure/positive");
    function Paginate(query, page, limit) {
        page = positive_1.default(page);
        limit = positive_1.default(limit);
        query.limit(limit);
        let skip = (page - 1) * limit;
        if (skip > 0) {
            query.skip(skip);
        }
        return query;
    }
    exports.default = Paginate;
});
//# sourceMappingURL=paginate.js.map