import Table from "../table";
import Infer from "../entity/infer";
import BaseParameter from "@dikac/t-function/parameter/parameter";
import Standard from "./standard";
export default class Parameter<TableType extends Table = Table, Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string> extends Standard<TableType, Key> implements BaseParameter {
    readonly parameter: string;
    constructor(table: TableType, key: Key, parameter?: string);
}
