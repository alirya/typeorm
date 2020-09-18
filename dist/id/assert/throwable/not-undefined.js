import NotUndefinedMessage from "../string/not-undefined";
import New from "@dikac/t-function/new";
export default function NotUndefined(entity, error = New(Error)) {
    return error(NotUndefinedMessage(false, entity));
}
//# sourceMappingURL=not-undefined.js.map