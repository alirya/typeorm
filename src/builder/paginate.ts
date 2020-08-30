import {SelectQueryBuilder} from "typeorm";
import Positive from "@dikac/t-number/ensure/positive";

export default function Paginate<Entity, Key extends keyof Entity>(
    query : SelectQueryBuilder<Entity>,
    page : number,
    limit : number,
) : SelectQueryBuilder<Entity> {

    page = Positive(page);
    limit = Positive(limit);

    query.limit(limit);

    let skip = (page - 1) * limit;

    if(skip > 0) {

        query.skip(skip);
    }

    return query;
}
