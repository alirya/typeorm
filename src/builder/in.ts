import Table from "../table/table";
import {QueryBuilder, WhereExpressionBuilder} from "typeorm";
import Column from "../table/column/column";
import BaseParameter from "@alirya/function/parameter/parameter";
import ArgumentContainer from "@alirya/function/argument/argument";

export default function In<ValueType extends unknown[],
    ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, ValueType>>,
    Builder extends QueryBuilder<unknown> & WhereExpressionBuilder,
>(
    query : Builder,
    column : ColumnType
) : Builder {

    return query.andWhere(`${column.column} IN (:...${column.parameter})`, column.argument);
}


