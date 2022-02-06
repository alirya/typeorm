import Id from "../../id";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Name from "@alirya/object/string/name";

export default function IdUndefined(object : Value<Id> & Validatable) {

    let entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.id is "undefined"`;

    } else {

        return `entity ${entity}.id must be "undefined" for current operation`;
    }
}
