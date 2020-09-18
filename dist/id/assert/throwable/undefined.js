import UndefinedMessage from "../string/undefined";
import New from "@dikac/t-function/new";
export default function NotUndefined(entity, error = New(Error)) {
    return error(UndefinedMessage(false, entity));
}
//# sourceMappingURL=undefined.js.map