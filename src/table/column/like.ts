import Value from "@alirya/value/value";
import Table from "../table";
import Padding from "@alirya/string/affix/affix";
import CricumfixParameter from "@alirya/string/circumfix-parameters";
import {QueryBuilder, WhereExpression, WhereExpressionBuilder} from "typeorm";
import Column from "./column";
import BaseParameter from "@alirya/function/parameter/parameter";
import CircumfixParameters from "@alirya/string/circumfix-parameters";
import PrefixParameters from "../../../../string/dist/prefix-parameters";
import SuffixParameters from "../../../../string/dist/suffix-parameters";
import NotUndefined from "@alirya/undefined/boolean/not-undefined";

export default function Like<ValueType extends unknown[],
    ColumnType extends Column<Table<any>> &
        BaseParameter &
        Value<string>
>(
    query : QueryBuilder<unknown> & WhereExpressionBuilder,
    column : ColumnType,
    padding : Padding|undefined
) : ColumnType {

    let value = column.value;

    if(NotUndefined(padding)) {

        value = CircumfixParameters(value, PrefixParameters, SuffixParameters, padding, ['%']);

    }

    query.andWhere(`${column.column} LIKE :${column.parameter}`, {[column.parameter]:value});

    return column;
}
