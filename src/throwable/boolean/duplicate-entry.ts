import SqlError from "../mysql";
import Mysql from "./mysql";

export default function DuplicateEntry(value : any) : value is SqlError {

    if(Mysql(value)) {

        return value.errno === 1062
    }

    return false;
}
