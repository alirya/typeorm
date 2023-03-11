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
import Validator from '@alirya/validator/simple.js';

export function PaginationRecord(maximum: number) : RecordMap<Required<Pagination>, ValidatorInterface> {

    return {
        page : Page(),
        limit : Limit(maximum),
    }
}

export default function Pagination(maximum: number) : Validator<object, Pagination>  {

    const pagination = MapAllParameters(PaginationRecord(maximum), AndRecord, InvalidMessageRecord);

    return ValuePartialParameters([ObjectParameters(), pagination], AndParameters, InvalidMessageList);
}

export const PaginationValidator = Pagination;
export const PaginationValidatorRecord = PaginationRecord;