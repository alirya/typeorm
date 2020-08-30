import {QueryBuilder} from "typeorm/query-builder/QueryBuilder";
import Infer from "../builder/entity/infer";
import Table from "../table/table";
import InferRecord from "@dikac/t-object/function/parameter/record/infer";

export default interface Mapper<Builder extends QueryBuilder<object>> {

    readonly query: Builder;

    readonly table: Table<Infer<Builder>>;

    call<Return extends Builder, Method extends keyof InferRecord<Builder>>(handler : (query : Builder, table : Table<Infer<Builder>>) => Return) : Mapper<Return>;

    join<Return extends Builder, TableType extends Table>(handler : (query : Builder, table : Table<Infer<Builder>>) => [TableType, Return]) : Mapper<Return>;

}

