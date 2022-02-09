import RequiredReadonly from './required-readonly';
import Deletable from './deletable';

export default class RequiredReadonlyStandard<Argument, Return> implements RequiredReadonly {

    constructor(
        private entity : Deletable
    ) {
    }

    get deleted () : null|Date {

        if(this.entity.deleted === undefined) {

            throw new Error('deleted is not provided');
        }

        return this.entity.deleted;
    }
}

