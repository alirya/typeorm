import Id from "../id";
import IsUndefined from "@dikac/t-undefined/boolean/undefined";

/**
 * check if id is undefined
 * @param value
 */
export default function Undefined(value : Id) : boolean {

    return IsUndefined(value.id);
}
