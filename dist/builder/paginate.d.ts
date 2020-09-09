import { SelectQueryBuilder } from "typeorm";
import Pagination from "../pagination/pagination";
export default function Paginate<Entity, Key extends keyof Entity>(query: SelectQueryBuilder<Entity>, paginate: Pagination): SelectQueryBuilder<Entity>;
