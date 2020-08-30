import Table from "../table";
import Infer from "../entity/infer";
import ValueInterface from "@dikac/t-value/value";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Parameter from "./parameter";

export default class Value<
    Entity extends Table = Table,
    ValueType = unknown
> extends Parameter<Entity> implements ValueInterface<ValueType>, ArgumentContainer<Record<string, ValueType>> {

    readonly argument: Record<string, ValueType>;

    constructor(
        argument : Entity,
        column : keyof Infer<Entity>,
        readonly value : ValueType
    ) {

        super(argument, column);
        this.argument = {[this.parameter]:value};
    }

}
