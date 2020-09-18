import Undefined from "../assert/undefined";
/**
 * basic insert operation
 *
 */
export default function Inserts(manager, entities, entity) {
    if (entities.length === 0) {
        return Promise.resolve([]);
    }
    // TODO IMPROVE THIS
    entities.forEach((v) => Undefined(v));
    if (!entity) {
        for (let value of entities) {
            entity = value.constructor;
            break;
        }
    }
    return manager.getRepository(entity).insert(entities).then(() => entities);
}
//# sourceMappingURL=inserts.js.map