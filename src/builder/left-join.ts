import Column from "../table/column/column";
import Table from "../table/table";
import TableInfer from "../table/entity/infer";
import {SelectQueryBuilder} from "typeorm";
import {List} from "ts-toolbelt";
import Infer from "../table/column/table/infer";
import KeyInfer from "../table/column/key/infer";
import FindAlias from "../table/find-alias";

/**
 * @private
 */
export type Relation<Type extends object, Key extends keyof Type> =
    Type[Key] extends any[] ?
        Objectify<List.UnionOf<Type[Key]>> :
        Objectify<Type[Key]>;

/**
 * @private
 */
export type Objectify<Type extends any> = Type extends object ? Table<new () => Type> : never;


export default function LeftJoin<
    ColumnType extends Column<Table>,
    Builder extends SelectQueryBuilder<any>
    // I extends InstanceType<TableInfer<Infer<ColumnType>>> = InstanceType<TableInfer<Infer<ColumnType>>>,
>(
    query : Builder,
    column : ColumnType,
    alias : string,
    select : boolean = false
) : Builder /*Relation<Required<I>, KeyInfer<ColumnType>>*/ {

    return select
    ? query.leftJoinAndSelect(column.column,  alias)
    : query.leftJoin(column.column,  alias);
    //
    // if(select) {
    //
    //     query.leftJoinAndSelect(column.column,  column.table.alias)
    //
    // } else {
    //
    //     query.leftJoin(column.column,  column.table.alias);
    // }
    //
    // return Alias(query, alias) as Relation<Required<I>, KeyInfer<ColumnType>>;
}
