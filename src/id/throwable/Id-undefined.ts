export default class IdUndefined extends Error {

    constructor(message : string = 'Id is not defined') {

        super(message);
    }
}