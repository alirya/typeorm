import {ObjectType} from "typeorm/common/ObjectType";
import Table from "./table";

export default class Standard<Type extends object = object> implements Table<Type>{

    constructor(
        readonly entity : ObjectType<Type>,
        readonly table : string
    ) {
    }

}

