import Timestamp from './timestamp';
import RequiredReadonly from './required-readonly';

export default class RequiredReadonlyStandard implements RequiredReadonly {

    constructor(
        private entity : Timestamp
    ) {
    }

    get created () : Date {

        if(!this.entity.created) {
            // TODO IMPROVE MESSAGE
            throw new Error('created is not provided');
        }

        return this.entity.created;

    }

    get updated () : Date {

        if(!this.entity.updated) {
            // TODO IMPROVE MESSAGE
            throw new Error('updated is not provided');
        }

        return this.entity.updated;
    }

}

