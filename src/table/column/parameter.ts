import Table from '../table.js';
import Infer from '../entity/infer.js';
import BaseParameter from '@alirya/function/parameter/parameter.js';
import Class from '@alirya/class/class.js';
import Column from './column.js';
import Callable from '@alirya/function/callable.js';
import String from '@alirya/string/boolean/string.js';
import PickAlpha from '@alirya/string/pick-alpha.js';
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
