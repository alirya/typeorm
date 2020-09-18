import TypeObject from "@dikac/t-object/boolean/object";
import TypeString from "@dikac/t-string/boolean/string";
import TypeNumber from "@dikac/t-number/boolean/number";
import TypeArray from "@dikac/t-array/boolean/array";
export default function Mysql(value) {
    if (!TypeObject(value)) {
        return false;
    }
    if (!TypeString(value.name)) {
        return false;
    }
    if (!TypeString(value.message)) {
        return false;
    }
    if (!TypeString(value.code)) {
        return false;
    }
    if (!TypeString(value.sqlMessage)) {
        return false;
    }
    if (!TypeString(value.sqlState)) {
        return false;
    }
    if (!TypeString(value.sql)) {
        return false;
    }
    if (!TypeString(value.query)) {
        return false;
    }
    if (!TypeNumber(value.index)) {
        return false;
    }
    if (!TypeNumber(value.errno)) {
        return false;
    }
    if (!TypeArray(value.parameters)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=mysql.js.map