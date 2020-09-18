import Metadata from "./metadata";
import MultipleEntityFound from "./string/multiple-entity-found";
import EntityNotFound from "./string/entity-not-found";
export default function Entity(builder, entity) {
    const aliases = builder.expressionMap.aliases.filter((metadata) => metadata.target === entity);
    if (aliases.length === 1) {
        return Metadata(aliases[0], builder.expressionMap.aliasNamePrefixingEnabled);
    }
    else if (aliases.length === 0) {
        throw new Error(EntityNotFound(false, entity, builder));
    }
    else {
        throw new Error(MultipleEntityFound(entity, builder));
    }
}
//# sourceMappingURL=entity.js.map