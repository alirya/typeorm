import Table from '../table';
import Infer from '../entity/infer';
import ValueInterface from '@alirya/value/value';
import ArgumentContainer from '@alirya/function/argument/argument';
import Parameter from './parameter';
import Column from './column';
import BaseParameter from '@alirya/function/parameter/parameter';

// export default class Value<
//     ValueType,
//     TableType extends Table = Table,
//     Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
// > extends Parameter<TableType, Key> implements ValueInterface<ValueType>, Readonly<ArgumentContainer<Record<string, ValueType>>> {
//
//     constructor(
//         table: TableType,
//         key : Key,
//         public value : ValueType,
//         parameter ?: string
//     ) {
//         super(table, key, parameter);
//     }
//
//     get argument() : Record<string, ValueType> {
//
//         return {[this.parameter]:this.value}
//     }
//
// }


export default function Value<
    ValueType,
    TableType extends Table = Table,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
>(
    column : Column<TableType, Key> & BaseParameter,
    value : ValueType
) : Column<TableType, Key> & BaseParameter & Readonly<ArgumentContainer<Record<string, ValueType>>> & ValueInterface<ValueType> {

    const argument : Readonly<ArgumentContainer<Record<string, ValueType>>> & ValueInterface<ValueType> = {
        argument : {
            [column.parameter]: value
        },
        value
    };

    return Object.assign(argument, column);
}
