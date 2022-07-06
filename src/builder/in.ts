import Table from '../table/table.js';
import {QueryBuilder, WhereExpressionBuilder} from 'typeorm';
import Column from '../table/column/column.js';
import BaseParameter from '@alirya/function/parameter/parameter.js';
import ArgumentContainer from '@alirya/function/argument/argument.js';

export default function In<ValueType extends unknown[],
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, ValueType>>,
    Builder extends QueryBuilder<unknown> & WhereExpressionBuilder,
>(
    query : Builder,
    column : ColumnType
) : Builder {

    return query.andWhere(`${column.column} IN (:...${column.parameter})`, column.argument);
}


