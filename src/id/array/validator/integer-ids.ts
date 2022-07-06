import ListAll from '@alirya/array/validator/list-all-parameters.js';
import AndList from '@alirya/array/validatable/and-parameters.js';
import InvalidMessageList from '@alirya/array/message/message/list/invalid.js';
import Integer from '../../validator/integer.js';
import ValuePartial from '@alirya/array/validator/value-partial-parameters.js';
import ArrayStandard from '@alirya/array/validator/array-parameters.js';
import And from '@alirya/array/validatable/and-parameters.js';

export default function IntegerIds() {

    return ValuePartial([
            ArrayStandard(),
            ListAll(Integer(), AndList, InvalidMessageList)
        ],
        And,
        InvalidMessageList
    );
}
