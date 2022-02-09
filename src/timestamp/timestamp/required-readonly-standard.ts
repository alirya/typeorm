import Timestamp from './timestamp';
import RequiredReadonly from './required-readonly';
import RequiredReadonlyTimestamp from '../required-readonly';
import RequiredReadonlyTimestampStandard from '../required-readonly-standard';

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

