import ValidatorInterface from "@alirya/validator/simple";
import RecordMap from "@alirya/object/map";
import {UndefinedParameters} from "@alirya/undefined/validator/undefined";
import {ValueAllParameters} from "@alirya/array/validator/value-all";
import {OrParameters} from "@alirya/array/validatable/or";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";
import {MapAllParameters} from "@alirya/object/validator/map-all";
import AndRecord from "@alirya/object/validatable/and";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid";
import CreatedInterface from "../range";
import {CompatibleParameters} from "@alirya/date/validator/compatible";
import Validator from "@alirya/validator/simple";
import {ObjectParameters} from "@alirya/object/validator/object";
import {AndParameters} from "@alirya/array/validatable/and";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";

export default function Range() : Validator<object, CreatedInterface> {

    let record : RecordMap<Required<CreatedInterface>, ValidatorInterface> = {
        to : ValueAllParameters([UndefinedParameters(), CompatibleParameters()], OrParameters, InvalidMessageList),
        from : ValueAllParameters([UndefinedParameters(), CompatibleParameters()], OrParameters, InvalidMessageList),
    }

    const object = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return  ValuePartialParameters([ObjectParameters(), object], AndParameters, InvalidMessageList, false);
}
