import Table from './table';
import {QueryBuilder} from 'typeorm';
import Metadata from './metadata';
import AliasNotFound from './string/alias-not-found';

export default function FindAlias<
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
