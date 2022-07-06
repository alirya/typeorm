import Table from '../table/table.js';
import {QueryBuilder, WhereExpressionBuilder} from 'typeorm';
import ArgumentContainer from '@alirya/function/argument/argument.js';
import Column from '../table/column/column.js';
import BaseParameter from '@alirya/function/parameter/parameter.js';
import Value from '../table/column/value.js';
import Standard from '../table/column/standard.js';
import Parameter from '../table/column/parameter.js';


export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter,
    Query extends WhereExpressionBuilder & QueryBuilder<object>,
>(
    query : Query,
    column : ColumnType,
    value : any
) : Query;

export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, any>>,
    Query extends WhereExpressionBuilder & QueryBuilder<object>,
>(
    query : Query,
    column : ColumnType
) : Query;

export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, any>>,
    Query extends WhereExpressionBuilder & QueryBuilder<object>,
>(
    query : Query,
    column : ColumnType,
    value ?: any
) : Query {

    if(column.argument === undefined) {

        let argument = Value(Parameter(Standard(column.table, column.key), column.parameter), value);
        return  Equal(query, argument);
    }

    return query.andWhere(`${column.column} = :${column.parameter}`, column.argument);
}
