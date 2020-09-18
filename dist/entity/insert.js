/**
 * basic insert operation
 *
 * @param manager
 * @param entity
 * @constructor
 */
export default function Insert(manager, entity) {
    return manager.getRepository(entity.constructor).insert(entity).then(() => entity);
}
//# sourceMappingURL=insert.js.map