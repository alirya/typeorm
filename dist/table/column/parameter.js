import Standard from "./standard";
export default class Parameter extends Standard {
    constructor(table, key, parameter) {
        super(table, key);
        this.parameter = parameter ? parameter : this.column.replace('.', '');
    }
}
//# sourceMappingURL=parameter.js.map