import New from '@axiona/function/new.js';
import UndefinedMessage from '../string/undefined.js';

export default function Undefined(
    entity : object,
    primaryKey : PropertyKey,
    error : (string : string)=>Error = New(Error)
) : Error {

    return error(UndefinedMessage(false, entity, primaryKey));
}
