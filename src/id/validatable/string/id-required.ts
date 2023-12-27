import Id from '../../id.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Name from '@axiona/object/string/name.js';

export default function IdRequired(object : Value<Id> & Validatable) {

    const entity = Name(object.value);

    if(object.valid) {

        return `entity ${entity}.id is not "undefined"`;

    } else {

        return `entity ${entity}.id must not be "undefined" for current operation`;
    }
}
