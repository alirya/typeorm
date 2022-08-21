import ValidatorInterface from "@alirya/validator/simple";
import RecordMap from "@alirya/object/map";
import Page from "./page";
import Limit from "./limit";
import {MapAllParameters} from "@alirya/object/validator/map-all";
import AndRecord from "@alirya/object/validatable/and";
import InvalidMessageRecord from "@alirya/object/message/message/record/invalid";
import Pagination from "../../pagination/pagination";
import {ValuePartialParameters} from "@alirya/array/validator/value-partial";
import {AndParameters} from "@alirya/array/validatable/and";
import InvalidMessageList from "@alirya/array/message/message/list/invalid";
import {ObjectParameters} from "@alirya/object/validator/object";

export default function Pagination(maximum: number)  {

    let record : RecordMap<Required<Pagination>, ValidatorInterface> = {
        page : Page(),
        limit : Limit(maximum),
    }

    const pagination = MapAllParameters(record, AndRecord, InvalidMessageRecord);

    return ValuePartialParameters([ObjectParameters(), pagination], AndParameters, InvalidMessageList);

}
