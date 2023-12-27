import ValidatorInterface from "@axiona/validator/simple.js";
import RecordMap from "@axiona/object/map.js";
import {UndefinedParameters} from "@axiona/undefined/validator/undefined.js";
import {ValueAllParameters} from "@axiona/array/validator/value-all.js";
import {OrParameters} from "@axiona/array/validatable/or.js";
import InvalidMessageList from "@axiona/array/message/message/list/invalid.js";
import {MapAllParameters} from "@axiona/object/validator/map-all.js";
import AndRecord from "@axiona/object/validatable/and.js";
import InvalidMessageRecord from "@axiona/object/message/message/record/invalid.js";
import CreatedInterface from '../range.js';
import {CompatibleParameters} from "@axiona/date/validator/compatible.js";
import Validator from "@axiona/validator/simple.js";
import {ObjectParameters} from "@axiona/object/validator/object.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import {ValuePartialParameters} from "@axiona/array/validator/value-partial.js";

export default function Range() : Validator<object, CreatedInterface> {

    const record : RecordMap<Required<CreatedInterface>, ValidatorInterface> = {
        to : ValueAllParameters([UndefinedParameters(), CompatibleParameters()], OrParameters, InvalidMessageList),
        from : ValueAllParameters([UndefinedParameters(), CompatibleParameters()], OrParameters, InvalidMessageList),
    }

    const object = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return  ValuePartialParameters([ObjectParameters(), object], AndParameters, InvalidMessageList, false);
}

export {Range as DateRangeValidator}
