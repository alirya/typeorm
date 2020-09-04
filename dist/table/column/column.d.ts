import Table from "../table";
import Infer from "../entity/infer";
export default interface Column<TableType extends Table = Table, Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string> {
    readonly table: TableType;
    readonly column: string;
    readonly key: Key;
}
