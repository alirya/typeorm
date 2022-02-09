import {UpdateResult as OrmUpdateResult} from 'typeorm';
import Callback from '@alirya/function/assert/callback-parameters';
import Guard from '../boolean/updated';
import UndefinedError from './throwable/undefined';

export default function Updated(
    result : OrmUpdateResult,
    expectation : number,
    error : (entity:OrmUpdateResult, expectation : number)=>Error = UndefinedError
) {

    Callback(result, Guard, error, expectation);
}
