import Name from "@dikac/t-object/string/name";
export default function MultipleEntityFound(entity, builder) {
    return `multiple entity "${Name(entity)}" found in "${Name(builder)}".`;
}
//# sourceMappingURL=multiple-entity-found.js.map