import {Required} from 'utility-types';
import Id from '../id';
import NotUndefinedType from '@alirya/undefined/boolean/not-undefined';

/**
 * check if id is set
 * @param value
 */
export default function NotUndefined(value : Id)  : value is Required<Id, 'id'> {

    return NotUndefinedType(value.id);
}
