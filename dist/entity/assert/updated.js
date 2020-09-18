import Callback from "@dikac/t-function/assert/callback";
import Guard from "../boolean/updated";
import UndefinedError from "./throwable/undefined";
export default function Updated(result, expectation, error = UndefinedError) {
    Callback(result, Guard, error, expectation);
}
//# sourceMappingURL=updated.js.map