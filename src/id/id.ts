export default interface Id<Type extends number|string = number|string> {

    /**
     * unique identification
     */
    id ?: Type;
}
