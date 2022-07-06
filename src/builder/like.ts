import Value from '@alirya/value/value.js';
import Table from '../table/table.js';
import Padding from '@alirya/string/affix/affix.js';
import {QueryBuilder, WhereExpressionBuilder} from 'typeorm';
import Column from '../table/column/column.js';
import BaseParameter from '@alirya/function/parameter/parameter.js';
import {CircumfixParameters} from '@alirya/string/circumfix.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import {SuffixParameters} from '@alirya/string/suffix.js';
import NotUndefined from '@alirya/undefined/boolean/not-undefined.js';

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
