import { EntityManager } from "typeorm";
import Id from "../id";
export default function Update<Entity extends Required<Id>>(manager: EntityManager, entity: Entity, detaches?: (keyof Entity)[]): Promise<Entity>;
