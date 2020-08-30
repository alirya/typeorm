import Table from "../table";
import Column from "./column";
import Infer from "../entity/infer";

export default class Standard<
    TableType extends Table = Table,
> implements Column<TableType> {

    readonly column: string;

    constructor(
        readonly table : TableType,
        readonly key : keyof Infer<TableType>,
    ) {
        this.column = `${table.table}.${key}`;
    }

}
