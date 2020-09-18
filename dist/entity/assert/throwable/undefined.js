import New from "@dikac/t-function/new";
import UndefinedMessage from "../string/undefined";
export default function Undefined(entity, primaryKey, error = New(Error)) {
    return error(UndefinedMessage(false, entity, primaryKey));
}
//# sourceMappingURL=undefined.js.map