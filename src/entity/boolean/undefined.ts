import {Optional} from "utility-types";
import UndefinedType from "@dikac/t-undefined/boolean/undefined";


export default function NotUndefined<
    Entity extends object,
    PrimaryKey extends keyof Entity
>(
    value : Optional<Entity, PrimaryKey>,
    key : PrimaryKey
) : value is Optional<Entity, PrimaryKey> {

    return UndefinedType(value[key]);
}
