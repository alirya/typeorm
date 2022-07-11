import { ListAllParameters } from '@alirya/array/validator/list-all';
import { AndParameters } from '@alirya/array/validatable/and';
import InvalidMessageList from '@alirya/array/message/message/list/invalid';
import Integer from '../../validator/integer';
import { ValuePartialParameters } from '@alirya/array/validator/value-partial';
import { ArrayParameters } from '@alirya/array/validator/array';

export default function IntegerIds() {

    return ValuePartialParameters([
            ArrayParameters(),
            ListAllParameters(Integer(), AndParameters, InvalidMessageList)
        ],
        AndParameters,
        InvalidMessageList
    );
}
