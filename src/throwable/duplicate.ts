import Code from "@dikac/t-code/code";

export default class Duplicate<Value> extends Error implements Code<number> {

    readonly code : number = 409;

    constructor(
        message : string,
        readonly value ?: Value
    ) {

        super(message);
    }
}
