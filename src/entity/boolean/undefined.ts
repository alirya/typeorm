import {Optional} from 'utility-types';
import UndefinedType from '@alirya/undefined/boolean/undefined.js';


export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    value : Optional<Entity, PrimaryKey>,
    key : PrimaryKey
) : value is Optional<Entity, PrimaryKey> {

    return UndefinedType(value[key]);
}
