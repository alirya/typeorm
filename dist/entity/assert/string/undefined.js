import Name from "@dikac/t-object/string/name";
export default function Undefined(valid, entity, primaryKey) {
    if (valid) {
        return `entity ${Name(entity)}.${primaryKey.toString()} is "undefined"`;
    }
    else {
        return `entity ${Name(entity)}.${primaryKey.toString()}  must be "undefined" for current operation`;
    }
}
//# sourceMappingURL=undefined.js.map