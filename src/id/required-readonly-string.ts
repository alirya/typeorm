import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import EnsureString from '@alirya/string/ensure/string.js';

export default class RequiredReadonlyNumber implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new Error('id is not provided'));
    }

}
