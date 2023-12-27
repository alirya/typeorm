import ValidatorInterface from '@axiona/validator/validator.js';
import {NumberParameters} from '@axiona/number/validator/number.js';
import {PositiveParameters} from '@axiona/number/validator/positive.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidMessageMap from '@axiona/array/message/message/list/map.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';

export default function Integer(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumberParameters()  as ValidatorInterface<any, number>,
        PositiveParameters()  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, messages);

}
