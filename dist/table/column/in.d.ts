import Table from "../table";
import { QueryBuilder, WhereExpression } from "typeorm";
import Column from "./column";
import BaseParameter from "@dikac/t-function/parameter/parameter";
import ArgumentContainer from "@dikac/t-function/argument/argument";
export default function In<ValueType extends unknown[], ColumnType extends Column<Table<any>> & BaseParameter & ArgumentContainer<Record<string, ValueType>>>(query: QueryBuilder<unknown> & WhereExpression, column: ColumnType): ColumnType;
