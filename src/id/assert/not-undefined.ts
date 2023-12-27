import Guard from '../boolean/not-undefined.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import NotUndefinedError from './throwable/not-undefined.js';
import {Required} from 'utility-types';
import Id from '../id.js';

export default function NotUndefined(
    entity : Id,
    error : (entity:object)=>Error = NotUndefinedError
) : asserts entity is Required<Id, 'id'> {

    CallbackParameters(entity, Guard, error);
}
