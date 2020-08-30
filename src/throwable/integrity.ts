import Code from "@dikac/t-code/code";

export default class Integrity<Value> extends Error implements Code<number> {

    readonly code : number = 422;

    constructor(
        message : string,
        readonly value ?: Value
    ) {

        super(message);
    }
}
