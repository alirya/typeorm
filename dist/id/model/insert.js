import Undefined from "../validatable/undefined";
import StandardInsert from "../../entity/insert";
/**
 * basic id insert operation
 *
 * @param manager
 * @param insert
 * @param entity
 */
export default function Insert(manager, insert, entity) {
    let validatable = Undefined(insert);
    if (!validatable.valid) {
        throw new Error(validatable.message);
    }
    return StandardInsert(manager, insert, entity);
}
//# sourceMappingURL=insert.js.map