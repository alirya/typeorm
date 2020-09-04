import Id from "../../id";
export default function NotUndefined<Entity extends Id>(entity: Entity, error?: (string: string) => Error): Error;
