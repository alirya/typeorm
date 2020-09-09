import Column from "./column";
import Table from "../table";
import { SelectQueryBuilder } from "typeorm";
export default function Join<ColumnType extends Column<Table<any>>, ColumnTypeJoin extends Column<Table<any>>>(query: SelectQueryBuilder<any>, column: ColumnType, join: ColumnTypeJoin, mode?: 'left' | 'inner', select?: boolean): ColumnTypeJoin;
