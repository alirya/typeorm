import Class from "@dikac/t-class/class";
import { QueryBuilder } from "typeorm";
export default function EntityNotFound(valid: boolean, entity: Class<object, any[]>, builder: QueryBuilder<any>, alias?: string): string;
