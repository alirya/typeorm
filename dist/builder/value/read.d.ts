import { SelectQueryBuilder } from "typeorm";
export default function Read<Entity>(query: SelectQueryBuilder<Entity>): Promise<Entity>;
