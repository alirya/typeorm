import Id from '../id.js';
import NotUndefined from '@alirya/undefined/boolean/not-undefined.js';
import IdRequired from './string/id-required.js';
import {CallbackParameters} from '@alirya/validator/validatable/callback.js';
import Value from '@alirya/value/value.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {Required} from 'utility-types';

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<false> & Message<string>> |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<true> & Message<string>>;

export default function NoId<Entity extends Id>(id : Entity) : Return<Entity> {

    return <Return<Entity>> CallbackParameters<Entity, Entity>(id, (o)=>NotUndefined(o.id), IdRequired);
}
