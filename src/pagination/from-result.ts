import Pagination from "./pagination.js";
import Paginated from './paginated.js';


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