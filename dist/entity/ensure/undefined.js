import AssertUndefined from "../assert/undefined";
import UndefinedError from "../assert/throwable/undefined";
export default function Undefined(entity, key, error = UndefinedError) {
    AssertUndefined(entity, key, error);
    return entity;
}
//# sourceMappingURL=undefined.js.map