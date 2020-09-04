import Id from "../id";
import NotUndefined from "@dikac/t-undefined/boolean/not-undefined";
import IdRequired from "./string/id-required";
import Callback from "@dikac/t-validator/validatable/callback-function";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import {Required} from "utility-types";

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<false> & Message<string>> |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<true> & Message<string>>;

export default function NoId<Entity extends Id>(id : Entity) : Return<Entity> {

    let callback = <Return<Entity>> Callback<Entity>(id, (o)=>NotUndefined(o.id), IdRequired);

    return callback;
}
