import AffixCharacter from "@dikac/t-string/affix-character";
export default function Like(query, column, padding) {
    let value = column.value;
    if (padding) {
        value = AffixCharacter(value, '%', padding);
    }
    query.andWhere(`${column.column} LIKE :${column.parameter}`, { [column.parameter]: value });
    return column;
}
//# sourceMappingURL=like.js.map