import Columns from "./columns";
import {Object} from "ts-toolbelt";
import {OrderByCondition} from "typeorm/find-options/OrderByCondition";
import ArgumentContainer from "@dikac/t-function/argument/argument";
import {SelectQueryBuilder} from "typeorm";

export default function Orders<
    Entity extends Columns & ArgumentContainer<Record<string, Object.UnionOf<OrderByCondition>>>
>(
    query : SelectQueryBuilder<unknown>,
    entity : Entity
) {

    query.orderBy(entity.argument);
    return entity;

}
