import Table from './table.js';
import {QueryBuilder} from 'typeorm';
import {Alias} from 'typeorm/query-builder/Alias.js';
import Metadata from './metadata.js';
import Class from '@alirya/class/class.js';
import MultipleEntityFound from './string/multiple-entity-found.js';
import EntityNotFound from './string/entity-not-found.js';

/**
 * find Entity with given {@param entity} inside {@param builder}
 *
 * @param builder
 *
 * @param entity
 * and entity to be entity, if provided
 */
export default function Entity<
    Constructor extends Class<object, unknown[]> = Class<object, unknown[]>
>(
    builder : QueryBuilder<unknown>,
    entity : Constructor,
) : Table<Constructor> {

    const aliases : Alias[] = builder.expressionMap.aliases.filter((metadata)=>metadata.target === entity);

    if(aliases.length === 1) {

        return Metadata<Constructor>(aliases[0], builder.expressionMap.aliasNamePrefixingEnabled);

    } else if(aliases.length === 0) {

        throw new Error(EntityNotFound(false, entity, builder));

    } else {

        throw new Error(MultipleEntityFound(entity, builder));
    }
}

