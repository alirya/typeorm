import Table from "../table";
import Infer from "../entity/infer";
import ValueInterface from "@dikac/t-value/value";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import Parameter from "./parameter";

export default class Value<
    ValueType,
    TableType extends Table = Table,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
> extends Parameter<TableType, Key> implements ValueInterface<ValueType>, Readonly<ArgumentContainer<Record<string, ValueType>>> {

    constructor(
        table: TableType,
        key : Key,
        public value : ValueType,
        parameter ?: string
    ) {
        super(table, key, parameter);
    }

    get argument() : Record<string, ValueType> {

        return {[this.parameter]:this.value}
    }

}
