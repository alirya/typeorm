import {EntityManager} from "typeorm";
import Id from "../id";
import Undefined from "../validatable/undefined";
import {Required} from "utility-types";
import StandardInsert from "../../entity/insert";

/**
 * basic id insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert<Entity extends Id>(
    manager : EntityManager,
    entity : Entity
) : Promise<Required<Entity, 'id'>> {

    let validatable = Undefined(entity);

    if(!validatable.valid) {

        throw new Error(validatable.message)
    }

    return StandardInsert<Entity>(manager, entity) as Promise<Required<Entity, 'id'>>

}
