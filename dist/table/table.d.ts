/**
 * table information
 */
export default interface Table<Constructor extends {
    new (...args: unknown[]): any;
} = {
    new (...args: unknown[]): any;
}> {
    /**
     * constructor of entity
     */
    readonly entity: Constructor;
    /**
     * alias for entity
     */
    readonly alias: string;
    /**
     * determine if alias is used
     */
    readonly aliased: boolean;
}
