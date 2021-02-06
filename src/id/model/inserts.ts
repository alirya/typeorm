import {EntityManager, ObjectType} from "typeorm";
import Undefined from "../assert/undefined";
import {Required} from "utility-types";
import Id from "../required";
import {QueryDeepPartialEntity} from "typeorm/query-builder/QueryPartialEntity";
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

    // TODO IMPROVE THIS
    entities.forEach((v)=>Undefined(v));

    if(!entity) {

        for(let value of entities) {

            entity = value.constructor;
            break;
        }
    }

    return manager.getRepository(<ObjectType<Entity>>entity).insert(<QueryDeepPartialEntity<Entity>>entities).then(
        ()=>entities
    );

}
