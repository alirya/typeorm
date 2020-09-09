import Column from "./column";
import Table from "../table";
import {SelectQueryBuilder} from "typeorm";

export default function Join<
    ColumnType extends Column<Table<any>>,
    ColumnTypeJoin extends Column<Table<any>>,
>(
    query : SelectQueryBuilder<any>,
    column : ColumnType,
    join : ColumnTypeJoin,
    mode : 'left'|'inner' = 'left',
    select : boolean = false
) : ColumnTypeJoin {

    if(mode === 'left') {

        if(select) {

            query.leftJoinAndSelect(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);

        } else {

            query.leftJoin(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
        }

    } else {

        if(select) {

            query.innerJoinAndSelect(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);

        } else {

            query.innerJoin(join.table.entity, join.table.alias, `${column.column} = ${join.column}`);
        }
    }

    return join;
}
