import { SelectQueryBuilder } from "typeorm";
export default function Paginate<Entity, Key extends keyof Entity>(query: SelectQueryBuilder<Entity>, page: number, limit: number): SelectQueryBuilder<Entity>;
