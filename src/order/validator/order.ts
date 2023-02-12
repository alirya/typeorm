import MessageRecordMap from "@alirya/object/message/message/record/map.js";
import InvalidMessageList from "@alirya/array/message/message/list/invalid.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import {OrParameters} from "@alirya/array/validatable/or.js";
import ObjectAnd from "@alirya/object/validatable/and.js";
import {EnumParameters} from "@alirya/enum/validator/enum.js";
import EnumMessage from "@alirya/enum/assert/string/enum.js";
import ArrayValuePartialParameters from "@alirya/array/validator/value-partial.js";
import {ObjectParameters} from "@alirya/object/validator/object.js";
import {RecordKeyPartialParameters} from "@alirya/object/validator/record-key-partial.js";
import {RecordValuePartialParameters} from "@alirya/object/validator/record-value-partial.js";
import Mode from '../mode/mode.js';
import Validator from "@alirya/validator/simple.js";
import {EqualParameters} from "@alirya/boolean/validator/equal.js";
import {L} from "ts-toolbelt";


export default function Order<
    Type extends object,
    Keys extends (keyof Type)[] = (keyof Type)[]
    >(keys: [...Keys]) : Validator<object, Pick<Type, L.UnionOf<Keys>>> {

    const values : Validator<string, string>[] = keys.map(key=>EqualParameters(key as string));

    const key = RecordKeyPartialParameters(ArrayValuePartialParameters.Parameters(values, OrParameters, InvalidMessageList, true), ObjectAnd, MessageRecordMap);

    const value = RecordValuePartialParameters(EnumParameters(Mode, EnumMessage.Parameters), ObjectAnd, MessageRecordMap);

    return  ArrayValuePartialParameters.Parameters<any>([ObjectParameters(), key, value], AndParameters, InvalidMessageList, false);
}
