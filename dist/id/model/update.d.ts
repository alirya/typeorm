import { EntityManager, ObjectType } from "typeorm";
import Id from "../id";
export default function Update<Entity extends Required<Id>>(manager: EntityManager, data: Entity, entity?: ObjectType<Entity>, detaches?: (keyof Entity)[]): Promise<Entity>;
