import Columns from './columns.js';
import {Object} from 'ts-toolbelt';
import {OrderByCondition} from 'typeorm/find-options/OrderByCondition.js';
import ArgumentContainer from '@alirya/function/argument/argument.js';
import {SelectQueryBuilder} from 'typeorm';

export default function Orders<
    Entity extends Columns & ArgumentContainer<Record<string, Object.UnionOf<OrderByCondition>>>
>(
    query : SelectQueryBuilder<unknown>,
    entity : Entity
) {

    query.orderBy(entity.argument);
    return entity;

}
