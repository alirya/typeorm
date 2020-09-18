import New from "@dikac/t-function/new";
import NotUndefinedMessage from "../string/not-undefined";
export default function NotUndefined(entity, primaryKey, error = New(Error)) {
    return error(NotUndefinedMessage(false, entity, primaryKey));
}
//# sourceMappingURL=not-undefined.js.map