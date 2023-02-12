import ValidatorInterface from '@alirya/validator/validator.js';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial.js';
import {OrParameters} from '@alirya/array/validatable/or.js';
import InvalidMessageMap from '@alirya/array/message/message/list/invalid.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import {NumericParameters} from "@alirya/string/validator/numeric.js";
import Positive from '../../number/validator/positive.js';

export default function Numeric(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, string|number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumericParameters() as ValidatorInterface<any, string>,
        Positive()  as ValidatorInterface<number, number>,
    ];

    return ValuePartialParameters(validator, OrParameters, messages, true);

}
