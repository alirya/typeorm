import {EntityManager} from "typeorm";
import Id from "../id";
import NoId from "../validatable/no-id";
import {Required} from "utility-types";
import StandardInsert from "../../database/insert";

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

    let validatable = NoId(entity);

    if(!validatable.valid) {

        throw new Error(validatable.message)
    }

    return StandardInsert<Entity>(manager, entity) as Promise<Required<Entity, 'id'>>

}
