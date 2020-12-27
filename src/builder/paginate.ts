import {SelectQueryBuilder} from "typeorm";
import Positive from "@dikac/t-number/ensure/positive";
import Pagination from "../pagination/pagination";

/**
 * @link https://github.com/typeorm/typeorm/issues/3354
 *
 * @param query
 * @param paginate
 * @constructor
 */
export default function Paginate<Entity, Key extends keyof Entity>(
    query : SelectQueryBuilder<Entity>,
    paginate : Pagination,
) : SelectQueryBuilder<Entity> {

    const page = Positive(paginate.page);
    const limit = Positive(paginate.limit);

    query.take(limit);

    let skip = (page - 1) * limit;

    if(skip > 0) {

        query.skip(skip);
    }

    return query;
}
