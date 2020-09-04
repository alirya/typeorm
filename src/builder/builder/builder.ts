import {QueryBuilder} from "typeorm";

export default interface Builder<
    Builder extends QueryBuilder<unknown> = QueryBuilder<unknown>
> {
    readonly builder : Builder,
}
