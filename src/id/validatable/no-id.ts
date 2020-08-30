import Id from "../id";
import Undefined from "@dikac/t-undefined/boolean/undefined";
import NoIdString from "./string/id-undefined";
import Callback from "@dikac/t-validator/validatable/callback";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Code from "../../model/code/code";
import CodeEnum from "../../model/code/code/code";
import {Required} from "utility-types";

type Return<Entity extends Id> =
    Readonly<Value<Entity> & Validatable<true> & Message<string>> & Code |
    Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>> & Code;

export default function NoId<Entity extends Id>(id : Entity) : Return<Entity> {

    let callback = <Return<Entity>> Callback<Entity>(id, (o)=>Undefined(o.id), NoIdString);

    callback.code = CodeEnum.ARGUMENT;

    return callback;
}
