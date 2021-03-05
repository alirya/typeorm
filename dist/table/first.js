import Metadata from "./metadata";
export default function First(builder) {
    const alias = this.builder.expressionMap.aliases[0];
    if (alias) {
        return Metadata(alias, builder.expressionMap.aliasNamePrefixingEnabled);
    }
    throw new Error('cannot find first entity');
}
//# sourceMappingURL=first.js.map