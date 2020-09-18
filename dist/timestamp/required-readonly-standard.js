export default class RequiredReadonlyStandard {
    constructor(entity) {
        this.entity = entity;
    }
    get created() {
        if (!this.entity.created) {
            // TODO IMPROVE MESSAGE
            throw new Error('created is not provided');
        }
        return this.entity.created;
    }
    get updated() {
        if (!this.entity.updated) {
            // TODO IMPROVE MESSAGE
            throw new Error('updated is not provided');
        }
        return this.entity.updated;
    }
}
//# sourceMappingURL=required-readonly-standard.js.map