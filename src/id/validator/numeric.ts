import ValidatorInterface from '@axiona/validator/validator.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {OrParameters} from '@axiona/array/validatable/or.js';
import InvalidMessageMap from '@axiona/array/message/message/list/invalid.js';
import Validatable from '@axiona/validatable/validatable.js';
import Message from '@axiona/message/message.js';
import {NumericParameters} from "@axiona/string/validator/numeric.js";
import Positive from '../../number/validator/positive.js';

export default function Numeric(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, string|number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumericParameters() as ValidatorInterface<any, string>,
        Positive()  as ValidatorInterface<number, number>,
    ];

    return ValuePartialParameters(validator, OrParameters, messages, true);

}
