import Column from '../table/column/column';
import Table from '../table/table';
import {SelectQueryBuilder} from 'typeorm';
import {List} from 'ts-toolbelt';

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


export default function InnerJoin<
    ColumnType extends Column<Table>,
    Builder extends SelectQueryBuilder<any>
>(
    query : Builder,
    column : ColumnType,
    alias : string,
    select : boolean = false
) : Builder {

    return select
        ? query.innerJoinAndSelect(column.column,  alias)
        : query.innerJoin(column.column,  alias);
}
