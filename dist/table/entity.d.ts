import { ObjectType } from "typeorm/common/ObjectType";
import Table from "./table";
export default function Entity<EntityT extends object>(entity: ObjectType<EntityT>): Table<EntityT>;
