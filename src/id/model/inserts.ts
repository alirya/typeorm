import {EntityManager, ObjectType} from "typeorm";
import Undefined from "../assert/undefined";
import {Required} from "utility-types";
import Id from "../required";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
import First from '@alirya/array/value/value/first';
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
