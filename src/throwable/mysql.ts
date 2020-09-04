import {QueryFailedError} from "typeorm";

export default interface Mysql extends QueryFailedError {

    code: string;
    errno: number;
    sqlMessage:string;
    sqlState: string;
    index: number;
    sql:string;
    query: string;
    parameters: (string|number)[];
}
