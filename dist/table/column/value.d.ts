import Table from "../table";
import Infer from "../entity/infer";
import ValueInterface from "@dikac/t-value/value";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Parameter from "./parameter";
export default class Value<ValueType, TableType extends Table = Table, Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string> extends Parameter<TableType, Key> implements ValueInterface<ValueType>, ArgumentContainer<Record<string, ValueType>> {
    readonly value: ValueType;
    readonly argument: Record<string, ValueType>;
    constructor(table: TableType, key: Key, value: ValueType, parameter?: string);
}
