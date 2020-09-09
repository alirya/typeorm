import Column from "./column";
import Table from "../table";
import TableInfer from "../entity/infer";
import {SelectQueryBuilder} from "typeorm";
import {List} from "ts-toolbelt";
import Infer from "./table/infer";
import KeyInfer from "./key/infer";
import Alias from "../../table/alias";

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


export default function Join<
    ColumnType extends Column<Table>,
    I extends InstanceType<TableInfer<Infer<ColumnType>>> = InstanceType<TableInfer<Infer<ColumnType>>>,
>(
    query : SelectQueryBuilder<any>,
    column : ColumnType,
    alias : string,
    mode : 'left'|'inner' = 'left',
    select : boolean = false
) : Relation<Required<I>, KeyInfer<ColumnType>> {

    if(mode === 'left') {

        if(select) {

            query.leftJoinAndSelect(column.column,  alias)

        } else {

            query.leftJoin(column.column,  alias);
        }

    } else {

        if(select) {

            query.innerJoinAndSelect(column.column,  alias);

        } else {

            query.innerJoin(column.column,  alias);
        }
    }

    return Alias(query, alias) as Relation<Required<I>, KeyInfer<ColumnType>>;
}
