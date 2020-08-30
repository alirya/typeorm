import Value from "./value";
import Table from "../table";
import Infer from "../entity/infer";
import Padding from "@dikac/t-string/padding/padding";
export default class Like<Entity extends Table = Table> extends Value<Entity, string> {
    constructor(argument: Entity, column: keyof Infer<Entity>, value: string, padding: Padding | undefined);
    get query(): string;
}
