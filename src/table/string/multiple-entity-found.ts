import Class from '@alirya/class/class.js';
import {QueryBuilder} from 'typeorm';
import Name from '@alirya/object/string/name.js';

export default function MultipleEntityFound(
    entity : Class<object, any[]>,
    builder : QueryBuilder<any>,
) {

    return `multiple entity "${Name(entity)}" found in "${Name(builder)}".`;
}
