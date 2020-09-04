export default class Integrity<Value> extends Error  {

    constructor(
        message : string,
        readonly value ?: Value
    ) {

        super(message);
    }
}
