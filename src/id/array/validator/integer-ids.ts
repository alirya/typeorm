import { ListAllParameters } from '@alirya/array/validator/list-all.js';
import { AndParameters } from '@alirya/array/validatable/and.js';
import InvalidMessageList from '@alirya/array/message/message/list/invalid.js';
import { ValuePartialParameters } from '@alirya/array/validator/value-partial.js';
import { ArrayParameters } from '@alirya/array/validator/array.js';
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
