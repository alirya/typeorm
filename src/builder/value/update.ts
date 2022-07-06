import {UpdateResult} from 'typeorm/query-builder/result/UpdateResult.js';
import {QueryBuilder} from 'typeorm';

export default function Update<Entity>(query : QueryBuilder<Entity>, entity : Entity) : Promise<UpdateResult> {

    return query.update(entity).execute();
}
