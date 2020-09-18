export default function Order(query, column, value, nulls) {
    query.orderBy(`${column.column}`, value, nulls);
    return column;
}
//# sourceMappingURL=order.js.map