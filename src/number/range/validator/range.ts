import ValidatorInterface from "@alirya/validator/simple";
import RecordMap from "@alirya/object/map";
import {UndefinedParameters} from "@alirya/undefined/validator/undefined";
import {ValueAllParameters} from "@alirya/array/validator/value-all";
import {OrParameters} from "@alirya/array/validatable/or";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";
import {MapAllParameters} from "@alirya/object/validator/map-all";
import AndRecord from "@alirya/object/validatable/and";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid";
import NumberRange from "../range";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";
import {ObjectParameters} from "@alirya/object/validator/object";
import {AndParameters} from "@alirya/array/validatable/and";
import Integer from "../../validator/integer";

export default function Range() : ValidatorInterface<object, NumberRange> {

    let record : RecordMap<Required<NumberRange>, ValidatorInterface> = {
        to : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
        from : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
    }

    const object = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return  ValuePartialParameters([ObjectParameters(), object], AndParameters, InvalidMessageList, false);
}
