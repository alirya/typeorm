export default function In(query, column) {
    query.andWhere(`${column.column} IN (:...${column.parameter})`, column.argument);
    return column;
}
//# sourceMappingURL=in.js.map