export default class Integrity<Value> extends Error {
    readonly value?: Value | undefined;
    constructor(message: string, value?: Value | undefined);
}
