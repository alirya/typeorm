import { EntityManager } from "typeorm";
export default function Update<Entity extends object>(manager: EntityManager, entity: Entity, key: keyof Entity, detaches?: (keyof Entity)[]): Promise<Entity>;
