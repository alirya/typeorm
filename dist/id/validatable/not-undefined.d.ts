import Id from "../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import { Required } from "utility-types";
declare type Return<Entity extends Id> = Readonly<Value<Entity> & Validatable<false> & Message<string>> | Readonly<Value<Required<Entity, 'id'>> & Validatable<true> & Message<string>>;
export default function NoId<Entity extends Id>(id: Entity): Return<Entity>;
export {};
