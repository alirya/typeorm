import Id from "../id";
import NotUndefined from "@alirya/undefined/boolean/not-undefined";
import IdRequired from "./string/id-required";
import Callback from "@alirya/validator/validatable/callback-function-parameters";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import {Required} from "utility-types";

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<false> & Message<string>> |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<true> & Message<string>>;

export default function NoId<Entity extends Id>(id : Entity) : Return<Entity> {

    return <Return<Entity>> Callback<Entity, Entity>(id, (o)=>NotUndefined(o.id), IdRequired);
}
