import { QueryBuilder } from "typeorm";
import Mapper from "./mapper";
import Infer from "../builder/entity/infer";
import Table from "../table/table";
import InferRecord from "@dikac/t-object/function/parameter/record/infer";
export default class Standard<OrmQuery extends QueryBuilder<object> = QueryBuilder<object>, ArgumentType extends Table<Infer<OrmQuery>> = Table<Infer<OrmQuery>>> implements Mapper<OrmQuery> {
    readonly table: ArgumentType;
    readonly query: OrmQuery;
    constructor(table: ArgumentType, query: OrmQuery);
    call<Builder extends OrmQuery, Method extends keyof InferRecord<OrmQuery>>(handler: (query: OrmQuery, table: ArgumentType) => Builder): Mapper<Builder>;
    join<Builder extends OrmQuery, TableType extends Table>(handler: (query: OrmQuery, table: ArgumentType) => [TableType, Builder]): Mapper<Builder>;
}
