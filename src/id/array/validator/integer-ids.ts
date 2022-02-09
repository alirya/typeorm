import ListAll from '@alirya/array/validator/list-all-parameters';
import AndList from '@alirya/array/validatable/and-parameters';
import InvalidMessageList from '@alirya/array/message/message/list/invalid';
import Integer from '../../validator/integer';
import ValuePartial from '@alirya/array/validator/value-partial-parameters';
import ArrayStandard from '@alirya/array/validator/array-parameters';
import And from '@alirya/array/validatable/and-parameters';

export default function IntegerIds() {

    return ValuePartial([
            ArrayStandard(),
            ListAll(Integer(), AndList, InvalidMessageList)
        ],
        And,
        InvalidMessageList
    );
}
