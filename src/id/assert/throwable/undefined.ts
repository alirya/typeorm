import UndefinedMessage from '../string/undefined.js';
import Id from '../../id.js';
import New from '@alirya/function/new.js';

export default function NotUndefined<Entity extends Id>(
    entity : Entity,
    error : (string : string)=>Error = New(Error),
) : Error {

    return error(UndefinedMessage(false, entity));
}
