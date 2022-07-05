import Table from '../table';
import Infer from '../entity/infer';
import ValueInterface from '@alirya/value/value';
import ArgumentContainer from '@alirya/function/argument/argument';
import Column from './column';
import BaseParameter from '@alirya/function/parameter/parameter';

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
