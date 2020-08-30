import Id from "../../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Name from "@dikac/t-object/string/name";

export default function IdUndefined(object : Value<Id> & Validatable) {

    let entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.id is "undefined"`;

    } else {

        return `entity ${entity}.id must be "undefined" for current operation`;
    }
}
