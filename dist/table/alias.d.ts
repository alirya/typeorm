import Table from "./table";
import { QueryBuilder } from "typeorm";
import Class from "@dikac/t-class/class";
export default function Alias<Constructor extends Class<object, unknown[]> = Class<object, unknown[]>>(builder: QueryBuilder<unknown>, entity: Constructor, alias: string): Table<Constructor>;
