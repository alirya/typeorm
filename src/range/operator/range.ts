import RangeType from '../range.js';
import {LessThan, SelectQueryBuilder, MoreThan, Like, Between, In} from "typeorm";
import {FindOperator} from "typeorm/find-options/FindOperator.js";
import Callable from '@alirya/function/callable.js';
import Identity from '@alirya/function/identity.js';

export default function Range<Type extends unknown>(
    range : RangeType<Type>,
    transform : Callable<[Type], any> = Identity
) : FindOperator<Type>|undefined {

    if(range.from && range.to) {

        return Between(transform(range.from), transform(range.to))
    }

    if(range.from) {

        return MoreThan(transform(range.from))
    }

    if(range.to) {

        return LessThan(transform(range.to))
    }

}