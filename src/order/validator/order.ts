import MessageRecordMap from "@alirya/object/message/message/record/map";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";
import {AndParameters} from "@alirya/array/validatable/and";
import {OrParameters} from "@alirya/array/validatable/or";
import ObjectAnd from "@alirya/object/validatable/and";
import {EnumParameters} from "@alirya/enum/validator/enum";
import EnumMessage from "@alirya/enum/assert/string/enum";
import ArrayValuePartialParameters from "@alirya/array/validator/value-partial";
import {ObjectParameters} from "@alirya/object/validator/object";
import {RecordKeyPartialParameters} from "@alirya/object/validator/record-key-partial";
import {RecordValuePartialParameters} from "@alirya/object/validator/record-value-partial";
import Mode from "@alirya/typeorm/builder/order/mode/mode";
import Validator from "@alirya/validator/simple";
import {EqualParameters} from "@alirya/boolean/validator/equal";
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
