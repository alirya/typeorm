import EnsureString from "@dikac/t-string/ensure/string";
export default class RequiredReadonlyNumber {
    constructor(entity) {
        this.entity = entity;
    }
    get id() {
        return EnsureString(this.entity.id, () => new Error('id is not provided'));
    }
}
//# sourceMappingURL=required-readonly-string.js.map