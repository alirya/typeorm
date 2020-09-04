import Table from "../table";
import Column from "./column";
import Infer from "../entity/infer";
import Class from "@dikac/t-class/class";
export default class Standard<TableType extends Table<Class<object, unknown[]>> = Table<Class<object, unknown[]>>, Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string> implements Column<TableType, Key> {
    readonly table: TableType;
    readonly key: Key;
    readonly column: string;
    constructor(table: TableType, key: Key);
}
