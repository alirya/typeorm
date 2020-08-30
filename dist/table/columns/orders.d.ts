import Columns from "./columns";
import Table from "../table";
import Infer from "../entity/infer";
import { Object } from "ts-toolbelt";
import { OrderByCondition } from "typeorm/find-options/OrderByCondition";
export default class Orders<Entity extends Table = Table> implements Columns<Entity> {
    readonly table: Entity;
    readonly value: Record<keyof Infer<Entity>, Object.UnionOf<OrderByCondition>>;
    readonly key: (keyof Infer<Entity>)[];
    /**
     * aliases
     */
    readonly column: string[];
    constructor(table: Entity, value: Record<keyof Infer<Entity>, Object.UnionOf<OrderByCondition>>);
}
