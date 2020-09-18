import IsUndefined from "@dikac/t-undefined/boolean/undefined";
import NoIdString from "./string/id-undefined";
import Callback from "@dikac/t-validator/validatable/callback-function";
export default function Undefined(id) {
    let callback = Callback(id, (o) => IsUndefined(o.id), NoIdString);
    return callback;
}
//# sourceMappingURL=undefined.js.map