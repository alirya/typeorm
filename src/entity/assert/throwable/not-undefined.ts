import New from '@axiona/function/new.js';
import NotUndefinedMessage from '../string/not-undefined.js';

export default function NotUndefined(
    entity : object,
    primaryKey : PropertyKey,
    error : (string : string)=>Error = New(Error)
) : Error {

    return error(NotUndefinedMessage(false, entity, primaryKey));
}
