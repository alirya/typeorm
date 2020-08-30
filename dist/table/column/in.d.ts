import Table from "../table";
import Infer from "../entity/infer";
import Value from "./value";
export default class In<Entity extends Table = Table, ValueType extends unknown[] = unknown[]> extends Value<Entity, ValueType> {
    constructor(argument: Entity, column: keyof Infer<Entity>, value: ValueType);
    get query(): string;
}
