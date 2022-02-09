import Guard from '../boolean/not-undefined';
import Callback from '@alirya/function/assert/callback-parameters';
import NotUndefinedError from './throwable/not-undefined';
import {Optional, Required} from 'utility-types';

export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    entity : Optional<Entity, PrimaryKey>,
    key : PrimaryKey,
    error : (entity:object, primaryKey : PropertyKey)=>Error = NotUndefinedError
) : asserts entity is Required<Entity, PrimaryKey> {

    Callback(entity, Guard, error, key);
}
