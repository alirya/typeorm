import ValidatorInterface from '@alirya/validator/validator.js';
import {NumberParameters} from '@alirya/number/validator/number.js';
import {PositiveParameters} from '@alirya/number/validator/positive.js';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial.js';
import {AndParameters} from '@alirya/array/validatable/and.js';
import InvalidMessageMap from '@alirya/array/message/message/list/map.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';

export default function Integer(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumberParameters()  as ValidatorInterface<any, number>,
        PositiveParameters()  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, messages);

}
