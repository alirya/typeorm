import {QueryFailedError} from "typeorm";

export default interface QueryError extends QueryFailedError {

    parameters: (Date|string|number)[];
    query: string,

}
