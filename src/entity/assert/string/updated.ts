import {UpdateResult as OrmUpdateResult} from 'typeorm/query-builder/result/UpdateResult.js';

export default function Updated(
    valid : boolean,
    result : OrmUpdateResult,
    expectation : number,
) : string  {

    if(valid) {

        return `updated result as expected`;

    } else {

        return `only  update ${result.raw.affectedRows} lest than expected ${expectation} update`;
    }
}
