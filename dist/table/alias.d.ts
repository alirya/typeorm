import Table from "./table";
import { QueryBuilder } from "typeorm";
export default function Alias<Constructor extends {
    new (...args: unknown[]): any;
} = {
    new (...args: unknown[]): any;
}>(builder: QueryBuilder<unknown>, alias: string, entity?: Constructor): Table<Constructor>;
