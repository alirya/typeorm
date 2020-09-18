import Undefined from "../validatable/undefined";
import StandardInsert from "../../entity/insert";
/**
 * basic id insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert(manager, entity) {
    let validatable = Undefined(entity);
    if (!validatable.valid) {
        throw new Error(validatable.message);
    }
    return StandardInsert(manager, entity);
}
//# sourceMappingURL=insert.js.map