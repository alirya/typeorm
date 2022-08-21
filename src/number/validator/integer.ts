import ValidatorInterface from "@alirya/validator/simple";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";
import {IntegerParameters} from "@alirya/number/validator/integer";
import {NumberParameters} from "@alirya/number/validator/number";
import {AndParameters} from "@alirya/array/validatable/and";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";

export default function Integer() : ValidatorInterface<any, string>  {

    return ValuePartialParameters([NumberParameters(), IntegerParameters()], AndParameters, InvalidMessageList, false);
}
