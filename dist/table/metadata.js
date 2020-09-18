import EnsureClass from "@dikac/t-class/ensure/class";
import ThrowableClass from "@dikac/t-class/assert/throwable/class";
import Standard from "./standard";
/**
 * create {@see Table} from {@see Alias}
 */
export default function Metadata(alias, aliased) {
    let constructor = EnsureClass(alias.target, (value) => ThrowableClass(value, 'Alias.metadata'));
    return new Standard(constructor, alias.name, aliased);
}
//# sourceMappingURL=metadata.js.map