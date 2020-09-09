import Columns from "./columns";
import Table from "../table";
import Infer from "../entity/infer";
import { Object } from "ts-toolbelt";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import ValueInterface from "@dikac/t-value/value";
export default class Value<Entity extends Table<any> = Table<any>, ValueType extends Partial<Record<keyof InstanceType<Infer<Entity>> & string, any>> = Partial<Record<keyof InstanceType<Infer<Entity>> & string, any>>> implements Columns<Entity>, ArgumentContainer<Record<string, Object.UnionOf<ValueType>>>, ValueInterface<ValueType> {
    readonly table: Entity;
    readonly value: ValueType;
    readonly key: (keyof InstanceType<Infer<Entity>> & string)[];
    /**
     * aliases
     */
    readonly column: string[];
    readonly argument: Record<string, Object.UnionOf<ValueType>>;
    constructor(table: Entity, value: ValueType);
}
