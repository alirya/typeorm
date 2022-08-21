import ValidatorInterface from "@alirya/validator/simple";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";
import {IntegerParameters} from "@alirya/number/validator/integer";
import {NumberParameters} from "@alirya/number/validator/number";
import {PositiveParameters} from "@alirya/number/validator/positive";
import {AndParameters} from "@alirya/array/validatable/and";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";

export default function Positive() : ValidatorInterface<any, number> {

    return ValuePartialParameters([NumberParameters(), IntegerParameters(), PositiveParameters()], AndParameters, InvalidMessageList, false);
}
