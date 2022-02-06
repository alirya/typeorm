import TypeObject from "@alirya/object/boolean/object";
import TypeString from "@alirya/string/boolean/string";
import TypeNumber from "@alirya/number/boolean/number";
import SqlError from "../mysql";
import TypeArray from "@alirya/array/boolean/array";

export default function Mysql(value : any) : value is SqlError
export default function Mysql(value : SqlError) : value is SqlError
export default function Mysql(value : SqlError) : value is SqlError {

    if(!TypeObject(value)) {
        return false;
    }

    if(!TypeString(value.sqlMessage)) {
        return false
    }

    if(!TypeString(value.sqlState)) {
        return false
    }

    if(!TypeString(value.name)) {
        return false
    }

    if(!TypeString(value.message)) {
        return false
    }

    if(!TypeString(value.code)) {
        return false
    }

    if(!TypeString(value.sql)) {
        return false
    }

    if(!TypeString(value.query)) {
        return false
    }

    if(!TypeNumber(value.index)) {
        return false
    }

    if(!TypeNumber(value.errno)) {
        return false
    }

    if(!TypeArray(value.parameters)) {
        return false
    }

    return true;
}
