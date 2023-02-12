import ValidatorInterface from "@alirya/validator/simple.js";
import {NumberParameters} from "@alirya/number/validator/number.js";
import {PositiveParameters} from "@alirya/number/validator/positive.js";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import InvalidMessageMap from "@alirya/array/message/message/list/invalid.js";

export default function Page() : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumberParameters() as ValidatorInterface<any, number>,
        PositiveParameters() as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
