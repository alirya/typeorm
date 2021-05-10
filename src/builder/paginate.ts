import {SelectQueryBuilder} from "typeorm";
import Pagination from "../pagination/pagination";
import SkipTake from "../pagination/query/argument/skip-take";

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

    const skipTake = SkipTake(paginate);

    query.take(skipTake.take);

    if(skipTake.skip > 0) {

        query.skip(skipTake.skip);
    }

    return query;
}
