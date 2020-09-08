(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/not-empty", "@dikac/t-array/boolean/not-empty", "@dikac/t-set/segment"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const not_empty_1 = require("@dikac/t-object/boolean/not-empty");
    const not_empty_2 = require("@dikac/t-array/boolean/not-empty");
    const segment_1 = require("@dikac/t-set/segment");
    class Read {
        constructor(manager, entity) {
            this.manager = manager;
            this.entity = entity;
            this.relations = [];
            this.select = [];
            this.where = {};
            this.cache = undefined;
            this.order = {};
            this.withDeleted = false;
        }
        get option() {
            return {
                cache: this.cache || undefined,
                relations: not_empty_2.default(this.relations) ? [...new segment_1.default('.', this.relations)] : undefined,
                select: not_empty_2.default(this.select) ? this.select : undefined,
                where: not_empty_1.default(this.where) ? this.where : undefined,
                order: not_empty_1.default(this.order) ? this.order : undefined,
                lock: not_empty_1.default(this.lock) ? this.lock : undefined,
                withDeleted: this.withDeleted,
                loadRelationIds: this.loadRelationIds,
                loadEagerRelations: this.loadEagerRelations,
            };
        }
        lockOptimistic(version) {
            this.lock = {
                mode: 'optimistic',
                version: version
            };
        }
        lockDirtyRead() {
            this.lock = { mode: "dirty_read" };
        }
        lockPessimistic(mode) {
            this.lock = { mode: 'pessimistic_' + mode };
        }
        get value() {
            return this.manager.getRepository(this.entity).findOneOrFail(this.option);
        }
    }
    exports.default = Read;
});
//# sourceMappingURL=read.js.map