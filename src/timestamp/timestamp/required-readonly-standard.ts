import Timestamp from './timestamp.js';
import RequiredReadonly from './required-readonly.js';
import RequiredReadonlyTimestamp from '../required-readonly.js';
import RequiredReadonlyTimestampStandard from '../required-readonly-standard.js';

export default class RequiredReadonlyStandard implements RequiredReadonly {

    constructor(
        private entity : Timestamp
    ) {
    }

    get timestamp () : RequiredReadonlyTimestamp {

        if(!this.entity.timestamp) {

            throw new Error('timestamp is not provided');
        }

        return new RequiredReadonlyTimestampStandard(this.entity.timestamp);

    }

}

