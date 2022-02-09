import Table from './table';
import {QueryBuilder} from 'typeorm';
import Metadata from './metadata';
import AliasNotFound from './string/alias-not-found';

/**
 * find Entity with given {@param alias} and {@param entity} if provided inside {@param builder}
 *
 * @param builder
 *
 * @param alias
 * alias to be search
 *
 * @param entity
 * and entity to be entity, if provided
 */
export default function Alias<
    Constructor extends {new (...args: unknown[]): any} = {new (...args: unknown[]): any}
>(
    builder : QueryBuilder<unknown>,
    alias : string,
    entity ?: Constructor,
) : Table<Constructor> {

    for (let metadata of builder.expressionMap.aliases) {

        if(metadata.name !== alias) {

          continue;
        }

        if(entity) {

            if(metadata.target !== entity) {

                continue;
            }
        }

        return Metadata(metadata, builder.expressionMap.aliasNamePrefixingEnabled) as Table<Constructor>;
    }

    throw new Error(AliasNotFound(false, builder, alias, entity));
}
