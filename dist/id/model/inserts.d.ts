import { EntityManager, ObjectType } from "typeorm";
import Id from "../required";
/**
 * basic insert operation
 *
 */
export default function Inserts<Entity extends Id<number | string>>(manager: EntityManager, entities: Entity[], entity?: ObjectType<Entity>): Promise<Entity[]>;
