import Class from "@alirya/class/class";
import {QueryBuilder} from "typeorm";
import Name from "@alirya/object/string/name";

export default function MultipleEntityFound(
    entity : Class<object, any[]>,
    builder : QueryBuilder<any>,
) {

    return `multiple entity "${Name(entity)}" found in "${Name(builder)}".`;
}
