import { EntityManager } from "typeorm";
import Id from "../id";
export default function Update<Entity extends Required<Id>>(manager: EntityManager, data: Entity, entity?: new () => Entity, detaches?: (keyof Entity)[]): Promise<Entity>;
