import RequiredReadonlyDeletableStandard from "../required-readonly-standard";
export default class RequiredReadonlyStandard {
    constructor(entity) {
        this.entity = entity;
    }
    get deletable() {
        if (!this.entity.deletable) {
            throw new Error('deletable is not provided');
        }
        return new RequiredReadonlyDeletableStandard(this.entity.deletable);
    }
}
//# sourceMappingURL=required-readonly-standard.js.map