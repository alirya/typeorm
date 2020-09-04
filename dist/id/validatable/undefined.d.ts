import Id from "../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import { Required } from "utility-types";
declare type Return<Entity extends Id> = Readonly<Value<Entity> & Validatable<true> & Message<string>> | Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>>;
export default function Undefined<Entity extends Id>(id: Entity): Return<Entity>;
export {};
