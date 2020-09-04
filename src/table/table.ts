import Class from "@dikac/t-class/class";

/**
 * table information
 */
export default interface Table<
    Constructor extends Class<object, unknown[]> = Class<object, unknown[]>
>  {
    /**
     * constructor of entity
     */
    readonly entity : Constructor;
    /**
     * alias for entity
     */
    readonly alias : string;
    /**
     * determine if alias is used
     */
    readonly aliased : boolean;
}
