import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
export default class NotFound extends EntityNotFoundError {
    constructor(entityClass = 'record not found', criteria = null, value) {
        super(entityClass, criteria);
        this.value = value;
    }
}
//# sourceMappingURL=not-found.js.map