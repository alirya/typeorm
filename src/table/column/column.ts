import Table from "../table";
import Infer from "../entity/infer";

export default interface Column<
    TableType extends Table = Table,
> {

    readonly key : keyof Infer<TableType>;

    readonly table : TableType;

    /**
     * aliases
     */
    readonly column : string;
}
