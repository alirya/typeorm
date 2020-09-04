import Table from "../table";
import {QueryBuilder, WhereExpression} from "typeorm";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Column from "./column";
import BaseParameter from "@dikac/t-function/parameter/parameter";
import Value from "./value";


export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter
>(
    query : WhereExpression & QueryBuilder<object>,
    column : ColumnType,
    value : any
) : ColumnType;

export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, any>>
>(
    query : WhereExpression & QueryBuilder<object>,
    column : ColumnType
) : ColumnType;

export default function Equal<
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, any>>
>(
    query : WhereExpression & QueryBuilder<object>,
    column : ColumnType,
    value ?: any
) : ColumnType {

    if(column.argument === undefined) {

        let argument = new Value(column.table, column.key, value, column.parameter);
        Equal(query, argument);
        return column;

    } else {

        query.andWhere(`${column.column} = :${column.parameter}`, column.argument);
    }



    return column;
}
