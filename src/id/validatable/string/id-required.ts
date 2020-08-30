import Id from "../../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Name from "@dikac/t-object/string/name";

export default function IdRequired(object : Value<Id> & Validatable) {

    let entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.id is not "undefined"`;

    } else {

        return `entity ${entity}.id must not be "undefined" for current operation`;
    }
}
