import Parameter from "./parameter";
export default class Value extends Parameter {
    constructor(table, key, value, parameter) {
        super(table, key, parameter);
        this.value = value;
    }
    get argument() {
        return { [this.parameter]: this.value };
    }
}
//# sourceMappingURL=value.js.map