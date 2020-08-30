import Id from "../id";
import IdUndefined from "../throwable/id-undefined";
import IdType from "../boolean/id";

export default function IdRequired<Entity extends Id>(entity : Entity, message ?: string)  : Entity{

    if(IdType(entity)) {

        return entity;
    }

    throw message ? new IdUndefined(message) : new IdUndefined();

}
