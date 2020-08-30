import Table from "../table";
import Column from "./column";
import Infer from "../entity/infer";
export default class Standard<TableType extends Table = Table> implements Column<TableType> {
    readonly table: TableType;
    readonly key: keyof Infer<TableType>;
    readonly column: string;
    constructor(table: TableType, key: keyof Infer<TableType>);
}
