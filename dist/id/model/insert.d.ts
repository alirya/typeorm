import { EntityManager } from "typeorm";
import Id from "../id";
import { Required } from "utility-types";
/**
 * basic id insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert<Entity extends Id>(manager: EntityManager, entity: Entity): Promise<Required<Entity, 'id'>>;
