export default class Duplicate<Value> extends Error {
    readonly value?: Value | undefined;
    constructor(message: string, value?: Value | undefined);
}
