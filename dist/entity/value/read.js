import ObjectNotEmpty from "@dikac/t-object/boolean/not-empty";
import ArrayNotEmpty from "@dikac/t-array/boolean/not-empty";
import Segment from "@dikac/t-set/segment";
export default class Read {
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
            relations: ArrayNotEmpty(this.relations) ? [...new Segment('.', this.relations)] : undefined,
            select: ArrayNotEmpty(this.select) ? this.select : undefined,
            where: ObjectNotEmpty(this.where) ? this.where : undefined,
            order: ObjectNotEmpty(this.order) ? this.order : undefined,
            lock: ObjectNotEmpty(this.lock) ? this.lock : undefined,
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
//# sourceMappingURL=read.js.map