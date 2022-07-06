import Table from './table.js';
import EnsureClass from '@alirya/class/ensure/class.js';
import {ClassParameters} from '@alirya/class/assert/throwable/class.js';
import {Alias} from 'typeorm/query-builder/Alias.js';
import Standard from './standard.js';
import Class from '@alirya/class/class.js';

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
