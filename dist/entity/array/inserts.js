import Undefined from "@dikac/t-undefined/assert/undefined";
/**
 * basic bulk insert operation
 *
 */
export default function Inserts(connection, entities, primaryKey, entity) {
    if (entities.length === 0) {
        return Promise.resolve([]);
    }
    entities.forEach((entity) => Undefined(entity[primaryKey]));
    if (!entity) {
        entity = entities[0].constructor;
    }
    return connection.getRepository(entity).save(entities);
}
//# sourceMappingURL=inserts.js.map