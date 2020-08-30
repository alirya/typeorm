import {ObjectType} from "typeorm/common/ObjectType";
import Table from "./table";
import Standard from "./standard";

export default function Entity<EntityT extends object>(
    entity : ObjectType<EntityT>,
) : Table<EntityT>{

    return new Standard(entity, entity.name);
}


