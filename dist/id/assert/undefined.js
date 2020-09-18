import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";
export default function Undefined(entity, error = UndefinedError) {
    Callback(entity, Guard, error);
}
//# sourceMappingURL=undefined.js.map