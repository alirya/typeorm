import { EntityManager } from "typeorm";
/**
 * basic insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert<Entity extends object>(manager: EntityManager, entity: Entity): Promise<Entity>;
