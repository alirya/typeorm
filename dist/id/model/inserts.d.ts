import { EntityManager, ObjectType } from "typeorm";
import { Required } from "utility-types";
import Id from "../id";
/**
 * basic insert operation
 *
 */
export default function Inserts<Entity extends Id>(manager: EntityManager, entities: Entity[], entity?: ObjectType<Entity>): Promise<Required<Entity, 'id'>[]>;
