import Deletable from './deletable.js';
import RequiredReadonly from './required-readonly.js';
import RequiredReadonlyDeletable from '../required-readonly.js';
import RequiredReadonlyDeletableStandard from '../required-readonly-standard.js';

export default class RequiredReadonlyStandard implements RequiredReadonly {

    constructor(
        private entity : Deletable
    ) {
    }

    get deletable () : RequiredReadonlyDeletable {

        if(!this.entity.deletable) {

            throw new Error('deletable is not provided');
        }

        return new RequiredReadonlyDeletableStandard(this.entity.deletable);

    }

}

