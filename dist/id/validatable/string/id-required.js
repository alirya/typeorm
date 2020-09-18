import Name from "@dikac/t-object/string/name";
export default function IdRequired(object) {
    let entity = Name(object.value);
    if (object.valid) {
        return `entity ${entity}.id is not "undefined"`;
    }
    else {
        return `entity ${entity}.id must not be "undefined" for current operation`;
    }
}
//# sourceMappingURL=id-required.js.map