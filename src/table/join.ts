import {ObjectType} from "typeorm/common/ObjectType";
import Table from "./table";
import {Object} from "ts-toolbelt";
import {PickByValue} from "utility-types";



export default class Join<
    EntityT extends object = object,
    Property extends keyof PickByValue<Required<EntityT>, object> = keyof PickByValue<Required<EntityT>, object>
> implements Table<EntityT>  {

    readonly table : string;
    readonly entity : ObjectType<EntityT>;

    constructor (
        readonly main : Table<EntityT>,
        readonly key : Property,
        readonly relation : Table<EntityT[Property] extends object ? EntityT[Property] : never>,
        name ?: string,
    )  {

        this.table = main.table;
        this.entity = main.entity;

        if(name === undefined) {

            this.table += key;

        } else {

            this.table += name;
        }



        this.table += relation.table;
    }
}

