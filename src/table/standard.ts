import Table from './table.js';
import Class from '@alirya/class/class.js';

/**
 * basic {@see Table} implementation
 */

export default function Standard<
    Constructor extends Class<object, unknown[]> = Class<object, unknown[]>
>(
    entity : Constructor,
    alias : string = entity.name,
    aliased : boolean = true,
) : Table<Constructor> {

    return {entity, alias, aliased};
}
