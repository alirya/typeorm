import Value from "@dikac/t-value/value";
import Id from "../../../id/id";
import Validatable from "@dikac/t-validatable/validatable";
import Name from "@dikac/t-object/string/name";

export default function PrimaryKeyRequired(object : Value<Id> & Validatable, key : PropertyKey) {

    let entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.${key.toString()} is not "undefined"`;

    } else {

        return `entity ${entity}.${key.toString()} must not be "undefined" for current operation"`;
    }
}
