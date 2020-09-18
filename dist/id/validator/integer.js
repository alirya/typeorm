import NumberStandard from "@dikac/t-number/validator/number-standard";
import PositiveStandard from "@dikac/t-number/validator/positive-standard";
import ValuePartial from "@dikac/t-array/validator/value-partial";
import And from "@dikac/t-array/validatable/and";
import InvalidMessageMap from "@dikac/t-array/message/message/list/invalid";
export default function Integer(messages = InvalidMessageMap) {
    let validator = [
        NumberStandard(),
        NumberStandard(),
        PositiveStandard()
    ];
    return ValuePartial(validator, And, messages);
}
//# sourceMappingURL=integer.js.map