import Table from "./table";
import { Alias } from "typeorm/query-builder/Alias";
import Class from "@dikac/t-class/class";
/**
 * create {@see Table} from {@see Alias}
 */
export default function Metadata<Constructor extends Class<object, unknown[]>>(alias: Alias, aliased: boolean): Table<Constructor>;
