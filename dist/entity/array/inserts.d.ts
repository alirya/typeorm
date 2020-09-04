import { Connection, EntityManager, ObjectType } from "typeorm";
import { Required } from "utility-types";
/**
 * basic bulk insert operation
 *
 */
export default function Inserts<Entity extends object, PrimaryKey extends keyof Entity>(connection: Connection | EntityManager, entities: Entity[], primaryKey: PrimaryKey, entity?: ObjectType<Entity>): Promise<Required<Entity, PrimaryKey>[]>;
