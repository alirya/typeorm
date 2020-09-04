import Id from "../id";
import IsUndefined from "@dikac/t-undefined/boolean/undefined";
import NoIdString from "./string/id-undefined";
import Callback from "@dikac/t-validator/validatable/callback-function";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import {Required} from "utility-types";

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<true> & Message<string>>  |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>> ;

export default function Undefined<Entity extends Id>(id : Entity) : Return<Entity> {

    let callback = <Return<Entity>> Callback<Entity>(id, (o)=>IsUndefined(o.id), NoIdString);

    return callback;
}
