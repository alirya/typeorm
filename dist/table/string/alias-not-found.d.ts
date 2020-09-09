import Class from "@dikac/t-class/class";
import { QueryBuilder } from "typeorm";
export default function AliasNotFound(valid: boolean, builder: QueryBuilder<any>, alias: string, entity?: Class<object, any[]>): string;
