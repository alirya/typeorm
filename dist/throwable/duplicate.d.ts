import Code from "@dikac/t-code/code";
export default class Duplicate<Value> extends Error implements Code<number> {
    readonly value?: Value | undefined;
    readonly code: number;
    constructor(message: string, value?: Value | undefined);
}
