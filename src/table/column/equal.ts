import Table from "../table";
import {QueryBuilder, WhereExpression} from "typeorm";
import ArgumentContainer from "@alirya/function/argument/argument";
import Column from "./column";
import BaseParameter from "@alirya/function/parameter/parameter";
import Value from "./value";
import Standard from "./standard";
import Parameter from "./parameter";


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

        let argument = Value(Parameter(new Standard(column.table, column.key), column.parameter), value);
        Equal(query, argument);
        return column;

    } else {

        query.andWhere(`${column.column} = :${column.parameter}`, column.argument);
    }



    return column;
}
