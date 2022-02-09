import {Optional, Required} from 'utility-types';
import NotUndefinedType from '@alirya/undefined/boolean/not-undefined';


export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    value : Optional<Entity, PrimaryKey>,
    key : PrimaryKey
)  : value is Required<Entity, PrimaryKey>  {

    return NotUndefinedType(value[key]);
}
