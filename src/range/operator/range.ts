import RangeType from "../range";
import {LessThan, SelectQueryBuilder, MoreThan, Like, Between, In} from "typeorm";
import {FindOperator} from "typeorm/find-options/FindOperator";
import Callable from '@alirya/function/callable';
import Identity from '@alirya/function/identity';

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