import Id from '../id.js';
import IsUndefined from '@alirya/undefined/boolean/undefined.js';
import NoIdString from './string/id-undefined.js';
import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {Required} from 'utility-types';

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<true> & Message<string>>  |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>> ;

export default function Undefined<Entity extends Id>(id : Entity) : Return<Entity> {

    return <Return<Entity>> CallbackParameters<Entity, Entity>(id, (o)=>IsUndefined(o.id), NoIdString);
}
