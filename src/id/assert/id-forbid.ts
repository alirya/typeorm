import IdType from "../boolean/id";
import IdDefined from "../throwable/id-defined";
import Id from "../id";

export default function IdForbid<Entity extends Id>(entity : Entity, message : null|string = null)  : Entity{

    if(!IdType(entity)) {

        return entity;
    }

    throw message ? new IdDefined(message) : new IdDefined();
}
