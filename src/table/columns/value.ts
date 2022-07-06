import Columns from './columns.js';
import Table from '../table.js';
import Infer from '../entity/infer.js';
import {Object} from 'ts-toolbelt';
import MapKeyCallback from '@alirya/object/map-key-callback.js';
import Standard from '../column/standard.js';
import ArgumentContainer from '@alirya/function/argument/argument.js';
import ValueInterface from '@alirya/value/value.js';

export default class Value<
    Entity extends Table<any> = Table<any>,
    ValueType extends Partial<Record<keyof InstanceType<Infer<Entity>> & string, any>> = Partial<Record<keyof InstanceType<Infer<Entity>> & string, any>>,
> implements Columns<Entity>, ArgumentContainer<Record<string, Object.UnionOf<ValueType>>>, ValueInterface<ValueType> {

    readonly key : (keyof InstanceType<Infer<Entity>> & string)[] = [];

    /**
     * aliases
     */
    readonly column : string[] = [];
    readonly argument : Record<string, Object.UnionOf<ValueType>>;

    constructor(
        readonly table : Entity,
        readonly value : ValueType,
    ) {

        this.argument = MapKeyCallback(value, (key : keyof InstanceType<Infer<Entity>> & string)=>{

            let standard = Standard<Entity>(table, key);

            this.key.push(key);
            this.column.push(standard.column);
            return standard.column;
        });
    }


}
