import { EntityManager, ObjectType } from "typeorm";
import Id from "../id";
import { Required } from "utility-types";
/**
 * basic id insert operation
 *
 * @param manager
 * @param insert
 * @param entity
 */
export default function Insert<Entity extends Id>(manager: EntityManager, insert: Entity, entity?: ObjectType<Entity>): Promise<Required<Entity, 'id'>>;
