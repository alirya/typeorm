import Class from "@dikac/t-class/class";
import { QueryBuilder } from "typeorm";
export default function MultipleEntityFound(entity: Class<object, any[]>, builder: QueryBuilder<any>): string;
