import { EntityManager, ObjectType } from "typeorm";
/**
 * basic insert operation
 *
 * @param manager
 * @param insert
 * @param entity
 */
export default function Insert<Entity extends object>(manager: EntityManager, insert: Entity, entity?: ObjectType<Entity>): Promise<Entity>;
