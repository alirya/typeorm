import BaseUndefined from "../../../entity/assert/string/undefined";

export default function Undefined(
    valid : boolean,
    entity : object
) : string  {

    return BaseUndefined(valid, entity, 'id');
}
