import {EntityManager} from "typeorm";
import Id from "../required";
import Undefined from "../validatable/undefined";
import StandardInsert from "../../entity/insert";

/**
 * basic id insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert<Entity extends Id<number|string>>(
    manager : EntityManager,
    entity : Entity
) : Promise<Entity> {

    let validatable = Undefined(entity);

    if(!validatable.valid) {

        throw new Error(validatable.message)
    }

    return StandardInsert<Entity>(manager, entity);

}
