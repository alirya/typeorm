import ValidatorInterface from "@axiona/validator/simple.js";
import {NumberParameters} from "@axiona/number/validator/number.js";
import {PositiveParameters} from "@axiona/number/validator/positive.js";
import {ValuePartialParameters} from "@axiona/array/validator/value-partial.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import InvalidMessageMap from "@axiona/array/message/message/list/invalid.js";

export default function Page() : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        NumberParameters() as ValidatorInterface<any, number>,
        PositiveParameters() as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
