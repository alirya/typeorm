import Pagination from "./pagination";
import Paginated from "./paginated";


export default function FromResult(
    total: number,
    {
        limit,
        page
    } : Pagination
) : Paginated {

    const pages = Math.ceil(total / limit);

    return { pages, limit, page, total }
}