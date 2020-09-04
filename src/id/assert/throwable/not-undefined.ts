import NotUndefinedMessage from "../string/not-undefined";
import Id from "../../id";
import New from "@dikac/t-function/new";

export default function NotUndefined<Entity extends Id>(
    entity : Entity,
    error : (string : string)=>Error = New(Error),
) : Error {

    return error(NotUndefinedMessage(false, entity));
}
