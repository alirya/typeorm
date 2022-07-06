import Id from '../id.js';
import IsUndefined from '@alirya/undefined/boolean/undefined.js';

/**
 * check if id is undefined
 * @param value
 */
export default function Undefined(value : Id) : boolean {

    return IsUndefined(value.id);
}
