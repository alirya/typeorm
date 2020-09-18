import Alias from "../../table/alias";
export default function Join(query, column, alias, mode = 'left', select = false) {
    if (mode === 'left') {
        if (select) {
            query.leftJoinAndSelect(column.column, alias);
        }
        else {
            query.leftJoin(column.column, alias);
        }
    }
    else {
        if (select) {
            query.innerJoinAndSelect(column.column, alias);
        }
        else {
            query.innerJoin(column.column, alias);
        }
    }
    return Alias(query, alias);
}
//# sourceMappingURL=join.js.map