import Positive from "@dikac/t-number/ensure/positive";
export default function Paginate(query, paginate) {
    const page = Positive(paginate.page);
    const limit = Positive(paginate.limit);
    query.limit(limit);
    let skip = (page - 1) * limit;
    if (skip > 0) {
        query.skip(skip);
    }
    return query;
}
//# sourceMappingURL=paginate.js.map