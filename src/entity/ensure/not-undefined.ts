import AssertNotUndefined from '../assert/not-undefined.js';
import NotUndefinedError from '../assert/throwable/not-undefined.js';
import {Optional} from 'utility-types';

export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    entity : Optional<Entity, PrimaryKey>,
    key : PrimaryKey,
    error : (entity:object, primaryKey : PropertyKey)=>Error = NotUndefinedError
) : Optional<Entity, PrimaryKey>  {

    AssertNotUndefined(entity, key, error);

    return entity;
}
