import MessageRecordMap from "@axiona/object/message/message/record/map.js";
import InvalidMessageList from "@axiona/array/message/message/list/invalid.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import {OrParameters} from "@axiona/array/validatable/or.js";
import ObjectAnd from "@axiona/object/validatable/and.js";
import {EnumParameters} from "@axiona/enum/validator/enum.js";
import EnumMessage from "@axiona/enum/assert/string/enum.js";
import ArrayValuePartialParameters from "@axiona/array/validator/value-partial.js";
import {ObjectParameters} from "@axiona/object/validator/object.js";
import {RecordKeyPartialParameters} from "@axiona/object/validator/record-key-partial.js";
import {RecordValuePartialParameters} from "@axiona/object/validator/record-value-partial.js";
import Mode from '../mode/mode.js';
import Validator from "@axiona/validator/simple.js";
import {EqualParameters} from "@axiona/boolean/validator/equal.js";
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

export {Order as OrderValidator}
