import { Optional, Required } from "utility-types";
export default function NotUndefined<Entity extends object, PrimaryKey extends keyof Entity>(value: Optional<Entity, PrimaryKey>, key: PrimaryKey): value is Required<Entity, PrimaryKey>;
