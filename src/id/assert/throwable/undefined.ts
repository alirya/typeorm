import UndefinedMessage from "../string/undefined";
import Id from "../../id";
import New from "@alirya/function/new";

export default function NotUndefined<Entity extends Id>(
    entity : Entity,
    error : (string : string)=>Error = New(Error),
) : Error {

    return error(UndefinedMessage(false, entity));
}
