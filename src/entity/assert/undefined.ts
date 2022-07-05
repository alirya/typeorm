import Guard from '../boolean/undefined';
import {CallbackParameters} from '@alirya/function/assert/callback';
import UndefinedError from './throwable/undefined';
import {Optional} from 'utility-types';

export default function Undefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    entity : Optional<Entity, PrimaryKey>,
    key : PrimaryKey,
    error : (entity:object, primaryKey : PropertyKey)=>Error = UndefinedError
) : asserts entity is Optional<Entity, PrimaryKey>  {

    CallbackParameters(entity, Guard, error, key);
}
