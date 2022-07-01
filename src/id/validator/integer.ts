import ValidatorInterface from '@alirya/validator/validator';
import {NumberParameters} from '@alirya/number/validator/number';
import {PositiveParameters} from '@alirya/number/validator/positive';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import InvalidMessageMap from '@alirya/array/message/message/list/invalid';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';

export default function Integer(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        NumberParameters()  as ValidatorInterface<any, number>,
        NumberParameters()  as ValidatorInterface<any, number>,
        PositiveParameters()  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, messages);

}
