import Table from "./table";
import {QueryBuilder} from "typeorm";
import Metadata from "./metadata";
import Class from "@dikac/t-class/class";
import EntityNotFound from "./string/entity-not-found";

export default function Alias<
    Constructor extends Class<object, unknown[]> = Class<object, unknown[]>
>(
    builder : QueryBuilder<unknown>,
    entity : Constructor,
    alias : string
) : Table<Constructor> {

    for (let metadata of builder.expressionMap.aliases) {

        if(metadata.target === entity && metadata.name === alias) {

            return Metadata(metadata, builder.expressionMap.aliasNamePrefixingEnabled) as Table< Constructor>;
        }
    }

    throw new Error(EntityNotFound(false, entity, builder, alias));
}
