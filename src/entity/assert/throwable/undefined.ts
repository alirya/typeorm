import New from "@dikac/t-function/new";
import UndefinedMessage from "../string/undefined";

export default function Undefined(
    entity : object,
    primaryKey : PropertyKey,
    error : (string : string)=>Error = New(Error)
) : Error {

    return error(UndefinedMessage(false, entity, primaryKey))
}
