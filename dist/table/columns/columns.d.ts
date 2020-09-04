import Table from "../table";
import Infer from "../entity/infer";
export default interface Columns<TableType extends Table = Table> {
    readonly key: (keyof Infer<TableType> & string)[];
    readonly table: TableType;
    /**
     * aliases
     */
    readonly column: string[];
}
