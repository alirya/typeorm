import Value from "./value";
export default function Equal(query, column, value) {
    if (column.argument === undefined) {
        let argument = new Value(column.table, column.key, value, column.parameter);
        Equal(query, argument);
        return column;
    }
    else {
        query.andWhere(`${column.column} = :${column.parameter}`, column.argument);
    }
    return column;
}
//# sourceMappingURL=equal.js.map