import ValidatorInterface from "@alirya/validator/validator";
import ObjectStandard from "@alirya/object/validator/object-parameters";
import ValuePartial from "@alirya/array/validator/value-partial-parameters";
import And from "@alirya/array/validatable/and-parameters";
import InvalidMessageMap from "@alirya/array/message/message/list/invalid";
import EnumStandard from "@alirya/enum/validator/enum-parameters";
import EnumOrder from "../mode";

export default function Mode() : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        ObjectStandard()  as ValidatorInterface<any, number>,
        EnumStandard(EnumOrder)  as ValidatorInterface<number, number>
    ];

    return ValuePartial(validator, And, InvalidMessageMap);

}
