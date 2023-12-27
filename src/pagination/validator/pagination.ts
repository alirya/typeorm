import ValidatorInterface from "@axiona/validator/simple.js";
import RecordMap from "@axiona/object/map.js";
import Page from './page.js';
import Limit from './limit.js';
import {MapAllParameters} from "@axiona/object/validator/map-all.js";
import AndRecord from "@axiona/object/validatable/and.js";
import InvalidMessageRecord from "@axiona/object/message/message/record/invalid.js";
import Pagination from "../../pagination/pagination.js";
import {ValuePartialParameters} from "@axiona/array/validator/value-partial.js";
import {AndParameters} from "@axiona/array/validatable/and.js";
import InvalidMessageList from "@axiona/array/message/message/list/invalid.js";
import {ObjectParameters} from "@axiona/object/validator/object.js";
import Validator from '@axiona/validator/simple.js';

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
