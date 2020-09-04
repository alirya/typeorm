import Guard from "../boolean/undefined";
import Callback from "@dikac/t-function/assert/callback";
import UndefinedError from "./throwable/undefined";
import {Optional} from "utility-types";

export default function Undefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    entity : Optional<Entity, PrimaryKey>,
    key : PrimaryKey,
    error : (entity:object, primaryKey : PropertyKey)=>Error = UndefinedError
) : asserts entity is Optional<Entity, PrimaryKey>  {

    Callback(entity, Guard, error, key);
}
