import Columns from "./columns";
import Table from "../table";
import Infer from "../entity/infer";
import {Object} from "ts-toolbelt";
import MapKeyCallback from "@dikac/t-object/map-key-callback";
import Standard from "../column/standard";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import ValueInterface from "@dikac/t-value/value";

export default class Value<
    Entity extends Table<any> = Table<any>,
    ValueType extends Record<keyof InstanceType<Infer<Entity>> & string, any> = Record<keyof InstanceType<Infer<Entity>> & string, any>,
> implements Columns<Entity>, ArgumentContainer<Record<string, Object.UnionOf<ValueType>>>, ValueInterface<ValueType> {

    readonly key : (keyof InstanceType<Infer<Entity>> & string)[] = [];

    /**
     * aliases
     */
    readonly column : string[] = [];
    readonly argument : Record<string, Object.UnionOf<ValueType>>;

    constructor(
        readonly table : Entity,
        readonly value : ValueType,
    ) {

        this.argument = MapKeyCallback(value, (key : keyof InstanceType<Infer<Entity>> & string)=>{

            let standard = new Standard<Entity>(table, key);

            this.key.push(key);
            this.column.push(standard.column);
            return standard.column;
        })
    }


}
