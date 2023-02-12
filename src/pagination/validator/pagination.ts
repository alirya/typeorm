import ValidatorInterface from "@alirya/validator/simple.js";
import RecordMap from "@alirya/object/map.js";
import Page from './page.js';
import Limit from './limit.js';
import {MapAllParameters} from "@alirya/object/validator/map-all.js";
import AndRecord from "@alirya/object/validatable/and.js";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid.js";
import Pagination from "../../pagination/pagination.js";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial.js";
import {AndParameters} from "@alirya/array/validatable/and.js";
import InvalidMessageList from "@alirya/array/message/message/list/invalid.js";
import {ObjectParameters} from "@alirya/object/validator/object.js";

export default function Pagination(maximum: number)  {

    const record : RecordMap<Required<Pagination>, ValidatorInterface> = {
        page : Page(),
        limit : Limit(maximum),
    }

    const pagination = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return ValuePartialParameters([ObjectParameters(), pagination], AndParameters, InvalidMessageList);

}
