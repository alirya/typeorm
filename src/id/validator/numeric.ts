import ValidatorInterface from '@alirya/validator/validator';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {OrParameters} from '@alirya/array/validatable/or';
import InvalidMessageMap from '@alirya/array/message/message/list/invalid';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import {NumericParameters} from "@alirya/string/validator/numeric";
import Positive from "../../number/validator/positive";

export default function Numeric(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap) : ValidatorInterface<any, string|number> {

    let validator : ValidatorInterface<any, number>[] = [
        NumericParameters() as ValidatorInterface<any, string>,
        Positive()  as ValidatorInterface<number, number>,
    ];

    return ValuePartialParameters(validator, OrParameters, messages, true);

}
