import ListAll from "@dikac/t-array/validator/list-all";
import AndList from "@dikac/t-array/validatable/and";
import InvalidMessageList from "@dikac/t-array/message/message/list/invalid";
import Id from "../../validator/id";
import ValuePartial from "@dikac/t-array/validator/value-partial";
import ArrayStandard from "@dikac/t-array/validator/array-standard";
import And from "@dikac/t-array/validatable/and";


export default function Ids() {

    return ValuePartial([
            ArrayStandard(),
            ListAll(Id(), AndList, InvalidMessageList)
        ],
        And,
        InvalidMessageList
    )
}
