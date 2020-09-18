import AssertNotUndefined from "../assert/not-undefined";
import NotUndefinedError from "../assert/throwable/not-undefined";
export default function NotUndefined(entity, key, error = NotUndefinedError) {
    AssertNotUndefined(entity, key, error);
    return entity;
}
//# sourceMappingURL=not-undefined.js.map