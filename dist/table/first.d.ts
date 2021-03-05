import { QueryBuilder } from "typeorm";
import Table from "./table";
export default function First<Constructor extends {
    new (...args: unknown[]): any;
} = {
    new (...args: unknown[]): any;
}>(builder: QueryBuilder<unknown>): Table<Constructor>;
