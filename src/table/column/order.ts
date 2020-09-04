import Table from "../table";
import OrderEnum from "../../builder/order/mode/mode";
import Null from "../../builder/order/null/null";
import {SelectQueryBuilder} from "typeorm";
import Column from "./column";


export default function Order<
    ValueType extends unknown[],
    ColumnType extends Column<Table<any>> = Column<Table<any>>
>(
    query : SelectQueryBuilder<any>,
    column : ColumnType,
    value : OrderEnum,
    nulls ?: Null,
) : ColumnType {

    query.orderBy(`${column.column}`, value, nulls);

    return column;
}
