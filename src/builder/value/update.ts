import {UpdateResult} from "typeorm/query-builder/result/UpdateResult";
import {QueryBuilder} from "typeorm";

export default function Update<Entity>(query : QueryBuilder<Entity>, entity : Entity) : Promise<UpdateResult> {

    return query.update(entity).execute();
}
