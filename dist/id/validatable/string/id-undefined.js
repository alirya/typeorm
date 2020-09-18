import Name from "@dikac/t-object/string/name";
export default function IdUndefined(object) {
    let entity = Name(object.value);
    if (object.valid) {
        return `entity ${entity}.id is "undefined"`;
    }
    else {
        return `entity ${entity}.id must be "undefined" for current operation`;
    }
}
//# sourceMappingURL=id-undefined.js.map