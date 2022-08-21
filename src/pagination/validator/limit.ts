import ValidatorInterface from "@alirya/validator/simple";
import {NumberParameters} from "@alirya/number/validator/number";
import {PositiveParameters} from "@alirya/number/validator/positive";
import {GreaterParameters} from "@alirya/number/validator/greater";
import {LowerParameters} from "@alirya/number/validator/lower";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";
import {AndParameters} from "@alirya/array/validatable/and";
import InvalidMessageMap from "@alirya/array/message/message/list/invalid";

export default function Limit(maximum : number) : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        NumberParameters() as ValidatorInterface<any, number>,
        PositiveParameters()  as ValidatorInterface<number, number>,
        GreaterParameters(1, true)  as ValidatorInterface<number, number>,
        LowerParameters(maximum, true)  as ValidatorInterface<number, number>,
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
