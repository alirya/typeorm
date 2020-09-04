import Table from "../table";
import { QueryBuilder, WhereExpression } from "typeorm";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Column from "./column";
import BaseParameter from "@dikac/t-function/parameter/parameter";
export default function Equal<ColumnType extends Column<Table<any>> & BaseParameter>(query: WhereExpression & QueryBuilder<object>, column: ColumnType, value: any): ColumnType;
export default function Equal<ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, any>>>(query: WhereExpression & QueryBuilder<object>, column: ColumnType): ColumnType;
