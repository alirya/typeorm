import Table from "./table";
import Class from "@dikac/t-class/class";

/**
 * basic {@see Table} implementation
 */
export default class Standard<
    Constructor extends Class<object, unknown[]> = Class<object, unknown[]>
> implements Table<Constructor> {

    constructor(
        readonly entity : Constructor,
        readonly alias : string = entity.name,
        readonly aliased : boolean = true,
    ) {
    }
}
