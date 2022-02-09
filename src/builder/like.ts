import Value from '@alirya/value/value';
import Table from '../table/table';
import Padding from '@alirya/string/affix/affix';
import {QueryBuilder, WhereExpression, WhereExpressionBuilder} from 'typeorm';
import Column from '../table/column/column';
import BaseParameter from '@alirya/function/parameter/parameter';
import CircumfixParameters from '@alirya/string/circumfix-parameters';
import PrefixParameters from '@alirya/string/prefix-parameters';
import SuffixParameters from '@alirya/string/suffix-parameters';
import NotUndefined from '@alirya/undefined/boolean/not-undefined';

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
