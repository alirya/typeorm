import Id from './id.js';
import RequiredReadonly from './required-readonly.js';
import EnsureString from '@alirya/string/ensure/string.js';
import Name from '@alirya/object/string/name.js';
import SafeCast from '@alirya/string/safe-cast.js';

export default class RequiredReadonlyString implements RequiredReadonly<string> {

    constructor(
        private entity : Id<string>
    ) {
    }

    get id () : string {

        return  EnsureString(this.entity.id, ()=>new TypeError(`id for ${Name(this.entity)} must string, actual ${SafeCast(this.entity.id)}`));
    }

}
