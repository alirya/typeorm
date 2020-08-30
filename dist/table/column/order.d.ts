import Table from "../table";
import Infer from "../entity/infer";
import OrderEnum from "../../builder/order/mode/mode";
import Null from "../../builder/order/null/null";
import Parameter from "./parameter";
import ValueInterface from "@dikac/t-value/value";
export default class Order<Entity extends Table = Table> extends Parameter<Entity> implements ValueInterface<OrderEnum> {
    readonly value: OrderEnum;
    readonly nulls?: Null | undefined;
    constructor(argument: Entity, column: keyof Infer<Entity>, value: OrderEnum, nulls?: Null | undefined);
}
