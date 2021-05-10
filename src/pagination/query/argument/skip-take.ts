import Pagination from "../../pagination";
import Positive from "@dikac/t-number/ensure/positive";

export default function SkipTake(pagination: Pagination) : {take:number, skip:number} {

    const page = Positive(pagination.page);
    const take = Positive(pagination.limit);

    let skip = (page - 1) * take;

    if(skip > 0) {

        return {skip, take};
    }

    return {skip: 0, take};

}
