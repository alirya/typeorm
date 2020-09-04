import Table from "./table";
import Class from "@dikac/t-class/class";
/**
 * basic {@see Table} implementation
 */
export default class Standard<Constructor extends Class<object, unknown[]> = Class<object, unknown[]>> implements Table<Constructor> {
    readonly entity: Constructor;
    readonly alias: string;
    readonly aliased: boolean;
    constructor(entity: Constructor, alias?: string, aliased?: boolean);
}
