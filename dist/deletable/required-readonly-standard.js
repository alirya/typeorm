export default class RequiredReadonlyStandard {
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
//# sourceMappingURL=required-readonly-standard.js.map