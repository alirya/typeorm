import MapKeyCallback from "@dikac/t-object/map-key-callback";
import Standard from "../column/standard";
export default class Value {
    constructor(table, value) {
        this.table = table;
        this.value = value;
        this.key = [];
        /**
         * aliases
         */
        this.column = [];
        this.argument = MapKeyCallback(value, (key) => {
            let standard = new Standard(table, key);
            this.key.push(key);
            this.column.push(standard.column);
            return standard.column;
        });
    }
}
//# sourceMappingURL=value.js.map