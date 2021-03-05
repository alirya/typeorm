import {QueryBuilder} from "typeorm";
import Metadata from "./metadata";
import Table from "./table";

export default function First<
    Constructor extends {new (...args: unknown[]): any} = {new (...args: unknown[]): any}
>(builder : QueryBuilder<unknown>) : Table<Constructor> {

    const alias = this.builder.expressionMap.aliases[0];

    if(alias) {

        return Metadata(alias, builder.expressionMap.aliasNamePrefixingEnabled) as Table<Constructor>;
    }

    throw new Error('cannot find first entity');
}
