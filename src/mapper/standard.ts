import {QueryBuilder} from "typeorm";
import Mapper from "./mapper";
import Infer from "../builder/entity/infer";
import Table from "../table/table";
import InferRecord from "@dikac/t-object/function/parameter/record/infer";

export default class Standard<
    OrmQuery extends QueryBuilder<object> = QueryBuilder<object>,
    ArgumentType extends Table<Infer<OrmQuery>> = Table<Infer<OrmQuery>>,
    > implements Mapper<OrmQuery>{

    constructor(
        readonly table : ArgumentType,
        readonly query : OrmQuery
    ) {

        if(table.table !== query.alias) {

            throw new TypeError('column.name and query.alias does not match');
        }
    }

    call<Builder extends OrmQuery, Method extends keyof InferRecord<OrmQuery>>(handler : (query : OrmQuery, table : ArgumentType) => Builder) : Mapper<Builder> {

        const builder = handler(this.query, this.table);

        if(builder === this.query) {

            return <Mapper<Builder>> <any> this;
        }

        return new Standard(this.table, builder) as Mapper<Builder> ;
    }

    join<Builder extends OrmQuery, TableType extends Table>(handler : (query : OrmQuery, table : ArgumentType) => [TableType, Builder]) : Mapper<Builder> {

        const builder = handler(this.query, this.table);

        return new Standard(builder[0], builder[1]) as Mapper<Builder> ;
    }
}


