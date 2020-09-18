import NotUndefined from "@dikac/t-undefined/boolean/not-undefined";
import IdRequired from "./string/id-required";
import Callback from "@dikac/t-validator/validatable/callback-function";
export default function NoId(id) {
    let callback = Callback(id, (o) => NotUndefined(o.id), IdRequired);
    return callback;
}
//# sourceMappingURL=not-undefined.js.map