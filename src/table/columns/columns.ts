import Table from '../table.js';
import Infer from '../entity/infer.js';

export default interface Columns<
    TableType extends Table = Table,
> {

    readonly key : (keyof Infer<TableType> & string)[];

    readonly table : TableType;

    /**
     * aliases
     */
    readonly column : string[];
}
