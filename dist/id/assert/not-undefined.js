import Guard from "../boolean/not-undefined";
import Callback from "@dikac/t-function/assert/callback";
import NotUndefinedError from "./throwable/not-undefined";
export default function NotUndefined(entity, error = NotUndefinedError) {
    Callback(entity, Guard, error);
}
//# sourceMappingURL=not-undefined.js.map