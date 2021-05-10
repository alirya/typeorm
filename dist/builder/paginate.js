import SkipTake from "../pagination/query/argument/skip-take";
/**
 * @link https://github.com/typeorm/typeorm/issues/3354
 *
 * @param query
 * @param paginate
 * @constructor
 */
export default function Paginate(query, paginate) {
    const skipTake = SkipTake(paginate);
    query.take(skipTake.take);
    if (skipTake.skip > 0) {
        query.skip(skipTake.skip);
    }
    return query;
}
//# sourceMappingURL=paginate.js.map