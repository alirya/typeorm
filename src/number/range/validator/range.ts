import ValidatorInterface from "@alirya/validator/simple.js";
import RecordMap from "@alirya/object/map.js";
import {UndefinedParameters} from "@alirya/undefined/validator/undefined.js";
import {ValueAllParameters} from "@alirya/array/validator/value-all.js";
import {OrParameters} from "@alirya/array/validatable/or.js";
import InvalidMessageList from "@alirya/array/message/message/list/invalid.js";
import {MapAllParameters} from "@alirya/object/validator/map-all.js";
import AndRecord from "@alirya/object/validatable/and.js";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid.js";
import NumberRange from '../range.js';
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {ObjectParameters} from "@alirya/object/validator/object.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import Integer from '../../validator/integer.js';

export default function Range() : ValidatorInterface<object, NumberRange> {

    const record : RecordMap<Required<NumberRange>, ValidatorInterface> = {
        to : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
        from : ValueAllParameters([UndefinedParameters(), Integer()], OrParameters, InvalidMessageList),
    }

    const object = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return  ValuePartialParameters([ObjectParameters(), object], AndParameters, InvalidMessageList, false);
}
