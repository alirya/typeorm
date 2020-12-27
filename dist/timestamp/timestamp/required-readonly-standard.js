import RequiredReadonlyTimestampStandard from "../required-readonly-standard";
export default class RequiredReadonlyStandard {
    constructor(entity) {
        this.entity = entity;
    }
    get timestamp() {
        if (!this.entity.timestamp) {
            throw new Error('timestamp is not provided');
        }
        return new RequiredReadonlyTimestampStandard(this.entity.timestamp);
    }
}
//# sourceMappingURL=required-readonly-standard.js.map