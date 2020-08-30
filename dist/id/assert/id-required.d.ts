import Id from "../id";
export default function IdRequired<Entity extends Id>(entity: Entity, message?: string): Entity;
