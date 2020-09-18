import EnsureNumber from "@dikac/t-number/ensure/number";
export default class RequiredReadonlyNumber {
    constructor(entity) {
        this.entity = entity;
    }
    get id() {
        return EnsureNumber(this.entity.id, () => new Error('id is not provided'));
    }
}
//# sourceMappingURL=required-readonly-number.js.map