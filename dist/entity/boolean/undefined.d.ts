import { Optional } from "utility-types";
export default function NotUndefined<Entity extends object, PrimaryKey extends keyof Entity>(value: Optional<Entity, PrimaryKey>, key: PrimaryKey): value is Optional<Entity, PrimaryKey>;
