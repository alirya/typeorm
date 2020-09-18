export default class Standard {
    constructor(table, key) {
        this.table = table;
        this.key = key;
        this.column = '';
        if (table.aliased) {
            this.column = `${table.alias}.${key}`;
        }
        else {
            this.column = key;
        }
    }
}
//# sourceMappingURL=standard.js.map