import Table from '../table.js';
import Column from './column.js';
import Infer from '../entity/infer.js';
import Class from '@alirya/class/class.js';

export default function Standard<
    TableType extends Table<Class<object, unknown[]>> = Table<Class<object, unknown[]>>,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
>(
    table: TableType,
    key : Key,
) : Column<TableType, Key>  {

    let column : string;

    if(table.aliased) {

        column = `${table.alias}.${key}`;

    } else {

        column = key;
    }

    return {table, key, column};

}



