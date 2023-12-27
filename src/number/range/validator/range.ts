import ValidatorInterface from "@axiona/validator/simple.js";
import RecordMap from "@axiona/object/map.js";
import {UndefinedParameters} from "@axiona/undefined/validator/undefined.js";
import {ValueAllParameters} from "@axiona/array/validator/value-all.js";
import {OrParameters} from "@axiona/array/validatable/or.js";
import InvalidMessageList from "@axiona/array/message/message/list/invalid.js";
import {MapAllParameters} from "@axiona/object/validator/map-all.js";
import AndRecord from "@axiona/object/validatable/and.js";
import InvalidMessageRecord from "@axiona/object/message/message/record/invalid.js";
import NumberRange from '../range.js';
import {ValuePartialParameters} from "@axiona/array/validator/value-partial.js";
import {ObjectParameters} from "@axiona/object/validator/object.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import Integer from '../../validator/integer.js';

export default function Range() : ValidatorInterface<object, NumberRange> {

    const record : RecordMap<Required<NumberRange>, ValidatorInterface> = {
        to : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
        from : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
    }

    const object = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return  ValuePartialParameters([ObjectParameters(), object], AndParameters, InvalidMessageList, false);
}
