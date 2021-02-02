import TypeObject from "@dikac/t-object/boolean/object";
import TypeString from "@dikac/t-string/boolean/string";
import TypeNumber from "@dikac/t-number/boolean/number";
import TypeArray from "@dikac/t-array/boolean/array";
export default function Postgres(value) {
    if (!TypeObject(value)) {
        return false;
    }
    if (!TypeString(value.table)) {
        return false;
    }
    if (!TypeString(value.line)) {
        return false;
    }
    if (!TypeString(value.routine)) {
        return false;
    }
    if (!TypeString(value.detail)) {
        return false;
    }
    if (!TypeString(value.constraint)) {
        return false;
    }
    if (!TypeNumber(value.length)) {
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
    if (!TypeString(value.schema)) {
        return false;
    }
    if (!TypeString(value.severity)) {
        return false;
    }
    if (!TypeString(value.file)) {
        return false;
    }
    if (!TypeString(value.query)) {
        return false;
    }
    if (!TypeArray(value.parameters)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=postgres.js.map