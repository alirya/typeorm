import Table from './table';
import Class from '@alirya/class/class';


export default function Alias<TableType extends Table>(table : TableType, alias : string) : TableType {

    return Object.assign({alias}, table);
}
