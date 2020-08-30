import {UpdateResult as OrmUpdateResult} from "typeorm";

export default function Updated(result : OrmUpdateResult, expectation : number) : boolean {

    if (result.raw && isFinite(result.raw.affectedRows)) {

        return result.raw.affectedRows === expectation;

    } else {

        throw new Error('Update data not available')
    }
}
