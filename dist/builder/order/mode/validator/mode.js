import ObjectStandard from "@dikac/t-object/validator/object-standard";
import ValuePartial from "@dikac/t-array/validator/value-partial";
import And from "@dikac/t-array/validatable/and";
import InvalidMessageMap from "@dikac/t-array/message/message/list/invalid";
import EnumStandard from "@dikac/t-enum/validator/enum-standard";
import EnumOrder from "../mode";
export default function Mode() {
    let validator = [
        ObjectStandard(),
        EnumStandard(EnumOrder)
    ];
    return ValuePartial(validator, And, InvalidMessageMap);
}
//# sourceMappingURL=mode.js.map