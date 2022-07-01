import Table from '../table';
import Column from './column';
import Infer from '../entity/infer';
import Class from '@alirya/class/class';

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



