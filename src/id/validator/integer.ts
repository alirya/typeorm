import ValidatorInterface from "@alirya/validator/validator";
import NumberStandard from "@alirya/number/validator/number-parameters";
import PositiveStandard from "@alirya/number/validator/positive-parameters";
import ValuePartial from "@alirya/array/validator/value-partial-parameters";
import And from "@alirya/array/validatable/and-parameters";
import InvalidMessageMap from "@alirya/array/message/message/list/invalid";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";

export default function Integer(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap ) : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        NumberStandard()  as ValidatorInterface<any, number>,
        NumberStandard()  as ValidatorInterface<any, number>,
        PositiveStandard()  as ValidatorInterface<number, number>
    ];

    return ValuePartial(validator, And, messages);

}
