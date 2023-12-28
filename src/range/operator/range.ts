import RangeType from '../range.js';
import {LessThan, MoreThan, Between} from "typeorm";
import {FindOperator} from "typeorm/find-options/FindOperator.js";
import Callable from '@axiona/function/callable.js';
import Identity from '@axiona/function/identity.js';

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
