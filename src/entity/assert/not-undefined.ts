import Guard from '../boolean/not-undefined.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import NotUndefinedError from './throwable/not-undefined.js';
import {Optional, Required} from 'utility-types';

export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    entity : Optional<Entity, PrimaryKey>,
    key : PrimaryKey,
    error : (entity:object, primaryKey : PropertyKey)=>Error = NotUndefinedError
) : asserts entity is Required<Entity, PrimaryKey> {

    CallbackParameters(entity, Guard, error, key);
}
