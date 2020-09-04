import Name from "@dikac/t-object/string/name";

export default function Undefined(
    valid : boolean,
    entity : object,
    primaryKey : PropertyKey
) : string  {

    if(valid) {

        return `entity ${Name(entity)}.${primaryKey.toString()} is "undefined"`;

    } else {

        return `entity ${Name(entity)}.${primaryKey.toString()}  must be "undefined" for current operation`;
    }
}
