import ValidatorInterface from "@axiona/validator/simple.js";
import {ValuePartialParameters} from "@axiona/array/validator/value-partial.js";
import {IntegerParameters} from "@axiona/number/validator/integer.js";
import {NumberParameters} from "@axiona/number/validator/number.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import InvalidMessageList from "@axiona/array/message/message/list/invalid.js";

export default function Integer() : ValidatorInterface<any, string>  {

    return ValuePartialParameters([NumberParameters(), IntegerParameters()], AndParameters, InvalidMessageList, false);
}
