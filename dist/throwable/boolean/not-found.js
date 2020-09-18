import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
export default function NotFound(value) {
    return value instanceof EntityNotFoundError;
}
//# sourceMappingURL=not-found.js.map