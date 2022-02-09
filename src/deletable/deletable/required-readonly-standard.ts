import Deletable from './deletable';
import RequiredReadonly from './required-readonly';
import RequiredReadonlyDeletable from '../required-readonly';
import RequiredReadonlyDeletableStandard from '../required-readonly-standard';

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

