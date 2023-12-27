import {Required} from 'utility-types';
import Id from '../id.js';
import NotUndefinedType from '@axiona/undefined/boolean/not-undefined.js';

/**
 * check if id is set
 * @param value
 */
export default function NotUndefined(value : Id)  : value is Required<Id, 'id'> {

    return NotUndefinedType(value.id);
}
