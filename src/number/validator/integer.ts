import ValidatorInterface from "@alirya/validator/simple.js";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {IntegerParameters} from "@alirya/number/validator/integer.js";
import {NumberParameters} from "@alirya/number/validator/number.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import InvalidMessageList from "@alirya/array/message/message/list/invalid.js";

export default function Integer() : ValidatorInterface<any, string>  {

    return ValuePartialParameters([NumberParameters(), IntegerParameters()], AndParameters, InvalidMessageList, false);
}
