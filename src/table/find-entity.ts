import Table from "./table";
import {QueryBuilder} from "typeorm";
import {Alias} from "typeorm/query-builder/Alias";
import Metadata from "./metadata";
import Class from "@alirya/class/class";
import MultipleEntityFound from "./string/multiple-entity-found";
import EntityNotFound from "./string/entity-not-found";

export default function FindEntity<
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

