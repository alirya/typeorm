import { SelectQueryBuilder } from "typeorm";
import Pagination from "../pagination/pagination";
/**
 * @link https://github.com/typeorm/typeorm/issues/3354
 *
 * @param query
 * @param paginate
 * @constructor
 */
export default function Paginate<Entity, Key extends keyof Entity>(query: SelectQueryBuilder<Entity>, paginate: Pagination): SelectQueryBuilder<Entity>;
