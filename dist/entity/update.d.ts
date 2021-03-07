import { EntityManager } from "typeorm";
export default function Update<Entity extends object>(manager: EntityManager, data: Entity, key: keyof Entity, entity?: new () => Entity, detaches?: (keyof Entity)[]): Promise<Entity>;
