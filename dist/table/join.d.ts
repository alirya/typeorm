import { ObjectType } from "typeorm/common/ObjectType";
import Table from "./table";
import { PickByValue } from "utility-types";
export default class Join<EntityT extends object = object, Property extends keyof PickByValue<Required<EntityT>, object> = keyof PickByValue<Required<EntityT>, object>> implements Table<EntityT> {
    readonly main: Table<EntityT>;
    readonly key: Property;
    readonly relation: Table<EntityT[Property] extends object ? EntityT[Property] : never>;
    readonly table: string;
    readonly entity: ObjectType<EntityT>;
    constructor(main: Table<EntityT>, key: Property, relation: Table<EntityT[Property] extends object ? EntityT[Property] : never>, name?: string);
}
