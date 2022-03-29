import Table from '../table';
import Infer from '../entity/infer';
import BaseParameter from '@alirya/function/parameter/parameter';
import Standard from './standard';
import Class from '@alirya/class/class';
import Column from './column';
import Callable from "@alirya/function/callable";
import String from "@alirya/string/boolean/string";
import PickAlpha from "../../../../string/dist/pick-alpha";

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
    parameter ?: string|Callable<[string, Column<TableType, Key>], string>
) : Column<TableType, Key> & BaseParameter {

    if(!String(parameter)) {

        const auto = column.column.replace('.', '');

        parameter = parameter ? parameter(auto, column) : auto;
    }

    parameter = PickAlpha(parameter);

    return Object.assign({parameter}, column);
}
