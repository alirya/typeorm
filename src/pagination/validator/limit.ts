import ValidatorInterface from "@alirya/validator/simple.js";
import {NumberParameters} from "@alirya/number/validator/number.js";
import {PositiveParameters} from "@alirya/number/validator/positive.js";
import {GreaterParameters} from "@alirya/number/validator/greater.js";
import {LowerParameters} from "@alirya/number/validator/lower.js";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import InvalidMessageMap from "@alirya/array/message/message/list/invalid.js";

export default function Limit(maximum : number) : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumberParameters() as ValidatorInterface<any, number>,
        PositiveParameters()  as ValidatorInterface<number, number>,
        GreaterParameters(1, true)  as ValidatorInterface<number, number>,
        LowerParameters(maximum, true)  as ValidatorInterface<number, number>,
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
