import Id from '../id';
import IsUndefined from '@alirya/undefined/boolean/undefined';
import NoIdString from './string/id-undefined';
import {CallbackParameters} from '@alirya/validator/validatable/callback';
import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import {Required} from 'utility-types';

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<true> & Message<string>>  |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>> ;

export default function Undefined<Entity extends Id>(id : Entity) : Return<Entity> {

    return <Return<Entity>> CallbackParameters<Entity, Entity>(id, (o)=>IsUndefined(o.id), NoIdString);
}
