import { QueryBuilder, WhereExpression } from "typeorm";
import Padding from "@dikac/t-string/padding/padding";
export default function Like<Entity, Builder extends QueryBuilder<Entity> & WhereExpression>(query: Builder, column: string, parameter: string, value: string, padding: Padding | undefined): Builder;
