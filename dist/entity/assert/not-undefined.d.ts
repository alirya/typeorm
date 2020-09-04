import { Optional, Required } from "utility-types";
export default function NotUndefined<Entity extends object, PrimaryKey extends keyof Entity>(entity: Optional<Entity, PrimaryKey>, key: PrimaryKey, error?: (entity: object, primaryKey: PropertyKey) => Error): asserts entity is Required<Entity, PrimaryKey>;
