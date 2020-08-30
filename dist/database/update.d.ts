import { EntityManager } from "typeorm";
export default function Update<Entity extends object, PrimaryKey extends keyof Entity>(manager: EntityManager, entity: Entity, key: PrimaryKey, detaches?: (keyof Entity)[]): Promise<Entity>;
