import Id from "../id";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Code from "../../model/code/code";
import { Required } from "utility-types";
declare type Return<Entity extends Id> = (Readonly<Value<Entity> & Validatable<true> & Message<string>> & Code) | (Readonly<Value<Required<Entity, 'id'>> & Validatable<false> & Message<string>> & Code);
export default function NoId<Entity extends Id>(id: Entity): Return<Entity>;
export {};
