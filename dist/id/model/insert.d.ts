import { EntityManager } from "typeorm";
import Id from "../required";
/**
 * basic id insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert<Entity extends Id<number | string>>(manager: EntityManager, entity: Entity): Promise<Entity>;
