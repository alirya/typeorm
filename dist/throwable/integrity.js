export default class Integrity extends Error {
    constructor(message, value) {
        super(message);
        this.value = value;
    }
}
//# sourceMappingURL=integrity.js.map