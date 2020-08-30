import Columns from "./columns";
import Table from "../table";
import Infer from "../entity/infer";
import {Object} from "ts-toolbelt";
import {OrderByCondition} from "typeorm/find-options/OrderByCondition";
import MapKeyCallback from "@dikac/t-object/map-key-callback";
import Standard from "../column/standard";

export default class Orders<
    Entity extends Table = Table,
> implements Columns<Entity> {

    readonly key : (keyof Infer<Entity>)[] = [];

    /**
     * aliases
     */
    readonly column : string[] = [];

    constructor(
        readonly table : Entity,
        readonly value : Record<keyof Infer<Entity>, Object.UnionOf<OrderByCondition>>,
    ) {

        MapKeyCallback(value, (key)=>{

            let standard = new Standard(table, key);

            this.key.push(key);
            this.column.push(standard.column);
            return standard.column;
        })
    }


}
