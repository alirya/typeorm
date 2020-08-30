import ValidatorInterface from "@dikac/t-validator/validator";
import ObjectStandard from "@dikac/t-object/validator/object-standard";
import ValuePartial from "@dikac/t-array/validator/value-partial";
import And from "@dikac/t-array/validatable/and";
import InvalidMessageMap from "@dikac/t-array/message/message/list/invalid";
import EnumStandard from "@dikac/t-enum/validator/enum-standard";
import EnumOrder from "../mode";

export default function Mode() : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        ObjectStandard()  as ValidatorInterface<any, number>,
        EnumStandard(EnumOrder)  as ValidatorInterface<number, number>
    ];

    return ValuePartial(validator, And, InvalidMessageMap);

}
