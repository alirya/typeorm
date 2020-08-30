import {EntityManager, Connection as OrmConnection, QueryBuilder} from "typeorm";
import DatabaseQuery from "./mapper";

export default function ConnectionCallback<Entity extends object, Builder extends QueryBuilder<Entity>>(
    connection : EntityManager|OrmConnection,
    callback : (manager:EntityManager|OrmConnection)=>DatabaseQuery<Builder>
) : DatabaseQuery<Builder> {

    return callback(connection);
}



