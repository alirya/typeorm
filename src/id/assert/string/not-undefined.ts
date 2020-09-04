import Id from "../../id";
import BaseNotUndefined from "../../../entity/assert/string/not-undefined";

export default function NotUndefined<
    Entity extends Id
>(
    valid : boolean,
    entity : Entity
) : string {

    return BaseNotUndefined(valid, entity, 'id')
}
