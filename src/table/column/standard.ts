import Table from "../table";
import Column from "./column";
import Infer from "../entity/infer";
import Class from "@alirya/class/class";



export default class Standard<
    TableType extends Table<Class<object, unknown[]>> = Table<Class<object, unknown[]>>,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
> implements Column<TableType, Key> {

    readonly column: string = '';

    constructor(
        readonly table: TableType,
        readonly key : Key,
    ) {

        if(table.aliased) {

            this.column = `${table.alias}.${key}`;

        } else {

            this.column = key;
        }

    }

}



