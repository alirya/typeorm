import ValidatorInterface from "@alirya/validator/simple.js";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {IntegerParameters} from "@alirya/number/validator/integer.js";
import {NumberParameters} from "@alirya/number/validator/number.js";
import {PositiveParameters} from "@alirya/number/validator/positive.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import InvalidMessageList from "@alirya/array/message/message/list/invalid.js";

export default function Positive() : ValidatorInterface<any, number> {

    return ValuePartialParameters([NumberParameters(), IntegerParameters(), PositiveParameters()], AndParameters, InvalidMessageList, false);
}
