import Guard from '../boolean/undefined';
import Callback from '@alirya/function/assert/callback-parameters';
import UndefinedError from './throwable/undefined';
import {Optional} from 'utility-types';
import Id from '../id';

export default function Undefined(
    entity : Id,
    error : (entity:object)=>Error = UndefinedError
) : asserts entity is Optional<Id, 'id'>  {

    Callback(entity, Guard, error);
}
