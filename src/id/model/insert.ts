import {EntityManager, ObjectType} from 'typeorm';
import Id from '../id.js';
import Undefined from '../validatable/undefined.js';
import {Required} from 'utility-types';
import StandardInsert from '../../entity/insert.js';

/**
 * basic id insert operation
 *
 * @param manager
 * @param insert
 * @param entity
 */
export default function Insert<Entity extends Id>(
    manager : EntityManager,
    insert : Entity,
    entity ?:  ObjectType<Entity>,
) : Promise<Required<Entity, 'id'>> {

    const validatable = Undefined(insert);

    if(!validatable.valid) {

        throw new Error(validatable.message);
    }

    return StandardInsert<Entity>(manager, insert, entity) as Promise<Required<Entity, 'id'>>;

}
