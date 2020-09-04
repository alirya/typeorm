export default class Duplicate<Value> extends Error {

    constructor(
        message : string,
        readonly value ?: Value
    ) {

        super(message);
    }
}
