import Table from '../table';
import Infer from '../entity/infer';
import BaseParameter from '@alirya/function/parameter/parameter';
import Standard from './standard';
import Class from '@alirya/class/class';
import Column from './column';

// export default class Parameter<
//     TableType extends Table = Table,
//     Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
// > extends Standard<TableType, Key> implements  BaseParameter {
//
//     public parameter: string;
//
//     constructor(
//         table: TableType,
//         key : Key,
//         parameter ?: string
//     ) {
//         super(table, key);
//
//         this.parameter = parameter ? parameter : this.column.replace('.', '');
//     }
//
// }


export default function Parameter<
    TableType extends Table<Class<object, unknown[]>> = Table<Class<object, unknown[]>>,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
> (
    column : Column<TableType, Key>,
    parameter ?: string
) : Column<TableType, Key> & BaseParameter {

    parameter = (parameter ? parameter : column.column.replace('.', ''));

    return Object.assign({parameter}, column);
}
