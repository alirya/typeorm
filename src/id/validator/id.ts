import ValidatorInterface from "@dikac/t-validator/validator";
import NumberStandard from "@dikac/t-number/validator/number-standard";
import PositiveStandard from "@dikac/t-number/validator/positive-standard";
import ValuePartial from "@dikac/t-array/validator/value-partial";
import And from "@dikac/t-array/validatable/and";
import InvalidMessageMap from "@dikac/t-array/message/message/list/invalid";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";

export default function Id(messages : (results : (Message & Validatable)[])=>any = InvalidMessageMap ) : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        NumberStandard()  as ValidatorInterface<any, number>,
        PositiveStandard()  as ValidatorInterface<number, number>
    ];

    return ValuePartial(validator, And, messages);

}
