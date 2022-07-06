import Id from '../../id.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Name from '@alirya/object/string/name.js';

export default function IdUndefined(object : Value<Id> & Validatable) {

    let entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.id is "undefined"`;

    } else {

        return `entity ${entity}.id must be "undefined" for current operation`;
    }
}
