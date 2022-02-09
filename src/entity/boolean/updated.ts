import {UpdateResult as OrmUpdateResult} from 'typeorm';
import Affected from '../../number/affected';

export default function Updated(result : OrmUpdateResult, expectation : number) : boolean {

    return Affected(result) === expectation;

}
