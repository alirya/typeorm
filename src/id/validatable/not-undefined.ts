import Id from '../id.js';
import NotUndefined from '@axiona/undefined/boolean/not-undefined.js';
import IdRequired from './string/id-required.js';
import {CallbackParameters} from '@axiona/validator/validatable/callback.js';
import Value from '@axiona/value/value.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import {Required} from 'utility-types';

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<false> & Message<string>> |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<true> & Message<string>>;

export default function NoId<Entity extends Id>(id : Entity) : Return<Entity> {

    return <Return<Entity>> CallbackParameters<Entity, Entity>(id, (o)=>NotUndefined(o.id), IdRequired);
}
