import TypeObject from '@axiona/object/boolean/object.js';
import TypeString from '@axiona/string/boolean/string.js';
import TypeNumber from '@axiona/number/boolean/number.js';
import SqlError from '../mysql.js';
import TypeArray from '@axiona/array/boolean/array.js';

export default function Mysql(value : any) : value is SqlError;
export default function Mysql(value : SqlError) : value is SqlError;
export default function Mysql(value : SqlError) : value is SqlError {

    if(!TypeObject(value)) {
        return false;
    }

    if(!TypeString(value.sqlMessage)) {
        return false;
    }

    if(!TypeString(value.sqlState)) {
        return false;
    }

    if(!TypeString(value.name)) {
        return false;
    }

    if(!TypeString(value.message)) {
        return false;
    }

    if(!TypeString(value.code)) {
        return false;
    }

    if(!TypeString(value.sql)) {
        return false;
    }

    if(!TypeString(value.query)) {
        return false;
    }

    if(!TypeNumber(value.index)) {
        return false;
    }

    if(!TypeNumber(value.errno)) {
        return false;
    }

    if(!TypeArray(value.parameters)) {
        return false;
    }

    return true;
}
