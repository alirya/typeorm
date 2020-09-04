import { Optional } from "utility-types";
export default function NotUndefined<Entity extends object, PrimaryKey extends keyof Entity>(entity: Optional<Entity, PrimaryKey>, key: PrimaryKey, error?: (entity: object, primaryKey: PropertyKey) => Error): Optional<Entity, PrimaryKey>;
