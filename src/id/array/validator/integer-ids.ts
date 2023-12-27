import { ListAllParameters } from '@axiona/array/validator/list-all.js';
import { AndParameters } from '@axiona/array/validatable/and.js';
import InvalidMessageList from '@axiona/array/message/message/list/invalid.js';
import { ValuePartialParameters } from '@axiona/array/validator/value-partial.js';
import { ArrayParameters } from '@axiona/array/validator/array.js';
import Integer from '../../../number/validator/integer.js';

export default function IntegerIds() {

    return ValuePartialParameters([
            ArrayParameters(),
            ListAllParameters(Integer(), AndParameters, InvalidMessageList)
        ],
        AndParameters,
        InvalidMessageList
    );
}
