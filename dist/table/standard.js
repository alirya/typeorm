/**
 * basic {@see Table} implementation
 */
export default class Standard {
    constructor(entity, alias = entity.name, aliased = true) {
        this.entity = entity;
        this.alias = alias;
        this.aliased = aliased;
    }
}
//# sourceMappingURL=standard.js.map