import Guard from '../boolean/undefined';
import {CallbackParameters} from '@alirya/function/assert/callback';
import UndefinedError from './throwable/undefined';
import {Optional} from 'utility-types';
import Id from '../id';

export default function Undefined(
    entity : Id,
    error : (entity:object)=>Error = UndefinedError
) : asserts entity is Optional<Id, 'id'>  {

    CallbackParameters(entity, Guard, error);
}
