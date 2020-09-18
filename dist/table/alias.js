import Metadata from "./metadata";
import AliasNotFound from "./string/alias-not-found";
export default function Alias(builder, alias, entity) {
    for (let metadata of builder.expressionMap.aliases) {
        if (metadata.name !== alias) {
            continue;
        }
        if (entity) {
            if (metadata.target !== entity) {
                continue;
            }
        }
        return Metadata(metadata, builder.expressionMap.aliasNamePrefixingEnabled);
    }
    throw new Error(AliasNotFound(false, builder, alias, entity));
}
//# sourceMappingURL=alias.js.map