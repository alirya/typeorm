/**
 * basic insert operation
 *
 * @param manager
 * @param insert
 * @param entity
 */
export default function Insert(manager, insert, entity) {
    return manager.getRepository(entity || insert.constructor).insert(insert).then(() => insert);
}
//# sourceMappingURL=insert.js.map