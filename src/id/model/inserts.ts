import {EntityManager, ObjectType} from 'typeorm';
import Undefined from '../assert/undefined.js';
import Id from '../id.js';
import {QueryDeepPartialEntity} from 'typeorm/query-builder/QueryPartialEntity.js';
import First from '@axiona/array/value/value/first.js';
/**
 * basic insert operation
 *
 */
export default function Inserts<Entity extends Id<number|string>>(
    manager : EntityManager,
    entities : Entity[],
    entity ?: ObjectType<Entity>
) : Promise<Entity[]> {

    if(entities.length === 0) {

        return Promise.resolve([]);
    }

    // assert not undefined
    entities.forEach((v)=>Undefined(v));

    // ensure entity
    entity = (First(entities) as Entity).constructor;

    return manager.getRepository(<ObjectType<Entity>>entity).insert(<QueryDeepPartialEntity<Entity>>entities).then(
        ()=>entities
    );
}
