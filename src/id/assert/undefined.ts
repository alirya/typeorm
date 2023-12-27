import Guard from '../boolean/undefined.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import UndefinedError from './throwable/undefined.js';
import {Optional} from 'utility-types';
import Id from '../id.js';

export default function Undefined(
    entity : Id,
    error : (entity:object)=>Error = UndefinedError
) : asserts entity is Optional<Id, 'id'>  {

    CallbackParameters(entity, Guard, error);
}
