import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";
export default function Undefined(entity, key, error = UndefinedError) {
    Callback(entity, Guard, error, key);
}
//# sourceMappingURL=undefined.js.map