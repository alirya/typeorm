import SqlError from "../mysql";
import Mysql from "./mysql";

export default function InvalidRelation(value : any) : value is SqlError {

    if(Mysql(value)) {

        return value.errno === 1452
    }

    return false;
}
