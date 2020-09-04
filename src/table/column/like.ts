import Value from "@dikac/t-value/value";
import Table from "../table";
import Padding from "@dikac/t-string/padding/padding";
import AffixCharacter from "@dikac/t-string/affix-character";
import {QueryBuilder, WhereExpression} from "typeorm";
import Column from "./column";
import BaseParameter from "@dikac/t-function/parameter/parameter";

export default function Like<ValueType extends unknown[],
    ColumnType extends Column<Table<any>> &
        BaseParameter &
        Value<string>
>(
    query : QueryBuilder<unknown> & WhereExpression,
    column : ColumnType,
    padding : Padding|undefined
) : ColumnType {

    let value = column.value;

    if(padding) {

        value = AffixCharacter(value, '%', padding);
    }

    query.andWhere(`${column.column} LIKE :${column.parameter}`, {[column.parameter]:value});

    return column;
}
