import Table from '../table.js';
import Infer from '../entity/infer.js';
import ValueInterface from '@alirya/value/value.js';
import ArgumentContainer from '@alirya/function/argument/argument.js';
import Column from './column.js';
import BaseParameter from '@alirya/function/parameter/parameter.js';

export default function Value<
    ValueType,
    TableType extends Table = Table,
    Key extends (keyof InstanceType<Infer<TableType>>) & string = (keyof InstanceType<Infer<TableType>>) & string
>(
    column : Column<TableType, Key> & BaseParameter,
    value : ValueType
) : Column<TableType, Key> & BaseParameter & Readonly<ArgumentContainer<Record<string, ValueType>>> & ValueInterface<ValueType> {

    const argument : Readonly<ArgumentContainer<Record<string, ValueType>>> & ValueInterface<ValueType> = {
        get argument () {
            return {
                [column.parameter] : value
            };
        },
        value
    };

    return Object.assign(argument, column);
}
