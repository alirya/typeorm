import New from '@alirya/function/new';
import NotUndefinedMessage from '../string/not-undefined';

export default function NotUndefined(
    entity : object,
    primaryKey : PropertyKey,
    error : (string : string)=>Error = New(Error)
) : Error {

    return error(NotUndefinedMessage(false, entity, primaryKey));
}
