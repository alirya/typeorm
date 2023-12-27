import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import EnsureString from '@axiona/string/ensure/string.js';
import Name from '@axiona/object/string/name.js';
import SafeCast from '@axiona/string/safe-cast.js';

export default class RequiredReadonlyString implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must string, actual ${SafeCast(this.entity.id)}`));
    }

}
