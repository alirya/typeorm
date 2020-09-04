import Value from "@dikac/t-value/value";
import Table from "../table";
import Padding from "@dikac/t-string/padding/padding";
import { QueryBuilder, WhereExpression } from "typeorm";
import Column from "./column";
import BaseParameter from "@dikac/t-function/parameter/parameter";
export default function Like<ValueType extends unknown[], ColumnType extends Column<Table<any>> & BaseParameter & Value<string>>(query: QueryBuilder<unknown> & WhereExpression, column: ColumnType, padding: Padding | undefined): ColumnType;
