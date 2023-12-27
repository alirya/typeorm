import {UpdateResult as OrmUpdateResult} from 'typeorm';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import Guard from '../boolean/updated.js';
import UndefinedError from './throwable/undefined.js';

export default function Updated(
    result : OrmUpdateResult,
    expectation : number,
    error : (entity:OrmUpdateResult, expectation : number)=>Error = UndefinedError
) {

    CallbackParameters(result, Guard, error, expectation);
}
