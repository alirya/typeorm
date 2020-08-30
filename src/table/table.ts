import {ObjectType} from "typeorm/common/ObjectType";

export default interface Table<
    Entity extends object = object
> {
    readonly entity : ObjectType<Entity>;

    /**
     * aliases
     */
    readonly table : string;
}
