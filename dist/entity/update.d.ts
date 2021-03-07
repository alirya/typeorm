import { EntityManager, ObjectType } from "typeorm";
export default function Update<Entity extends object>(manager: EntityManager, data: Entity, key: keyof Entity, entity?: ObjectType<Entity>, detaches?: (keyof Entity)[]): Promise<Entity>;
