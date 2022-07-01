import Table from './table';
import EnsureClass from '@alirya/class/ensure/class';
import {ClassParameters} from '@alirya/class/assert/throwable/class';
import {Alias} from 'typeorm/query-builder/Alias';
import Standard from './standard';
import Class from '@alirya/class/class';

/**
 * create {@see Table} from {@see Alias}
 */
export default function Metadata<
    Constructor extends Class<object, unknown[]>
>(
    alias : Alias,
    aliased : boolean
) : Table<Constructor> {

    let constructor = <Constructor> EnsureClass(alias.target, (value)=>ClassParameters(value, 'Alias.metadata'));

    return Standard(constructor, alias.name, aliased);
}
